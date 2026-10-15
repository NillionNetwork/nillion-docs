---
title: Covenants MCP
description: Connect Claude, ChatGPT, Codex, Cursor, VS Code and other AI assistants to Nillion Covenants with the Covenants MCP server. Explain the protocol, test app ideas, encode conditions, and start building from tested patterns.
sidebar_label: Covenants MCP
---

# Covenants MCP

The Covenants MCP server connects AI assistants to Nillion Covenants through the [Model Context Protocol](https://modelcontextprotocol.io). With it, your assistant can help you:

- **Understand:** learn how Covenants works, what its terms mean and how the cryptography works, with answers drawn from the Covenants docs.
- **Ideate:** come up with ideas you could build with Covenants and iterate on them. Your assistant works through whether an idea fits, how it could be built and how to make it better.
- **Build:** set up your agentic build environment for Covenants, so your agent knows how to start building: from tested app patterns and the SDK reference, encoding release conditions and decoding errors along the way.

## Connect

The server's address is:

```text
https://covenants-mcp.nillion.network/mcp
```

It works in Claude (web, desktop and mobile), the ChatGPT desktop app, Claude Code, Codex, Cursor, VS Code and any client that supports remote MCP servers. It needs no API key, account or sign-in, and all of its tools are read-only.

None of its tools ask for your RPC endpoint, wallet or payloads, so there's no reason to share them. An assistant can still put anything from your conversation into a tool call, so keep private keys and secret payloads out of chats that use it.

### Claude

1. In Claude, open **Customize → Connectors**.
2. Choose **+ Add → Add custom connector**.
3. Name it `Nillion Covenants`, paste the address above, and select **Continue**. If you're asked about authentication, choose **No sign-in**. Then select **Add**.
4. In a chat, select **+ → Connectors** and turn on Nillion Covenants. Then ask a question such as *"How does a covenant stay secret until its condition is met?"*

Add the connector on web or desktop. It then works in the Claude mobile apps too. On the Free plan, you can add one custom connector.

On Team and Enterprise plans, only an Owner can add it, under **Organization settings → Connectors**. Members then find it in **Customize → Connectors** and select **Connect**.

### Claude Code

```bash
claude mcp add --transport http covenants https://covenants-mcp.nillion.network/mcp
```

This adds it to the current project. Add `--scope user` to use it in every project.

### ChatGPT

In the ChatGPT desktop app:

1. Open **Settings → Plugins**.
2. Choose **Add → Add MCP server**.
3. Name it `covenants`, set **Type** to **Streamable HTTP**, and paste the address above. Leave the other fields empty.
4. Select **Save**.

Then ask a question such as *"Using Nillion Covenants, how does a covenant stay secret until its condition is met?"*

### Codex

The Codex CLI, the Codex IDE extension and the ChatGPT desktop app share one configuration. Add the server from a terminal:

```bash
codex mcp add covenants --url https://covenants-mcp.nillion.network/mcp
```

Or add it to `~/.codex/config.toml`:

```toml
[mcp_servers.covenants]
url = "https://covenants-mcp.nillion.network/mcp"
```

### Cursor

Add this to `~/.cursor/mcp.json`, or to `.cursor/mcp.json` in your project:

```json
{
  "mcpServers": {
    "covenants": {
      "url": "https://covenants-mcp.nillion.network/mcp"
    }
  }
}
```

### VS Code

Add this to `.vscode/mcp.json` in your workspace:

```json
{
  "servers": {
    "covenants": {
      "type": "http",
      "url": "https://covenants-mcp.nillion.network/mcp"
    }
  }
}
```

### Other clients

Any client that supports remote MCP servers over Streamable HTTP can connect with the address above.

## What you can ask

| Ask | What happens |
| --- | --- |
| *"How does a covenant stay secret until its condition is met?"* | Searches and reads the Covenants docs, then explains the lifecycle and what the cryptography protects. |
| *"I want tender bids to stay sealed until Friday at 5pm, then all open together. Can Covenants do that, and how would I build it?"* | Judges the idea, suggests the sealed-bid auction pattern, and lists the questions to answer before building. |
| *"Encode a public condition that fires if BTC is at or above $150,000 between 1 and 8 November."* | Builds the 52-byte condition record and reads it back in plain words, with warnings. |
| *"What's the ETH price right now, as the Covenants nodes would see it?"* | Returns the median spot price across exchange venues. |
| *"Show me the timed-disclosure pattern's hook contract and explain how it works."* | Fetches the pattern's files and walks through the contract. |
| *"My trigger post reverted with `0x…`. What went wrong?"* | Decodes the revert data against the protocol's contracts and suggests a fix. |

## Tools

The server has 11 tools. All of them are read-only.

| Tool | What it does |
| --- | --- |
| `get_guide` | Returns step-by-step guidance for one kind of request: understand, explore, ideate, set up or build. |
| `search_docs` | Searches the Covenants docs, the agent brief and the hook checklist. |
| `read_doc` | Returns a whole docs page, or one section of it. |
| `read_sdk_reference` | Returns one module of the `@nillion/covenants-sdk` type definitions. |
| `list_patterns` | Lists the tested app patterns: stop-loss, sealed-bid auction, timed disclosure and dead-man switch. |
| `get_pattern` | Returns a pattern's files: design notes, hook contract with Foundry tests, and scripts. |
| `get_network` | Returns a deployment's chain ID, contract addresses and faucet links. |
| `list_assets` | Lists the assets a release condition can use, and how nodes judge a price. |
| `get_spot_price` | Returns an asset's current USD price, computed the way the nodes compute it. |
| `encode_condition` | Encodes a price and/or time condition into a trigger's condition record, and reads it back in words. |
| `explain_error` | Decodes revert data or an error message and suggests the likely cause and fix. |

## Data and privacy

The server needs no account and no sign-in. None of its tools ask for your RPC endpoint, private keys or payloads, and it keeps no session state between requests. It doesn't log what you ask or what its tools return. Our hosting provider keeps standard request metadata (such as IP address, user agent, request path and status) for one day for operations and rate limiting. To compute spot prices, the server queries public exchange price feeds.

See Nillion's [Privacy Policy](https://nillion.com/privacy) and [Terms of Service](https://nillion.com/terms).

## Troubleshooting

| Problem | Fix |
| --- | --- |
| The assistant says it can't read the live network or post triggers | The server is read-only. To read the chain or post triggers, use the [SDK and CLI](/blacklight/l1/sdk). |
| `rate limited` (HTTP 429) | Wait a minute and try again. |
| A condition on LINK or XRP never fires | Nodes don't price those assets. Ask for `list_assets` to see which assets can fire. |

## Support

- Email: [messages@nillion.com](mailto:messages@nillion.com)
- [Discord](https://discord.com/invite/nillionnetwork)
- [Community and support](/community/community-and-support)

## Where next

- [How it Works](/blacklight/l1/how-it-works): the lifecycle end to end
- [Build a Covenants app](/blacklight/l1/sdk): the SDK and CLI your app calls
- [Faucet](/blacklight/l1/faucet): testnet NIL and Sepolia ETH
