# Testnet Faucet

Blacklight L1 testnet needs two tokens: **testnet NIL** for staking and fees, and **Sepolia ETH** for gas.

## Testnet NIL

Get it from the Blacklight L1 faucet:

**[faucet.testnet.nillion.network/?chain=blacklight](https://faucet.testnet.nillion.network/?chain=blacklight)**

- **20 NIL per day** per address.
- **Connect the wallet** you intend to use as your node's **owner**, or the wallet you will author triggers from.
- Or send **straight to an address**, with no wallet connection. Paste any address into the field on that page and press **Send NIL**.

:::note One faucet, two tokens

Sepolia hosts two separate NIL tokens, so the `?chain=blacklight` parameter matters. Without it you will be given the NIL for the Blind Computer network, which Blacklight L1 contracts do not accept. Use the link above exactly as written.

:::

## Sepolia ETH

The faucet does not dispense ETH. Use any public Sepolia faucet — for example [Google Cloud's](https://cloud.google.com/application/web3/faucet/ethereum/sepolia) or [Alchemy's](https://www.alchemy.com/faucets/ethereum-sepolia).

## How much you need

| Task | NIL | Sepolia ETH |
| --- | --- | --- |
| Register a node | 10 (minimum stake) | ~0.06 (registration + the node's gas float) |
| Post a trigger | — | escrow depends on committee size and markups |
| Top up a running node | — | ~0.05 keeps it comfortable |

A node spends a little ETH on every share it posts and every key rotation, so keep its operator address funded. If it runs dry it stops earning.

## Where next

- [Run a Node](/blacklight/l1/run-a-node) — stake the NIL you just claimed
- [SDK](/blacklight/l1/sdk) — post your first trigger
