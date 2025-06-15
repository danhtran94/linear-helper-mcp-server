/**
 * Team Cycle Management Tools
 *
 * Tools for querying and managing Linear team cycles (sprints)
 */

import type { ToolHandler } from "../framework/mcp.js";
import { getLinearClient } from "../clients/linear.js";
import { log } from "../utils/logger.js";
import { isValidUUID } from "../utils/index.js";

// Cycle status types for filtering
const CYCLE_STATUS_FILTERS = ["active", "next", "previous", "future", "past"] as const;
type CycleStatusFilter = (typeof CYCLE_STATUS_FILTERS)[number];

// Parameter types for tools
interface ListCyclesParams {
  teamId?: string;
  status?: CycleStatusFilter;
  limit?: number;
  search?: string;
}

interface GetCycleParams {
  id: string;
}

/**
 * List team cycles with filtering and pagination
 */
export const listCycles: ToolHandler<ListCyclesParams> = async (params) => {
  try {
    const client = getLinearClient();

    // Extract parameters with defaults
    const limit = params?.limit || 50;
    const teamId = params?.teamId;
    const status = params?.status;
    const search = params?.search;

    log.info("Fetching cycles list", {
      limit,
      teamId,
      status,
      search,
      hasFilters: !!(teamId || status || search)
    });

    // Validate status if provided
    if (status && !CYCLE_STATUS_FILTERS.includes(status)) {
      return {
        content: [
          {
            type: "text",
            text: `❌ Invalid status: ${status}. Valid statuses are: ${CYCLE_STATUS_FILTERS.join(", ")}`
          }
        ],
        isError: true
      };
    }

    // Validate teamId if provided
    if (teamId && !isValidUUID(teamId)) {
      return {
        content: [
          {
            type: "text",
            text: `❌ Invalid team ID format: ${teamId}. Please provide a valid UUID.`
          }
        ],
        isError: true
      };
    }

    // Build filter object for GraphQL query
    const filter: any = {};
    
    // Add team filter
    if (teamId) {
      filter.team = { id: { eq: teamId } };
    }
    
    // Add status filters
    if (status) {
      switch (status) {
        case "active":
          filter.isActive = { eq: true };
          break;
        case "next":
          filter.isNext = { eq: true };
          break;
        case "previous":
          filter.isPrevious = { eq: true };
          break;
        case "future":
          filter.isFuture = { eq: true };
          break;
        case "past":
          filter.isPast = { eq: true };
          break;
      }
    }
    
    // Add search filter
    if (search) {
      filter.name = { containsIgnoreCase: search };
    }

    // Query cycles
    const response = await client.query({
      cycles: {
        __args: {
          first: limit,
          ...(Object.keys(filter).length > 0 && { filter })
        },
        nodes: {
          id: true,
          number: true,
          name: true,
          description: true,
          startsAt: true,
          endsAt: true,
          completedAt: true,
          progress: true,
          createdAt: true,
          updatedAt: true,
          team: {
            id: true,
            name: true,
            key: true,
            color: true
          }
        },
        pageInfo: {
          hasNextPage: true,
          endCursor: true
        }
      }
    });

    const cycles = response.cycles?.nodes || [];

    // Additional client-side search if search term provided (enhances GraphQL filtering)
    const filteredCycles = search
      ? cycles.filter(cycle =>
          cycle.name?.toLowerCase().includes(search.toLowerCase()) ||
          cycle.description?.toLowerCase().includes(search.toLowerCase())
        )
      : cycles;

    // Format response
    const statusEmoji = {
      active: "🔄",
      next: "⏭️",
      previous: "⏮️",
      future: "🔮",
      past: "📜"
    };

    if (filteredCycles.length === 0) {
      const filterInfo = [];
      if (teamId) filterInfo.push(`team ID: ${teamId}`);
      if (status) filterInfo.push(`status: ${status}`);
      if (search) filterInfo.push(`search: "${search}"`);
      
      return {
        content: [
          {
            type: "text",
            text: `🔄 No cycles found${filterInfo.length > 0 ? ` with filters (${filterInfo.join(", ")})` : ""}.`
          }
        ]
      };
    }

    // Determine cycle status for display
    const getCycleStatus = (cycle: any): { status: string; emoji: string } => {
      const now = new Date();
      const startsAt = new Date(cycle.startsAt);
      const endsAt = new Date(cycle.endsAt);
      
      if (cycle.completedAt) {
        return { status: "completed", emoji: "✅" };
      } else if (now >= startsAt && now <= endsAt) {
        return { status: "active", emoji: "🔄" };
      } else if (now < startsAt) {
        return { status: "upcoming", emoji: "⏭️" };
      } else {
        return { status: "past", emoji: "📜" };
      }
    };

    const responseText = [
      `🔄 **Team Cycles** (${filteredCycles.length} found)`,
      "",
      ...filteredCycles.map(cycle => {
        const { status: cycleStatus, emoji } = getCycleStatus(cycle);
        const progressPercent = Math.round(cycle.progress * 100);
        const startsAtStr = new Date(cycle.startsAt).toLocaleDateString();
        const endsAtStr = new Date(cycle.endsAt).toLocaleDateString();
        const cycleName = cycle.name || `Cycle ${cycle.number}`;
        
        return [
          `${emoji} **${cycleName}**`,
          `   🆔 ${cycle.id}`,
          `   #️⃣ Cycle #${cycle.number} • 📊 ${progressPercent}% • 🎯 ${cycleStatus}`,
          `   📅 ${startsAtStr} → ${endsAtStr}`,
          `   👥 Team: ${cycle.team?.name || "Unknown"} (${cycle.team?.key || "N/A"})`,
          ...(cycle.description ? [`   📝 ${cycle.description}`] : []),
          ""
        ].join("\n");
      }),
      response.cycles?.pageInfo?.hasNextPage 
        ? "📄 Use pagination to see more cycles"
        : "📄 End of cycles list"
    ].join("\n");

    log.info("Cycles fetched successfully", {
      count: filteredCycles.length,
      hasMore: response.cycles?.pageInfo?.hasNextPage,
      appliedFilters: { teamId, status, search }
    });

    return {
      content: [{ type: "text", text: responseText }]
    };

  } catch (error) {
    log.error("Failed to fetch cycles", error);
    return {
      content: [
        {
          type: "text",
          text: `❌ Failed to fetch cycles: ${error instanceof Error ? error.message : "Unknown error"}`
        }
      ],
      isError: true
    };
  }
};

