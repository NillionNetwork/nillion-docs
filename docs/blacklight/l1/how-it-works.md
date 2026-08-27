# How Blacklight L1 Works

Blacklight L1 is a network for **conditional secrets**. An author seals a payload so that it can only be opened once a condition they specify has been met on-chain. Until then the payload does not exist in one piece anywhere — not on the author's machine, not on the chain, and not on any single node.

:::info Testnet only

Blacklight L1 is currently deployed to **Ethereum Sepolia** and is not on mainnet. Tokens have no value, and deployments may be replaced. See [Contracts](/blacklight/l1/contracts) for live addresses.

:::

## The problem it solves

"Reveal this, but only when X happens" normally needs somebody trustworthy to hold the secret and honour the rule. That party can leak early, refuse to release, or simply go offline. Blacklight L1 removes them.

Typical uses:

- **Sealed-bid auctions** — bids stay sealed until the auction closes, then all open at once.
- **Timelocked disclosure** — a document that becomes readable at a fixed time.
- **Dead-man switches** — material that unseals if a heartbeat stops.
- **Conditional order flow** — an instruction that only becomes legible once a price is reached.

## The lifecycle

### 1. Choose a committee

Nodes register on-chain with a stake and a price (their *markup*). An author picks **m** of them and a threshold **k**: any `k` of the `m` can open the payload together, and any `k-1` of them cannot.

Selection can be explicit (name the node IDs) or by strategy — balanced, most experienced, highest staked, or cheapest. See the [SDK](/blacklight/l1/sdk).

### 2. Seal

The payload is split into `m` Shamir shares and each share is encrypted to one node's public key. The author gets back `m` ciphertext layers and a `keccak256` commitment to the payload.

Only the recipient of a layer can open it, and only a share is inside — so a node learns nothing on its own. See [Cryptography](/blacklight/l1/cryptography).

### 3. Post the trigger

The author sends the layers and the release condition to the `TriggerMarket` contract, along with escrow to cover the committee's fees, the reconstruction bounty, and (optionally) gas for a settlement callback.

Conditions come in two modes:

- **Public condition** — the condition is visible on-chain. Anyone can see what will release the secret, but not the secret.
- **Private condition** — the condition itself is sealed inside the layers, so observers cannot tell what is being waited for.

### 4. Nodes watch and post shares

Every node runs a price feed aggregated across several venues, and watches the chain for triggers addressed to its key. When a trigger's condition is satisfied, each node decrypts its own layer and posts its share on-chain.

Nodes are paid for posting. They are not asked to agree with each other, and there is no voting: a share is either valid against the commitment or it is not.

### 5. Reconstruct

Once `k` shares are on-chain, anyone can interpolate them, recover the payload, and reveal it — earning the reconstruction bounty the author escrowed. The contract checks the result against the original commitment, so a wrong payload cannot be passed off as the real one.

If the trigger carried a settlement hook, revealing also calls it, letting a downstream contract act on the revealed value in the same transaction.

## What the chain guarantees

- **No early reveal** — fewer than `k` shares reveal nothing about the payload.
- **No silent substitution** — the payload is committed to up front and checked on reveal.
- **No trusted releaser** — any `k` nodes suffice, and reconstruction is permissionless.
- **Paid liveness** — nodes earn per share posted, and authors escrow up front so the work is funded before it is asked for.

## Staking and rewards

Node operators bond NIL to register, and set a markup that prices their participation. They earn from two sources: fees paid by authors whose triggers they serve, and protocol emissions distributed per epoch (currently every 6 hours on testnet).

Stake leaves only through an unbonding queue. Earnings and stake are both controlled by the operator's **owner** wallet, which is separate from the hot key the node itself runs with.

## Next

- [Cryptography](/blacklight/l1/cryptography) — the primitives underneath
- [Contracts](/blacklight/l1/contracts) — deployed addresses
- [Run a Node](/blacklight/l1/run-a-node) — join the testnet
- [SDK](/blacklight/l1/sdk) — seal, post, and reconstruct from TypeScript
