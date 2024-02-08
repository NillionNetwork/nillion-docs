# Nillion SDK and Tools

The Nillion SDK includes tools for generating keys, compiling Nada programs, simulating programs, running a local network, and connecting to the Nillion network via your cli. After installing the Nillion SDK, you'll have access to tools:&#x20;

* **user-keygen**: a tool that generates a [user key](concepts.md#user-key)
* **node-keygen**: a tool that generates a [node key](concepts.md#node-key)
* **node-key2peerid**: a tool that creates a [peer id](concepts.md#peer-id) from your node key
* **pynadac**: a tool that compiles Nada programs; pynadac takes an input program defined in PyNada and produces a compiled version of it ready to be run with program-simulator or stored on the Nillion Network
* **program-simulator**: a tool that simulates program execution against a stripped down version of a Nillion cluster
* **run-local-cluster**: a tool that allows you to spin up and interact with a local test Nillion [cluster](concepts.md#clusters) that is completely isolated within your computer
* **nil-cli**: a tool for interacting with the Nillion Network from the command line to store secrets, retrieve secrets, store programs, compute on secrets, and fetch information about clusters and nodes. nil-cli is a cli-based [Nillion Client](nillion-client.md)
