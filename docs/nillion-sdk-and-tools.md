# Nillion SDK and Tools

The Nillion SDK includes tools for generating keys, compiling Nada programs, simulating programs, running a local network, and connecting to the Nillion network via your cli.

## Installation

Follow the instructions in the [Quickstart Installation](quickstart#install-the-nillion-sdk) to install the Nillion SDK and decompress the binaries. The result is a set of Nillion SDK tools.

## Nillion SDK tools

- [user-keygen](user-keygen): a tool that generates a [user key](concepts.md#user-key)
- [node-keygen](node-keygen): a tool that generates a [node key](concepts.md#node-key)
- [node-key2peerid](node-key2peerid): a tool that creates a [peer id](concepts.md#peer-id) from your node key
- [pynadac](pynadac): a tool that compiles Nada programs; pynadac takes an input program defined in PyNada and produces a compiled version of it ready to be run with program-simulator or stored on the Nillion Network
- [program-simulator](program-simulator): a tool that simulates program execution against a stripped down version of a Nillion cluster
- [run-local-cluster](run-local-cluster): a tool that allows you to spin up and interact with a local test Nillion [cluster](concepts.md#clusters) that is completely isolated within your computer
- [nil-cli](nil-cli): a tool for interacting with the Nillion Network from the command line to store secrets, retrieve secrets, store programs, compute on secrets, and fetch information about clusters and nodes. nil-cli is a cli-based [Nillion Client](nillion-client.md)
