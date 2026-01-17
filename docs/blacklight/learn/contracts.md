# Smart Contracts

The **[Blacklight contracts repository](https://github.com/NillionNetwork/blacklight-contracts)** contains the core Solidity smart contracts for Blacklight.

## Core Contracts

- [ProtocolConfig](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/ProtocolConfig.sol) - Central governance-owned parameter store and module registry
- [StakingOperators](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/StakingOperators.sol) - ERC20 staking registry with snapshot-based voting power
- [WeightedCommitteeSelector](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/WeightedCommitteeSelector.sol) - Stake-weighted random committee selection
- [HeartbeatManager](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/HeartbeatManager.sol) - Orchestrates multi-round heartbeat verification with stake-weighted committees
- [RewardPolicy](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/RewardPolicy.sol) - Streaming budget reward allocator with stake-weighted distribution
- [JailingPolicy](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/JailingPolicy.sol) - Penalty enforcement through temporary operator jailing
- [EmissionsController](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/EmissionsController.sol) - Token emissions scheduler with L1-to-L2 bridging
- [Interfaces](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/Interfaces.sol) - Shared contract interfaces for pluggable modules

## Addresses and Token Information

### Mainnet

:::info
Mainnet contract addresses will be available at launch.
:::

### Testnet

#### Contracts

| Contract                  | Address                                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| ProtocolConfig            | [0xfa718d54f31bcf49CcaC3a79C276fa87d11E2F44](https://explorer-nilav-shzvox09l5.t.conduit.xyz/address/0xfa718d54f31bcf49ccac3a79c276fa87d11e2f44) |
| StakingOperators          | [0x2913f0A4C1BE4e991CCf76F04C795E5646e02049](https://explorer-nilav-shzvox09l5.t.conduit.xyz/address/0x2913f0a4c1be4e991ccf76f04c795e5646e02049) |
| WeightedCommitteeSelector | [0xc66b2b6a28a4212B1364D17514A03Cf2c5f2DD7C](https://explorer-nilav-shzvox09l5.t.conduit.xyz/address/0xc66b2b6a28a4212b1364d17514a03cf2c5f2dd7c) |
| HeartbeatManager          | [0x3dbE95E20B370C5295E7436e2d887cFda8bcb02c](https://explorer-nilav-shzvox09l5.t.conduit.xyz/address/0x3dbe95e20b370c5295e7436e2d887cfda8bcb02c) |
| RewardPolicy              | [0xB7223d0a84A8e0c5a5D384b57F2bA3b2Cb216ed9](https://explorer-nilav-shzvox09l5.t.conduit.xyz/address/0xb7223d0a84a8e0c5a5d384b57f2ba3b2cb216ed9) |
| JailingPolicy             | [0x7Fe02E082ff4E377AbE4E80bd428e45047dEe957](https://explorer-nilav-shzvox09l5.t.conduit.xyz/address/0x7fe02e082ff4e377abe4e80bd428e45047dee957) |

#### Tokens

| Token       | Address                                                                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Testnet NIL | [0xf65b7cCF9f13ef932093bac19Eb5ea77ee70F4A4](https://explorer-nilav-shzvox09l5.t.conduit.xyz/address/0xf65b7ccf9f13ef932093bac19eb5ea77ee70f4a4) |
