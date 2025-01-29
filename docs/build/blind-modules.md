# Blind Modules

Blind Modules are the core technology Nillion is building. As a developer or end user of Nillion's technology, you will mainly interact with the SecretSDKs, which are all built on top of our Blind Modules.

Currently, there are three Blind Modules: nilVM, nilDB & nilAI.

![Nillion's network architecture diagram](/img/network_diagram.png)

## nilVM

The core functionality provided by nilVM is its signature functionality, which manifests in [SecretSigning](/threshold-signatures).

nilVM can be accessed using our [Python](/python-client) or [TypeScript](/js-client) clients and includes the [Nada programming language](/nada-lang). Check out full nilVM docs including older [nilVM Quickstarts](/start-building).

## nilDB

nilDB is Nillion's secure database offering, enabling data to be secret shared and stored by nodes of the network (currently 3 nodes).
nilDB is the Blind Module that underpins Nillion's SecretVault and SecretDataAnalytics products.

[SecretVault](./secret-vault) and [SecretDataAnalytics](./secret-data-analytics) data are accessed via an easy-to-use RESTful API with endpoints to create (upload) data, retrieve, and query data. Developers can use our nilQL libraries to secret share data on the client side before using our RESTful API to send the shares to the nodes.

## nilAI (Coming Soon)

nilAI is Nillion's secure AI offering, allowing for LLMs to run securely inside TEEs. nilAI is the Blind Module that underpins the SecretLLM SDK. Like SecretVault & SecretDataAnalytics, this SDK can be accessed via an easy-to-use RESTful API that allows users to infer on models.
