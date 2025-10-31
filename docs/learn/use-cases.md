# Use Cases

The Nillion Network enables a variety of use cases in which sensitive data is leveraged and processed while remaining protected using cryptographic techniques.

## Secure Storage and Retrieval of Private User Data

With [Private Storage](/build/private-storage/overview), it is possible to store and retrieve secrets on the Nillion Network via a RESTful API. It is up to the developer which privacy-enhancing technology (PET) they want to use and on which node or cluster of nodes they want to rely. Typical database operations such as queries and aggregate computations can be executed on encrypted data. Homomorphic encryption offers data protection and supports computation over data even if only one node is being used. Secure multi-party computation makes it possible to go one step further, making it possible to store in a decentralized way while relying on the strongest form of encryption possible (*i.e.*, [information-theoretic security](https://en.wikipedia.org/wiki/Information-theoretic_security)).

One straightforward example can be seen in [**nilGPT**](https://nilgpt.xyz/), which encrypts a user's chat histories with that user's passphrase and then stores secret shares of that data across three nodes within a nilDB cluster. Similarly, a number of third-party projects leverage secret sharing and nilDB to store and query user data.

* [**Monadic DNA**](https://monadicdna.com/) stores DNA data in secret-shared form while keeping the users that own that data in control.
* [**HealthBlocks**](https://www.healthblocks.ai/) provides adaptive goals and gamified challenges
that make health engaging and rewarding by [storing and leveraging secret-shared user-owned health data](https://nillion.pub/healthblocks-case-study.pdf).
* [**Soarchain**](https://www.soarchain.com/) stores and queries vehicle data in a privacy-preserving manner, allowing users who own that data to benefit from monetizing the collective insights that can be derived from that data.

## Blind Computation Workflows

One of the most straightforward examples of a use case for blind computation is LLM inference. [Private LLMs](/build/private-llms/overview) can be incorporated into any AI-powered application via a RESTful API. These are compatible with OpenAI standards. The inference capabilities of [nilGPT](https://nilgpt.xyz) are enabled using nilAI. More broadly, developers working in areas such as health and finance can take advantage of these features to build apps that offer inference capabilities while ensuring prompts and responses cannot be decrypted by the app operators or the underlying infrastructure providers.

Combining [retrieval-augmented generation (RAG) with PETs](/build/private-llms/nilRAG) makes it possible to leverage the powerful features of contemporary AI solutions while storing data in an encrypted form at all times. This can unlock new use cases by reducing the amount of data that must be decrypted to accomplish a given task.

Other use cases for blind computation include [blind provable interfaces (BPIs)](/articles/from-apis-to-bpis). The [Tickr app](/articles/tickr-app) exemplifies this concept by allowing users to load their trading data in a provable way.
