# Contracts

Blacklight L1's testnet contracts are deployed to **Ethereum Sepolia** (chain ID `11155111`).

:::warning Testnet deployment

These addresses are for testing only. Tokens have no value, and the deployment may be replaced without notice. Always resolve addresses from `ProtocolConfig` rather than hardcoding them.

:::

## Deployed addresses

| Contract | Address |
| --- | --- |
| `ProtocolConfig` | [`0xebB338689fB32317DDFD8282F8a42dcA6271cB2d`](https://sepolia.etherscan.io/address/0xebB338689fB32317DDFD8282F8a42dcA6271cB2d) |
| `TriggerMarket` | [`0x68BC854300003f2b6831EC483E8Be6DF4bcc1bEF`](https://sepolia.etherscan.io/address/0x68BC854300003f2b6831EC483E8Be6DF4bcc1bEF) |
| `NodeRegistry` | [`0xfEEa22905753B2dcaf4231e9f4EF1465AaA5dE03`](https://sepolia.etherscan.io/address/0xfEEa22905753B2dcaf4231e9f4EF1465AaA5dE03) |
| `Staking` | [`0x2150a9B3a27434c96abE2C0B03A1F240D2F47dE3`](https://sepolia.etherscan.io/address/0x2150a9B3a27434c96abE2C0B03A1F240D2F47dE3) |
| `Emissions` | [`0x37178D6C1EFC21079f1E1a8e1A9FC4766C98979c`](https://sepolia.etherscan.io/address/0x37178D6C1EFC21079f1E1a8e1A9FC4766C98979c) |
| `NIL` (testnet token) | [`0xA7526a2ABB3D01BD21B3ac59B9201cC018560Dfd`](https://sepolia.etherscan.io/address/0xA7526a2ABB3D01BD21B3ac59B9201cC018560Dfd) |

The NIL address above is the **proxy**. Always interact with the proxy, never with the implementation behind it.

## Start from ProtocolConfig

`ProtocolConfig` is the single entry point. Every other address, and every tunable protocol parameter, is readable from it — so tools and nodes only need one address configured.

```bash
cast call 0xebB338689fB32317DDFD8282F8a42dcA6271cB2d \
  "triggerMarket()(address)" --rpc-url $RPC_URL
```

This is why running a node only requires `CONFIG_ADDRESS`: the node resolves the market and registry itself at boot. See [Run a Node](/blacklight/l1/run-a-node).

## What each contract does

**`ProtocolConfig`** — holds protocol parameters (minimum stake, key TTL, epoch length, gas ceilings) and the addresses of every other contract. The address above is stable across future redeployments of the contracts below.

**`TriggerMarket`** — the core. Accepts posted triggers with their sealed layers and escrow, accepts shares from committee nodes, verifies reconstruction against the author's commitment, pays out fees and bounties, and calls settlement hooks.

**`NodeRegistry`** — the record of who is on the network: each node's operator address, its current master public key (`mpk`), its key history and TTLs, and its markup.

**`Staking`** — bonds NIL at registration, tracks the owner of each node, and releases stake through an unbonding queue. Both stake withdrawal and earnings are controlled by the node's owner wallet.

**`Emissions`** — distributes protocol rewards per epoch (6 hours on testnet), proportional to active stake.

## Verifying

All contracts are verified on Sepolia Etherscan; source is browsable from the links above.
