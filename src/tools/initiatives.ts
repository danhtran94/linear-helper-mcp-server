/**
 * Initiative Management Tools
 *
 * Tools for querying and managing Linear initiatives
 */

import type { ToolHandler } from "../framework/mcp.js";
import { getLinearClient } from "../clients/linear.js";
import { log } from "../utils/logger.js";
import { isValidUUID } from "../utils/index.js";

// Initiative status enum for validation
const INITIATIVE_STATUSES = ["Planned", "Active", "Completed"] as const;
type InitiativeStatus = (typeof INITIATIVE_STATUSES)[number];

// Parameter types for tools
interface ListInitiativesParams {
  status?: InitiativeStatus;
  limit?: number;
  search?: string;
}

interface GetInitiativeParams {
  id: string;
}

/**
 * List initiatives with filtering and pagination
 */
export const listInitiatives: ToolHandler<ListInitiativesParams> = async (params) => {
  try {
    const client = getLinearClient();
    
    // Extract parameters with defaults
    const limit = params?.limit || 50;
    const status = params?.status;
    const search = params?.search;

    log.info("Fetching initiatives list", { 
      limit, 
      status, 
      search,
      hasFilters: !!(status || search)
    });

    // Build filter object for GraphQL query
    const filter: any = {};
    if (status) {
      filter.status = { eq: status };
    }

    const result = await client.query({
      initiatives: {
        __args: {
          first: limit,
          filter: Object.keys(filter).length > 0 ? filter : undefined,
        },
        nodes: {
          id: true,
          name: true,
          description: true,
          status: true,
          targetDate: true,
          color: true,
          icon: true,
          slugId: true,
          sortOrder: true,
          createdAt: true,
          updatedAt: true,
          url: true,
          health: true,
          content: true,
          startedAt: true,
          completedAt: true,
          creator: {
            id: true,
            name: true,
            email: true,
          },
          owner: {
            id: true,
            name: true,
            email: true,
          },
          organization: {
            id: true,
            name: true,
          },
          projects: {
            __args: {},
            nodes: {
              id: true,
              name: true,
              status: {
                name: true,
                type: true,
              },
            },
          },
        },
        pageInfo: {
          hasNextPage: true,
          hasPreviousPage: true,
          startCursor: true,
          endCursor: true,
        },
      },
    });

    if (!result.initiatives || !result.initiatives.nodes) {
      return {
        content: [
          {
            type: "text" as const,
            text: "❌ No initiatives found or failed to fetch initiatives",
          },
        ],
        isError: true,
      };
    }

    let initiatives = result.initiatives.nodes;
    const pageInfo = result.initiatives.pageInfo;

    // Client-side search filtering if needed (GraphQL search might not be available)
    if (search) {
      const searchLower = search.toLowerCase();
      initiatives = initiatives.filter(initiative => 
        initiative.name?.toLowerCase().includes(searchLower) ||
        initiative.description?.toLowerCase().includes(searchLower) ||
        initiative.content?.toLowerCase().includes(searchLower)
      );
    }

    log.info("Successfully fetched initiatives", {
      total: result.initiatives.nodes.length,
      filtered: initiatives.length,
      hasNextPage: pageInfo.hasNextPage,
    });

    // Format initiatives for display
    const formattedInitiatives = initiatives.map((initiative) => {
      const projectCount = initiative.projects?.nodes?.length || 0;
      const creatorName = initiative.creator?.name || "Unknown";
      const ownerName = initiative.owner?.name || "Unassigned";

      return [
        `📋 **${initiative.name}** (${initiative.status})`,
        `   ID: ${initiative.id}`,
        `   Slug: ${initiative.slugId}`,
        `   Description: ${initiative.description || "No description"}`,
        `   Target Date: ${initiative.targetDate || "Not set"}`,
        `   Health: ${initiative.health || "Not set"}`,
        `   Creator: ${creatorName}`,
        `   Owner: ${ownerName}`,
        `   Projects: ${projectCount} project(s)`,
        `   URL: ${initiative.url}`,
        "",
      ].join("\n");
    });

    const summary = [
      `✅ Found ${initiatives.length} initiative(s)${status ? ` with status "${status}"` : ""}${search ? ` matching "${search}"` : ""}`,
      "",
      ...formattedInitiatives,
    ];

    // Add pagination info if applicable
    if (pageInfo.hasNextPage) {
      summary.push(
        `📄 More initiatives available. Use pagination to fetch more.`
      );
      summary.push(`   Next cursor: ${pageInfo.endCursor}`);
    }

    return {
      content: [
        {
          type: "text" as const,
          text: summary.join("\n"),
        },
      ],
    };
  } catch (error) {
    log.error("Failed to fetch initiatives", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return {
      content: [
        {
          type: "text" as const,
          text: `❌ Failed to fetch initiatives: ${errorMessage}`,
        },
      ],
      isError: true,
    };
  }
};

/**
 * Get detailed information about a specific initiative
 */
export const getInitiative: ToolHandler<GetInitiativeParams> = async (params) => {
  try {
    if (!params?.id) {
      return {
        content: [
          {
            type: "text" as const,
            text: "❌ Missing required parameter: id",
          },
        ],
        isError: true,
      };
    }

    const { id } = params;

    // Validate the ID format
    if (!isValidUUID(id)) {
      return {
        content: [
          {
            type: "text" as const,
            text: `❌ Invalid initiative ID format: ${id}. Expected a valid UUID.`,
          },
        ],
        isError: true,
      };
    }

    const client = getLinearClient();

    log.info("Fetching initiative details", { id });

    const result = await client.query({
      initiative: {
        __args: { id },
        id: true,
        name: true,
        description: true,
        status: true,
        targetDate: true,
        color: true,
        icon: true,
        slugId: true,
        sortOrder: true,
        createdAt: true,
        updatedAt: true,
        url: true,
        health: true,
        content: true,
        startedAt: true,
        completedAt: true,
        creator: {
          id: true,
          name: true,
          email: true,
        },
        owner: {
          id: true,
          name: true,
          email: true,
        },
        organization: {
          id: true,
          name: true,
        },
        projects: {
          __args: {},
          nodes: {
            id: true,
            name: true,
            description: true,
            status: {
              name: true,
              type: true,
            },
            lead: {
              id: true,
              name: true,
              email: true,
            },
            teams: {
              __args: {},
              nodes: {
                id: true,
                name: true,
                key: true,
              },
            },
            targetDate: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });

    if (!result.initiative) {
      return {
        content: [
          {
            type: "text" as const,
            text: `❌ Initiative not found with ID: ${id}`,
          },
        ],
        isError: true,
      };
    }

    const initiative = result.initiative;
    
    log.info("Successfully fetched initiative details", {
      id: initiative.id,
      name: initiative.name,
      projectCount: initiative.projects?.nodes?.length || 0,
    });

    // Format detailed initiative information
    const creatorName = initiative.creator?.name || "Unknown";
    const ownerName = initiative.owner?.name || "Unassigned";
    const projectCount = initiative.projects?.nodes?.length || 0;

    // Format projects list
    const projectsList = initiative.projects?.nodes?.map(project => {
      const leadName = project.lead?.name || "Unassigned";
      const teamNames = project.teams?.nodes?.map(team => team.name).join(", ") || "No teams";
      
      return [
        `   🎯 **${project.name}** (${project.status?.name || "Unknown"})`,
        `      ID: ${project.id}`,
        `      Description: ${project.description || "No description"}`,
        `      Lead: ${leadName}`,
        `      Teams: ${teamNames}`,
        `      Target Date: ${project.targetDate || "Not set"}`,
        `      Created: ${project.createdAt ? new Date(project.createdAt).toLocaleDateString() : "Unknown"}`,
        "",
      ].join("\n");
    }) || [];

    const detailedInfo = [
      `🎯 **Initiative Details**`,
      "",
      `📋 **${initiative.name}** (${initiative.status})`,
      `   ID: ${initiative.id}`,
      `   Slug: ${initiative.slugId}`,
      `   URL: ${initiative.url}`,
      "",
      `📝 **Description:**`,
      `   ${initiative.description || "No description provided"}`,
      "",
      `📊 **Status & Progress:**`,
      `   Status: ${initiative.status}`,
      `   Health: ${initiative.health || "Not set"}`,
      `   Target Date: ${initiative.targetDate || "Not set"}`,
      "",
      `👥 **People:**`,
      `   Creator: ${creatorName}`,
      `   Owner: ${ownerName}`,
      "",
      `📅 **Timeline:**`,
      `   Created: ${initiative.createdAt ? new Date(initiative.createdAt).toLocaleDateString() : "Unknown"}`,
      `   Updated: ${initiative.updatedAt ? new Date(initiative.updatedAt).toLocaleDateString() : "Unknown"}`,
      `   Started: ${initiative.startedAt ? new Date(initiative.startedAt).toLocaleDateString() : "Not started"}`,
      `   Completed: ${initiative.completedAt ? new Date(initiative.completedAt).toLocaleDateString() : "Not completed"}`,
      "",
      `🎯 **Projects (${projectCount}):**`,
      "",
      ...projectsList,
    ];

    if (initiative.content) {
      detailedInfo.push(`📄 **Content:**`);
      detailedInfo.push(`   ${initiative.content}`);
      detailedInfo.push("");
    }

    return {
      content: [
        {
          type: "text" as const,
          text: detailedInfo.join("\n"),
        },
      ],
    };
  } catch (error) {
    log.error("Failed to get initiative", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return {
      content: [
        {
          type: "text" as const,
          text: `❌ Failed to get initiative: ${errorMessage}`,
        },
      ],
      isError: true,
    };
  }
};

// Tool schemas for registration
export const listInitiativesSchema = {
  description:
    "List all initiatives in the workspace with details including status, progress, and associated projects. Supports filtering by status and search terms.",
  inputSchema: {
    type: "object",
    properties: {
      status: {
        type: "string",
        enum: INITIATIVE_STATUSES,
        description: "Filter initiatives by status (Planned, Active, Completed)",
      },
      limit: {
        type: "number",
        minimum: 1,
        maximum: 100,
        default: 50,
        description: "Maximum number of initiatives to return (1-100, default: 50)",
      },
      search: {
        type: "string",
        description: "Search term to filter initiatives by name, description, or content",
      },
    },
    additionalProperties: false,
  },
};

export const getInitiativeSchema = {
  description: "Get detailed information about a specific initiative by ID, including all associated projects and their details",
  inputSchema: {
    type: "object",
    properties: {
      id: {
        type: "string",
        description: "The initiative ID (UUID format)",
        pattern: "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$",
      },
    },
    required: ["id"],
    additionalProperties: false,
  },
};
