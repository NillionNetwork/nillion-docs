import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Run a Blacklight L1 Node

Node operators are selected to watch conditions by Nillion governance authors. When a condition is met, they post their share of the secret payload on-chain. 

Node operators are rewarded in NIL, proportional to their stake, for their availability to accept covenants assignments. They are also rewarded for the work they do in ETH as a markup of the gas they spend when a covenant is triggered.  

:::info setting up your Blacklight L1 node 

The **Blacklight L1 node app** walks you through the whole process, including the on-chain registration that needs your wallet. Start there rather than assembling the steps by hand.

- **Mainnet:** [blacklight-l1.nillion.com](https://blacklight-l1.nillion.com/)
- **Testnet:** [blacklight-l1.testnet.nillion.com](https://blacklight-l1.testnet.nillion.com/)

:::

## What you need

- **A machine that stays online.** A node ticks continuously and misses paid work while it is down. A small VPS is plenty.
- **Docker.**
- **Your own RPC endpoint** for the network you run on. See [step 3](#3-set-your-rpc-endpoint) for what it needs.
- **A wallet with ETH and NIL (both L1)** for the stake, the registration and the node's initial gas float:

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

<Tabs groupId="network" queryString="network">
  <TabItem value="mainnet" label="Mainnet" default>

```bash
docker cp blacklight-l1-node-mainnet:/data/state/node-state.json ./blacklight-l1-node-state-mainnet-backup.json
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
docker cp blacklight-l1-node:/data/state/node-state.json ./blacklight-l1-node-state-backup.json
```

  </TabItem>
</Tabs>

The app shows the same command at step 4. `docker cp` needs the container to be running: the run command uses `--rm`, so a stopped container is gone, and you would have to start the node again to copy the file out.

The operator key is never rotated, so a single backup stays a valid rescue for the life of the node even after many key rotations. Treat it like a wallet private key: it is unencrypted, and anyone holding it can act as your node.

Losing it does **not** cost you your stake or your earnings — both follow your owner wallet. It costs you this node: you would have to register a new one, and any work already assigned to the old one goes unpaid.

## Restart or move your node

The node's keys live in its Docker volume, not in the container. The run command uses `--rm`, so stopping the node or rebooting the machine deletes the container, but the volume and the keys in it stay. To bring the node back, run the same command again. It picks up its keys and catches up with the chain on its own; there is nothing to register and nothing to sign.

### The run command

This is the command the app gives you at step 4. Replace the RPC placeholder with your endpoint.

<Tabs groupId="network" queryString="network">
  <TabItem value="mainnet" label="Mainnet" default>

```bash
docker run -it --rm --init --name blacklight-l1-node-mainnet \
  -v blacklight-l1-node-state-mainnet:/data/state \
  -e RPC_URL=<YOUR_MAINNET_RPC_URL> \
  -e CONFIG_ADDRESS=0xa75716772c17818A73104344b5A8888ae24ADc03 \
  -e STATE_FILE=/data/state/node-state.json \
  -e FEED_MODE=real \
  ghcr.io/nillionnetwork/blacklight-l1-node/node:0.2.6
```

  </TabItem>
  <TabItem value="testnet" label="Testnet">

```bash
docker run -it --rm --init --name blacklight-l1-node \
  -v blacklight-l1-node-state:/data/state \
  -e RPC_URL=<YOUR_SEPOLIA_RPC_URL> \
  -e CONFIG_ADDRESS=0x137c8BFdEd755FD61486e648b2494BE1A1264619 \
  -e STATE_FILE=/data/state/node-state.json \
  -e FEED_MODE=real \
  ghcr.io/nillionnetwork/blacklight-l1-node/node:0.2.6
```

  </TabItem>
</Tabs>

- **Windows:** put the command on one line and drop the `\` line breaks.
- **Image tag:** the app always shows the current one. If it differs from the tag here, use the app's.
- **Keep the volume name.** A different volume name starts a node with new keys, which would need registering again.

If the node was down long enough for its key to expire, it was removed from emissions and stopped earning NIL. On startup it rotates a fresh key; then open the node in the app and click **Rejoin emissions**. Emissions resume from that moment.

### Moving to a new machine

You need the state file backup from the [section above](#back-up-the-nodes-state-file).

1. **Stop the node on the old machine.** Never run two copies with the same state file: both would act as the same node.
2. **On the new machine,** install Docker, put the backup file in your current directory, and restore it into the node's volume **before** starting the node:

   <Tabs groupId="network" queryString="network">
     <TabItem value="mainnet" label="Mainnet" default>

   ```bash
   docker run --rm --user root \
     -v blacklight-l1-node-state-mainnet:/data/state \
     -v "$PWD":/backup \
     --entrypoint install \
     ghcr.io/nillionnetwork/blacklight-l1-node/node:0.2.6 \
     -o dusk -g dusk -m 600 /backup/blacklight-l1-node-state-mainnet-backup.json /data/state/node-state.json
   ```

     </TabItem>
     <TabItem value="testnet" label="Testnet">

   ```bash
   docker run --rm --user root \
     -v blacklight-l1-node-state:/data/state \
     -v "$PWD":/backup \
     --entrypoint install \
     ghcr.io/nillionnetwork/blacklight-l1-node/node:0.2.6 \
     -o dusk -g dusk -m 600 /backup/blacklight-l1-node-state-backup.json /data/state/node-state.json
   ```

     </TabItem>
   </Tabs>

   This copies the file into the volume, owned by the node's user and readable only by it. On Windows, use one line; in cmd.exe, replace `"$PWD"` with `"%cd%"`.
3. **Start the node** with the run command above. It boots as the same node, with the same operator address the app shows for it.

If the node prints a **REGISTRATION REQUIRED** card instead, it did not find the restored file and generated new keys. Stop it and repeat step 2, which overwrites them. Don't register the new keys: that creates a second node.

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
