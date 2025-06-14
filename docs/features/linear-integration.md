# Linear API Integration

This document outlines the integration strategy between the MCP server and Linear's GraphQL API.

## Linear GraphQL API Overview

Linear provides a comprehensive GraphQL API that serves as the foundation for all Linear applications. Our MCP server leverages this API to provide extended functionality.

### Key Characteristics:
- **Endpoint**: `https://api.linear.app/graphql`
- **Schema**: Strongly typed with full introspection support
- **Authentication**: Personal API keys and OAuth2
- **Rate Limiting**: Complex query-based limits
- **Real-time**: Webhook support for live updates

## Missing MCP Functionality Analysis

### Current Linear MCP Tools
Based on the available Linear MCP tools in the system, we have:

```typescript
// Available tools (from MCP inspection)
- list_issues()
- get_issue(id)
- list_comments(issueId)
- list_projects()
- get_project(query)
- list_teams()
- get_team(query)
- list_users()
- get_user(query)
- list_documents()
- get_document(id)
- list_issue_statuses(teamId)
- get_issue_status(query, teamId)
- list_issue_labels(teamId)
- list_my_issues()
```

### Missing Critical Functionality

#### 1. Initiatives (Strategic Planning)
Linear's Initiatives are high-level strategic efforts that group related projects.

```graphql
# Key Initiative Queries
query ListInitiatives {
  initiatives {
    nodes {
      id, name, description, status, targetDate
      projects { nodes { id, name, progress } }
      updates { nodes { id, body, createdAt } }
    }
  }
}

query GetInitiative($id: ID!) {
  initiative(id: $id) {
    id, name, description, status, targetDate, progress
    projects { nodes { ... } }
    relations { nodes { ... } }
    updates { nodes { ... } }
  }
}
```

#### 2. Cycles (Sprint Planning)
Cycles are time-boxed work periods similar to sprints in agile development.

```graphql
# Key Cycle Queries
query ListTeamCycles($teamId: ID!) {
  team(id: $teamId) {
    cycles {
      nodes {
        id, name, number, startsAt, endsAt
        issues { nodes { id, title, status } }
        uncompletedIssuesUponClose { nodes { ... } }
      }
    }
  }
}

query GetCycle($id: ID!) {
  cycle(id: $id) {
    id, name, number, startsAt, endsAt, progress
    team { id, name }
    issues { nodes { ... } }
    uncompletedIssuesUponClose { nodes { ... } }
  }
}
```

#### 3. Project Milestones
Milestones represent phases or significant checkpoints within projects.

```graphql
# Key Milestone Queries
query ListProjectMilestones($projectId: ID!) {
  project(id: $projectId) {
    projectMilestones {
      nodes {
        id, name, description, targetDate, status
        progress, sortOrder
        issues { nodes { id, title, status } }
      }
    }
  }
}

query GetProjectMilestone($id: ID!) {
  projectMilestone(id: $id) {
    id, name, description, targetDate, status, progress
    project { id, name }
    issues { nodes { ... } }
    progressHistory
  }
}
```

## GraphQL Query Patterns

### 1. Pagination Strategy
Linear uses cursor-based pagination for consistent results:

```graphql
query PaginatedQuery($after: String, $first: Int = 50) {
  initiatives(after: $after, first: $first) {
    pageInfo { hasNextPage, endCursor }
    nodes { id, name }
  }
}
```

### 2. Filtering Patterns
Most entities support rich filtering options:

```graphql
query FilteredInitiatives($filter: InitiativeFilter) {
  initiatives(filter: $filter) {
    nodes {
      id, name, status, targetDate
      projects(filter: { status: { in: [inProgress, planned] } }) {
        nodes { id, name, progress }
      }
    }
  }
}
```

### 3. Nested Data Loading
Efficiently load related data in single queries:

```graphql
query InitiativeWithProjects($id: ID!) {
  initiative(id: $id) {
    id, name, description, status
    projects {
      nodes {
        id, name, progress, targetDate
        projectMilestones {
          nodes { id, name, status, progress }
        }
        issues(filter: { status: { type: { in: [unstarted, started] } } }) {
          nodes { id, title, priority }
        }
      }
    }
  }
}
```

## Authentication Implementation

### API Key Authentication
```typescript
const client = createClient({
  url: 'https://api.linear.app/graphql',
  headers: {
    'Authorization': process.env.LINEAR_API_KEY,
    'Content-Type': 'application/json'
  }
});
```

### OAuth2 Integration (Future)
```typescript
interface OAuth2Config {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  scopes: string[];
}

// OAuth2 flow implementation for multi-user MCP servers
// Note: OAuth2 tokens DO use Bearer prefix, unlike API keys
const oauthClient = createClient({
  url: 'https://api.linear.app/graphql',
  headers: {
    'Authorization': `Bearer ${oauthAccessToken}`,
    'Content-Type': 'application/json'
  }
});
```

