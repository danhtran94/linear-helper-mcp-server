#!/usr/bin/env bun

/**
 * Development Test Script - Team Cycles
 * 
 * Tests the newly implemented cycle management tools
 */

import { log } from "../../src/utils/logger.js";
import { initializeLinearClient } from "../../src/clients/linear.js";
import { 
  listCycles, 
  getCycle 
} from "../../src/tools/cycles.js";

async function main() {
  console.log("🧪 Testing Team Cycle Tools\n");

  // Initialize the Linear client
  const apiKey = process.env.LINEAR_API_KEY;
  if (!apiKey) {
    console.error("❌ LINEAR_API_KEY environment variable is required");
    process.exit(1);
  }

  try {
    initializeLinearClient({ 
      linearApiKey: apiKey,
      linearApiUrl: "https://api.linear.app/graphql"
    });
    console.log("✅ Linear client initialized\n");
  } catch (error) {
    console.error("❌ Failed to initialize Linear client:", error);
    process.exit(1);
  }

  // Test 1: List all cycles
  console.log("🔄 Test 1: List all cycles");
  try {
    const result1 = await listCycles();
    console.log("Result:");
    console.log(result1.content[0]?.text || "No content");
    console.log("✅ listCycles passed\n");
  } catch (error) {
    console.log("❌ listCycles failed:", error);
  }

  // Test 2: List cycles with status filter
  console.log("🔄 Test 2: List cycles with status filter (active)");
  try {
    const result2 = await listCycles({ 
      status: "active",
      limit: 5 
    });
    console.log("Result:");
    console.log(result2.content[0]?.text || "No content");
    console.log("✅ listCycles with filter passed\n");
  } catch (error) {
    console.log("❌ listCycles with filter failed:", error);
  }

  // Test 3: Search cycles
  console.log("🔄 Test 3: Search cycles");
  try {
    const result3 = await listCycles({ 
      search: "cycle",
      limit: 3
    });
    console.log("Result:");
    console.log(result3.content[0]?.text || "No content");
    console.log("✅ listCycles with search passed\n");
  } catch (error) {
    console.log("❌ listCycles with search failed:", error);
  }

  // Test 4: Invalid status test
  console.log("🔄 Test 4: Invalid status (should fail gracefully)");
  try {
    const result4 = await listCycles({ 
      status: "invalid" as any
    });
    console.log("Result:");
    console.log(result4.content[0]?.text || "No content");
    console.log(result4.isError ? "✅ Correctly handled invalid status\n" : "❌ Should have failed\n");
  } catch (error) {
    console.log("❌ Invalid status test failed:", error);
  }

  // Test 5: List cycles by previous status
  console.log("🔄 Test 5: List previous cycles");
  try {
    const result5 = await listCycles({ 
      status: "previous",
      limit: 3
    });
    console.log("Result:");
    console.log(result5.content[0]?.text || "No content");
    console.log("✅ listCycles with previous status passed\n");
  } catch (error) {
    console.log("❌ listCycles with previous status failed:", error);
  }

  // Test 6: Get specific cycle (we need to find a real cycle ID first)
  console.log("🔄 Test 6: Get specific cycle details");
  try {
    // First get a list to find a real cycle ID
    const listResult = await listCycles({ limit: 1 });
    const listText = listResult.content[0]?.text || "";
    
    // Extract cycle ID from the list result (look for UUID pattern)
    const idMatch = listText.match(/🆔 ([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/);
    
    if (idMatch) {
      const cycleId = idMatch[1];
      console.log(`Found cycle ID: ${cycleId}`);
      
      const result6 = await getCycle({ id: cycleId });
      console.log("Result:");
      console.log(result6.content[0]?.text?.substring(0, 500) + "..." || "No content");
      console.log("✅ getCycle passed\n");
    } else {
      console.log("⚠️ No cycle ID found in list, skipping detailed cycle test\n");
    }
  } catch (error) {
    console.log("❌ getCycle failed:", error);
  }

  // Test 7: Invalid cycle ID test
  console.log("🔄 Test 7: Invalid cycle ID (should fail gracefully)");
  try {
    const result7 = await getCycle({ 
      id: "invalid-id"
    });
    console.log("Result:");
    console.log(result7.content[0]?.text || "No content");
    console.log(result7.isError ? "✅ Correctly handled invalid ID\n" : "❌ Should have failed\n");
  } catch (error) {
    console.log("❌ Invalid ID test failed:", error);
  }

  console.log("🎉 All cycle tool tests completed!");
}

// Run the tests
if (import.meta.main) {
  main().catch(console.error);
}
