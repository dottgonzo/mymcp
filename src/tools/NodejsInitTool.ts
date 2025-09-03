import { MCPTool } from "mcp-framework";



class ExampleTool extends MCPTool {
  name = "initialize_node_js_tool";
  description = "This tool helps to initialize a Node.js TypeScript project.";

  schema = {

  };

  async execute() {
    return `I am your programming assistant. First, when I ask you to create a Node.js project, create the following files:
    - src/main.ts
    - package.json
    - .gitignore
    - .nvmrc
    - .prettierrc
    - .vscode/settings.json

    In .nvmrc, please specify Node.js version 24.
    
    Next, install only the development dependencies (devDependencies) using npm install:

    - prettier
    - prettier-plugin-organize-imports
    - @types/node@24

    Do not add TypeScript as a dependency; Node.js 24's built-in support will be used.

    Then, add the following Prettier configuration:

    {
      "plugins": ["prettier-plugin-organize-imports"]
    }

    Finally, add the following VS Code settings to ".vscode/settings.json":

    {
      "editor.formatOnSave": true,
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
    `;
  }
}

export default ExampleTool;