## Error Handling Strategy

### Linear API Error Types
```typescript
enum LinearErrorType {
  AUTHENTICATION_ERROR = 'AuthenticationError',
  VALIDATION_ERROR = 'UserError', 
  RATE_LIMIT_ERROR = 'RateLimitError',
  NOT_FOUND_ERROR = 'NotFoundError',
  INTERNAL_ERROR = 'InternalError'
}

interface LinearAPIError {
  message: string;
  extensions?: {
    code: string;
    exception?: any;
  };
  path?: string[];
}
```

### MCP Error Mapping
```typescript
function mapLinearErrorToMCP(error: LinearAPIError): ToolError {
  switch (error.extensions?.code) {
    case 'UNAUTHENTICATED':
      return { code: 'UNAUTHORIZED', message: 'Invalid API token' };
    case 'RATE_LIMITED':
      return { code: 'RATE_LIMITED', message: 'API rate limit exceeded' };
    case 'NOT_FOUND':
      return { code: 'NOT_FOUND', message: 'Resource not found' };
    default:
      return { code: 'INTERNAL_ERROR', message: error.message };
  }
}
```

## Rate Limiting & Performance

### Rate Limit Constraints
- **API Key**: 1,500 requests/hour per user
- **OAuth**: 500 requests/hour per user/app
- **Complexity**: Query complexity scoring system

### Optimization Strategies
```typescript
// Request batching
const batchedQueries = [
  { query: GET_INITIATIVE, variables: { id: 'init1' } },
  { query: GET_INITIATIVE, variables: { id: 'init2' } }
];

// Response caching with TTL
const cache = new Map<string, { data: any, expiry: number }>();

// Query complexity optimization
const optimizedQuery = gql`
  query OptimizedInitiative($id: ID!) {
    initiative(id: $id) {
      id, name, status  # Only essential fields
      projects(first: 10) {  # Limit nested queries
        nodes { id, name }
      }
    }
  }
`;
```

## Data Transformation Patterns

### GraphQL to MCP Format
```typescript
function transformInitiative(gqlInitiative: GQLInitiative): InitiativeResult {
  return {
    id: gqlInitiative.id,
    name: gqlInitiative.name,
    description: gqlInitiative.description || undefined,
    status: gqlInitiative.status.toLowerCase(),
    targetDate: gqlInitiative.targetDate,
    progress: Math.round(gqlInitiative.progress * 100),
    projectCount: gqlInitiative.projects.nodes.length,
    createdAt: gqlInitiative.createdAt,
    updatedAt: gqlInitiative.updatedAt
  };
}
```

### Null Safety & Optional Fields
```typescript
function safeTransform<T, U>(
  data: T | null | undefined, 
  transformer: (data: T) => U
): U | undefined {
  return data ? transformer(data) : undefined;
}
```

## Testing Strategy

### GraphQL Query Testing
```typescript
describe('Linear GraphQL Integration', () => {
  test('should fetch initiatives with proper pagination', async () => {
    const result = await client.query({
      initiatives: {
        nodes: { id: true, name: true },
        pageInfo: { hasNextPage: true, endCursor: true }
      }
    });
    
    expect(result.initiatives.nodes).toBeDefined();
    expect(result.initiatives.pageInfo).toBeDefined();
  });
});
```

### Mock Data for Development
```typescript
const mockInitiative: InitiativeResult = {
  id: 'init_123',
  name: 'Q2 Product Launch',
  status: 'in_progress',
  progress: 65,
  projectCount: 3,
  createdAt: '2025-01-01T00:00:00Z',
  updatedAt: '2025-06-14T12:00:00Z'
};
```

## Security Considerations

### API Key Protection
- Store in environment variables only
- Never log or expose in error messages  
- Rotate keys regularly
- Use least-privilege access

### Input Validation
```typescript
const CreateInitiativeSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().max(2000).optional(),
  targetDate: z.string().datetime().optional(),
  teamIds: z.array(z.string().uuid()).optional()
});
```

### Output Sanitization
```typescript
function sanitizeForOutput(data: any): any {
  // Remove sensitive fields
  // Validate data structure
  // Apply rate limiting info
  return cleanData;
}
```

## Migration Strategy

### Backward Compatibility
- Maintain existing MCP tool interfaces
- Add new tools without breaking changes
- Provide migration guides for enhanced features

### Incremental Rollout
1. Add new Initiative tools first
2. Implement Cycle management
3. Add Milestone functionality
4. Enhance existing project tools
5. Add advanced analytics

## Last Updated
2025-06-14 by Danh Tran
