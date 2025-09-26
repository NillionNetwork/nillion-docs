# nilCC API Reference

The nilCC API provides comprehensive programmatic access to create and manage confidential workloads. All endpoints are documented using OpenAPI 3.0 specifications with automatic generation from the source code.

## Accessing the API Documentation

### Live OpenAPI Specification

The complete API documentation is available as an interactive [OpenAPI specification](https://api.nilcc.nillion.network/openapi.json)

```
https://api.nilcc.nillion.network/openapi.json
```

### Interactive Documentation

You can explore the API using any OpenAPI-compatible tool:

1. **Swagger Editor**: Paste the OpenAPI spec URL into [editor.swagger.io](https://editor.swagger.io)
2. **Postman**: Import the OpenAPI spec to generate a collection
3. **curl**: Use the examples provided in the specification

## Authentication

All API endpoints require authentication via the `x-api-key` header:

```bash
curl -X POST https://api.nilcc.nillion.network/api/v1/workloads/create \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

## Core API Groups

The API is organized into several functional groups:

### Workloads 

```
/api/v1/workloads/*
```

- **Create**: Deploy new confidential workloads
- **List**: View all your workloads
- **Manage**: Start, stop, restart, and delete workloads
- **Monitor**: Access logs and system statistics

### Workload Containers 

```
/api/v1/workload-containers/*
```

- **List**: View containers within a workload
- **Logs**: Access individual container logs

### Accounts 

```
/api/v1/accounts/*
```

- **Profile**: Manage your account information
- **Credits**: Add and manage account credits

### Metal Instances 

```
/api/v1/metal-instances/*
```

- **Infrastructure**: Register and manage bare metal hosts (admin)

### Artifacts 

```
/api/v1/artifacts/*
```

- **System**: Manage nilCC system artifacts and versions

## Example API Workflow

Here's a typical workflow for deploying a workload:

1. **Create a workload**:

```bash
curl -X POST https://api.nilcc.nillion.network/api/v1/workloads/create \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "my-app",
    "composeFile": "version: '\''3'\''\nservices:\n  app:\n    image: nginx:latest\n    ports:\n      - \"80:80\"",
    "domain": "[your-nilcc-workload.nillion.network]",
    "cpu": 2,
    "memory": 4096,
    "disk": 20
  }'
```

2. **Check workload status**:

```bash
curl -X POST https://api.nilcc.nillion.network/api/v1/workloads/list \
  -H "x-api-key: YOUR_API_KEY"
```

3. **Get workload logs**:

```bash
curl -X POST https://api.nilcc.nillion.network/api/v1/workloads/logs \
  -H "x-api-key: YOUR_API_KEY" \
  -d '{"workloadId": "your-workload-id"}'
```

4. **Access attestation report** (from your running workload):

```bash
curl https://[your-nilcc-workload.nillion.network]/nilcc/api/v2/report
```

## Response Format

All API responses follow a consistent format with proper HTTP status codes:

- **200**: Success with data
- **201**: Created successfully
- **400**: Bad request (validation errors)
- **401**: Unauthorized (invalid API key)
- **404**: Resource not found
- **500**: Internal server error

Error responses include detailed messages and validation information to help troubleshoot issues.

## Rate Limits and Quotas

API usage may be subject to rate limits and account quotas. Check your account status via the `/api/v1/accounts/me` endpoint for current usage and limits.

## Support

- **[OpenAPI Spec](https://api.nilcc.nillion.network/openapi.json)**: The API documentation is automatically generated from the source code, so the spec should stay up to date with the latest API changes
- **Code Examples**: Available in the OpenAPI specification and within the nilcc [blind-module-examples](https://github.com/NillionNetwork/blind-module-examples)
- **nilCC Source Code**: [https://github.com/NillionNetwork/nilcc](https://github.com/NillionNetwork/nilcc)