# nilQL

nilQL (Nillion Query Library) is a cryptographic library for secure data operations. While nilQL can be used as a general-purpose encryption/decryption library, Nillion leverages nilQL specifically for encrypting data stored in SecretVault and enabling secure operations within nilDB queries and replies.

## How to Use nilQL

### As a Standalone Library

Developers can use nilQL as a general-purpose encryption/decryption library for their applications.

### With SecretVault and SecretDataAnalytics

You can interact with SecretVault and SecretDataAnalytics either directly through nilQL or using the optional [nillion-sv-wrappers](https://github.com/NillionNetwork/nillion-sv-wrappers) package:

- Use nilQL to encrypt record field values with your organization's private key before storage in a [SecretVault](/build/secret-vault) collection
- Store the encrypted shares of record field values across your organization's nilDB nodes
- Query nilQL encrypted data that has been stored in SecretVault to perform secure operations on nilQL encrypted data via [SecretDataAnalytics](/build/secret-data-analytics) APIs

## Implementations

- [nilql-ts](https://github.com/NillionNetwork/nilql-ts): TypeScript library for web and Node.js environments
- [nilql-py](https://github.com/NillionNetwork/nilql-py): Python library for server-side applications
- [nillion-sv-wrappers](https://github.com/NillionNetwork/nillion-sv-wrappers): an NPM package wrapper providing simplified integration with nilQL, SecretVault, and SecretDataAnalytics

## Supported Operations

| Operation | Node Type | Implementation                                  | Supported Types                                      |
| --------- | --------- | ----------------------------------------------- | ---------------------------------------------------- |
| Store     | Single    | XSalsa20 stream cipher with Poly1305 MAC        | 32-bit signed integer, UTF-8 string (max 4096 bytes) |
| Match     | Single    | Deterministic salted hashing via SHA-512        | 32-bit signed integer, UTF-8 string (max 4096 bytes) |
| Sum       | Single    | Non-deterministic Paillier with 2048-bit primes | 32-bit signed integer                                |
| Store     | Multiple  | XOR-based secret sharing                        | 32-bit signed integer, UTF-8 string (max 4096 bytes) |
| Match     | Multiple  | Deterministic salted hashing via SHA-512        | 32-bit signed integer, UTF-8 string (max 4096 bytes) |
| Sum       | Multiple  | Additive secret sharing with modulus 2^32       | 32-bit signed integer                                |
