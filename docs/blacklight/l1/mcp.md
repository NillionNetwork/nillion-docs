---
title: Covenants MCP
description: Connect Claude, Cursor, VS Code and other AI assistants to Nillion Covenants with the Covenants MCP server. Explain the protocol, test app ideas, encode conditions, and build on testnet.
sidebar_label: Covenants MCP
---

# Covenants MCP

The Covenants MCP server connects AI assistants to Nillion Covenants through the [Model Context Protocol](https://modelcontextprotocol.io). With it, an assistant can explain how Covenants works, check whether an app idea fits, encode a release condition, read live prices the way the nodes see them, and hand you tested starting points for real apps.

There are two ways to connect:

| | Hosted server | Local server and Claude Code plugin |
| --- | --- | --- |
| **Best for** | Learning, judging ideas, designing an app | Building and testing an app on Sepolia |
| **Works in** | Claude (web, desktop, mobile), Claude Code, Cursor, VS Code and any client that supports remote MCP servers | Claude Code (as a plugin), or any client that starts local MCP servers |
| **Tools** | 11, all read-only | The same 11 plus live network reads, testnet setup and a testnet toolbox |
| **You need** | Nothing: no account or sign-in | Node.js 20+, your own Ethereum RPC endpoint, and [Foundry](https://getfoundry.sh) to build apps |

Start with the hosted server. Add the local server when you want your assistant to read the live network or post triggers on testnet.

## Connect the hosted server

The hosted server's address is:

```text
https://covenants-mcp.nillion.network/mcp
```

It needs no API key or account, and it never sees your RPC endpoint, wallet or payloads.

### Claude

1. In Claude, open **Settings → Connectors**.
2. Choose **Add custom connector**.
3. Name it `Nillion Covenants`, paste the address above, and select **Add**.
4. In a new chat, turn the connector on from the **+** menu, then ask a question such as *"How does a covenant stay secret until its condition is met?"*

On Team and Enterprise plans, an owner may need to add the connector for the organization first.

### Claude Code

```bash
claude mcp add --transport http covenants https://covenants-mcp.nillion.network/mcp
```

For the full toolbox, install the [plugin](#install-the-local-server) instead.

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

## Install the local server

The local server runs on your computer with your own settings. On top of the hosted tools, it adds:

- **Live network reads:** nodes, triggers, recent activity, protocol limits and costs.
- **Testnet setup:** a Sepolia RPC endpoint, a testnet wallet, and testnet NIL.
- **A testnet toolbox:** quote, post, watch and reconstruct triggers, and deploy a test hook.

It signs on **Sepolia testnet** by default, and it asks before every write.

### Claude Code plugin (recommended)

The plugin adds the local server plus five skills that guide Claude through each kind of request: understand, explore, ideate, set up and build.

```bash
claude plugin marketplace add https://covenants-mcp.nillion.network/marketplace.json
claude plugin install covenants@nillion
```

Start a new session, then ask a question or type `/covenants:` to see the skills.

To update:

```bash
claude plugin marketplace update nillion && claude plugin update covenants@nillion
```

### Other clients

For Cursor, VS Code, Claude Desktop's config file, or any client that starts local servers:

```json
{
  "mcpServers": {
    "covenants": {
      "command": "npx",
      "args": ["-y", "@nillion/covenants-mcp"]
    }
  }
}
```

Then ask your assistant to *"set me up to build on Covenants testnet"*. It will check your setup and help you set an RPC endpoint, create a testnet wallet, and claim testnet NIL from the [Faucet](/blacklight/l1/faucet).

Your settings are stored in `~/.covenants/testnet.env` with permissions `600`. The testnet key is generated for you and is never shown in the conversation.

:::warning Mainnet uses real funds
Mainnet writes are off until you set up a separate mainnet wallet. Even then, every mainnet transaction needs your confirmation in a dialog, and spending caps apply. Transactions can't be undone, and an AI assistant can make mistakes. Use a dedicated wallet that holds only what you can afford to lose, never your main wallet.
:::

## What you can ask

Try these with the hosted server:

| Ask | What happens |
| --- | --- |
| *"How does a covenant stay secret until its condition is met?"* | Searches and reads the Covenants docs, then explains the lifecycle and what the cryptography protects. |
| *"I want tender bids to stay sealed until Friday at 5pm, then all open together. Can Covenants do that, and how would I build it?"* | Judges the idea, suggests the sealed-bid auction pattern, and lists the questions to answer before building. |
| *"Encode a public condition that fires if BTC is at or above $150,000 between 1 and 8 November."* | Builds the 52-byte condition record and reads it back in plain words, with warnings. |
| *"What's the ETH price right now, as the Covenants nodes would see it?"* | Returns the median spot price across exchange venues. |
| *"Show me the timed-disclosure pattern's hook contract and explain how it works."* | Fetches the pattern's files and walks through the contract. |
| *"My trigger post reverted with `0x…`. What went wrong?"* | Decodes the revert data against the protocol's contracts and suggests a fix. |

With the local server, you can also ask things like *"Set me up to build on testnet"*, *"List the active nodes"*, or *"Post a test trigger to nodes 1, 2 and 3 that opens when ETH is above $2,000"*.

## Tools

The hosted server has 11 tools. All of them are read-only.

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

The local server adds tools for live reads (`list_nodes`, `get_trigger`, `recent_activity`, `estimate_cost` and others), setup (`check_setup`, `set_rpc`, `create_testnet_wallet`, `claim_testnet_nil`), and testnet writes (`post_trigger`, `reconstruct_trigger`, `withdraw_refund` and others). Every write asks for your approval first.

## Data and privacy

- **Hosted server:** no account and no sign-in. It never receives your RPC endpoint, private keys or payloads, and it keeps no session state between requests. It doesn't log what you ask or what its tools return. Our hosting provider keeps standard request metadata (such as IP address, user agent, request path and status) for one day for operations and rate limiting. To compute spot prices, the server queries public exchange price feeds.
- **Local server:** runs on your computer and talks only to the RPC endpoint you choose, the testnet faucet and public price feeds. Keys stay in files under `~/.covenants` and are never put into the conversation. The Claude Code plugin also blocks Claude's file tools from reading that folder.

See Nillion's [Privacy Policy](https://nillion.com/privacy) and [Terms of Service](https://nillion.com/terms).

## Troubleshooting

| Problem | Fix |
| --- | --- |
| The assistant says it can't read the live network or post triggers | The hosted server is read-only. Install the [local server](#install-the-local-server). |
| A live read fails on the local server | Set your RPC endpoint: ask the assistant to run `set_rpc`, or set `SEPOLIA_RPC_URL` in `~/.covenants/testnet.env`. |
| `rate limited` (HTTP 429) from the hosted server | Wait a minute and try again. |
| A condition on LINK or XRP never fires | Nodes don't price those assets. Ask for `list_assets` to see which assets can fire. |
| Mainnet tools don't appear | They appear only after you set up a mainnet wallet. Ask the assistant to `check_setup` on mainnet. |
| A mainnet write is refused with no dialog | Your client doesn't support MCP confirmation dialogs. Use Claude Code in a terminal. |
| The plugin doesn't pick up a new version | Run `claude plugin marketplace update nillion && claude plugin update covenants@nillion`, then start a new session. |

## Support

- Email: [messages@nillion.com](mailto:messages@nillion.com)
- [Discord](https://discord.com/invite/nillionnetwork)
- [Community and support](/community/community-and-support)

## Where next

- [How it Works](/blacklight/l1/how-it-works): the lifecycle end to end
- [Build a Covenants app](/blacklight/l1/sdk): the SDK and CLI your app calls
- [Faucet](/blacklight/l1/faucet): testnet NIL and Sepolia ETH
