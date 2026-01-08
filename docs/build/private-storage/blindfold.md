# Blindfold Library

The blindfold cryptographic library provides functions for encrypting/decrypting and secret sharing data stored in [individual nilDB nodes and nilDB clusters](/build/private-storage/overview).

## Usage

For most developers and use cases, the [secretvaults SDKs](/build/private-storage/secretvaults) (which rely on blindfold) are sufficient. However, expert users may use blindfold to communicate directly with individual nilDB nodes and to manage on their own ciphertexts and secret shares within nilDB queries and replies.

### Via the secretvaults SDKs

The [secretvaults SDKs](/build/private-storage/secretvaults) provide common storage, retrieval, and querying functionalities for nilDB. The SDK abstracts away many aspects of data encryption/decryption and secret sharing (via blindfold) and communication with individual nodes in a cluster.

### As a Standalone Library

Developers can use blindfold as a general-purpose encryption/decryption library within their applications. Two versions of the library are available:

- TypeScript library for web and Node.js environments: [GitHub repository](https://github.com/NillionNetwork/blindfold-ts) and [NPM package](https://www.npmjs.com/package/@nillion/blindfold)
- Python library for server-side applications: [Read the Docs](https://blindfold.readthedocs.io), [GitHub repository](https://github.com/NillionNetwork/blindfold-py), and [PyPI package](https://pypi.org/project/blindfold/)

These libraries are entirely independent from nilDB. This means that developers are responsible for communicating with the individual nilDB nodes within a nilDB cluster, and for invoking blindfold functions as necessary to work with data and query replies.

## Encryption Features

The library offers developers a consistent interface for a variety of different protocols and scenarios. As demonstrated by the secretvaults SDKs, this flexibility can allow developers to switch between protocols seamlessly.

### Supported Cryptographic Protocols

This library supports traditional encryption of data for storage at rest, [salted hashing of data for deterministic matching](https://www.sciencedirect.com/science/article/abs/pii/S0306437912001470), [partially homomorphic encryption](https://en.wikipedia.org/wiki/Paillier_cryptosystem) of data in a manner that is compatible with addition under encryption, and [secret sharing](https://en.wikipedia.org/wiki/Secret_sharing) of data via [secure multi-party computation](https://en.wikipedia.org/wiki/Secure_multi-party_computation) (MPC) schemes (including a [threshold scheme](https://en.wikipedia.org/wiki/Shamir%27s_secret_sharing)) in a manner that is compatible with summation under encryption.

### Working with Clusters and Combining Protocols

Each of the encryption techniques is compatible with either single-node clusters, multiple-node clusters, or both. Each standalone library uses the attributes of a key object (instantiated using an appropriate constructor) to determine what protocol to use when encrypting a plaintext. Keys fall into one of two categories:

1. `SecretKey`/`PublicKey`: Keys in this category support operations within a single node or across multiple nodes. These contain cryptographic material for encryption, decryption, and other operations. Notably, a `SecretKey` instance includes cryptographic material (such as symmetric keys) that a client should not share with the cluster. Using a `SecretKey` instance helps ensure that a client can retain exclusive access to a plaintext *even if all servers in a cluster collude* (*i.e.*, the secret shares themselves are encrypted using the symmetric key).

2. `ClusterKey`: Keys in this category represent cluster configurations but do not contain cryptographic material. These can be used only when working with multiple-node clusters. Unlike `SecretKey` and `PublicKey` instances, `ClusterKey` instances do not incorporate additional cryptographic material. This means each node in a cluster has access to a raw secret share of the plaintext and, therefore, the plaintext is only protected if the nodes in the cluster do not collude.

The language-specific standalone versions of the library also provide helpful functions (`allot` and `unify`, in particular) for working with multiple secret shares of heterogenous data objects (such as JSON objects and Python dictionaries). These functions duplicate or merge plaintext values across object shares while also appropriately substituting internal values with their shares after encryption.

### Overview and Summary

The table below summarizes the data encryption protocols that this library makes available (and which a developer may leverage by creating a key object with the appropriate attributes). The table also specifies which operation involving ciphertexts is supported by each protocol. Support for summation of encrypted values implies support both for subtraction of encrypted values from other encrypted values and for multiplication of encrypted values by a plaintext signed integer scalar.

| Cluster        | Key Types                   | Operation | Protocols                                                                                                            | Plaintext Types                                              |
|----------------|-----------------------------|-----------|----------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------|
| single node    | `SecretKey`                 | store     | [XSalsa20 stream cipher and Poly1305 MAC](https://eprint.iacr.org/2011/646)                                          | 32-bit signed integer; UTF-8 text or byte array (4096 bytes) |
| single node    | `SecretKey`                 | match     | [deterministic salted hashing](https://www.sciencedirect.com/science/article/abs/pii/S0306437912001470) with SHA-512 | 32-bit signed integer; UTF-8 text or byte array (4096 bytes) |
| single node    | `SecretKey` and `PublicKey` | sum       | [Paillier cryptosystem](https://en.wikipedia.org/wiki/Paillier_cryptosystem) with 2048-bit primes                    | 32-bit signed integer                                        |
| multiple nodes | `SecretKey` or `ClusterKey` | store     | [XOR secret sharing](https://ieeexplore.ieee.org/document/6769090) (*n*-out-of-*n*)                                  | 32-bit signed integer; UTF-8 text or byte array (4096 bytes) |
| multiple nodes | `SecretKey` or `ClusterKey` | store     | [Shamir's secret sharing](https://en.wikipedia.org/wiki/Shamir%27s_secret_sharing) (threshold)                       | 32-bit signed integer; UTF-8 text or byte array (4096 bytes) |
| multiple nodes | `SecretKey`                 | match     | [deterministic salted hashing](https://www.sciencedirect.com/science/article/abs/pii/S0306437912001470) with SHA-512 | 32-bit signed integer; UTF-8 text or byte array (4096 bytes) |
| multiple nodes | `SecretKey` or `ClusterKey` | sum       | [additive secret sharing](https://link.springer.com/chapter/10.1007/3-540-45539-6_22) (*n*-out-of-*n*)               | 32-bit signed integer                                        |
| multiple nodes | `SecretKey` or `ClusterKey` | sum       | [Shamir's secret sharing](https://en.wikipedia.org/wiki/Shamir%27s_secret_sharing) (threshold)                       | 32-bit signed integer                                        |
