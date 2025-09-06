#!/usr/bin/env node

import { MCPServer, type MCPServerConfig } from "mcp-framework";

let mcpConfig: MCPServerConfig | undefined;
if (process.env.PORT) {
  mcpConfig = {
    transport: {
      type: "http-stream",
      options: {
        port: Number(process.env.PORT),
        cors: {
          allowOrigin: "*",
          allowMethods: "GET, POST, DELETE, OPTIONS",
          allowHeaders: "Content-Type, Accept, Authorization, x-api-key, Mcp-Session-Id, Last-Event-ID",
          exposeHeaders: "Content-Type, Authorization, x-api-key, Mcp-Session-Id",
          maxAge: "86400"
        }
      }
    }
  }
}

const server = new MCPServer(mcpConfig);

await server.start();