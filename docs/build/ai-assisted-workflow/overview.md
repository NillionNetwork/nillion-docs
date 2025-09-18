# AI-Assisted Workflow

Times are changing, and we are using AI-assisted workflows to enhance our development processes. At Nillion, we embrace these changes and want to help you do the same.

We have several solutions that can help with your AI workflows:

- MCP Server: Search and interact with the latest docs via MCP and LLMs.
- LLM.txt: A compact knowledge file you can load into tools or LLMs.

## MCP Server

Our docs expose an MCP server that lets you search and interact with the latest docs via MCP inside your favorite IDE (e.g., Cursor).

Use the `Use MCP URL` or `Open MCP in Cursor` button in the Copy Page dialog on the right side of the page.

Or copy and paste these settings into your MCP settings in your IDE (Cursor, Windsurf, etc.).

```
{
  "mcpServers": {
    "docs-mcp-server": {
      "type": "mcp",
      "url": "https://nillion-docs.fastmcp.app/mcp",
    }
  }
}
```

### LLM.txt

The other approach is adding LLM.txt to your AI enhanced IDE for a better coding experience.

### Cursor

Add [`https://docs.nillion.com/llm.txt`](https://docs.nillion.com/llm.txt) to your `Custom Docs`. More instructions [here](https://docs.cursor.com/context/@-symbols/@-docs#add-custom-docs)
