#!/usr/bin/env node

import { MCPServer, type MCPServerConfig } from "mcp-framework";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = path.join(__dirname, "..");

console.log(`Project root: ${projectRoot}`);

let mcpConfig: MCPServerConfig | undefined;
if (process.env.PORT) {
  mcpConfig = {
    basePath: projectRoot + "/dist",
    transport: {
      type: "http-stream",
      options: {
        port: Number(process.env.PORT),
        cors: {
          allowOrigin: "*",
          allowMethods: "GET, POST, DELETE, OPTIONS",
          allowHeaders:
            "Content-Type, Accept, Authorization, x-api-key, Mcp-Session-Id, Last-Event-ID",
          exposeHeaders:
            "Content-Type, Authorization, x-api-key, Mcp-Session-Id",
          maxAge: "86400",
        },
      },
    },
  };
}

const server = new MCPServer(mcpConfig);

await server.start();
