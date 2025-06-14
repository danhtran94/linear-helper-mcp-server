/**
 * Linear GraphQL Client
 *
 * Authenticated GraphQL client using the generated GenQL client
 */

import { createClient } from "../../generated/index.js";
import type { ServerConfig } from "../config/server.js";
import { log } from "../utils/logger.js";

// Client instance
let clientInstance: ReturnType<typeof createClient> | null = null;

/**
 * Initialize the Linear GraphQL client with authentication
 */
export const initializeLinearClient = (config: ServerConfig) => {
  if (clientInstance) {
    return clientInstance;
  }

  log.info("Initializing Linear GraphQL client", {
    url: config.linearApiUrl,
    hasApiKey: !!config.linearApiKey,
  });

  clientInstance = createClient({
    url: config.linearApiUrl,
    headers: {
      Authorization: config.linearApiKey, // Linear API uses direct key, no "Bearer" prefix
      "Content-Type": "application/json",
      "User-Agent": "linear-helper-mcp-server/1.0.0",
    },
  });

  return clientInstance;
};

/**
 * Get the current Linear client instance
 */
export const getLinearClient = () => {
  if (!clientInstance) {
    throw new Error(
      "Linear client not initialized. Call initializeLinearClient() first."
    );
  }
  return clientInstance;
};

/**
 * Reset the client instance (useful for testing or config changes)
 */
export const resetLinearClient = () => {
  clientInstance = null;
  log.info("Linear GraphQL client reset");
};

/**
 * Test Linear API connection using the GraphQL client
 */
export const testLinearConnection = async () => {
  const client = getLinearClient();

  try {
    log.info("Testing Linear API connection");

    const result = await client.query({
      viewer: {
        id: true,
        name: true,
        email: true,
        organization: {
          id: true,
          name: true,
        },
      },
    });

    if (!result.viewer) {
      throw new Error("No viewer data returned from Linear API");
    }

    log.info("Linear API connection successful", {
      userId: result.viewer.id,
      userName: result.viewer.name,
      userEmail: result.viewer.email,
      orgId: result.viewer.organization?.id,
      orgName: result.viewer.organization?.name,
    });

    return {
      success: true,
      user: result.viewer,
    };
  } catch (error) {
    log.error("Linear API connection failed", error);

    // Handle different error types
    if (error instanceof Error) {
      if (error.message.includes("400")) {
        throw new Error("Invalid API key or malformed request");
      }
      if (error.message.includes("401")) {
        throw new Error("Unauthorized - check your Linear API key");
      }
      if (error.message.includes("403")) {
        throw new Error(
          "Forbidden - API key does not have required permissions"
        );
      }
      if (error.message.includes("429")) {
        throw new Error("Rate limited - too many requests to Linear API");
      }
    }

    throw error;
  }
};

// Export types for use in tools
export type LinearClient = ReturnType<typeof createClient>;
export type ViewerQuery = Awaited<ReturnType<typeof testLinearConnection>>;
