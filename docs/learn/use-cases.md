# Use Cases

The Nillion Network enables a variety of use cases in which sensitive data is leveraged and processed while remaining protected using cryptographic techniques.

## Storage of Private User Data

With [Private Storage](/build/private-storage/overview), users can store and retrieve secrets on the Nillion Network via a RESTful API. It is up to the developer which privacy-enhancing technology (PET) they want to use and on which node or cluster of nodes they want to rely. Typical database operations such as queries and aggregate computations can be executed on encrypted data. Homomorphic encryption offers data protection and supports computation over data even if only one node is being used. Secure multi-party computation makes it possible to go one step further, making it possible to store in a decentralized way while relying on the strongest form of encryption possible (*i.e.*, [information-theoretic security](https://en.wikipedia.org/wiki/Information-theoretic_security)).

For example, [nilGPT](https://nilgpt.xyz/) encrypts a user's chat histories with that user's passphrase and then stores secret shares of that data across three nodes within a nilDB cluster. Similarly, [Monadic DNA](https://monadicdna.com/) stores secret shares of DNA data within a nilDB cluster.

## Blind Computation Workflows

One of the most straightforward examples of a use case for blind computation is LLM inference. [Private LLMs](/build/private-llms/overview) can be incorporated into any AI-powered application via a RESTful API. These are compatible with OpenAI standards. The inference capabilities of [nilGPT](https://nilgpt.xyz) are enabled using nilAI. More broadly, developers working in areas such as health and finance can take advantage of these features to build apps that offer inference capabilites while ensuring prompts and responses cannot be decrypted by the app operators or the underlying infrastructure providers.

Combining [retrieval-augmented generation (RAG) with PETs](/build/private-llms/nilRAG) makes it possible to leverage the powerful features of contemporary AI solutions while storing data in an encrypted form at all times. This can unlock new use cases by reducing the amount of data that must be decrypted to accomplish a given task.

Other use cases for blind computation include [blind provable interfaces (BPIs)](/articles/from-apis-to-bpis). The [Tickr app](/articles/tickr-app) exemplifies this concept by allowing users to load their trading data in a provable way.
