/**
 * Health Check Tool
 *
 * Validates Linear API connection and server health using GraphQL client
 */

import type { ToolHandler } from "../framework/mcp.js";
import { SERVER_INFO } from "../config/server.js";
import { testLinearConnection } from "../clients/linear.js";

/**
 * Health check tool implementation
 * Tests Linear API connectivity using the authenticated GraphQL client
 */
export const healthCheck: ToolHandler = async () => {
  try {
    // Test Linear API connection using GraphQL client
    const connectionResult = await testLinearConnection();

    if (connectionResult.success && connectionResult.user) {
      const { id, name, email, organization } = connectionResult.user;

      const orgInfo = organization
        ? `\nOrganization: ${organization.name} (${organization.id})`
        : "";

      return {
        content: [
          {
            type: "text" as const,
            text: `✅ Health Check Passed!\n\nLinear API connection successful\nUser: ${name} (${email})\nID: ${id}${orgInfo}\nServer: ${SERVER_INFO.name} v${SERVER_INFO.version}`,
          },
        ],
      };
    }

    return {
      content: [
        {
          type: "text" as const,
          text: "❌ Health Check Failed: No user data returned from Linear API",
        },
      ],
      isError: true,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return {
      content: [
        {
          type: "text" as const,
          text: `❌ Health Check Failed: ${errorMessage}`,
        },
      ],
      isError: true,
    };
  }
};

// Tool schema for registration
export const healthCheckSchema = {
  description:
    "Check Linear API connection and server health using GraphQL client",
};
