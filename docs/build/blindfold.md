# Blindfold Library

The blindfold cryptographic library provides functions for encrypting/decrypting and secret sharing data stored in individual nilDB nodes and nilDB clusters.

## How to use blindfold

For most developers and use cases, the [secretvaults SDKs](/build/secretvaults) (which rely on blindfold) are sufficient. However, expert users may use blindfold to communicate directly with individual nilDB nodes and to manage on their own ciphertexts and secret shares within nilDB queries and replies.

### Via the secretvaults SDKs

The [secretvaults SDKs](/build/secretvaults) provide common storage, retrieval, and querying functionalities for nilDB. The SDK abstracts away many aspects of data encryption/decryption and secret sharing (via blindfold) and communication with individual nodes in a cluster.

### As a Standalone Library

Developers can use blindfold as a general-purpose encryption/decryption library within their applications. Two versions of the library are available:

- TypeScript library for web and Node.js environments: [GitHub repository](https://github.com/NillionNetwork/blindfold-ts) and [NPM package](https://www.npmjs.com/package/@nillion/blindfold)
- Python library for server-side applications: [Read the Docs](https://blindfold.readthedocs.io), [GitHub repository](https://github.com/NillionNetwork/blindfold-py), and [PyPI package](https://pypi.org/project/blindfold/)

These libraries are entirely independent from nilDB. This means that developers are responsible for communicating with the individual nilDB nodes within a nilDB cluster, and for invoking blindfold functions as necessary to work with data and query replies.

## Supported Operations

This library supports traditional encryption of data for storage at rest, hashing of data for deterministic matching, homomorphic encryption of data in a manner that is compatible with addition under encryption, and secret sharing of data (via multi-party computation) in a manner that is compatible with summation under encryption. Each of these is compatible with either single-node clusters, multiple-node clusters, or both; the table below provides a detailed breakdown.

| Cluster        | Operation | Implementation Details                                            | Supported Types                                           |
|----------------|-----------|-------------------------------------------------------------------|-----------------------------------------------------------|
| single node    | store     | XSalsa20 stream cipher and Poly1305 MAC                           | 32-bit signed integer; UTF-8 string (4096 bytes or fewer) |
| single node    | match     | deterministic salted hashing via SHA-512                          | 32-bit signed integer; UTF-8 string (4096 bytes or fewer) |
| single node    | sum       | non-deterministic Paillier with 2048-bit primes                   | 32-bit signed integer                                     |
| multiple nodes | store     | XOR-based secret sharing                                          | 32-bit signed integer; UTF-8 string (4096 bytes or fewer) |
| multiple nodes | match     | deterministic salted hashing via SHA-512                          | 32-bit signed integer; UTF-8 string (4096 bytes or fewer) |
| multiple nodes | sum       | additive secret sharing (no threshold; prime modulus 2^32 + 15)   | 32-bit signed integer                                     |
| multiple nodes | sum       | Shamir's secret sharing (with threshold; prime modulus 2^32 + 15) | 32-bit signed integer                                     |
