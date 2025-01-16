# Protocols

The Nillion Network [Blind Modules](/build/blind-modules) -- and the available SDKs that can be used to interoperate with them -- make it possible to leverage a number of secure data storage and computation protocols.

## Trust Assumptions

The Nillion Network consists of clusters of nodes, and builders have the option to rely on a subset of one or more of these nodes to securely store and compute over data. When working with a single node in conjunction with a PET such as homomorphic encryption, it is up to the builder to determine how secret and public keys are generated, maintained, and used. When working with a cluster of two or more nodes, builders can choose to rely on the non-collusion of network nodes (and may not even need to inform any individual node of the identities of other nodes in the cluster).

## Privacy-Enhancing Technologies

### Secure Multi-Party Computation (MPC)

nilDB supports the use of [additive secret sharing](https://en.wikipedia.org/wiki/Secret_sharing) to store data and to compute over that data. Builders can choose two or more nodes across which data would be stored using this approach.

nilVM supports the use of a number of MPC protocols, including threshold secret sharing schemes. Most notably, it relies on the CGGMP21 to enable threshold signing of messages.

### HE

nilDB supports of the use of the [Paillier cryptosystem](https://en.wikipedia.org/wiki/Paillier_cryptosystem) to store data, compute over that data, and retrieve results while relying on a single-node cluster. This makes it possible to perform aggregation queries over encrypted data.

### TEE

Private LLM inference and the use of private RAG is supported via TEEs. 
