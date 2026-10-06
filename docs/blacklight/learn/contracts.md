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
- [NodeOperator](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/NodeOperator.sol) - Managed node operator
- [NodeOperatorFactory](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/NodeOperatorFactory.sol) - Handling managed nodes orchestration

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
| NodeOperatorFactory       | [0x357A349D1a0517f6e234dE99D3a2767E2D871451](https://explorer.nillion.network/address/0x357A349D1a0517f6e234dE99D3a2767E2D871451) |

