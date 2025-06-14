/**
 * Logging Utilities
 *
 * Structured JSON logging for the Linear Helper MCP Server
 */

export type LogLevel = "debug" | "info" | "warn" | "error";

export interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  error?: string;
  [key: string]: unknown;
}

// Create log entry with timestamp
const createLogEntry = (
  level: LogLevel,
  message: string,
  error?: unknown,
  meta?: Record<string, unknown>
): LogEntry => ({
  timestamp: new Date().toISOString(),
  level,
  message,
  error: error instanceof Error ? error.message : String(error),
  ...meta,
});

// Logger implementation
// IMPORTANT: All logging MUST go to stderr to avoid interfering with MCP JSON-RPC protocol on stdout
export const log = {
  debug: (message: string, meta?: Record<string, unknown>) => {
    const entry = createLogEntry("debug", message, undefined, meta);
    console.error(`[DEBUG] ${JSON.stringify(entry)}`);
  },

  info: (message: string, meta?: Record<string, unknown>) => {
    const entry = createLogEntry("info", message, undefined, meta);
    console.error(`[INFO] ${JSON.stringify(entry)}`);
  },

  warn: (message: string, meta?: Record<string, unknown>) => {
    const entry = createLogEntry("warn", message, undefined, meta);
    console.error(`[WARN] ${JSON.stringify(entry)}`);
  },

  error: (message: string, error?: unknown, meta?: Record<string, unknown>) => {
    const entry = createLogEntry("error", message, error, meta);
    console.error(`[ERROR] ${JSON.stringify(entry)}`);
  },
};

// Export for testing and external use
export { createLogEntry };
