#!/usr/bin/env bun

/**
 * Test script for the enhanced issue tools
 */

import { initializeLinearClient, getLinearClient } from "../../src/clients/linear.js";
import { getFullIssue } from "../../src/tools/issues.js";
import { getConfig, validateConfig } from "../../src/config/server.js";

async function testIssueTools() {
  console.log("🧪 Testing Enhanced Issue Tools");
  console.log("==============================\n");

  // Initialize configuration and Linear client
  const config = getConfig({});
  validateConfig(config);
  initializeLinearClient(config);

  // First, let's get some issue IDs to test with
  console.log("0️⃣ Finding some issues to test with:");
  console.log("━".repeat(50));
  
  try {
    const client = getLinearClient();
    
    // Query for some recent issues
    const issuesResult = await client.query({
      issues: {
        __args: { first: 5 },
        nodes: {
          id: true,
          identifier: true,
          title: true,
          description: true,
        },
      },
    });

    if (!issuesResult.issues?.nodes || issuesResult.issues.nodes.length === 0) {
      console.log("❌ No issues found in the workspace");
      return;
    }

    console.log(`Found ${issuesResult.issues.nodes.length} issues:`);
    issuesResult.issues.nodes.forEach((issue, index) => {
      const descLength = issue.description?.length || 0;
      console.log(`  ${index + 1}. ${issue.identifier}: ${issue.title}`);
      console.log(`     ID: ${issue.id}`);
      console.log(`     Description length: ${descLength} characters`);
    });
    console.log("");

    // Test with the first issue that has a description
    const testIssue = issuesResult.issues.nodes.find(issue => 
      issue.description && issue.description.trim().length > 0
    ) || issuesResult.issues.nodes[0];

    if (!testIssue) {
      console.log("❌ No suitable test issue found");
      return;
    }

    console.log(`🎯 Testing with issue: ${testIssue.identifier} - ${testIssue.title}`);
    console.log(`📝 Original description length: ${testIssue.description?.length || 0} characters\n`);

    // Test 1: Get full issue details
    console.log("1️⃣ Testing get_full_issue:");
    console.log("━".repeat(50));
    try {
      const result = await getFullIssue({ id: testIssue.id });
      
      if (result.isError) {
        console.log("❌ Error result:", result.content[0]?.text);
      } else {
        console.log("✅ Success! Full issue details retrieved:");
        console.log("");
        console.log(result.content[0]?.text || "No content");
        
        // Analyze the result
        const fullText = result.content[0]?.text || "";
        const descriptionMatch = fullText.match(/## 📝 Description\n([\s\S]*?)\n## /);
        const extractedDescription = descriptionMatch ? descriptionMatch[1].trim() : "";
        
        console.log("\n" + "=".repeat(60));
        console.log("📊 ANALYSIS:");
        console.log("=".repeat(60));
        console.log(`✅ Total response length: ${fullText.length} characters`);
        console.log(`✅ Extracted description length: ${extractedDescription.length} characters`);
        console.log(`✅ Original description length: ${testIssue.description?.length || 0} characters`);
        
        if (extractedDescription.length === (testIssue.description?.length || 0)) {
          console.log("🎉 SUCCESS: Full description retrieved without truncation!");
        } else if (extractedDescription.length > 0) {
          console.log("⚠️  Description extracted but length differs (might be formatting)");
        } else {
          console.log("❌ No description found in response");
        }
      }
    } catch (error) {
      console.error("❌ Error:", error);
    }

    console.log("\n" + "=".repeat(60));
    console.log("🏁 TESTING COMPLETE");
    console.log("=".repeat(60));

  } catch (error) {
    console.error("❌ Failed to fetch issues for testing:", error);
  }
}

// Test 2: Test with invalid ID
async function testErrorCases() {
  console.log("\n2️⃣ Testing error cases:");
  console.log("━".repeat(50));

  // Test with invalid UUID
  try {
    console.log("Testing with invalid UUID...");
    const result = await getFullIssue({ id: "invalid-uuid" });
    console.log("Result:", result.content[0]?.text);
    console.log("");
  } catch (error) {
    console.error("❌ Error:", error);
  }

  // Test with valid UUID format but non-existent issue
  try {
    console.log("Testing with non-existent UUID...");
    const result = await getFullIssue({ id: "12345678-1234-1234-1234-123456789012" });
    console.log("Result:", result.content[0]?.text);
    console.log("");
  } catch (error) {
    console.error("❌ Error:", error);
  }

  // Test with missing ID
  try {
    console.log("Testing with missing ID...");
    const result = await getFullIssue({} as any);
    console.log("Result:", result.content[0]?.text);
    console.log("");
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

// Main test execution
async function main() {
  try {
    await testIssueTools();
    await testErrorCases();
  } catch (error) {
    console.error("💥 Fatal error during testing:", error);
    process.exit(1);
  }
}

if (import.meta.main) {
  main();
}
