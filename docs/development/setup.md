# Development Setup Guide

This guide helps developers set up the Linear Helper MCP Server for local development.

## Prerequisites

### Required Software
- **Bun**: v1.2.14 or later
- **Git**: For version control
- **Linear Account**: With API access

### Development Tools (Recommended)
- **VS Code**: With Bun and TypeScript extensions
- **Linear CLI**: For testing Linear API integration
- **GraphQL Playground**: For API exploration

## Installation Steps

### 1. Clone and Setup Project
```bash
git clone <repository-url>
cd linear-cli

# Install dependencies
bun install

# Copy environment template
cp .env.example .env
```

### 2. Configure Environment Variables
Create `.env` file with the following variables:

```bash
# Linear API Configuration
LINEAR_API_KEY=your_linear_api_key_here
LINEAR_API_URL=https://api.linear.app/graphql

# MCP Server Configuration  
MCP_SERVER_NAME=linear-helper-mcp-server
MCP_SERVER_VERSION=1.0.0
LOG_LEVEL=debug

# Development Settings
NODE_ENV=development
PORT=3000

# Optional: Webhook Configuration
WEBHOOK_SECRET=your_webhook_secret
WEBHOOK_URL=https://your-domain.com/webhooks
```

### 3. Generate Linear API Key
1. Go to [Linear Settings](https://linear.app/settings/api)
2. Navigate to "API" section
3. Click "Create API Key"
4. Give it a descriptive name (e.g., "MCP Server Development")
5. Select appropriate permissions:
   - Read access to all resources
   - Write access for issue management
   - Admin access if needed for team management
6. Copy the generated key to your `.env` file

### 4. Verify Linear API Access
```bash
# Test API connectivity
bun run test:api

# List your accessible teams
bun run dev:teams

# Verify GraphQL schema access
bun run dev:schema
```

## Project Structure

```
linear-cli/
├── docs/                     # Documentation
│   ├── architecture/         # System design docs
│   ├── api/                  # API specifications
│   ├── features/             # Feature documentation
│   └── development/          # Development guides
├── todos/                    # Implementation tracking
├── src/                      # Source code (to be created)
│   ├── server.ts            # Main MCP server
│   ├── tools/               # MCP tool implementations
│   ├── types/               # TypeScript definitions
│   ├── utils/               # Shared utilities
│   └── __tests__/           # Test files
├── generated/               # GenQL generated files
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

## Development Commands

### Core Commands
```bash
# Start development server with hot reload
bun dev

# Build for production
bun run build

# Run tests
bun test

# Run tests with coverage
bun test --coverage

# Lint code
bun run lint

# Format code
bun run format
```

### Linear API Commands
```bash
# Regenerate GraphQL schema
bun run genql

# Test Linear API connection  
bun run test:linear

# List available Linear resources
bun run debug:resources

# Validate GraphQL queries
bun run validate:queries
```

### MCP Development Commands
```bash
# Start MCP server in stdio mode
bun run mcp:stdio

# Start MCP server with HTTP transport
bun run mcp:http

# Test MCP server with sample client
bun run mcp:test

# Validate MCP protocol compliance
bun run mcp:validate
```

## IDE Configuration

### VS Code Settings
Create `.vscode/settings.json`:

```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "files.exclude": {
    "**/node_modules": true,
    "**/.git": true,
    "**/generated": false
  }
}
```

### VS Code Extensions
Recommended extensions for development:

```json
{
  "recommendations": [
    "oven.bun-vscode",
    "ms-vscode.vscode-typescript-next",
    "graphql.vscode-graphql"
  ]
}
```

**Note**: Following KISS principle, we haven't added linting/formatting tools yet. Can be added later when needed.

## Testing Setup

### Test Environment
```bash
# Create test configuration
cp .env.example .env.test

# Set test-specific variables
LINEAR_API_KEY=test_api_key_with_limited_permissions
NODE_ENV=test
LOG_LEVEL=warn
```

### Running Tests
```bash
# Run all tests
bun test

# Run specific test file
bun test src/tools/initiatives.test.ts

# Run tests in watch mode
bun test --watch

# Run integration tests
bun test --grep "integration"
```

## Debugging

### Local Debugging
```bash
# Start server with debugging
bun --inspect dev

# Debug specific tool
DEBUG=linear-mcp:tools:initiatives bun dev

# Enable GraphQL query logging
DEBUG=linear-mcp:graphql bun dev
```

### MCP Client Testing
```bash
# Test with stdio transport
echo '{"jsonrpc":"2.0","method":"tools/list","id":1}' | bun run mcp:stdio

# Test specific tool
echo '{"jsonrpc":"2.0","method":"tools/call","params":{"name":"list_initiatives"},"id":1}' | bun run mcp:stdio
```

## Common Issues & Solutions

### Issue: Linear API Key Invalid
```bash
# Check API key permissions
curl -H "Authorization: $LINEAR_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"query":"{ viewer { id name } }"}' \
     https://api.linear.app/graphql
```

### Issue: GraphQL Schema Out of Date
```bash
# Regenerate schema
bun run genql:auth
```

### Issue: MCP Protocol Errors
```bash
# Check MCP message format
DEBUG=mcp:* bun run mcp:stdio
```

### Issue: TypeScript Compilation Errors
```bash
# Clean build artifacts
rm -rf dist/

# Check TypeScript configuration
bun x tsc --noEmit
```

## Environment-Specific Configuration

### Development Environment
- Enable detailed logging
- Use test Linear workspace if available
- Enable hot reload and fast refresh
- Relaxed rate limiting checks

### Production Environment
- Minimal logging (warn/error only)
- Production Linear workspace
- Optimized build with tree shaking
- Strict rate limiting compliance
- Error reporting integration

## Performance Considerations

### Local Development
- Use smaller dataset limits for faster responses
- Enable GraphQL query caching
- Mock expensive operations during testing
- Use development database for caching

### Optimization Tips
- Batch multiple GraphQL queries when possible
- Implement intelligent caching with appropriate TTL
- Use DataLoader pattern for N+1 query prevention
- Monitor memory usage during development

## Next Steps

1. **Review Documentation**: Read through `/docs` folder
2. **Check Implementation Plan**: See `/todos/implementation-plan.md`
3. **Set Up Environment**: Configure `.env` file
4. **Verify Setup**: Run test commands
5. **Start Development**: Begin with Phase 1 tasks

## Getting Help

- **Documentation**: Check `/docs` folder for detailed guides
- **Issues**: Review `/todos` folder for known issues
- **Linear API**: [Linear Developer Docs](https://developers.linear.app/)
- **MCP Protocol**: [MCP Specification](https://modelcontextprotocol.io/)

## Last Updated
2025-06-14 by Danh Tran
