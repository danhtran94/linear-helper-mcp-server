# CLI API Key Authentication Implementation

## 🎯 **Objective**
Implement simple CLI argument support for Linear API key authentication and set up authenticated GraphQL client integration.

## ✅ **Implementation Summary**

### **1. CLI Argument Support**

#### **New CLI Arguments**:
```bash
--api-key, -k <key>    # Linear API key (overrides environment variable)
--health-check, -h     # Run health check and exit  
--help                 # Show help message
```

#### **Usage Examples**:
```bash
# Help
bun src/server.ts --help

# Health check with env var
LINEAR_API_KEY=your_key bun src/server.ts --health-check

# Health check with CLI arg
bun src/server.ts --api-key your_key --health-check

# Short form
bun src/server.ts -k your_key -h

# Start server with CLI key
bun src/server.ts --api-key your_key
```

### **2. Enhanced Configuration System**

#### **New Configuration Module** (`src/config/server.ts`):
- **CLI Parsing**: `parseCliArgs()` function for argument parsing
- **Flexible Config**: `getConfig(cliArgs)` with CLI override support
- **Better Validation**: Enhanced error messages with multiple options
- **Help System**: Comprehensive `showHelp()` with examples

#### **Configuration Priority**:
1. CLI argument (`--api-key`)
2. Environment variable (`LINEAR_API_KEY`)
3. Error with helpful instructions

### **3. GraphQL Client Authentication**

#### **New GraphQL Client Module** (`src/clients/linear.ts`):
- **Authenticated Client**: Uses generated GenQL client with auth headers
- **Connection Testing**: `testLinearConnection()` for health checks
- **Error Handling**: Specific error types (401, 403, 429, etc.)
- **Type Safety**: Full TypeScript integration with Linear schema

#### **Authentication Headers**:
```typescript
{
  Authorization: apiKey,        // No "Bearer" prefix for Linear API
  "Content-Type": "application/json",
  "User-Agent": "linear-helper-mcp-server/1.0.0"
}
```

### **4. Enhanced Health Check**

#### **GraphQL-Based Health Check**:
- Uses authenticated GraphQL client instead of raw fetch
- Returns user info + organization details
- Better error handling with specific messages
- Structured logging throughout

#### **Example Output**:
```
✅ Health Check Passed!

Linear API connection successful
User: danh.tt1294@gmail.com (danh.tt1294@gmail.com)  
ID: b3a55072-485f-4f11-9559-3193afb699f6
Organization: TOKENIST (58dce6f7-648f-4189-a596-cc00d714d99a)
Server: linear-helper-mcp-server v1.0.0
```

## 📁 **New File Structure**

```
src/
├── clients/
│   └── linear.ts           # GraphQL client with authentication
├── config/
│   └── server.ts           # Enhanced config with CLI support  
├── framework/
│   └── mcp.ts             # MCP tool framework
├── tools/
│   └── health.ts          # Updated health check using GraphQL
├── utils/
│   ├── logger.ts          # Structured logging
│   └── index.ts           # Utility exports
├── server.ts              # Main server with CLI support
└── index.ts               # Central exports
```

## 🧪 **Testing Results**

### **✅ All CLI Options Working**:

```bash
# Help command
✅ bun src/server.ts --help

# Health check with env var  
✅ LINEAR_API_KEY=key bun src/server.ts --health-check

# Health check with CLI arg
✅ bun src/server.ts --api-key key --health-check

# Short form
✅ bun src/server.ts -k key -h

# Error when no API key
✅ bun src/server.ts --health-check  # Shows helpful error

# Invalid API key error handling
✅ bun src/server.ts --api-key invalid --health-check
```

### **✅ Enhanced Error Messages**:

```
Linear API key is required. Provide via:
  1. CLI argument: --api-key YOUR_KEY
  2. Environment variable: LINEAR_API_KEY=YOUR_KEY  
  3. Get your key from: https://linear.app/settings/api

Use --help for usage information
```

### **✅ GraphQL Client Integration**:
- Authenticated requests using generated GenQL client
- Type-safe queries with full Linear schema support
- Enhanced error handling for different HTTP status codes
- Structured logging with connection details

## 🎯 **Benefits Achieved**

### **1. Developer Experience**:
- **Flexible API Key Input**: Environment variable OR CLI argument
- **Clear Help System**: Comprehensive usage instructions
- **Better Error Messages**: Helpful guidance when misconfigured
- **Quick Testing**: Easy health checks without env setup

### **2. Code Quality**:
- **Type Safety**: Full TypeScript integration with GraphQL
- **Separation of Concerns**: Dedicated client module
- **Error Handling**: Specific error types and messages  
- **Logging**: Structured logging throughout

### **3. Authentication Security**:
- **No Bearer Prefix**: Correct Linear API format (direct key)
- **Validation**: Proper API key validation
- **Error Handling**: Secure error messages without key exposure

## 🚀 **Ready for Phase 2**

The authentication system is now complete and production-ready:

### **GraphQL Client Ready**:
```typescript
// Easy to use in new tools
import { getLinearClient } from "../clients/linear.js";

const client = getLinearClient();
const initiatives = await client.query({
  initiatives: {
    nodes: {
      id: true,
      name: true,
      status: true
    }
  }
});
```

### **CLI Interface Established**:
- Consistent argument parsing
- Help system in place
- Easy to add new CLI options

### **Framework Foundation**:
- Modular authentication
- Type-safe GraphQL integration
- Comprehensive error handling
- Ready for rapid tool development

---

## 📊 **Task 1.3 Status: ✅ COMPLETE**

**Implementation**: CLI API key support + GraphQL client authentication
**Testing**: All methods working with real Linear API
**Documentation**: Updated README with new CLI options
**Next Phase**: Ready for Phase 2 Linear API Integration

**Authentication System Features**:
- ✅ CLI argument support (`--api-key`, `-k`)
- ✅ Environment variable support (existing)
- ✅ GraphQL client with authentication
- ✅ Enhanced error handling and validation
- ✅ Comprehensive help system
- ✅ Type-safe Linear API integration
- ✅ Zero breaking changes

The authentication foundation is solid and ready for building the Initiative, Cycle, and Project Milestone tools in Phase 2!
