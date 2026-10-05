# Contracts

Blacklight L1 is deployed to **Ethereum mainnet** (chain ID `1`), with a testnet on **Ethereum Sepolia** (chain ID `11155111`). Always resolve addresses from `ProtocolConfig` rather than hardcoding them.

## Mainnet

| Contract | Address |
| --- | --- |
| `ProtocolConfig` | [`0xa75716772c17818A73104344b5A8888ae24ADc03`](https://etherscan.io/address/0xa75716772c17818A73104344b5A8888ae24ADc03) |
| `TriggerMarket` | [`0xe04AB2338e53CEf004512687bd7957Ab18B85744`](https://etherscan.io/address/0xe04AB2338e53CEf004512687bd7957Ab18B85744) |
| `NodeRegistry` | [`0x9A2667ec55c769f49906d7aB718d36aE26c23be2`](https://etherscan.io/address/0x9A2667ec55c769f49906d7aB718d36aE26c23be2) |
| `Staking` | [`0xAcD5D3d8Eacb9f60CfEb6F26D65FB9CB9b06D21b`](https://etherscan.io/address/0xAcD5D3d8Eacb9f60CfEb6F26D65FB9CB9b06D21b) |
| `Emissions` | [`0xeff51614B2ccB89264e75a1303A17878cEA59C62`](https://etherscan.io/address/0xeff51614B2ccB89264e75a1303A17878cEA59C62) |
| `NIL` | [`0x7Cf9a80db3B29eE8efE3710AadB7b95270572d47`](https://etherscan.io/address/0x7Cf9a80db3B29eE8efE3710AadB7b95270572d47) |

## Testnet (Sepolia)

Tokens have no value, and the testnet deployment may be replaced without notice.

| Contract | Address |
| --- | --- |
| `ProtocolConfig` | [`0x137c8BFdEd755FD61486e648b2494BE1A1264619`](https://sepolia.etherscan.io/address/0x137c8BFdEd755FD61486e648b2494BE1A1264619) |
| `TriggerMarket` | [`0x60Ab22031E47ff93bB9b88Aa2bfb9FEf90d435A6`](https://sepolia.etherscan.io/address/0x60Ab22031E47ff93bB9b88Aa2bfb9FEf90d435A6) |
| `NodeRegistry` | [`0xF90839b2e303Dc2190d69290F0f0303D3C7D652F`](https://sepolia.etherscan.io/address/0xF90839b2e303Dc2190d69290F0f0303D3C7D652F) |
| `Staking` | [`0xDe9a9e0473F85D53AA7Cac29E15Aa91010894795`](https://sepolia.etherscan.io/address/0xDe9a9e0473F85D53AA7Cac29E15Aa91010894795) |
| `Emissions` | [`0x93B25ADaA711D0574548873BcEab76dB08AAfc35`](https://sepolia.etherscan.io/address/0x93B25ADaA711D0574548873BcEab76dB08AAfc35) |
| `NIL` (testnet token) | [`0x38E6D66fCbe15B7D68aa2E25Ba065A6c6da0c367`](https://sepolia.etherscan.io/address/0x38E6D66fCbe15B7D68aa2E25Ba065A6c6da0c367) |

The NIL addresses are **proxies**. Always interact with the proxy, never with the implementation behind it.

## Start from ProtocolConfig

`ProtocolConfig` is the single entry point. Every other address, and every tunable protocol parameter, is readable from it — so tools and nodes only need one address configured.

```bash
cast call $CONFIG_ADDRESS "triggerMarket()(address)" --rpc-url $RPC_URL
```

This is why running a node only requires `CONFIG_ADDRESS`: the node resolves the market and registry itself at boot. See [Run a Node](/blacklight/l1/run-a-node).

## What each contract does

**`ProtocolConfig`** — holds protocol parameters (minimum stake, key TTL, gas ceilings) and the addresses of every other contract. Its address is stable across future redeployments of the contracts below.

**`TriggerMarket`** — the core. Accepts posted triggers with their sealed layers and escrow, accepts shares from committee nodes, verifies reconstruction against the author's commitment, pays out fees and bounties, and calls settlement hooks.

**`NodeRegistry`** — the record of who is on the network: each node's operator address, its current master public key (`mpk`), its key history and TTLs, and its markup.

**`Staking`** — bonds NIL at registration, tracks the owner of each node, and releases stake through an unbonding queue. Both stake withdrawal and earnings are controlled by the node's owner wallet.

**`Emissions`** — pays NIL emissions to eligible nodes, accruing every second and weighted by stake. Node owners claim them as availability rewards.

## Verifying

All contracts are verified on Etherscan; source is browsable from the address links.
