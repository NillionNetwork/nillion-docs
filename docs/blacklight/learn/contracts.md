# Smart Contracts

The core Solidity smart contracts for Blacklight are deployed on [Nillion's Ethereum L2](/blacklight/learn/network) and are also maintained in the [Blacklight contracts repository](https://github.com/NillionNetwork/blacklight-contracts).

## Core Contracts

- [ProtocolConfig](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/ProtocolConfig.sol) - Central governance-owned parameter store and module registry
- [StakingOperators](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/StakingOperators.sol) - ERC20 staking registry with snapshot-based voting power
- [WeightedCommitteeSelector](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/WeightedCommitteeSelector.sol) - Stake-weighted random committee selection
- [HeartbeatManager](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/HeartbeatManager.sol) - Orchestrates multi-round heartbeat verification with stake-weighted committees
- [RewardPolicy](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/RewardPolicy.sol) - Streaming budget reward allocator with stake-weighted distribution
- [NoOpSlashingPolicy](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/NoOpSlashingPolicy.sol) - Slashing policy implementation that intentionally applies no penalties or jailing
- [EmissionsController](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/EmissionsController.sol) - Token emissions scheduler with L1-to-L2 bridging
- [Interfaces](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/Interfaces.sol) - Shared contract interfaces for pluggable modules

## Addresses and Token Information

### Mainnet

| Contract                  | Address                                                                                                                           |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| ProtocolConfig            | [0x9204d2F933FC7A84b20952F72CA6Cfa5D4ce6520](https://explorer.nillion.network/address/0x9204d2F933FC7A84b20952F72CA6Cfa5D4ce6520) |
| StakingOperators          | [0x89c1312Cedb0B0F67e4913D2076bd4a860652B69](https://explorer.nillion.network/address/0x89c1312Cedb0B0F67e4913D2076bd4a860652B69) |
| WeightedCommitteeSelector | [0x63167beD28912cDe2C7b8bC5B6BB1F8B41B22f46](https://explorer.nillion.network/address/0x63167beD28912cDe2C7b8bC5B6BB1F8B41B22f46) |
| HeartbeatManager          | [0x0Ee49a8f50293Fa5d05Ba6d1FC136e7F79b2eA4f](https://explorer.nillion.network/address/0x0Ee49a8f50293Fa5d05Ba6d1FC136e7F79b2eA4f) |
| RewardPolicy              | [0x78E0FEBF3B8936f961729328a25dBA88d4Fea86B](https://explorer.nillion.network/address/0x78E0FEBF3B8936f961729328a25dBA88d4Fea86B) |
| NoOpSlashingPolicy        | [0x9a75E816941F692C23166eE9d61328544fb99490](https://explorer.nillion.network/address/0x9a75E816941F692C23166eE9d61328544fb99490) |

### Testnet

| Contract                  | Address                                                                                                                                   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------|
| ProtocolConfig            | [0xfa718d54f31bcf49CcaC3a79C276fa87d11E2F44](https://explorer.testnet.nillion.network/address/0xfa718d54f31bcf49ccac3a79c276fa87d11e2f44) |
| StakingOperators          | [0x2913f0A4C1BE4e991CCf76F04C795E5646e02049](https://explorer.testnet.nillion.network/address/0x2913f0a4c1be4e991ccf76f04c795e5646e02049) |
| WeightedCommitteeSelector | [0xc66b2b6a28a4212B1364D17514A03Cf2c5f2DD7C](https://explorer.testnet.nillion.network/address/0xc66b2b6a28a4212b1364d17514a03cf2c5f2dd7c) |
| HeartbeatManager          | [0x3dbE95E20B370C5295E7436e2d887cFda8bcb02c](https://explorer.testnet.nillion.network/address/0x3dbe95e20b370c5295e7436e2d887cfda8bcb02c) |
| RewardPolicy              | [0xB7223d0a84A8e0c5a5D384b57F2bA3b2Cb216ed9](https://explorer.testnet.nillion.network/address/0xb7223d0a84a8e0c5a5d384b57f2ba3b2cb216ed9) |
| NoOpSlashingPolicy        | [0x4a76Cb88D6FFb85cBe0ad28e7FFB3D51678e440d](https://explorer.testnet.nillion.network/address/0x4a76Cb88D6FFb85cBe0ad28e7FFB3D51678e440d) |
