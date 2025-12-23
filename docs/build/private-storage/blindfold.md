# Blindfold Library

The blindfold cryptographic library provides functions for encrypting/decrypting and secret sharing data stored in individual nilDB nodes and nilDB clusters.

## How to use blindfold

For most developers and use cases, the [secretvaults SDKs](/build/private-storage/secretvaults) (which rely on blindfold) are sufficient. However, expert users may use blindfold to communicate directly with individual nilDB nodes and to manage on their own ciphertexts and secret shares within nilDB queries and replies.

### Via the secretvaults SDKs

The [secretvaults SDKs](/build/private-storage/secretvaults) provide common storage, retrieval, and querying functionalities for nilDB. The SDK abstracts away many aspects of data encryption/decryption and secret sharing (via blindfold) and communication with individual nodes in a cluster.

### As a Standalone Library

Developers can use blindfold as a general-purpose encryption/decryption library within their applications. Two versions of the library are available:

- TypeScript library for web and Node.js environments: [GitHub repository](https://github.com/NillionNetwork/blindfold-ts) and [NPM package](https://www.npmjs.com/package/@nillion/blindfold)
- Python library for server-side applications: [Read the Docs](https://blindfold.readthedocs.io), [GitHub repository](https://github.com/NillionNetwork/blindfold-py), and [PyPI package](https://pypi.org/project/blindfold/)

These libraries are entirely independent from nilDB. This means that developers are responsible for communicating with the individual nilDB nodes within a nilDB cluster, and for invoking blindfold functions as necessary to work with data and query replies.

## Encryption Features and Supported Operations

This library supports traditional encryption of data for storage at rest, hashing of data for deterministic matching, homomorphic encryption of data in a manner that is compatible with addition under encryption, and secret sharing of data (via multi-party computation) in a manner that is compatible with summation under encryption. Each of these is compatible with either single-node clusters, multiple-node clusters, or both. Furthermore, it is possible to rely on either *secret* or *cluster* keys when working with multiple-node clusters. Secret keys ensure that all data (including individual secret shares) are encrypted using a private symmetric key. This means that the nodes in a cluster cannot decrypt ciphertexts even if they all collude. The table below provides a detailed breakdown 

| Nodes    | Key Types       | Operation | Implementation Details                   | Supported Types                                                     |
|----------|-----------------|-----------|------------------------------------------|---------------------------------------------------------------------|
| single   | Secret          | store     | XSalsa20 stream cipher and Poly1305 MAC  | 32-bit signed integer; UTF-8 or binary string (4096 bytes or fewer) |
| single   | Secret          | match     | deterministic salted hashing via SHA-512 | 32-bit signed integer; UTF-8 or binary string (4096 bytes or fewer) |
| single   | Secret          | sum       | Paillier cryptosystem                    | 32-bit signed integer                                               |
| multiple | Secret, Cluster | store     | XOR-based secret sharing                 | 32-bit signed integer; UTF-8 or binary string (4096 bytes or fewer) |
| multiple | Secret, Cluster | store     | Shamir's secret sharing (with threshold) | 32-bit signed integer; UTF-8 or binary string (4096 bytes or fewer) |
| multiple | Secret          | match     | deterministic salted hashing via SHA-512 | 32-bit signed integer; UTF-8 or binary string (4096 bytes or fewer) |
| multiple | Secret, Cluster | sum       | additive secret sharing                  | 32-bit signed integer                                               |
| multiple | Secret, Cluster | sum       | Shamir's secret sharing (with threshold) | 32-bit signed integer                                               |
