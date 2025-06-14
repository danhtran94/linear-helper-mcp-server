#!/usr/bin/env bun

/**
 * Direct Health Check Test Script
 *
 * This script allows you to test the health check functionality directly
 * without starting the full MCP server.
 */

import { healthCheck } from "../../src/tools/health.js";
import { initializeLinearClient } from "../../src/clients/linear.js";
import { getConfig, validateConfig } from "../../src/config/server.js";

console.log("🔍 Testing Linear API Health Check...\n");

try {
  // Initialize configuration and Linear client
  const config = getConfig({});
  validateConfig(config);
  initializeLinearClient(config);

  const result = await healthCheck();

  console.log(result.content[0]?.text);

  if (result.isError) {
    console.log("\n❌ Health check failed");
    process.exit(1);
  } else {
    console.log("\n✅ Health check passed");
    process.exit(0);
  }
} catch (error) {
  console.error("💥 Error running health check:", error);
  process.exit(1);
}
