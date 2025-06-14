/**
 * Type definitions for Linear Helper MCP Server
 *
 * This file contains core type definitions that will be used throughout
 * the Linear Helper MCP Server implementation. These types map Linear's GraphQL
 * schema to our MCP tool interfaces.
 */

// Environment Configuration
export interface ServerConfig {
  readonly name: string;
  readonly version: string;
  readonly description: string;
}

export interface EnvironmentConfig {
  readonly LINEAR_API_KEY: string;
  readonly LINEAR_API_URL?: string;
  readonly LOG_LEVEL?: "debug" | "info" | "warn" | "error";
  readonly NODE_ENV?: "development" | "production" | "test";
}

// MCP Tool Response Types
export interface ToolResult {
  content: ToolContent[];
  isError?: boolean;
}

export interface ToolContent {
  type: "text" | "resource";
  text?: string;
  resource?: string;
}

export interface ToolError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

// Linear Entity Status Enums (from GraphQL schema)
export enum InitiativeStatus {
  PLANNED = "planned",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export enum CycleStatus {
  UPCOMING = "upcoming",
  ACTIVE = "active",
  COMPLETED = "completed",
}

export enum MilestoneStatus {
  PLANNED = "planned",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export enum ProjectStatus {
  BACKLOG = "backlog",
  PLANNED = "planned",
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
  ON_HOLD = "on_hold",
}

// Base Entity Interfaces
export interface BaseEntity {
  readonly id: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export interface NamedEntity extends BaseEntity {
  readonly name: string;
  readonly description?: string;
}

// Summary Types (for relationships)
export interface UserSummary {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly avatarUrl?: string;
}

export interface TeamSummary {
  readonly id: string;
  readonly name: string;
  readonly key: string;
  readonly memberCount: number;
}

// Placeholder interfaces for future implementation
// These will be fully implemented in Phase 3-5

export interface InitiativeResult extends NamedEntity {
  readonly status: InitiativeStatus;
  readonly targetDate?: string;
  readonly progress: number;
  readonly projectCount: number;
}

export interface CycleResult extends NamedEntity {
  readonly number: number;
  readonly status: CycleStatus;
  readonly startsAt: string;
  readonly endsAt: string;
  readonly progress: number;
  readonly issueCount: number;
  readonly completedIssueCount: number;
  readonly team: TeamSummary;
}

export interface MilestoneResult extends NamedEntity {
  readonly status: MilestoneStatus;
  readonly targetDate?: string;
  readonly progress: number;
  readonly issueCount: number;
  readonly completedIssueCount: number;
  readonly sortOrder: number;
}

// Utility Types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// Re-export generated types when available
// TODO: Import and re-export from generated/types.ts in Phase 2
