# Linear Helper MCP Server

A comprehensive Model Context Protocol server that extends Linear's functionality with support for Initiatives, Cycles, Project Milestones, and advanced querying capabilities.

## Quick Start

### Prerequisites
- Bun v1.2.14 or later
- Linear account with API access

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd linear-cli

# Install dependencies
bun install

# Copy environment template
cp .env.example .env
```

### Configuration

1. Get your Linear API key from [Linear Settings](https://linear.app/settings/api)
2. Provide the API key via one of these methods:

**Option 1: Environment Variable (Recommended)**
```bash
# Add to your .env file
LINEAR_API_KEY=your_linear_api_key_here

# Or export in your shell
export LINEAR_API_KEY=your_linear_api_key_here
```

**Option 2: CLI Argument**
```bash
# Use --api-key flag
bun src/server.ts --api-key your_linear_api_key_here

# Or short form -k
bun src/server.ts -k your_linear_api_key_here
```

### Generate GraphQL Client

```bash
# Generate Linear GraphQL client
bun genql --endpoint https://api.linear.app/graphql \
          -H "Authorization: $LINEAR_API_KEY" \
          --output ./generated
```

### Development

```bash
# Start development server (with environment variable)
LINEAR_API_KEY=your_key bun dev

# Start development server (with CLI argument)
bun dev --api-key your_key

# Start MCP server
bun run mcp:stdio

# Start MCP server with CLI API key
bun src/server.ts --api-key your_key

# Generate GraphQL client (with auth)
bun run genql:auth

# Show help
bun src/server.ts --help
```

### TypeScript Development

This project uses TypeScript with strict type checking to ensure code quality and catch errors early.

#### Type Checking Commands

```bash
# Check for type errors (recommended before commits)
tsc --noEmit

# Or use the npm script
bun run type-check

# Build and check types simultaneously
bun run build

# Watch mode with type checking (development)
bun --watch src/server.ts
```

#### Why Type Checking Matters

- **Catch Bugs Early**: TypeScript finds issues before runtime
- **Better IDE Support**: IntelliSense, autocomplete, and refactoring
- **Self-Documenting Code**: Types serve as inline documentation
- **Safer Refactoring**: Confidence when changing code structure

#### Common Type Issues & Solutions

**Problem**: `Property does not exist on type`
```bash
# Fix: Add proper type annotations or optional chaining
result.content[0]?.text  // Safe access
```

**Problem**: `Argument of type 'X' is not assignable to parameter of type 'Y'`
```bash
# Fix: Use type assertions or proper typing
(args as TParams)  // When you know the type
```

**Problem**: `Cannot query field "X" on type "Y"`
```bash
# Fix: Check GraphQL schema and add missing __args
projects: {
  __args: {},  // Required for nested connections
  nodes: { ... }
}
```

#### Development Workflow

1. **Before making changes**: Run `bun run type-check` to check current state
2. **During development**: Use `bun --watch` for live reloading
3. **Before committing**: Always run `bun run type-check` and `bun run build`
4. **CI/CD Integration**: Type checking is part of the build process

#### Type Safety Best Practices

- Use **strict null checks** - always handle `undefined`/`null`
- Prefer **interfaces** over `any` types
- Add **generic constraints** for reusable functions
- Use **optional chaining** (`?.`) for safe property access
- Define **parameter types** for all MCP tool handlers

```typescript
// ✅ Good: Type-safe tool handler
export const getTool: ToolHandler<GetParams> = async (params) => {
  if (!params?.id) return errorResult("Missing ID");
  // ... implementation
};

// ❌ Avoid: Using 'any' types
export const badTool: ToolHandler = async (params: any) => {
  // No type safety
};
```

### Testing Your Setup

You can test your Linear API connection in multiple ways:

#### 1. Direct Health Check (Recommended for Development)

```bash
# Quick health check using npm script (uses env var)
bun run health

# Using CLI flag directly with environment variable
bun src/server.ts --health-check

# Using CLI flag with API key argument  
bun src/server.ts --api-key your_key --health-check

# Short form
bun src/server.ts -k your_key -h

# Using the test script
bun test-health.ts
```

#### 2. Development Testing Scripts

```bash
# Direct tool testing (recommended for development)
bun run dev-test:health        # Test health check functionality
bun run dev-test:initiatives   # Test initiative tools comprehensively

# Or run directly
bun scripts/dev-tests/health.ts
bun scripts/dev-tests/initiatives.ts
```

#### 3. Via MCP Client (Production Usage)

```
# In your MCP client (like Claude)
Use the health_check tool to validate your setup:

