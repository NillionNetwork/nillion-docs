# Blacklight Contracts

The **[blacklight-contracts repo](https://github.com/NillionNetwork/blacklight-contracts)** contains the Solidity smart contracts for the Blacklight decentralized verifier network system.

## Core Contracts

- [HeartbeatManager](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/HeartbeatManager.sol) - Orchestrates multi-round heartbeat verification with stake-weighted committees

- [StakingOperators](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/StakingOperators.sol) - ERC20 staking registry with snapshot-based voting power

- [ProtocolConfig](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/ProtocolConfig.sol) - Central governance-owned parameter store and module registry

- [WeightedCommitteeSelector](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/WeightedCommitteeSelector.sol) - Stake-weighted random committee selection

- [RewardPolicy](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/RewardPolicy.sol) - Streaming budget reward allocator with stake-weighted distribution

- [JailingPolicy](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/JailingPolicy.sol) - Penalty enforcement through temporary operator jailing

- [EmissionsController](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/EmissionsController.sol) - Token emissions scheduler with L1-to-L2 bridging

- [Interfaces](https://github.com/NillionNetwork/blacklight-contracts/blob/main/src/Interfaces.sol) - Shared contract interfaces for pluggable modules
