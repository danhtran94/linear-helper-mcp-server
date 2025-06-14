#!/usr/bin/env bun

/**
 * Test script for the enhanced initiative tools
 */

import { initializeLinearClient } from "../../src/clients/linear.js";
import { listInitiatives, getInitiative } from "../../src/tools/initiatives.js";
import { getConfig, validateConfig } from "../../src/config/server.js";

async function testInitiativeTools() {
  console.log("🧪 Testing Enhanced Initiative Tools");
  console.log("=====================================\n");

  // Initialize configuration and Linear client
  const config = getConfig({});
  validateConfig(config);
  initializeLinearClient(config);

  // Test 1: List all initiatives (no parameters)
  console.log("1️⃣ Testing list_initiatives (no parameters):");
  console.log("━".repeat(50));
  try {
    const result1 = await listInitiatives();
    console.log(result1.content[0]?.text || "No content");
    console.log("");
  } catch (error) {
    console.error("❌ Error:", error);
  }

  // Test 2: List initiatives with status filter
  console.log("2️⃣ Testing list_initiatives (with status filter):");
  console.log("━".repeat(50));
  try {
    const result2 = await listInitiatives({ status: "Active", limit: 3 });
    console.log(result2.content[0]?.text || "No content");
    console.log("");
  } catch (error) {
    console.error("❌ Error:", error);
  }

  // Test 3: List initiatives with search
  console.log("3️⃣ Testing list_initiatives (with search):");
  console.log("━".repeat(50));
  try {
    const result3 = await listInitiatives({ search: "project", limit: 2 });
    console.log(result3.content[0]?.text || "No content");
    console.log("");
  } catch (error) {
    console.error("❌ Error:", error);
  }

  // Test 4: Get specific initiative (will need a real ID)
  console.log("4️⃣ Testing get_initiative (invalid ID to test validation):");
  console.log("━".repeat(50));
  try {
    const result4 = await getInitiative({ id: "invalid-id" });
    console.log(result4.content[0]?.text || "No content");
    console.log("");
  } catch (error) {
    console.error("❌ Error:", error);
  }

  // Test 5: Get specific initiative (missing parameter)
  console.log("5️⃣ Testing get_initiative (missing parameter):");
  console.log("━".repeat(50));
  try {
    const result5 = await getInitiative();
    console.log(result5.content[0]?.text || "No content");
    console.log("");
  } catch (error) {
    console.error("❌ Error:", error);
  }

  console.log("✅ All tests completed!");
}

// Run the tests
testInitiativeTools().catch((error) => {
  console.error("💥 Test failed:", error);
  process.exit(1);
});
