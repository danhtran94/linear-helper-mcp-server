# Linear Helper MCP Server Documentation

This directory contains design documents and implementation guides for the Linear MCP (Model Context Protocol) server project.

## Project Overview

Linear Helper MCP Server extends the existing Linear MCP tools to provide comprehensive access to Linear's full feature set, including Initiatives, Cycles, Project Milestones, and advanced querying capabilities through the Model Context Protocol.

## Documentation Structure

### Architecture
- [System Overview](./architecture/overview.md) - High-level system design and MCP integration patterns
- [Data Models](./architecture/data-models.md) - Linear GraphQL schema mapping to MCP tools
- [Authentication](./architecture/authentication.md) - API key and OAuth2 integration

### API Design
- [MCP Specification](./api/mcp-specification.md) - MCP server tools and resources specification
- [Linear Integration](./api/linear-integration.md) - GraphQL API integration patterns
- [Error Handling](./api/error-handling.md) - Error management and validation strategies

### Features
- [Initiatives Management](./features/initiatives.md) - Strategic project grouping and tracking
- [Cycles Planning](./features/cycles.md) - Time-boxed work period management
- [Project Milestones](./features/milestones.md) - Project phase tracking and completion
- [Advanced Querying](./features/querying.md) - Complex filtering and search capabilities

### Development
- [Setup Guide](./development/setup.md) - Local development environment setup
- [Testing Strategy](./development/testing.md) - Unit and integration testing approach
- [Deployment](./development/deployment.md) - MCP server deployment and configuration

## Getting Started

1. Review the [System Overview](./architecture/overview.md) to understand the overall architecture
2. Check the [Setup Guide](./development/setup.md) for development environment configuration
3. Explore the [MCP Specification](./api/mcp-specification.md) for available tools and resources
4. See the [Implementation Plan](../todos/implementation-plan.md) for current development status

## Conventions

- Use TypeScript for all code examples and type definitions
- Follow MCP protocol specifications and best practices
- Maintain compatibility with existing Linear MCP tools
- Implement KISS and DRY principles throughout
- Document all public APIs and tool interfaces

## Related Resources

- [Linear API Documentation](https://developers.linear.app/)
- [Model Context Protocol Specification](https://modelcontextprotocol.io/)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [Task Management Guide](../todos/README.md)

## Last Updated
2025-06-14 by Danh Tran
