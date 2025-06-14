# Development Scripts

This directory contains development and testing scripts for the Linear Helper MCP Server project.

## Available Scripts

### Health Check

**File**: `dev-tests/health.ts`

Test the health check functionality directly without starting the full MCP server.

```bash
# Run health check test
bun scripts/dev-tests/health.ts
```

This script:
- Initializes the Linear GraphQL client
- Runs the health check tool
- Validates Linear API connection
- Returns clear pass/fail status

### Initiative Tools Testing

**File**: `dev-tests/initiatives.ts`

Comprehensive testing of initiative management tools with various parameter combinations.

```bash
# Run initiative tools test
bun scripts/dev-tests/initiatives.ts
```

This script tests:
- `list_initiatives` with no parameters
- `list_initiatives` with status filtering
- `list_initiatives` with search functionality
- `get_initiative` with invalid ID (validation test)
- `get_initiative` with missing parameters (error handling test)

## Usage

These scripts are meant for:
- **Development Testing**: Quick validation of tool functionality during development
- **Debugging**: Isolate and test specific tools without the full MCP server
- **CI/CD**: Automated testing of core functionality
- **Documentation**: Examples of how to use the tools programmatically

## Prerequisites

All scripts require:
- Valid `LINEAR_API_KEY` environment variable
- Bun runtime
- Project dependencies installed (`bun install`)

## Adding New Scripts

When adding new development scripts:
1. Place them in appropriate subdirectories (e.g., `dev-tests/`, `tools/`, `benchmarks/`)
2. Use proper imports relative to project root (`../../src/...`)
3. Include proper error handling and clear output
4. Add initialization code for Linear client if needed
5. Update this README with usage instructions

## Best Practices

- **Clear Output**: Use emojis and formatting for easy visual parsing
- **Error Handling**: Always wrap in try-catch and provide meaningful error messages
- **Initialization**: Include all necessary setup (config, client initialization)
- **Documentation**: Include comments explaining what each script tests
- **Exit Codes**: Use proper exit codes (0 for success, 1 for failure)
