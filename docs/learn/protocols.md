# Protocols

The Nillion Network [Blind Modules](/learn/blind-modules) -- and the available SDKs that can be used to interoperate with them -- make it possible to leverage a number of secure data storage and computation protocols. These include what are broadly known as privacy-enhancing technologies (PETs).

## Trust Assumptions

The Nillion Network consists of a collection of independent nodes, and builders have the option to rely on any subset of one or more of these nodes (*i.e.*, a *cluster* of nodes that is determined entirely by the builder) to securely store and compute over data.

* When working with a single node in conjunction with a PET such as homomorphic encryption, it is up to the builder to determine how secret and public keys are generated, maintained, and used.
* When working with a cluster of two or more nodes, builders can choose to rely on the non-collusion of network nodes (and need not inform any individual node of the identities of other nodes in the cluster).

## Privacy-Enhancing Technologies

The [Blind Modules](/learn/blind-modules) leverage a number of PETs to enable secure data storage and processing.

### Secure Multi-Party Computation (MPC)

nilDB supports the use of [additive secret sharing](https://en.wikipedia.org/wiki/Secret_sharing) and [Shamir's secret sharing](https://en.wikipedia.org/wiki/Shamir%27s_secret_sharing) (including threshold secret sharing) to store data and to compute over that data. Builders can choose two or more nodes across which data would be stored using this approach.

### Homomorphic Encryption (HE)

nilDB supports of the use of the [Paillier cryptosystem](https://en.wikipedia.org/wiki/Paillier_cryptosystem) to store data, compute over that data, and retrieve results while relying on a single-node cluster. This makes it possible to perform aggregation queries over encrypted data even when using a single-node cluster.

### Trusted Execution Environments (TEEs)

[Private LLM inference](/build/private-llms/overview) and the use of [private RAG](/build/private-llms/nilRAG) is supported via TEEs.
