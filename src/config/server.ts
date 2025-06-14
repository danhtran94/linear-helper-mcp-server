/**
 * Server Configuration
 *
 * Centralized configuration for the Linear Helper MCP Server
 */

// Server information
export const SERVER_INFO = {
  name: "linear-helper-mcp-server",
  version: "1.0.0",
  description: "Linear Helper MCP Server with extended functionality",
} as const;

// Server capabilities for MCP protocol
export const SERVER_CAPABILITIES = {
  tools: {
    listChanged: true,
  },
  resources: {
    subscribe: false,
    listChanged: false,
  },
  prompts: {
    listChanged: false,
  },
  logging: {
    enabled: true,
    level: "info",
  },
} as const;

// CLI argument interface
export interface CliArgs {
  apiKey?: string;
  help?: boolean;
  healthCheck?: boolean;
}

// Parse CLI arguments
export const parseCliArgs = (args: string[]): CliArgs => {
  const parsed: CliArgs = {};

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    switch (arg) {
      case "--api-key":
      case "-k":
        parsed.apiKey = args[++i];
        break;
      case "--health-check":
      case "-h":
        parsed.healthCheck = true;
        break;
      case "--help":
        parsed.help = true;
        break;
    }
  }

  return parsed;
};

// Server configuration interface
export interface ServerConfig {
  linearApiKey: string;
  linearApiUrl: string;
  logLevel: string;
  nodeEnv: string;
}

// Get configuration with CLI args override
export const getConfig = (cliArgs?: CliArgs): ServerConfig => ({
  linearApiKey: cliArgs?.apiKey || process.env.LINEAR_API_KEY || "",
  linearApiUrl: process.env.LINEAR_API_URL || "https://api.linear.app/graphql",
  logLevel: process.env.LOG_LEVEL || "info",
  nodeEnv: process.env.NODE_ENV || "development",
});

// Validate configuration
export const validateConfig = (config: ServerConfig): ServerConfig => {
  if (!config.linearApiKey) {
    throw new Error(
      "Linear API key is required. Provide via:\n" +
        "  1. CLI argument: --api-key YOUR_KEY\n" +
        "  2. Environment variable: LINEAR_API_KEY=YOUR_KEY\n" +
        "  3. Get your key from: https://linear.app/settings/api"
    );
  }

  if (!config.linearApiUrl) {
    throw new Error("Linear API URL is required");
  }

  return config;
};

// Show CLI help
export const showHelp = () => {
  console.log(`
${SERVER_INFO.name} v${SERVER_INFO.version}
${SERVER_INFO.description}

Usage:
  bun src/server.ts [options]

Options:
  --api-key, -k <key>    Linear API key (overrides LINEAR_API_KEY env var)
  --health-check, -h     Run health check and exit
  --help                 Show this help message

Examples:
  # Start server with API key from environment
  LINEAR_API_KEY=your_key bun src/server.ts
  
  # Start server with API key from CLI
  bun src/server.ts --api-key your_key
  
  # Run health check with API key
  bun src/server.ts --api-key your_key --health-check
  
  # Use npm scripts
  bun run health
  bun run mcp:stdio

Get your Linear API key: https://linear.app/settings/api
`);
};
