/**
 * Utility functions for Linear Helper MCP Server
 *
 * Re-exports all utility modules for convenient access
 */

// Export the new logger
export * from "./logger.js";

// Keep useful utilities from original implementation
export function isValidUUID(value: string): boolean {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(value);
}

export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, "");
}

export function toISOString(date: Date | string): string {
  if (typeof date === "string") {
    return new Date(date).toISOString();
  }
  return date.toISOString();
}

export function isValidISODate(dateString: string): boolean {
  const date = new Date(dateString);
  return (
    date instanceof Date &&
    !isNaN(date.getTime()) &&
    date.toISOString() === dateString
  );
}

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function createGraphQLHeaders(apiKey: string): Record<string, string> {
  return {
    Authorization: apiKey, // Note: No "Bearer" prefix for Linear API keys
    "Content-Type": "application/json",
    "User-Agent": "linear-helper-mcp-server/1.0.0",
  };
}

export function buildPaginationArgs(
  limit?: number,
  after?: string
): { first?: number; after?: string } {
  const args: { first?: number; after?: string } = {};

  if (limit !== undefined) {
    args.first = Math.min(Math.max(1, limit), 100); // Clamp between 1-100
  }

  if (after) {
    args.after = after;
  }

  return args;
}

export function isNonNull<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

export function hasProperty<K extends string>(
  obj: unknown,
  prop: K
): obj is Record<K, unknown> {
  return typeof obj === "object" && obj !== null && prop in obj;
}
