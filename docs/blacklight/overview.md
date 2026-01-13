# Overview

Blacklight is the verification layer of the Blind Computer, consisting of an Ethereum L2 (Layer 2) network and a decentralized network of permissionless community verifier nodes. Together, these components continuously challenge and verify Trusted Execution Environment (TEE) workloads to ensure their security and correctness.

## Architecture

The Blacklight network consists of three main components:

- **Blacklight L2**: An EVM-compatible Layer 2 network that serves as the settlement and coordination layer for the verification network. It integrates with the Ethereum ecosystem and handles transactions, staking, and reward distribution.

- **Smart Contracts**: A suite of Solidity contracts deployed on the Blacklight L2 that orchestrate the verification system. These contracts handle heartbeat verification, staking operations, committee selection, reward distribution, protocol configuration, and emissions management. See [Blacklight Contracts](./contracts.md) for details.

- **Community Verifier Nodes**: A decentralized network of permissionless nodes operated by community members. These nodes perform the actual verification work by continuously challenging TEE attestation reports and monitoring enclave behavior.

The L2 provides the infrastructure for coordination and settlement, the smart contracts orchestrate the verification process and manage the economic incentives, and the verifier nodes execute the verification work. Together, they form a credibly neutral trust layer that holds TEE providers accountable through continuous monitoring and verification.

## Verification Scope

Blacklight nodes verify TEE workloads by continuously challenging attestation reports and monitoring enclave behavior. The network currently verifies:

- All workloads running on nilCC (Nillion's confidential computation module)
- Phala workloads registered with the Blacklight Network

The network is designed to expand verification capabilities across multiple TEE and storage infrastructure providers over time.

## Node Operations

Blacklight operates as a permissionless network where anyone can run a verifier node. Node operators earn rewards for completing verification work, with rewards distributed proportionally based on the amount of NIL staked to each node. The network uses a fixed annual reward pool funded by protocol emissions.

## Native Gas Token

ETH is the native gas token for the Blacklight L2. All transactions on the network, including verification operations and node interactions, require ETH to pay for gas fees.

## NIL Token

NIL is an ERC-20 token deployed on Blacklight and can be displayed and managed in any EVM-compatible wallet without special configuration. NIL is used for staking to verifier nodes, with staked amounts determining the share of verification work and rewards allocated to each node.
