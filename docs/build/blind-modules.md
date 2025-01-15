# Blind Modules

Blind Modules are the core technology Nillion is building. As a developer or end user of Nillion's technology, you will mainly interact with the SecretSDKs, which are all built on top of our Blind Modules.

Currently, there are three Blind Modules: nilVM, nilDB & nilAI.

## nilVM

//TODO: Add More Info ❗️

The core functionality provided by nilVM is its signature functionality, which manifests in the SecretSigning SDK. nilVM is accessed using our Python or TypeScript clients and includes the nada programming language.

The network underlying nilVM has [XXX security - getting info on this].

Some useful links:

- [Nada Quickstart](../quickstart-old)
- Clients

  - [Nillion Client](../nillion-client)
  - Python Client
    - [Quickstart](../python-quickstart.md)
    - [Client Reference](../python-client-reference.md)
    - [Threshold Signatures](../threshold-signatures.md)
    - [Examples](https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials)
  - Javascript Client

    - [Overview](../js-client)
    - Hooks ([Values](../js-client-hooks-values), [Compute](../js-client-hooks-compute), [Permissions](../js-client-hooks-permissions), [Other](../js-client-hooks-other))

  - [CLI Clients](../nillion)

- [Nillion SDK & Tools](../nillion-sdk-and-tools)
- Nada Language
  - [Nada by Example](../nada-by-example)
- [Network Configuration](../network-configuration)
- [Nada Program Uploader](https://nada-program-uploader.vercel.app/)

## nilDB

//TODO: Add More Info ❗️

nilDB is Nillion's secure database offering, enabling secret information to be secret shared and stored by nodes of the network (currently 3 nodes). The network underlying nilDB has [XXX security - getting info on this].
nilDB is the Blind Module that underpins the [SecretVault and SecretDataAnalytics SDKs.](./secretVault-secretDataAnalytics/overview.md)

These SDKs are accessed via an easy-to-use RESTful API with endpoints to create (upload) data and retrieve it. Developers can use our nilQL libraries to secret share data on the client side before using our RESTful API to send the shares to the nodes.

## nilAI (Coming Soon)

nilAI is Nillion's secure AI offering, allowing for LLMs to run securely inside TEEs. nilAI is the Blind Module that underpins the SecretLLM SDK. Like SecretVault & SecretDataAnalytics, this SDK can be accessed via an easy-to-use RESTful API that allows users to infer on models.
