# What is Nillion

Nillion is building a **blind computer** - a decentralized network of nodes that stores and processes your and your users' most sensitive data while keeping it encrypted and private.

## What is a Blind Computer?

A blind computer stores data and runs programs just like any normal computer, but with a crucial difference: it can perform useful computations on data while keeping it encrypted and private from application backends and the operators running the underlying infrastructure.

Instead of the traditional decrypt-compute-encrypt cycle that exposes data during processing, blind computation uses advanced cryptographic techniques like secure multi-party computation, homomorphic encryption, and trusted execution environments to work directly on encrypted data.

This shifts the trust model from "trust us with your data" to "trust the cryptography" - reducing what organizations and infrastructure must be trusted while still enabling powerful computations on sensitive information. Cryptographic techniques like Shamir's secret sharing, secure multi-party computation (MPC), and trusted execution environments (TEEs) provide mathematical guarantees rather than relying on promises or policies.

## Nillion Network

The Nillion Network is a network of specialized nodes (each running one or more blind modules) that provide independent privacy capabilities for the blind computer:

- **[nilDB](/learn/blind-modules#nildb) nodes for Private Storage**: Data is encrypted and split into secret shares, and these shares are distributed across multiple nodes (typically three) so no single node can view or reveal your original data.
- **[nilAI](/learn/blind-modules#nilai) nodes for Private LLMs**: Individual nodes run AI models inside of a TEE. You connect to a node of your choice and perform private AI inference without the node viewing your data in unencrypted form.
- **nilCC nodes for Private Compute**: Nodes perform developer-specified or user-specified workflows within TEEs, enabling general-purpose private computation over sensitive data.

## Developer Solutions

While you can interact directly with network nodes, Nillion provides developer-friendly solutions that handle the cryptographic complexity for you.

- **[Private Storage](/build/private-storage/overview)** uses the Secretvaults SDK to automatically manage multiple nilDB nodes, encryption, and orchestration - so you don't have to manage and coordinate individual nodes manually.

- **[Private LLMs](/build/private-llms/overview)** provide OpenAI-compatible APIs that abstract away TEE complexity, letting you add private inference to existing applications with minimal code changes.

These solutions handle multi-node coordination, encryption, and complex cryptographic operations automatically, making privacy-preserving development as simple as traditional app development.

## Why Build a Blind Computer?

The biggest breakthroughs happen when people can collaborate on sensitive data without exposing their secrets, enabling exciting new [use cases](/learn/use-cases).

- **Healthcare Research**: Pool medical data from hospitals worldwide for clinical research without compromising patient privacy.

- **AI Development**: Train better models using aggregated data while keeping individual datasets completely private

- **Government Policy**: Use real-time social data to influence policy and help vulnerable populations without breaking privacy.

- **Financial Coordination**: Enable coordinated trading strategies without front-running risks.

Ready to build privacy preserving apps? Start building with one of our Nillion [Quickstarts](/build/quickstart).
