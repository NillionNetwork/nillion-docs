# Overview

Blacklight is the verification layer of the Blind Computer. It consists of an Ethereum L2 network and a decentralized network of permissionless verifier nodes that continuously challenge and verify Trusted Execution Environment (TEE) workloads.

## Community Roles

- **App Developers**: Developers can register their TEE workloads (running on nilCC or Phala) to be verified by Blacklight, providing accountability and trust for their applications. **[Register your apps](/blacklight/verify/register-apps) to have them verified by the network.**

- **Verifier Node Operators**: Community members can run permissionless verifier nodes to verify developers' TEE workloads and earn rewards. **[Run a verifier node](/blacklight/verify/run-node) to join the network and earn [rewards](/blacklight/learn/rewards).**

## Components

Blacklight has three main components:

- **Community Verifier Nodes**: Permissionless nodes that verify TEE workloads by challenging attestation reports and monitoring enclave behavior.

- **Blacklight L2**: An EVM-compatible Layer 2 network that handles settlement, coordination, transactions, staking, and reward distribution.

- **Smart Contracts**: Solidity contracts that orchestrate verification, manage staking, select committees, distribute rewards, and handle protocol configuration. See [Blacklight Contracts](/blacklight/learn/contracts.md) for details.

Together, these components form a credibly neutral trust layer that holds applications with TEE workloads accountable through continuous monitoring and verification.

## Verification Scope

Blacklight currently verifies:

- [nilCC](/blind-computer/build/compute/overview) (Nillion's Confidential Compute) workloads that have opted-in to verification
- Phala workloads registered with the Blacklight Network

Blacklight is designed to expand verification capabilities across TEE and storage infrastructure providers over time.
