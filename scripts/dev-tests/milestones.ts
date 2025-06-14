#!/usr/bin/env bun

/**
 * Development Test Script - Project Milestones
 * 
 * Tests the newly implemented milestone management tools
 */

import { log } from "../../src/utils/logger.js";
import { initializeLinearClient } from "../../src/clients/linear.js";
import { 
  listProjectMilestones, 
  getProjectMilestone 
} from "../../src/tools/milestones.js";

async function main() {
  console.log("🧪 Testing Project Milestone Tools\n");

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

  // Test 1: List all project milestones
  console.log("📋 Test 1: List all project milestones");
  try {
    const result1 = await listProjectMilestones();
    console.log("Result:");
    console.log(result1.content[0]?.text || "No content");
    console.log("✅ listProjectMilestones passed\n");
  } catch (error) {
    console.log("❌ listProjectMilestones failed:", error);
  }

  // Test 2: List milestones with status filter
  console.log("📋 Test 2: List milestones with status filter (next)");
  try {
    const result2 = await listProjectMilestones({ 
      status: "next",
      limit: 5 
    });
    console.log("Result:");
    console.log(result2.content[0]?.text || "No content");
    console.log("✅ listProjectMilestones with filter passed\n");
  } catch (error) {
    console.log("❌ listProjectMilestones with filter failed:", error);
  }

  // Test 3: Search milestones
  console.log("📋 Test 3: Search milestones");
  try {
    const result3 = await listProjectMilestones({ 
      search: "milestone",
      limit: 3
    });
    console.log("Result:");
    console.log(result3.content[0]?.text || "No content");
    console.log("✅ listProjectMilestones with search passed\n");
  } catch (error) {
    console.log("❌ listProjectMilestones with search failed:", error);
  }

  // Test 4: Invalid status test
  console.log("📋 Test 4: Invalid status (should fail gracefully)");
  try {
    const result4 = await listProjectMilestones({ 
      status: "invalid" as any
    });
    console.log("Result:");
    console.log(result4.content[0]?.text || "No content");
    console.log(result4.isError ? "✅ Correctly handled invalid status\n" : "❌ Should have failed\n");
  } catch (error) {
    console.log("❌ Invalid status test failed:", error);
  }

  // Test 5: Get specific milestone (we need to find a real milestone ID first)
  console.log("📋 Test 5: Get specific milestone details");
  try {
    // First get a list to find a real milestone ID
    const listResult = await listProjectMilestones({ limit: 1 });
    const listText = listResult.content[0]?.text || "";
    
    // Extract milestone ID from the list result (look for UUID pattern)
    const idMatch = listText.match(/🆔 ([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/);
    
    if (idMatch) {
      const milestoneId = idMatch[1];
      console.log(`Found milestone ID: ${milestoneId}`);
      
      const result5 = await getProjectMilestone({ id: milestoneId });
      console.log("Result:");
      console.log(result5.content[0]?.text?.substring(0, 500) + "..." || "No content");
      console.log("✅ getProjectMilestone passed\n");
    } else {
      console.log("⚠️ No milestone ID found in list, skipping detailed milestone test\n");
    }
  } catch (error) {
    console.log("❌ getProjectMilestone failed:", error);
  }

  // Test 6: Invalid milestone ID test
  console.log("📋 Test 6: Invalid milestone ID (should fail gracefully)");
  try {
    const result6 = await getProjectMilestone({ 
      id: "invalid-id"
    });
    console.log("Result:");
    console.log(result6.content[0]?.text || "No content");
    console.log(result6.isError ? "✅ Correctly handled invalid ID\n" : "❌ Should have failed\n");
  } catch (error) {
    console.log("❌ Invalid ID test failed:", error);
  }

  console.log("🎉 All milestone tool tests completed!");
}

// Run the tests
if (import.meta.main) {
  main().catch(console.error);
}
