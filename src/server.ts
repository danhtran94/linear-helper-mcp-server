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
import {
  listInitiatives,
  listInitiativesSchema,
  getInitiative,
  getInitiativeSchema,
} from "./tools/initiatives.js";
import {
  listProjectMilestones,
  listProjectMilestonesSchema,
  getProjectMilestone,
  getProjectMilestoneSchema,
} from "./tools/milestones.js";
import {
  listCycles,
  listCyclesSchema,
  getCycle,
  getCycleSchema,
} from "./tools/cycles.js";
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

  // Register tools
  registerTool(server, "health_check", healthCheckSchema, healthCheck);
  registerTool(
    server,
    "list_initiatives",
    listInitiativesSchema,
    listInitiatives
  );
  registerTool(server, "get_initiative", getInitiativeSchema, getInitiative);
  registerTool(
    server,
    "list_project_milestones",
    listProjectMilestonesSchema,
    listProjectMilestones
  );
  registerTool(
    server,
    "get_project_milestone",
    getProjectMilestoneSchema,
    getProjectMilestone
  );
  registerTool(server, "list_cycles", listCyclesSchema, listCycles);
  registerTool(server, "get_cycle", getCycleSchema, getCycle);

  // Setup transport
  const transport = new StdioServerTransport();

  // Connect and start server
  await server.connect(transport);

  log.info(`${SERVER_INFO.name} connected and ready`, {
    tools: [
      "health_check",
      "list_initiatives",
      "get_initiative",
      "list_project_milestones",
      "get_project_milestone",
      "list_cycles",
      "get_cycle",
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