✅ Health Check Passed!
Linear API connection successful  
User: Your Name (your.email@example.com)
ID: user_abc123
Server: linear-helper-mcp-server v1.0.0
```

## Features

### 🚀 Extended Linear Integration
- **Initiatives**: Strategic planning and project grouping
- **Cycles**: Sprint planning and time-boxed work management  
- **Project Milestones**: Phase tracking and completion management
- **Advanced Queries**: Cross-entity search and analytics

### 🔧 MCP Protocol Support
- Full Model Context Protocol compliance
- Stdio and HTTP transport support
- Type-safe tool interfaces
- Comprehensive error handling

### 📊 Analytics & Reporting
- Team velocity tracking
- Burndown chart data
- Progress forecasting
- Risk assessment metrics

## Documentation

- [📖 Full Documentation](./docs/README.md)
- [🏗️ Architecture Overview](./docs/architecture/overview.md)
- [🔧 Development Setup](./docs/development/setup.md)
- [📋 API Specification](./docs/api/mcp-specification.md)
- [📅 Implementation Plan](./todos/implementation-plan.md)

## Available MCP Tools

### Health & System
- `health_check` - Validate Linear API connection and server health

### Initiative Management ✨ NEW!
- `list_initiatives` - List all initiatives with filtering by status, search terms, and pagination
- `get_initiative` - Get detailed information about a specific initiative including projects and timeline

#### Initiative Tools Usage Examples

```bash
# List all initiatives
list_initiatives

# Filter initiatives by status  
list_initiatives({ "status": "Active", "limit": 5 })

# Search initiatives
list_initiatives({ "search": "project", "limit": 10 })

# Get detailed initiative information
get_initiative({ "id": "initiative-uuid-here" })
```

### Project Milestone Management ✨ NEW!
- `list_project_milestones` - List project milestones with filtering by project, status, and search terms
- `get_project_milestone` - Get detailed milestone information including associated issues and project details

#### Milestone Tools Usage Examples

```bash
# List all project milestones
list_project_milestones

# Filter milestones by status
list_project_milestones({ "status": "next", "limit": 5 })

# Filter milestones by project
list_project_milestones({ "projectId": "project-uuid-here", "limit": 10 })

# Search milestones
list_project_milestones({ "search": "launch", "limit": 10 })

# Get detailed milestone information
get_project_milestone({ "id": "milestone-uuid-here" })
```

### Team Cycle Management ✨ NEW!
- `list_cycles` - List team cycles with filtering by team, status, and search terms
- `get_cycle` - Get detailed cycle information including associated issues and team details

#### Cycle Tools Usage Examples

```bash
# List all team cycles
list_cycles

# Filter cycles by status
list_cycles({ "status": "active", "limit": 5 })

# Filter cycles by team
list_cycles({ "teamId": "team-uuid-here", "limit": 10 })

# List previous cycles
list_cycles({ "status": "previous", "limit": 5 })

# Search cycles
list_cycles({ "search": "sprint", "limit": 10 })

# Get detailed cycle information
get_cycle({ "id": "cycle-uuid-here" })
```

### Issue Management ✨ NEW!
- `get_full_issue` - Get complete issue information including full description and all metadata

#### Issue Tools Usage Examples

```bash
# Get complete issue details with full description
get_full_issue({ "id": "issue-uuid-here" })
```

*Coming soon: Advanced querying and mutation operations*

## Development Status

**Current Phase**: Phase 6 - Enhanced Issue Management Tools ✨  
**Progress**: 8 tools implemented (health_check, list_initiatives, get_initiative, list_cycles, get_cycle, list_project_milestones, get_project_milestone, get_full_issue)  
**Completion**: 100% of Phase 1-5.1 features complete + Enhanced Issue Tools
**Next Milestone**: Initiative Mutation Operations OR Advanced Analytics Tools

### Recent Achievements ✨
- ✅ **NEW: Complete Issue Management**: Full issue details with untruncated descriptions 
- ✅ **Enhanced Initiative Querying**: Full parameter support with filtering and search
- ✅ **Type-Safe MCP Framework**: Generic parameter handling with TypeScript
- ✅ **Production-Ready Error Handling**: Comprehensive validation and error messages
- ✅ **GraphQL Schema Compliance**: Proper Linear API integration

See [Implementation Plan](./todos/implementation-plan.md) for detailed progress tracking.

## Contributing

1. Review the [Implementation Plan](./todos/implementation-plan.md)
2. Check the [Development Setup Guide](./docs/development/setup.md)
3. Follow the task management workflow in [todos/README.md](./todos/README.md)

## License

[License information]

---

*Built with [Bun](https://bun.sh) and the [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)*
