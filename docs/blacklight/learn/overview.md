# Overview

Nillion Blacklight is the verification layer of the Blind Computer. It consists of an [Nillion's Ethereum L2](/blacklight/learn/network) and a decentralized network of permissionless, community-run Blacklight nodes that continuously challenge and verify workloads running on [nilCC](/blind-computer/build/compute/overview) and other TEE providers (such as Phala and Secret Network).

## Community Roles

- **Blacklight Node Operators**: Community members can run permissionless Blacklight nodes that are assigned verification tasks via Nillion's L2 and earn rewards by completing those tasks. **[Run a Blacklight node](/blacklight/verify/run-node) to join the network and earn [rewards](/blacklight/learn/rewards).**

- **App Developers**: Developers can register their TEE workloads (running on nilCC or Phala) to be verified by Blacklight, providing accountability and trust for their applications. **[Register your apps](/blacklight/verify/register-apps) to have them verified by the network.**

## Components

Nillion Blacklight has three main components:

- [**Community-run Blacklight Nodes**](/blacklight/verify/run-node): Permissionless nodes that verify TEE workloads by challenging attestation reports and monitoring enclave behavior.

- [**Nillion's Ethereum L2**](/blacklight/learn/network): An EVM-compatible Layer 2 network that handles verification work assignment, staking, and reward distributions.

- [**Smart Contracts**](/blacklight/learn/contracts): Solidity contracts that handle protocol configuration, manage staking, select verification committees, orchestrate verification, and distribute rewards.

Together, the above components form a credibly neutral trust layer that holds applications with TEE workloads accountable through continuous monitoring and verification.

## Scope and Vision

Nillion Blacklight can currently verify the two categories of workloads below.

- Workloads running on Nillion's confidential compute module [nilCC](/blind-computer/build/compute/overview) that have opted-in to verification.
- Phala workloads registered with Blacklight.

The vision behind Nillion Blacklight is that, over time, it will become a universal, credibly neutral TEE trust layer that enables workload verification across many TEE providers.
