/**
 * MCP Framework Utilities
 *
 * Reusable framework helpers for MCP tool registration and error handling
 */

import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
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

// Zod-based types for the modern MCP SDK pattern
export type ZodToolHandler<T = any> = (params: T) => Promise<{
  content: Array<{ type: "text"; text: string }>;
  isError?: boolean;
}>;

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
 * Modern Zod-based tool registration helper (RECOMMENDED)
 * Uses the correct MCP SDK pattern with Zod schemas and destructured parameters
 */
export const registerZodTool = <T extends Record<string, z.ZodType>>(
  server: McpServer,
  name: string,
  schema: T,
  handler: ZodToolHandler<z.infer<z.ZodObject<T>>>
) => {
  // Cast to any to work with MCP SDK's typing
  (server as any).tool(name, schema, async (params: z.infer<z.ZodObject<T>>) => {
    try {
      log.info(`Tool executed: ${name}`, { params });
      const result = await handler(params);

      if (result.isError) {
        log.error(`Tool failed: ${name}`, null, {
          result: result.content[0]?.text,
          params,
        });
      } else {
        log.info(`Tool completed: ${name}`);
      }

      return result;
    } catch (error) {
      log.error(`Tool error: ${name}`, error, { params });
      return {
        content: [
          {
            type: "text" as const,
            text: `❌ ${name} failed: ${
              error instanceof Error ? error.message : "Unknown error"
            }`,
          },
        ],
        isError: true,
      };
    }
  });
  
  log.info(`Tool registered: ${name}`, { 
    description: `Tool with Zod schema validation`,
    params: Object.keys(schema)
  });
};

/**
 * Legacy tool registration helper (for backward compatibility)
 * Provides consistent tool registration with automatic error handling
 */
export const registerTool = <TParams = any>(
  server: McpServer,
  name: string,
  schema: ToolSchema,
  handler: ToolHandler<TParams>
) => {
  // Legacy pattern for tools without parameters (like health_check)
  (server as any).tool(name, schema, async (params: TParams) => {
    const wrappedHandler = withErrorHandling(name, handler);
    return await wrappedHandler(params);
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
