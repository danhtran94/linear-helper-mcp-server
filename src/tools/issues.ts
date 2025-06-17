/**
 * Issue Management Tools
 *
 * Tools for querying Linear issues with full content and metadata
 */

import type { ToolHandler } from "../framework/mcp.js";
import { getLinearClient } from "../clients/linear.js";
import { log } from "../utils/logger.js";
import { isValidUUID } from "../utils/index.js";

// Parameter types for tools
interface GetFullIssueParams {
  id: string;
}

/**
 * Get complete issue information including full description and all metadata
 * 
 * This tool provides comprehensive issue data that may be truncated in other tools,
 * including the complete description, all relationships, and detailed metadata.
 */
export const getFullIssue: ToolHandler<GetFullIssueParams> = async (params) => {
  try {
    if (!params?.id) {
      return {
        content: [{ type: "text", text: "❌ Error: Issue ID is required" }],
        isError: true,
      };
    }

    // Validate UUID format
    if (!isValidUUID(params.id)) {
      return {
        content: [{ type: "text", text: "❌ Error: Issue ID must be a valid UUID" }],
        isError: true,
      };
    }

    const client = getLinearClient();
    const { id } = params;

    log.info("Fetching full issue details", { issueId: id });

    const result = await client.query({
      issue: {
        __args: { id },
        // Core issue information
        id: true,
        title: true,
        description: true,
        number: true,
        identifier: true,
        url: true,
        
        // Status and workflow
        priority: true,
        priorityLabel: true,
        estimate: true,
        sortOrder: true,
        
        // Timestamps
        createdAt: true,
        updatedAt: true,
        startedAt: true,
        completedAt: true,
        canceledAt: true,
        dueDate: true,
        
        // Relationships - Team
        team: {
          id: true,
          name: true,
          key: true,
          description: true,
        },
        
        // Relationships - Users
        creator: {
          id: true,
          name: true,
          email: true,
          displayName: true,
        },
        assignee: {
          id: true,
          name: true,
          email: true,
          displayName: true,
        },
        
        // Workflow state
        state: {
          id: true,
          name: true,
          type: true,
          color: true,
          description: true,
        },
        
        // Project association
        project: {
          id: true,
          name: true,
          description: true,
          status: {
            name: true,
            type: true,
          },
          lead: {
            id: true,
            name: true,
            email: true,
          },
        },
        
        // Cycle association
        cycle: {
          id: true,
          name: true,
          number: true,
          startsAt: true,
          endsAt: true,
          team: {
            id: true,
            name: true,
            key: true,
          },
        },
        
        // Project milestone association
        projectMilestone: {
          id: true,
          name: true,
          description: true,
          targetDate: true,
          sortOrder: true,
        },
        
        // Labels
        labels: {
          __args: {},
          nodes: {
            id: true,
            name: true,
            description: true,
            color: true,
          },
        },
        
        // Parent/child relationships
        parent: {
          id: true,
          title: true,
          identifier: true,
          state: {
            name: true,
            type: true,
          },
        },
        
        // Comments and recent comments
        comments: {
          __args: { first: 5 },
          nodes: {
            id: true,
            body: true,
            createdAt: true,
            user: {
              id: true,
              name: true,
              displayName: true,
            },
          },
        },
        
        // Child issues
        children: {
          __args: { first: 10 },
          nodes: {
            id: true,
            identifier: true,
            title: true,
            state: {
              name: true,
              type: true,
            },
          },
        },
        
        // Additional metadata
        branchName: true,
        labelIds: true,
        trashed: true,
      },
    });

    if (!result.issue) {
      return {
        content: [{ type: "text", text: `❌ Error: Issue with ID "${id}" not found` }],
        isError: true,
      };
    }

    const issue = result.issue;

    // Helper function to format dates
    const formatDate = (dateString: string | null | undefined) => {
      if (!dateString) return "Not set";
      return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    };

    // Helper function to get priority emoji
    const getPriorityEmoji = (priority: number) => {
      switch (priority) {
        case 1: return "🔴"; // Urgent
        case 2: return "🟠"; // High
        case 3: return "🟡"; // Normal
        case 4: return "🔵"; // Low
        default: return "⚪"; // No priority
      }
    };

    // Helper function to get state emoji
    const getStateEmoji = (stateType: string) => {
      switch (stateType?.toLowerCase()) {
        case "backlog": return "📋";
        case "unstarted": return "⏸️";
        case "started": return "🚀";
        case "completed": return "✅";
        case "canceled": return "❌";
        default: return "🔄";
      }
    };

    // Build formatted response
    let output = `# ${getStateEmoji(issue.state.type)} ${issue.identifier}: ${issue.title}\n\n`;

    // Basic information
    output += `**URL:** ${issue.url}\n`;
    output += `**Priority:** ${getPriorityEmoji(issue.priority)} ${issue.priorityLabel}`;
    if (issue.estimate) {
      output += ` | **Estimate:** ${issue.estimate} points`;
    }
    output += `\n`;
    output += `**State:** ${issue.state.name} (${issue.state.type})`;
    if (issue.state.description) {
      output += ` - ${issue.state.description}`;
    }
    output += `\n\n`;

    // Team and assignment
    output += `## 👥 Team & Assignment\n`;
    output += `**Team:** ${issue.team.name} (${issue.team.key})`;
    if (issue.team.description) {
      output += ` - ${issue.team.description}`;
    }
    output += `\n`;
    
    if (issue.assignee) {
      output += `**Assignee:** ${issue.assignee.displayName || issue.assignee.name}`;
      if (issue.assignee.email) {
        output += ` (${issue.assignee.email})`;
      }
      output += `\n`;
    } else {
      output += `**Assignee:** Unassigned\n`;
    }

    if (issue.creator) {
      output += `**Creator:** ${issue.creator.displayName || issue.creator.name}`;
      if (issue.creator.email) {
        output += ` (${issue.creator.email})`;
      }
      output += `\n`;
    }
    output += `\n`;

    // Project associations
    if (issue.project || issue.cycle || issue.projectMilestone) {
      output += `## 📋 Project Context\n`;
      
      if (issue.project) {
        output += `**Project:** ${issue.project.name}`;
        if (issue.project.status) {
          output += ` (${issue.project.status.name})`;
        }
        output += `\n`;
        if (issue.project.description) {
          output += `  ${issue.project.description}\n`;
        }
        if (issue.project.lead) {
          output += `  **Lead:** ${issue.project.lead.name}\n`;
        }
      }

      if (issue.cycle) {
        output += `**Cycle:** ${issue.cycle.name}`;
        if (issue.cycle.number) {
          output += ` (#${issue.cycle.number})`;
        }
        output += `\n`;
        if (issue.cycle.startsAt && issue.cycle.endsAt) {
          output += `  **Duration:** ${formatDate(issue.cycle.startsAt)} → ${formatDate(issue.cycle.endsAt)}\n`;
        }
      }

      if (issue.projectMilestone) {
        output += `**Milestone:** ${issue.projectMilestone.name}`;
        if (issue.projectMilestone.targetDate) {
          output += ` (Due: ${formatDate(issue.projectMilestone.targetDate)})`;
        }
        output += `\n`;
        if (issue.projectMilestone.description) {
          output += `  ${issue.projectMilestone.description}\n`;
        }
      }
      output += `\n`;
    }

    // Labels
    if (issue.labels?.nodes && issue.labels.nodes.length > 0) {
      output += `## 🏷️ Labels\n`;
      issue.labels.nodes.forEach(label => {
        output += `- **${label.name}**`;
        if (label.color) {
          output += ` (${label.color})`;
        }
        if (label.description) {
          output += `: ${label.description}`;
        }
        output += `\n`;
      });
      output += `\n`;
    }

    // Timeline
    output += `## ⏰ Timeline\n`;
    output += `**Created:** ${formatDate(issue.createdAt)}\n`;
    output += `**Updated:** ${formatDate(issue.updatedAt)}\n`;
    
    if (issue.startedAt) {
      output += `**Started:** ${formatDate(issue.startedAt)}\n`;
    }
    if (issue.completedAt) {
      output += `**Completed:** ${formatDate(issue.completedAt)}\n`;
    }
    if (issue.canceledAt) {
      output += `**Canceled:** ${formatDate(issue.canceledAt)}\n`;
    }
    if (issue.dueDate) {
      output += `**Due Date:** ${issue.dueDate}\n`;
    }
    output += `\n`;

    // Parent/child relationships
    if (issue.parent || (issue.children?.nodes && issue.children.nodes.length > 0)) {
      output += `## 🔗 Relationships\n`;
      
      if (issue.parent) {
        output += `**Parent:** ${issue.parent.identifier}: ${issue.parent.title} (${issue.parent.state?.name})\n`;
      }
      
      if (issue.children?.nodes && issue.children.nodes.length > 0) {
        output += `**Sub-issues:** ${issue.children.nodes.length} child issue(s)\n`;
        issue.children.nodes.forEach(child => {
          output += `  - ${child.identifier}: ${child.title} (${child.state?.name})\n`;
        });
      }
      output += `\n`;
    }

    // Comments summary
    if (issue.comments?.nodes && issue.comments.nodes.length > 0) {
      output += `## 💬 Comments (${issue.comments.nodes.length} total)\n`;
      
      output += `**Recent comments:**\n`;
      issue.comments.nodes.forEach(comment => {
        const author = comment.user?.displayName || comment.user?.name || "Unknown";
        const date = formatDate(comment.createdAt);
        const body = comment.body.length > 100 
          ? comment.body.substring(0, 100) + "..." 
          : comment.body;
        output += `- **${author}** (${date}): ${body}\n`;
      });
      output += `\n`;
    }

    // Description (the main reason for this tool!)
    output += `## 📝 Description\n`;
    if (issue.description && issue.description.trim()) {
      output += `${issue.description}\n`;
    } else {
      output += `*No description provided*\n`;
    }
    output += `\n`;

    // Additional metadata
    output += `## 🔧 Technical Details\n`;
    output += `**Issue ID:** ${issue.id}\n`;
    output += `**Number:** #${issue.number}\n`;
    if (issue.branchName) {
      output += `**Suggested Branch:** ${issue.branchName}\n`;
    }
    if (issue.trashed) {
      output += `**Status:** 🗑️ In trash\n`;
    }

    log.info("Successfully fetched full issue details", {
      issueId: id,
      title: issue.title,
      descriptionLength: issue.description?.length || 0,
    });

    return {
      content: [{ type: "text", text: output }],
      isError: false,
    };

  } catch (error) {
    log.error("Failed to fetch full issue details", error);

    if (error instanceof Error) {
      if (error.message.includes("401")) {
        return {
          content: [{ type: "text", text: "❌ Error: Unauthorized - check your Linear API key" }],
          isError: true,
        };
      }
      if (error.message.includes("404")) {
        return {
          content: [{ type: "text", text: `❌ Error: Issue with ID "${params?.id}" not found` }],
          isError: true,
        };
      }
      if (error.message.includes("403")) {
        return {
          content: [{ type: "text", text: "❌ Error: Forbidden - insufficient permissions to access this issue" }],
          isError: true,
        };
      }
    }

    return {
      content: [{ type: "text", text: `❌ Error: Failed to fetch issue details: ${error instanceof Error ? error.message : "Unknown error"}` }],
      isError: true,
    };
  }
};
