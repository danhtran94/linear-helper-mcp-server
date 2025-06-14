# System Architecture Overview

## High-Level Architecture

The Linear Helper MCP Server is built as a Model Context Protocol server that extends Linear's functionality through GraphQL API integration. It provides comprehensive access to Linear's project management features that are missing from current MCP implementations.

```typescript
// System Architecture
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   MCP Client    │◄──►│  Linear MCP      │◄──►│   Linear API    │
│   (Claude/AI)   │    │     Server       │    │   (GraphQL)     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                              │
                              ▼
                       ┌──────────────────┐
                       │   Generated      │
                       │   GraphQL        │
                       │   Client         │
                       └──────────────────┘
```

## Core Components

### 1. MCP Server Layer
- **Transport**: StdioServerTransport for local development, StreamableHTTPServerTransport for remote access
- **Tools**: Initiative, Cycle, Milestone, Project, and Issue management operations
- **Resources**: Dynamic resource access for Linear entities
- **Authentication**: Linear API key (direct header, no "Bearer" prefix) and OAuth2 support (uses "Bearer" prefix)

### 2. Linear Integration Layer
- **GraphQL Client**: Generated client using GenQL for type-safe API access
- **Data Mapping**: Transform Linear GraphQL responses to MCP protocol format
- **Caching**: Intelligent caching for performance optimization

### 3. Tool Implementation
```typescript
interface MCPTool {
  name: string;
  description: string;
  inputSchema: JSONSchema;
  handler: (params: any) => Promise<ToolResult>;
}

// Example tool structure
const listInitiatives: MCPTool = {
  name: "list_initiatives",
  description: "List all initiatives with optional filtering",
  inputSchema: {
    type: "object",
    properties: {
      teamId: { type: "string" },
      status: { type: "string" },
      limit: { type: "number", default: 50 }
    }
  },
  handler: async (params) => { /* implementation */ }
};
```

## Design Principles

### 1. KISS (Keep It Simple, Stupid)
- Single responsibility for each tool
- Clear, descriptive tool names and descriptions
- Minimal abstraction layers
- Direct GraphQL to MCP mapping where possible

### 2. DRY (Don't Repeat Yourself)
- Shared utility functions for common operations
- Reusable GraphQL query fragments
- Common error handling patterns
- Centralized authentication management

### 3. Type Safety
- Full TypeScript integration with Linear's GraphQL schema
- Runtime validation using Zod schemas
- Compile-time guarantees for MCP tool interfaces

## Data Flow

1. **Client Request**: MCP client (Claude) sends tool execution request
2. **Validation**: Server validates input parameters against schema
3. **Authentication**: Verify Linear API credentials
4. **GraphQL Query**: Execute typed GraphQL operation against Linear API
5. **Data Transform**: Convert GraphQL response to MCP format
6. **Response**: Return formatted result to MCP client

## Security Considerations

- API keys stored securely (environment variables)
- Input validation and sanitization
- Rate limiting compliance with Linear API limits
- Error message sanitization to prevent information leakage

## Performance Strategy

- Connection pooling for GraphQL requests
- Intelligent caching with TTL for frequently accessed data
- Batch operations where supported by Linear API
- Streaming responses for large datasets

## Extensibility

The architecture supports easy extension for:
- New Linear API features as they're released
- Custom business logic and workflows
- Integration with other project management tools
- Advanced reporting and analytics capabilities

## Technology Stack

- **Runtime**: Bun (JavaScript runtime)
- **Language**: TypeScript
- **MCP SDK**: @modelcontextprotocol/sdk
- **GraphQL**: GenQL generated client
- **Validation**: Zod schemas

## Next Steps

See [Implementation Plan](../../todos/implementation-plan.md) for detailed development roadmap and current progress.

## Last Updated
2025-06-14 by Danh Tran
