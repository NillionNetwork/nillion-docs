# How Blacklight L1 Works

Blacklight L1 is the network that powers Nillion Covenants. Nillion Covenants let you seal a secret payload or action to a committee of nodes together with a release condition. The payload remains encrypted until that a threshold of nodes agree the condition is met and subsequently post their shares on-chain. For example: "If ETH &lt; $2,000, sell 0.5 ETH."


"If X happens, then do this" normally needs somebody trustworthy to hold the secret and honour the rule. That party can leak early, refuse to release, or simply go offline. Blacklight L1 removes them.


## The lifecycle of a Covenant

Below, we walk through the lifecycle of Nillion Covenants. Blacklight nodes, which power Nillion Covenants, are registered on-chain with a stake and a price (their *markup*).

### 1. Choose a committee

A covenant author picks **m** nodes and a threshold **k**: any `k` of the `m` can open the payload together, and any `k-1` of them cannot.

Selection can be explicit (name the node IDs) or by strategy — balanced, most experienced, highest staked, or cheapest. See the [SDK](/blacklight/l1/sdk).

### 2. Seal

The payload is split into `m` Shamir shares and each share is encrypted to one node's public key. The author gets back `m` ciphertext layers and a `keccak256` commitment to the payload.

Only the node-recipient of a layer can open it, and only a share is inside — so a node learns nothing on its own. See [Cryptography](/blacklight/l1/cryptography).

### 3. Post the trigger

The author sends the layers and the release condition (e.g. "ETH &lt; $2000") to the `TriggerMarket` contract, along with escrow to cover the committee's fees, (optionally) the reconstruction bounty, and (optionally) gas for a settlement callback.

Conditions come in two modes:

- **Public condition** — the condition is visible on-chain. Anyone can see what will release the secret, but not the secret.
- **Private condition** — the condition itself is sealed inside the layers, so observers cannot tell what is being waited for.

### 4. Nodes watch and post shares

Currently, conditions can be price conditions for ETH, BTC, USDC and SOL - however the scope of this will be expanded in future eras. 

Every node runs a price feed aggregated across several venues, and watches the chain for triggers addressed to its key. When a trigger's condition is satisfied, each node decrypts its own layer and posts its share on-chain.

Nodes are paid for posting. In this era they are not asked to agree with each other, and there is no voting: a share is either valid against the commitment or it is not.

### 5. Reconstruct

Once `k` shares have been posted by nodes on-chain, anyone can interpolate them, recover the payload, and reveal it — earning the reconstruction bounty the author escrowed. The contract checks the result against the original commitment, so a wrong payload cannot be passed off as the real one.

If the trigger carried a settlement hook, revealing also calls it, letting a downstream contract act on the revealed value in the same transaction.

## What the chain guarantees

- **No early reveal** — fewer than `k` shares reveal nothing about the payload.
- **No silent substitution** — the payload is committed to up front and checked on reveal.
- **No trusted releaser** — any `k` nodes suffice, and reconstruction is permissionless.
- **Paid liveness** — nodes earn per share posted, and authors escrow up front so the work is funded before it is asked for.

## Staking and rewards

Node operators bond NIL to register, and set a markup that prices their participation. They earn in two ways: ETH from the escrow of the triggers they serve, for posting shares and reconstructing, and NIL emissions that accrue every second, weighted by stake.

Stake leaves only through an unbonding queue. Earnings and stake are both controlled by the operator's **owner** wallet, which is separate from the hot key the node itself runs with.

## Next

- [Cryptography](/blacklight/l1/cryptography) — the primitives underneath
- [Contracts](/blacklight/l1/contracts) — deployed addresses
- [Run a Node](/blacklight/l1/run-a-node) — join the network
- [Build a Covenants app](/blacklight/l1/sdk) — seal, post, and reconstruct from TypeScript
