#!/usr/bin/env bun

/**
 * Linear Helper MCP Server
 *
 * A comprehensive Model Context Protocol server that extends Linear's functionality
 * with support for Initiatives, Cycles, Project Milestones, and advanced querying.
 *
 * @author Danh Tran
 * @version 1.0.0
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Import modular components
import {
  SERVER_INFO,
  parseCliArgs,
  getConfig,
  validateConfig,
  showHelp,
} from "./config/server.js";
import { log } from "./utils/logger.js";
import { registerTool } from "./framework/mcp.js";
import { healthCheck, healthCheckSchema } from "./tools/health.js";
import { listInitiatives, getInitiative } from "./tools/initiatives.js";
import {
  listProjectMilestones,
  getProjectMilestone,
} from "./tools/milestones.js";
import { listCycles, getCycle } from "./tools/cycles.js";
import { initializeLinearClient } from "./clients/linear.js";

/**
 * Main server initialization
 */
async function main() {
  // Parse CLI arguments
  const args = process.argv.slice(2);
  const cliArgs = parseCliArgs(args);

  // Show help if requested
  if (cliArgs.help) {
    showHelp();
    process.exit(0);
  }

  // Get and validate configuration
  const config = getConfig(cliArgs);

  try {
    validateConfig(config);
  } catch (error) {
    log.error("Configuration validation failed", error);
    console.error(
      "\n" + (error instanceof Error ? error.message : "Configuration error")
    );
    console.error("\nUse --help for usage information");
    process.exit(1);
  }

  // Initialize Linear GraphQL client
  try {
    initializeLinearClient(config);
  } catch (error) {
    log.error("Failed to initialize Linear GraphQL client", error);
    process.exit(1);
  }

  // Direct health check mode
  if (cliArgs.healthCheck) {
    log.info("Running health check directly...");
    const result = await healthCheck();

    // Output the result
    console.log("\n" + (result.content[0]?.text || "No result text"));

    // Exit with appropriate code
    process.exit(result.isError ? 1 : 0);
  }

  log.info(`Starting ${SERVER_INFO.name} v${SERVER_INFO.version}`, {
    hasApiKey: !!config.linearApiKey,
    apiUrl: config.linearApiUrl,
  });

  // Create MCP server instance
  const server = new McpServer(SERVER_INFO);

  // Register tools using modern MCP SDK pattern with Zod validation

  // Health check tool (no parameters)
  registerTool(server, "health_check", healthCheckSchema, healthCheck);

  // Initiative management tools
  server.tool(
    "list_initiatives",
    {
      status: z
        .enum(["Planned", "Active", "Completed"])
        .optional()
        .describe("Filter initiatives by status"),
      limit: z
        .number()
        .min(1)
        .max(100)
        .default(50)
        .describe("Maximum number of initiatives to return (1-100)"),
      search: z
        .string()
        .optional()
        .describe(
          "Search term to filter initiatives by name, description, or content"
        ),
    },
    async ({ status, limit = 50, search }) => {
      return await listInitiatives({ status, limit, search });
    }
  );

  server.tool(
    "get_initiative",
    {
      id: z.string().uuid("Must be a valid UUID").describe("The initiative ID"),
    },
    async ({ id }) => {
      return await getInitiative({ id });
    }
  );

  // Cycle management tools
  server.tool(
    "list_cycles",
    {
      teamId: z
        .string()
        .uuid()
        .optional()
        .describe("Filter cycles by team ID (UUID format)"),
      status: z
        .enum(["active", "next", "previous", "future", "past"])
        .optional()
        .describe("Filter cycles by status"),
      limit: z
        .number()
        .min(1)
        .max(100)
        .default(50)
        .describe("Maximum number of cycles to return (1-100)"),
      search: z
        .string()
        .optional()
        .describe("Search cycles by name or description"),
    },
    async ({ teamId, status, limit = 50, search }) => {
      return await listCycles({ teamId, status, limit, search });
    }
  );

  server.tool(
    "get_cycle",
    {
      id: z.string().uuid("Must be a valid UUID").describe("The cycle ID"),
    },
    async ({ id }) => {
      return await getCycle({ id });
    }
  );

  // Project milestone management tools
  server.tool(
    "list_project_milestones",
    {
      projectId: z
        .string()
        .uuid()
        .optional()
        .describe("Filter milestones by project ID (UUID format)"),
      status: z
        .enum(["unstarted", "next", "overdue", "done"])
        .optional()
        .describe("Filter milestones by status"),
      limit: z
        .number()
        .min(1)
        .max(100)
        .default(50)
        .describe("Maximum number of milestones to return (1-100)"),
      search: z
        .string()
        .optional()
        .describe("Search milestones by name or description"),
    },
    async ({ projectId, status, limit = 50, search }) => {
      return await listProjectMilestones({ projectId, status, limit, search });
    }
  );

  server.tool(
    "get_project_milestone",
    {
      id: z.string().uuid("Must be a valid UUID").describe("The milestone ID"),
    },
    async ({ id }) => {
      return await getProjectMilestone({ id });
    }
  );

  // Setup transport
  const transport = new StdioServerTransport();

  // Connect and start server
  await server.connect(transport);

  log.info(`${SERVER_INFO.name} connected and ready`, {
    tools: [
      "health_check",
      "list_initiatives",
      "get_initiative",
      "list_cycles",
      "get_cycle",
      "list_project_milestones",
      "get_project_milestone",
    ],
    tip: "Try: list_cycles to see team cycles across your workspace",
  });
}

// Handle graceful shutdown
process.on("SIGINT", () => {
  log.info("Shutting down Linear Helper MCP Server (SIGINT)");
  process.exit(0);
});

process.on("SIGTERM", () => {
  log.info("Shutting down Linear Helper MCP Server (SIGTERM)");
  process.exit(0);
});

// Start the server
if (import.meta.main) {
  main().catch((error) => {
    log.error("Fatal error during startup", error);
    process.exit(1);
  });
}

// Export for testing and external use
export { main };