/**
 * Get detailed information about a specific cycle
 */
export const getCycle: ToolHandler<GetCycleParams> = async (params) => {
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
            text: `❌ Invalid cycle ID format: ${params.id}. Please provide a valid UUID.`
          }
        ],
        isError: true
      };
    }

    const client = getLinearClient();

    log.info("Fetching cycle details", { cycleId: params.id });

    // Query single cycle with full details
    const response = await client.query({
      cycle: {
        __args: { id: params.id },
        id: true,
        number: true,
        name: true,
        description: true,
        startsAt: true,
        endsAt: true,
        completedAt: true,
        autoArchivedAt: true,
        progress: true,
        createdAt: true,
        updatedAt: true,
        issueCountHistory: true,
        completedIssueCountHistory: true,
        team: {
          id: true,
          name: true,
          key: true,
          color: true,
          description: true,
          cyclesEnabled: true,
          cycleDuration: true,
          cycleStartDay: true
        },
        issues: {
          __args: { first: 15 },
          nodes: {
            id: true,
            identifier: true,
            title: true,
            priority: true,
            estimate: true,
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

    const cycle = response.cycle;

    if (!cycle) {
      return {
        content: [
          {
            type: "text",
            text: `❌ Cycle not found with ID: ${params.id}`
          }
        ],
        isError: true
      };
    }

    // Determine cycle status
    const getCycleStatus = (cycle: any): { status: string; emoji: string } => {
      const now = new Date();
      const startsAt = new Date(cycle.startsAt);
      const endsAt = new Date(cycle.endsAt);
      
      if (cycle.completedAt) {
        return { status: "completed", emoji: "✅" };
      } else if (now >= startsAt && now <= endsAt) {
        return { status: "active", emoji: "🔄" };
      } else if (now < startsAt) {
        return { status: "upcoming", emoji: "⏭️" };
      } else {
        return { status: "past", emoji: "📜" };
      }
    };

    const { status: cycleStatus, emoji } = getCycleStatus(cycle);
    const progressPercent = Math.round(cycle.progress * 100);
    const issues = (cycle as any).issues?.nodes || [];
    const team = (cycle as any).team;
    const cycleName = cycle.name || `Cycle ${cycle.number}`;

    // Calculate cycle metrics
    const totalIssues = issues.length;
    const completedIssues = issues.filter((issue: any) => issue.state?.type === "completed").length;
    const inProgressIssues = issues.filter((issue: any) => issue.state?.type === "started").length;
    const backlogIssues = issues.filter((issue: any) => issue.state?.type === "unstarted").length;

    const responseText = [
      `${emoji} **${cycleName}**`,
      `🆔 **ID:** ${cycle.id}`,
      `#️⃣ **Cycle Number:** ${cycle.number}`,
      `📊 **Progress:** ${progressPercent}% complete`,
      `🎯 **Status:** ${cycleStatus}`,
      "",
      ...(cycle.description ? [
        `📝 **Description:**`,
        cycle.description,
        ""
      ] : []),
      `📅 **Timeline:**`,
      `   • **Starts:** ${new Date(cycle.startsAt).toLocaleDateString()} ${new Date(cycle.startsAt).toLocaleTimeString()}`,
      `   • **Ends:** ${new Date(cycle.endsAt).toLocaleDateString()} ${new Date(cycle.endsAt).toLocaleTimeString()}`,
      ...(cycle.completedAt ? [`   • **Completed:** ${new Date(cycle.completedAt).toLocaleDateString()} ${new Date(cycle.completedAt).toLocaleTimeString()}`] : []),
      "",
      `👥 **Team Information:**`,
      `   • **Name:** ${team?.name || "Unknown"}`,
      `   • **Key:** ${team?.key || "N/A"}`,
      `   • **ID:** ${team?.id || "Unknown"}`,
      ...(team?.description ? [`   • **Description:** ${team.description}`] : []),
      ...(team?.cyclesEnabled !== undefined ? [
        `   • **Cycles Enabled:** ${team.cyclesEnabled ? "Yes" : "No"}`,
        ...(team.cycleDuration ? [`   • **Cycle Duration:** ${team.cycleDuration} weeks`] : []),
        ...(team.cycleStartDay !== undefined ? [`   • **Cycle Start Day:** ${["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][team.cycleStartDay] || team.cycleStartDay}`] : [])
      ] : []),
      "",
      `📋 **Issue Summary:**`,
      `   • **Total Issues:** ${totalIssues}`,
      `   • **Completed:** ${completedIssues} issues`,
      `   • **In Progress:** ${inProgressIssues} issues`, 
      `   • **Backlog:** ${backlogIssues} issues`,
      "",
      `📝 **Issues in Cycle (${Math.min(15, totalIssues)} shown):**`,
      ...(issues.length > 0 ? issues.map((issue: any) => {
        const priorityEmoji: { [key: number]: string } = {
          0: "⬇️", // No priority
          1: "🔽", // Low
          2: "🔵", // Medium  
          3: "🔶", // High
          4: "🔴"  // Urgent
        };
        const priority = priorityEmoji[issue.priority] || "📌";
        const estimate = issue.estimate ? ` • ${issue.estimate}pt` : "";
        
        return `   ${priority} ${issue.identifier}: ${issue.title} • ${issue.state?.name || "Unknown"}${estimate} • ${issue.assignee?.name || "Unassigned"}`;
      }) : ["   No issues in this cycle"]),
      ...((cycle as any).issues?.pageInfo?.hasNextPage ? ["   📄 More issues available..."] : []),
      "",
      `📊 **Timestamps:**`,
      `   • **Created:** ${new Date(cycle.createdAt).toLocaleDateString()}`,
      `   • **Updated:** ${new Date(cycle.updatedAt).toLocaleDateString()}`,
      ...(cycle.autoArchivedAt ? [`   • **Auto Archived:** ${new Date(cycle.autoArchivedAt).toLocaleDateString()}`] : [])
    ].join("\n");

    log.info("Cycle details fetched successfully", { 
      cycleId: params.id,
      cycleName,
      cycleNumber: cycle.number,
      teamName: team?.name,
      issuesCount: issues.length,
      status: cycleStatus
    });

    return {
      content: [{ type: "text", text: responseText }]
    };

  } catch (error) {
    log.error("Failed to fetch cycle details", error, { cycleId: params?.id });
    return {
      content: [
        {
          type: "text",
          text: `❌ Failed to fetch cycle: ${error instanceof Error ? error.message : "Unknown error"}`
        }
      ],
      isError: true
    };
  }
};
