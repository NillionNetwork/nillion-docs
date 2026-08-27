# Run a Blacklight L1 Node

Node operators hold key shares for authors' sealed payloads, post their share when a trigger's condition is met, and earn fees plus protocol emissions for doing so.

:::info Guided setup

The **[Blacklight L1 node app](https://blacklight-l1.testnet.nillion.com/)** walks you through the whole process, including the on-chain registration that needs your wallet. Start there rather than assembling the steps by hand.

:::

## What you need

- **A machine that stays online.** A node ticks continuously and misses paid work while it is down. A small VPS is plenty.
- **Docker.**
- **An archive Sepolia RPC endpoint.** A node's cold-start scan reaches back further than public endpoints will serve, so a non-archive URL looks like a node that boots and then never finishes syncing.
- **A wallet with Sepolia ETH and testnet NIL.** Roughly 0.06 ETH covers registration plus the node's initial gas float. NIL for the stake comes from the [faucet](/blacklight/l1/faucet).

## How setup works

1. **Run the node.** It generates its own keys on first boot and prints a registration card containing its **operator address** and its **master public key (`mpk`)**.
2. **Register from the app** with your wallet. This approves the NIL stake and calls `register_node`. You become the node's **owner**.
3. **Fund the operator** with a little ETH so it can post shares and rotate its key.
4. The node detects the registration on-chain within seconds and starts working. No restart needed.

The node never holds your owner key. It only holds its own operator key, which is a hot key with no authority over your stake or earnings.

## Two keys, two roles

| | Owner wallet | Operator key |
| --- | --- | --- |
| Lives | in your wallet | on the node |
| Controls | stake, earnings, retirement | posting shares, rotating keys |
| Needs | NIL + ETH to register | a small ETH float for gas |

Stake and earnings always follow the **owner**, which is why losing the node's state file costs you the node but not your funds.

## Back up the node's state file

On first boot the node writes its operator key and its IBE master secret to a state file. **Back this file up once**, after that first boot.

The operator key is never rotated, so a single backup stays a valid rescue for the life of the node even after many key rotations. Treat it like a wallet private key: it is unencrypted, and anyone holding it can act as your node.

Losing it does **not** cost you your stake or your earnings — both follow your owner wallet. It costs you this node: you would have to register a new one, and any work already assigned to the old one goes unpaid.

## Earning

Two sources:

- **Trigger fees** — authors escrow payment up front, and you are paid per share posted. Your *markup*, set at registration, prices your participation.
- **Emissions** — protocol rewards distributed each epoch (6 hours on testnet), proportional to active stake.

Both accrue to your owner wallet.

## Leaving

Retiring stops new work and settles emissions to that moment, and is reversible. Stake itself leaves only through the unbonding queue — start it, wait out the unbonding period, then withdraw. Nothing else touches your stake.
