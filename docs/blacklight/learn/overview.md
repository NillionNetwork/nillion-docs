# Overview

Nillion Blacklight is the verification layer of the Blind Computer. It consists of an Nillion's Ethereum L2 and a decentralized network of permissionless, community run, Blacklight nodes that continuously challenge and verify workloads running in nilCC, and other TEE providers (e.g. Phala, Secret Network).

## Community Roles

- **Blacklight Node Operators**: Community members can run permissionless Blacklight nodes that are assigned verification work by Nillion's L2 and earn rewards. **[Run a Blacklight node](/blacklight/run-a-node) to join the network and earn [rewards](/blacklight/rewards).**

- **App Developers**: Developers can register their TEE workloads (running on nilCC or Phala) to be verified by Nillion Blacklight, providing accountability and trust for their applications. **[Register your apps](/blacklight/register-apps) to have them verified by the network.**

## Components

Nillion Blacklight has three main components:

- **Community run Blacklight Nodes**: Permissionless nodes that verify TEE workloads by challenging attestation reports and monitoring enclave behavior.

- **Nillion's Ethereum L2**: An EVM-compatible Layer 2 network that in the context of Nillion Blacklight handles verification work assignment, staking, and reward distributions.

- **Smart Contracts**: Solidity contracts that orchestrate verification, manage staking, select verification committees, distribute rewards, and handle protocol configuration. See [Nillion Blacklight Contracts](./contracts.md) for details.

Together, these components form a credibly neutral trust layer that holds applications with TEE workloads accountable through continuous monitoring and verification.

## Verification Scope

Nillion Blacklight currently verifies:

- [nilCC](/build/compute/overview) (Nillion's Confidential Compute) workloads that have opted-in to verification
- Phala workloads registered with the Blacklight Network

The vision behind Nillion Blacklight is that, over time, it becomes the universal TEE trust layer. Being able to verify workloads across many TEE providers, providing a credibly neutral trust layer for all TEE workloads.