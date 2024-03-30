import SdkInstallation from './\_sdk-installation.mdx';

# Nillion SDK and Tools

The Nillion SDK includes CLI tools for generating user and node keys, compiling Nada programs, running programs locally, running a nillion devnet, and connecting to the Nillion network.

## Installation

<SdkInstallation/>

## Nillion SDK tools

After installation, the following SDK tools are available globally:

- [`nilup`](nilup): a tool to install the Nillion SDK and manage Nillion SDK versions.
- [`nillion`](nillion): a cli-based [Nillion Client](nillion-client.md) and tool for interacting with the Nillion Network from the command line to generate user keys, generate node keys, store secrets, retrieve secrets, store programs, compute on secrets, and fetch information about clusters and nodes.
- [`nillion-devnet`](nillion-devnet): a tool that allows you to spin up and interact with a local test Nillion [network](concepts.md#clusters) that is completely isolated within your computer
- [`node-key2peerid`](node-key2peerid): a tool that creates a [peer id](concepts.md#peer-id) from your node key
- [`nada`](nada): a tool to manage Nada projects (create project, compile, run, and test programs, generate tests, etc.).
- [`nada-run`](nada-run): a tool that executes programs against a stripped down version of a Nillion devnet
- [`pynadac`](pynadac): a tool that compiles Nada programs; `pynadac` takes an input program defined in Nada and produces a compiled version of it ready to be run with nada-run or stored on the Nillion Network

## Command structure

Nillion SDK tool commands follow a structured format:

    ```bash

    <tool> [options] <command>

    ````

For example, to generate a user key using the nillion command, run:

    ```bash
    nillion user-key-gen user.key
    ```

To get full usage details including a comprehensive list of global commands and options available for a specific tool, run:

    ```bash
    <tool> --help
    ```

For example, to view the available commands for the nada tool, run:

    ```bash
    nada --help
    ```
