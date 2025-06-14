/**
 * MCP Framework Utilities
 *
 * Reusable framework helpers for MCP tool registration and error handling
 */

import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { log } from "../utils/logger.js";

// Types for tool framework
export type ToolHandler<TParams = any> = (params?: TParams) => Promise<{
  content: Array<{ type: "text"; text: string }>;
  isError?: boolean;
}>;

export type ToolSchema = {
  description: string;
  inputSchema?: object;
};

/**
 * Error handling wrapper for MCP tools
 * Provides consistent error handling and logging across all tools
 */
export const withErrorHandling = <TParams = any>(
  toolName: string,
  handler: ToolHandler<TParams>
): ToolHandler<TParams> => {
  return async (params?: TParams) => {
    try {
      log.info(`Tool executed: ${toolName}`, { params });
      const result = await handler(params);

      if (result.isError) {
        log.error(`Tool failed: ${toolName}`, null, {
          result: result.content[0]?.text,
          params,
        });
      } else {
        log.info(`Tool completed: ${toolName}`);
      }

      return result;
    } catch (error) {
      log.error(`Tool error: ${toolName}`, error, { params });
      return {
        content: [
          {
            type: "text" as const,
            text: `❌ ${toolName} failed: ${
              error instanceof Error ? error.message : "Unknown error"
            }`,
          },
        ],
        isError: true,
      };
    }
  };
};

/**
 * Tool registration helper
 * Provides consistent tool registration with automatic error handling
 */
export const registerTool = <TParams = any>(
  server: McpServer,
  name: string,
  schema: ToolSchema,
  handler: ToolHandler<TParams>
) => {
  server.tool(name, schema, async (args) => {
    // Extract parameters from MCP args and pass to our handler
    const wrappedHandler = withErrorHandling(name, handler);
    return await wrappedHandler(args as TParams);
  });
  log.info(`Tool registered: ${name}`, { description: schema.description });
};

/**
 * Bulk tool registration helper
 * Register multiple tools at once
 */
export const registerTools = (
  server: McpServer,
  tools: Array<{
    name: string;
    schema: ToolSchema;
    handler: ToolHandler<any>;
  }>
) => {
  const registeredTools: string[] = [];

  for (const tool of tools) {
    registerTool(server, tool.name, tool.schema, tool.handler);
    registeredTools.push(tool.name);
  }

  log.info(`Bulk tool registration completed`, {
    count: registeredTools.length,
    tools: registeredTools,
  });

  return registeredTools;
};
