# Blacklight L1

Blacklight L1 is the network that powers **Nillion Covenants**. Nillion Covenants let you seal a secret payload or action to a committee of nodes together with a release condition. The payload remains encrypted until that a threshold of nodes agree the condition is met and subsequently post their shares on-chain. For example: *"If ETH &lt; $2,000, sell 0.5 ETH."*

No single node ever holds the whole secret ("sell 0.5 ETH"), and no one has to be trusted to release it on time.

Blacklight L1 runs on **Ethereum mainnet**. There is also a testnet on Ethereum Sepolia, where developers and node operators can build and test before going live.

## Why it exists

"If X happens, then do this" normally needs somebody trustworthy to hold the secret and honour the rule. That party can leak early, refuse to release, or simply go offline. Blacklight L1 removes the need for a single trusted party. Some example use cases are listed below:

- **Private stop losses** — set a secret stop loss that sells a set amount of your funds when a price condition is met.
- **Sealed-bid auctions** — bids stay sealed until the auction closes, then all open at once.
- **Timelocked disclosure** — a document that becomes readable at a fixed time.
- **Dead-man switches** — material that unseals if a heartbeat stops.

## How it fits together

| | |
| --- | --- |
| **Authors** | seal a payload, choose a committee and a threshold, and escrow payment when they post the trigger |
| **Nodes** | get assigned covenants to watch, and post their share once the condition is met |
| **Anyone** | can reconstruct the payload from `k` shares and claim the bounty the author escrowed |

The chain verifies the revealed payload against a commitment made at post time, so reconstruction is permissionless without being exploitable.

## Start here

- [**How it Works**](/blacklight/l1/how-it-works) — the lifecycle end to end
- [**Cryptography**](/blacklight/l1/cryptography) — the primitives and, importantly, what is *not* protected
- [**Contracts**](/blacklight/l1/contracts) — deployed mainnet and testnet addresses
- [**Build a Covenants app**](/blacklight/l1/sdk) — the SDK and CLI, plus a prompt for coding agents
- [**Run a Node**](/blacklight/l1/run-a-node) — earn ETH and NIL rewards
- [**Faucet**](/blacklight/l1/faucet) — testnet NIL and Sepolia ETH

## Not the same as Blacklight L2

Blacklight L1 is the next version of Blacklight L2. Blacklight moved from Nillion's Ethereum L2 to Ethereum mainnet, and was upgraded to power Nillion Covenants.
