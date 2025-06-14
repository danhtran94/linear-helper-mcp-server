# MCP Tools Specification

This document defines all Model Context Protocol tools provided by the Linear Helper MCP Server.

## Initiative Management Tools

### `list_initiatives`
List all initiatives with optional filtering.

```typescript
interface ListInitiativesParams {
  teamId?: string;           // Filter by team
  status?: InitiativeStatus; // planned | in_progress | completed | cancelled
  limit?: number;            // Default: 50, Max: 100
  after?: string;            // Pagination cursor
  query?: string;            // Search query
}

interface InitiativeResult {
  id: string;
  name: string;
  description?: string;
  status: InitiativeStatus;
  targetDate?: string;
  progress: number;          // 0-100 percentage
  projectCount: number;
  createdAt: string;
  updatedAt: string;
}
```

### `get_initiative`
Get detailed information about a specific initiative.

```typescript
interface GetInitiativeParams {
  id: string;                // Initiative ID
}

interface InitiativeDetails extends InitiativeResult {
  projects: ProjectSummary[];
  updates: InitiativeUpdate[];
  relations: InitiativeRelation[];
}
```

### `create_initiative`
Create a new initiative.

```typescript
interface CreateInitiativeParams {
  name: string;
  description?: string;
  targetDate?: string;       // ISO date string
  teamIds?: string[];        // Associated teams
}
```

### `update_initiative`
Update an existing initiative.

```typescript
interface UpdateInitiativeParams {
  id: string;
  name?: string;
  description?: string;
  status?: InitiativeStatus;
  targetDate?: string;
}
```

## Cycle Management Tools

### `list_cycles`
List cycles for a team with optional filtering.

```typescript
interface ListCyclesParams {
  teamId: string;            // Required
  status?: CycleStatus;      // upcoming | active | completed
  limit?: number;            // Default: 50
  includeArchived?: boolean; // Default: false
}

interface CycleResult {
  id: string;
  name: string;
  number: number;
  status: CycleStatus;
  startsAt: string;
  endsAt: string;
  progress: number;
  issueCount: number;
  completedIssueCount: number;
  team: TeamSummary;
}
```

### `get_cycle`
Get detailed information about a specific cycle.

```typescript
interface GetCycleParams {
  id: string;                // Cycle ID
}

interface CycleDetails extends CycleResult {
  issues: IssueSummary[];
  uncompletedIssuesUponClose: IssueSummary[];
  description?: string;
}
```

### `list_cycle_issues`
List issues in a specific cycle.

```typescript
interface ListCycleIssuesParams {
  cycleId: string;
  status?: IssueStatus;
  assigneeId?: string;
  limit?: number;
}
```

## Project Milestone Tools

### `list_project_milestones`
List milestones for a project.

```typescript
interface ListProjectMilestonesParams {
  projectId: string;         // Required
  status?: MilestoneStatus;  // planned | in_progress | completed
  limit?: number;
}

interface MilestoneResult {
  id: string;
  name: string;
  description?: string;
  status: MilestoneStatus;
  targetDate?: string;
  progress: number;
  issueCount: number;
  completedIssueCount: number;
  sortOrder: number;
  project: ProjectSummary;
}
```

### `get_project_milestone`
Get detailed milestone information.

```typescript
interface GetProjectMilestoneParams {
  id: string;                // Milestone ID
}

interface MilestoneDetails extends MilestoneResult {
  issues: IssueSummary[];
  progressHistory: ProgressHistoryEntry[];
}
```

### `create_project_milestone`
Create a new project milestone.

```typescript
interface CreateProjectMilestoneParams {
  projectId: string;
  name: string;
  description?: string;
  targetDate?: string;
  sortOrder?: number;
}
```

### `update_project_milestone`
Update an existing project milestone.

```typescript
interface UpdateProjectMilestoneParams {
  id: string;
  name?: string;
  description?: string;
  targetDate?: string;
  sortOrder?: number;
}
```

### `delete_project_milestone`
Delete a project milestone.

```typescript
interface DeleteProjectMilestoneParams {
  id: string;
}
```

## Enhanced Project Tools

### `list_projects_advanced`
Enhanced project listing with complex filtering.

```typescript
interface ListProjectsAdvancedParams {
  teamIds?: string[];
  initiativeId?: string;
  status?: ProjectStatus[];
  targetDateBefore?: string;
  targetDateAfter?: string;
  hasOverdueMilestones?: boolean;
  completionPercentageMin?: number;
  completionPercentageMax?: number;
  limit?: number;
  orderBy?: 'name' | 'targetDate' | 'progress' | 'createdAt';
  orderDirection?: 'asc' | 'desc';
}
```

### `get_project_timeline`
Get project timeline with milestones and key dates.

```typescript
interface GetProjectTimelineParams {
  projectId: string;
  includeIssues?: boolean;   // Include issue timeline
}

interface ProjectTimeline {
  project: ProjectDetails;
  milestones: TimelineMilestone[];
  keyDates: TimelineEvent[];
  issues?: TimelineIssue[];
}
```

## Advanced Query Tools

### `search_across_entities`
Search across multiple Linear entity types.

```typescript
interface SearchAcrossEntitiesParams {
  query: string;
  entityTypes?: ('issue' | 'project' | 'initiative' | 'milestone')[];
  teamIds?: string[];
  createdAfter?: string;
  limit?: number;
}

interface SearchResult {
  entity: 'issue' | 'project' | 'initiative' | 'milestone';
  id: string;
  title: string;
  description?: string;
  url: string;
  relevanceScore: number;
  matchedFields: string[];
}
```

### `get_team_metrics`
Get comprehensive team metrics and KPIs.

```typescript
interface GetTeamMetricsParams {
  teamId: string;
  period?: 'week' | 'month' | 'quarter'; // Default: month
  includeVelocity?: boolean;
  includeCycleMetrics?: boolean;
}

interface TeamMetrics {
  issueMetrics: IssueMetrics;
  cycleMetrics?: CycleMetrics;
  velocityTrend?: VelocityData[];
  memberProductivity: MemberProductivity[];
}
```

## Bulk Operations

### `bulk_update_issues`
Update multiple issues at once.

```typescript
interface BulkUpdateIssuesParams {
  issueIds: string[];
  updates: {
    status?: string;
    assigneeId?: string;
    priority?: number;
    projectId?: string;
    cycleId?: string;
    projectMilestoneId?: string;
  };
}
```

## Error Handling

All tools return standardized error responses:

```typescript
interface ToolError {
  code: string;              // INVALID_INPUT, NOT_FOUND, RATE_LIMITED, etc.
  message: string;
  details?: Record<string, any>;
}
```

Common error codes:
- `INVALID_INPUT`: Invalid parameters provided
- `NOT_FOUND`: Requested entity not found
- `UNAUTHORIZED`: Invalid or missing authentication
- `RATE_LIMITED`: API rate limit exceeded
- `INTERNAL_ERROR`: Unexpected server error

## Rate Limiting

All tools respect Linear API rate limits:
- API key authentication: 1,500 requests/hour per user
- OAuth authentication: 500 requests/hour per user/app
- Complexity-based limits also apply

## Last Updated
2025-06-14 by Danh Tran
