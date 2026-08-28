# Blacklight L1

Blacklight L1 is a network for **conditional secrets**. You seal a payload to a committee of nodes together with an on-chain release condition, and it stays encrypted until that condition is met — then anyone can reconstruct it.

No single node ever holds the whole secret, and no one has to be trusted to release it on time.

:::warning Testnet now, mainnet soon

Blacklight L1 is currently on **testnet only**, deployed to Ethereum Sepolia. Tokens have no value and deployments may be replaced.

**Mainnet is releasing soon.** Testnet node ids, contract addresses, and stake do not carry over, so treat anything you build or stake now as disposable — but the APIs and the SDK are the ones you will use on mainnet.

:::

## Why it exists

"Reveal this, but only when X happens" normally needs somebody trustworthy to hold the secret and honour the rule. That party can leak early, refuse to release, or simply go offline. Blacklight L1 removes them.

- **Sealed-bid auctions** — bids stay sealed until the auction closes, then all open at once.
- **Timelocked disclosure** — a document that becomes readable at a fixed time.
- **Dead-man switches** — material that unseals if a heartbeat stops.
- **Conditional order flow** — an instruction that only becomes legible once a price is reached.

## How it fits together

| | |
| --- | --- |
| **Authors** | seal a payload, choose a committee and a threshold, and escrow payment when they post the trigger |
| **Nodes** | hold one key share each, watch the chain, and post their share once the condition is met |
| **Anyone** | can reconstruct the payload from `k` shares and claim the bounty the author escrowed |

The chain verifies the revealed payload against a commitment made at post time, so reconstruction is permissionless without being exploitable.

## Start here

- [**How it Works**](/blacklight/l1/how-it-works) — the lifecycle end to end
- [**Cryptography**](/blacklight/l1/cryptography) — the primitives and, importantly, what is *not* protected
- [**Contracts**](/blacklight/l1/contracts) — deployed Sepolia addresses
- [**Building on Blacklight L1**](/blacklight/l1/sdk) — the SDK and CLI, plus a prompt for coding agents
- [**Run a Node**](/blacklight/l1/run-a-node) — earn fees and emissions
- [**Faucet**](/blacklight/l1/faucet) — testnet NIL and Sepolia ETH

## Not the same as Blacklight

Blacklight L1 is a **separate network** from [Blacklight](/blacklight/learn/overview), the TEE verification layer of the Blind Computer that runs on Nillion's Ethereum L2. They share a name and a token, not a chain or a purpose. Blacklight L1 will eventually replace Blacklight L2.
