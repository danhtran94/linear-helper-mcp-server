/**
 * Project Milestone Management Tools
 *
 * Tools for querying and managing Linear project milestones
 */

import type { ToolHandler } from "../framework/mcp.js";
import { getLinearClient } from "../clients/linear.js";
import { log } from "../utils/logger.js";
import { isValidUUID } from "../utils/index.js";

// Milestone status enum for validation
const MILESTONE_STATUSES = ["unstarted", "next", "overdue", "done"] as const;
type MilestoneStatus = (typeof MILESTONE_STATUSES)[number];

// Parameter types for tools
interface ListProjectMilestonesParams {
  projectId?: string;
  status?: MilestoneStatus;
  limit?: number;
  search?: string;
}

interface GetProjectMilestoneParams {
  id: string;
}

/**
 * List project milestones with filtering and pagination
 */
export const listProjectMilestones: ToolHandler<ListProjectMilestonesParams> = async (params) => {
  try {
    const client = getLinearClient();

    // Extract parameters with defaults
    const limit = params?.limit || 50;
    const projectId = params?.projectId;
    const status = params?.status;
    const search = params?.search;

    log.info("Fetching project milestones list", {
      limit,
      projectId,
      status,
      search,
      hasFilters: !!(projectId || status || search)
    });

    // Validate status if provided
    if (status && !MILESTONE_STATUSES.includes(status)) {
      return {
        content: [
          {
            type: "text",
            text: `❌ Invalid status: ${status}. Valid statuses are: ${MILESTONE_STATUSES.join(", ")}`
          }
        ],
        isError: true
      };
    }

    // Validate projectId if provided
    if (projectId && !isValidUUID(projectId)) {
      return {
        content: [
          {
            type: "text",
            text: `❌ Invalid project ID format: ${projectId}. Please provide a valid UUID.`
          }
        ],
        isError: true
      };
    }

    // Build filter object for GraphQL query (only for fields that exist in schema)
    const filter: any = {};
    if (search) {
      filter.name = { containsIgnoreCase: search };
    }

    // Query project milestones
    const response = await client.query({
      projectMilestones: {
        __args: {
          first: limit,
          ...(Object.keys(filter).length > 0 && { filter }),
          ...(projectId && { 
            filter: { 
              ...filter,
              project: { id: { eq: projectId } }
            }
          })
        },
        nodes: {
          id: true,
          name: true,
          description: true,
          status: true,
          progress: true,
          targetDate: true,
          createdAt: true,
          updatedAt: true,
          sortOrder: true,
          project: {
            id: true,
            name: true,
            icon: true,
            color: true
          }
        },
        pageInfo: {
          hasNextPage: true,
          endCursor: true
        }
      }
    });

    const milestones = response.projectMilestones?.nodes || [];

    // Client-side filtering for status and search
    let filteredMilestones = milestones;
    
    // Filter by status (client-side since GraphQL doesn't support it)
    if (status) {
      filteredMilestones = filteredMilestones.filter(milestone => 
        milestone.status === status
      );
    }
    
    // Additional client-side search if search term provided (enhances GraphQL filtering)
    if (search) {
      filteredMilestones = filteredMilestones.filter(milestone =>
        milestone.name?.toLowerCase().includes(search.toLowerCase()) ||
        milestone.description?.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Format response
    const statusEmoji = {
      unstarted: "⏸️",
      next: "▶️", 
      overdue: "⚠️",
      done: "✅"
    };

    if (filteredMilestones.length === 0) {
      const filterInfo = [];
      if (projectId) filterInfo.push(`project ID: ${projectId}`);
      if (status) filterInfo.push(`status: ${status}`);
      if (search) filterInfo.push(`search: "${search}"`);
      
      return {
        content: [
          {
            type: "text",
            text: `📋 No project milestones found${filterInfo.length > 0 ? ` with filters (${filterInfo.join(", ")})` : ""}.`
          }
        ]
      };
    }

    const responseText = [
      `📋 **Project Milestones** (${filteredMilestones.length} found)`,
      "",
      ...filteredMilestones.map(milestone => {
        const emoji = statusEmoji[milestone.status as MilestoneStatus] || "📌";
        const progressPercent = Math.round(milestone.progress * 100);
        const targetDateStr = milestone.targetDate 
          ? ` • 📅 ${new Date(milestone.targetDate).toLocaleDateString()}`
          : "";
        
        return [
          `${emoji} **${milestone.name}**`,
          `   🆔 ${milestone.id}`,
          `   📊 ${progressPercent}% complete • 🎯 ${milestone.status}${targetDateStr}`,
          `   📁 Project: ${milestone.project?.name || "Unknown"}`,
          ...(milestone.description ? [`   📝 ${milestone.description}`] : []),
          ""
        ].join("\n");
      }),
      response.projectMilestones?.pageInfo?.hasNextPage 
        ? "📄 Use pagination to see more milestones"
        : "📄 End of milestones list"
    ].join("\n");

    log.info("Project milestones fetched successfully", {
      count: filteredMilestones.length,
      hasMore: response.projectMilestones?.pageInfo?.hasNextPage,
      appliedFilters: { projectId, status, search }
    });

    return {
      content: [{ type: "text", text: responseText }]
    };

  } catch (error) {
    log.error("Failed to fetch project milestones", error);
    return {
      content: [
        {
          type: "text",
          text: `❌ Failed to fetch project milestones: ${error instanceof Error ? error.message : "Unknown error"}`
        }
      ],
      isError: true
    };
  }
};

/**
 * Get detailed information about a specific project milestone
 */
export const getProjectMilestone: ToolHandler<GetProjectMilestoneParams> = async (params) => {
  try {
    if (!params?.id) {
      return {
        content: [
          {
            type: "text",
            text: "❌ Missing required parameter: id"
          }
        ],
        isError: true
      };
    }

    if (!isValidUUID(params.id)) {
      return {
        content: [
          {
            type: "text",
            text: `❌ Invalid milestone ID format: ${params.id}. Please provide a valid UUID.`
          }
        ],
        isError: true
      };
    }

    const client = getLinearClient();

    log.info("Fetching project milestone details", { milestoneId: params.id });

    // Query single milestone with full details
    const response = await client.query({
      projectMilestone: {
        __args: { id: params.id },
        id: true,
        name: true,
        description: true,
        status: true,
        progress: true,
        targetDate: true,
        createdAt: true,
        updatedAt: true,
        sortOrder: true,
        project: {
          id: true,
          name: true,
          description: true,
          icon: true,
          color: true,
          startDate: true,
          targetDate: true,
          status: {
            name: true,
            type: true
          },
          lead: {
            id: true,
            name: true,
            email: true
          },
          teams: {
            __args: {},
            nodes: {
              id: true,
              name: true,
              key: true
            }
          }
        },
        issues: {
          __args: { first: 10 },
          nodes: {
            id: true,
            identifier: true,
            title: true,
            priority: true,
            state: {
              name: true,
              type: true
            },
            assignee: {
              name: true,
              email: true
            }
          },
          pageInfo: {
            hasNextPage: true,
            endCursor: true
          }
        }
      }
    });

    const milestone = response.projectMilestone;

    if (!milestone) {
      return {
        content: [
          {
            type: "text",
            text: `❌ Project milestone not found with ID: ${params.id}`
          }
        ],
        isError: true
      };
    }

    // Format detailed response
    const statusEmoji = {
      unstarted: "⏸️",
      next: "▶️",
      overdue: "⚠️", 
      done: "✅"
    };

    const emoji = statusEmoji[milestone.status as MilestoneStatus] || "📌";
    const progressPercent = Math.round(milestone.progress * 100);
    const issues = (milestone as any).issues?.nodes || [];
    const project = (milestone as any).project;

    const responseText = [
      `${emoji} **${milestone.name}**`,
      `🆔 **ID:** ${milestone.id}`,
      `📊 **Progress:** ${progressPercent}% complete`,
      `🎯 **Status:** ${milestone.status}`,
      "",
      ...(milestone.description ? [
        `📝 **Description:**`,
        milestone.description,
        ""
      ] : []),
      ...(milestone.targetDate ? [
        `📅 **Target Date:** ${new Date(milestone.targetDate).toLocaleDateString()}`,
        ""
      ] : []),
      `📁 **Project Information:**`,
      `   • **Name:** ${project?.name || "Unknown"}`,
      `   • **ID:** ${project?.id || "Unknown"}`,
      ...(project?.description ? [`   • **Description:** ${project.description}`] : []),
      ...(project?.status ? [`   • **Status:** ${project.status.name} (${project.status.type})`] : []),
      ...(project?.lead ? [`   • **Lead:** ${project.lead.name} (${project.lead.email})`] : []),
      ...(project?.teams?.nodes && project.teams.nodes.length > 0 ? [
        `   • **Teams:** ${project.teams.nodes.map((team: any) => `${team.name} (${team.key})`).join(", ")}`
      ] : []),
      "",
      `📋 **Associated Issues (${issues.length} shown):**`,
      ...(issues.length > 0 ? issues.map((issue: any) => {
        const priorityEmoji: { [key: number]: string } = {
          0: "⬇️", // No priority
          1: "🔽", // Low
          2: "🔵", // Medium  
          3: "🔶", // High
          4: "🔴"  // Urgent
        };
        const priority = priorityEmoji[issue.priority] || "📌";
        
        return `   ${priority} ${issue.identifier}: ${issue.title} • ${issue.state?.name || "Unknown"} • ${issue.assignee?.name || "Unassigned"}`;
      }) : ["   No issues associated with this milestone"]),
      ...((milestone as any).issues?.pageInfo?.hasNextPage ? ["   📄 More issues available..."] : []),
      "",
      `📊 **Timeline:**`,
      `   • **Created:** ${new Date(milestone.createdAt).toLocaleDateString()}`,
      `   • **Updated:** ${new Date(milestone.updatedAt).toLocaleDateString()}`,
      `   • **Sort Order:** ${milestone.sortOrder}`
    ].join("\n");

    log.info("Project milestone details fetched successfully", { 
      milestoneId: params.id,
      milestoneName: milestone.name,
      projectName: project?.name,
      issuesCount: issues.length 
    });

    return {
      content: [{ type: "text", text: responseText }]
    };

  } catch (error) {
    log.error("Failed to fetch project milestone details", error, { milestoneId: params?.id });
    return {
      content: [
        {
          type: "text",
          text: `❌ Failed to fetch project milestone: ${error instanceof Error ? error.message : "Unknown error"}`
        }
      ],
      isError: true
    };
  }
};
