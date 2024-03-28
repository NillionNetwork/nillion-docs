# Nillion SDK and Tools

The Nillion SDK includes tools for generating keys, compiling Nada programs, running programs locally, running a nillion devnet, and connecting to the Nillion network via your CLI.

## Installation

Follow the instructions in the [Quickstart Installation](quickstart#install-the-nillion-sdk) to install the Nillion SDK and decompress the binaries. The result is a set of Nillion SDK tools.

## Nillion SDK tools

- [`user-keygen`](user-keygen): a tool that generates a [user key](concepts.md#user-key)
- [`node-keygen`](node-keygen): a tool that generates a [node key](concepts.md#node-key)
- [`node-key2peerid`](node-key2peerid): a tool that creates a [peer id](concepts.md#peer-id) from your node key
- [`nilup`](nilup): a tool to manage nillion SDK versions.
- [`nada`](nada): a tool to manage Nada projects (create project, compile, run, and test programs, generate tests, etc.).
- [`pynadac`](pynadac): a tool that compiles Nada programs; `pynadac` takes an input program defined in Nada and produces a compiled version of it ready to be run with nada-run or stored on the Nillion Network
- [`nada-run`](nada-run): a tool that executes programs against a stripped down version of a Nillion devnet
- [`nillion-devnet`](nillion-devnet): a tool that allows you to spin up and interact with a local test Nillion [network](concepts.md#clusters) that is completely isolated within your computer
- [`nillion`](nillion): a tool for interacting with the Nillion Network from the command line to store secrets, retrieve secrets, store programs, compute on secrets, and fetch information about clusters and nodes. nillion is a cli-based [Nillion Client](nillion-client.md)
