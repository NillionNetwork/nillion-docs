# Run a Blacklight L1 Node

Node operators hold key shares for authors' sealed payloads, post their share when a trigger's condition is met, and earn ETH and NIL rewards for doing so.

:::info Guided setup

The **Blacklight L1 node app** walks you through the whole process, including the on-chain registration that needs your wallet. Start there rather than assembling the steps by hand.

- **Mainnet:** [Blacklight L1 node app](https://TODO-mainnet-app-url) (coming soon)
- **Testnet:** [blacklight-l1.testnet.nillion.com](https://blacklight-l1.testnet.nillion.com/)

:::

## What you need

- **A machine that stays online.** A node ticks continuously and misses paid work while it is down. A small VPS is plenty.
- **Docker.**
- **Your own RPC endpoint** for the network you run on. See [step 3](#3-set-your-rpc-endpoint) for what it needs.
- **A wallet with ETH and NIL** for the stake, the registration and the node's initial gas float:

| | NIL | ETH |
| --- | --- | --- |
| Mainnet | 70,000 (minimum stake) | ~0.015 |
| Testnet | 10 (minimum stake), from the [faucet](/blacklight/l1/faucet) | ~0.06 Sepolia ETH |

The minimum stake is a protocol parameter, read live from `ProtocolConfig`; the app shows the current value before you register.

## How setup works

The app takes you through seven steps.

### 1. Get funds ready

Connect the wallet that will own the node. The app checks it holds enough NIL and ETH for the steps below.

### 2. Install Docker

The node runs as a Docker container on Linux, macOS or Windows.

### 3. Set your RPC endpoint

Your node reads the chain through an RPC endpoint, and it needs its own: there is no shared default.

- **Infura's free tier works** and is the recommended path. Paste only your API key; the app fills in the rest of the URL for the right network.
- **Any other provider** works if the endpoint:
  - serves the right chain (Ethereum mainnet, chain ID `1`, or Sepolia, chain ID `11155111`) over HTTP(S);
  - answers `eth_getLogs` across **10,000 blocks** per request;
  - is **archive-capable**.
- **Most other free tiers will not work.** Alchemy and QuickNode cap the block range of log queries too tightly on their free plans, and the node stalls while syncing. Their paid plans are fine.

The app checks the endpoint live and puts it straight into your `docker run` command. It is never sent to Nillion.

### 4. Run the node

Pull the image and run it with the command the app gives you; your RPC URL from step 3 is already in it. If you skipped step 3, replace the RPC placeholder in the command yourself before running it.

On first boot the node generates its own keys and prints a **REGISTRATION REQUIRED** card with three values. Leave the node running and paste **all three** into the app:

- its **operator address**;
- its **master public key (`mpk`)**;
- its **proof of possession**, which proves the node holds the secret behind that `mpk`.

The three belong together, so copy them from the same card. If the node ever regenerates its key, read a fresh card and copy all three again.

### 5. Register your node

Sign the registration from your wallet. This approves the NIL stake and registers the node, and you become its **owner**.

### 6. Fund the node

Send the operator a little ETH so it can post shares and rotate its key.

### 7. You are live

The node detects the registration on-chain within seconds and starts working. No restart needed.

The node never holds your owner key. It only holds its own operator key, which is a hot key with no authority over your stake or earnings.

## Two keys, two roles

| | Owner wallet | Operator key |
| --- | --- | --- |
| Lives | in your wallet | on the node |
| Controls | stake, earnings, retirement | posting shares, rotating keys |
| Needs | NIL + ETH to register | a small ETH float for gas |

Stake and earnings always follow the **owner**, which is why losing the node's state file costs you the node but not your funds.

## Back up the node's state file

On first boot the node writes its operator key and its IBE master secret to a state file in its Docker volume. **Back this file up once**, right after that first boot, while the container is still running:

```bash
# Mainnet
docker cp blacklight-l1-node-mainnet:/data/state/node-state.json ./blacklight-l1-node-state-mainnet-backup.json

# Testnet
docker cp blacklight-l1-node:/data/state/node-state.json ./blacklight-l1-node-state-backup.json
```

The app shows the same command at step 4. `docker cp` needs the container to be running: the run command uses `--rm`, so a stopped container is gone, and you would have to start the node again to copy the file out.

The operator key is never rotated, so a single backup stays a valid rescue for the life of the node even after many key rotations. Treat it like a wallet private key: it is unencrypted, and anyone holding it can act as your node.

Losing it does **not** cost you your stake or your earnings — both follow your owner wallet. It costs you this node: you would have to register a new one, and any work already assigned to the old one goes unpaid.

## Earning

A node earns two kinds of reward. The app shows both in the node's **Rewards** tab.

| | Paid in | For | Collect with |
| --- | --- | --- | --- |
| **Availability rewards** | NIL | being staked and online | **Claim rewards** |
| **Working rewards** | ETH | work the node does on triggers | **Withdraw fees** |

**Availability rewards** are protocol emissions. They accrue every second, weighted by your stake, from the moment you register, as long as the node is not retired, its stake is at or above the minimum and its key is valid.

**Working rewards** come out of the ETH that authors escrow when they post a trigger. They have two parts:

- **Share pay** — for each share your node posts on a trigger. Your *markup* prices it; you set it at registration and can change it later in the app.
- **Reconstruction pay** — when your node reconstructs a trigger's payload once enough shares are in, on triggers whose author offers a reconstruction bounty.

Both are paid to your owner wallet, never to the node. Anyone can trigger a claim or a withdrawal, but the funds always go to the owner.

## Leaving

Retiring stops new work and settles emissions to that moment, and is reversible. Stake itself leaves only through the unbonding queue — start it, wait out the unbonding period, then withdraw. Nothing else touches your stake.
