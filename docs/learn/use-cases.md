# Use Cases

## Secure Storage

With [SecretVault](/build/secretVault-secretDataAnalytics/overview), it is possible to use a straightforward and familiar RESTful interface to store and retrieve secrets on the Nillion Network. It is up to the developer which PET they want to use and on which node or cluster of nodes they want to rely. Homomorphic encryption offers data protection and supports computation over data even if only one node is being used. Secure multi-party computation makes it possible to go one step further, making it possible to store in a decentralized way while relying on the strongest form of encryption possible ([information theoretic security](https://en.wikipedia.org/wiki/Information-theoretic_security)).  

## Data Analytics

Using [SecretDataAnalytics](/build/secretVault-secretDataAnalytics/overview), builders can implement workflows that operate on encrypted data at larger scales. The ability to compute using both MPC and HE is combined with a NoSQL foundation that is familiar to software engineers. Builders are free to choose different points in the trade-off space between different PETs, and to choose which Nillion Network nodes they use to perform secure computations.

## Signatures

[Nillion Signatures](/threshold-signatures) makes it possible to leverage MPC to perform signing operations without relying on a trusted party. Nodes within a Nillion Network cluster can store a key in a distributed, encrypted form while still being able to jointly run a protocol to sign a message.

## RAG

Combining *retrieval-augmented generation* (RAG) with PETs makes it possible to leverage the powerful features of contemporary AI solutions while storing data in an encrypted form at all times. This can unlock new use cases by reducing the amount of data that must be decrypted to accomplish a given task.
