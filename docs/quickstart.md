import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DownloadSDK from '@site/src/components/DownloadSDK/downloadSDK';

# Developer Quickstart

Start building on Nillion. This quickstart will walk you through

1. Installing the Nillion SDK
2. Setting up a developer environment with [nillion-python-starter](https://github.com/NillionNetwork/nillion-python-starter)
3. Running a local network (cluster of nodes)
4. Writing your first Nada program
5. Connecting to the network with NillionClient to store secrets, store programs, and compute on programs with stored secrets

## Download Binaries

<DownloadSDK/>

## Install the Nillion SDK

The [Nillion SDK](nillion-sdk-and-tools) includes tools for generating node keys, peer ids, and user keys, compiling Nada code, simulating programs, running a local network, and connecting to the Nillion network via your cli. Install the Nillion SDK from binaries to have access to SDK tools including nil-cli, node-key2peerid, node-keygen, program-simulator, pynadac, run-local-cluster, and user-keygen.

### Set up folder structure

Create a `nillion-binaries` folder. Inside that folder create a version folder like `v2024-03-20-123456789`.

### Save binaries

<Tabs>
  <TabItem value="apple-m1" label="Apple (M1/M2/M3)" default>

#### Decompress SDK binaries

Double-click on `aarch64-apple-darwin` to decompress the folder. Move the decompressed `aarch64-apple-darwin` SDK binaries folder into the version folder. `aarch64-apple-darwin` is the SDK root folder that holds all SDK tools (nillion, nilup, node-key2peerid, node-keygen, program-simulator, pynadac, run-local-cluster, and user-keygen).

#### Download PyNada DSL and Python Client binaries

Download the PyNada DSL binaries and Python Client binaries. Save these in the version folder.

#### Resulting binaries folder structure

```
├── Desktop
│   ├── nillion-binaries
│   │   ├── v2024-03-20-123456789
│   │   │   ├── aarch64-apple-darwin
│   │   │   │   ├── foundry.sh
│   │   │   │   ├── nillion
│   │   │   │   ├── nilup
│   │   │   │   ├── node-key2peerid
│   │   │   │   ├── node-keygen
│   │   │   │   ├── program-simulator
│   │   │   │   ├── pynadac
│   │   │   │   ├── run-local-cluster
│   │   │   │   ├── user-keygen
│   │   │   ├── nada_dsl-0.1.0-py3-none-any.whl
│   │   │   ├── py_nillion_client-0.1.1-cp37-abi3-macosx_11_0_arm64.whl
```

  </TabItem>
  <TabItem value="apple-intel" label="Apple (Intel chip)" default>

#### Decompress SDK binaries

Double-click on `x86_64-apple-darwin` to decompress the folder. Move the decompressed `x86_64-apple-darwin` SDK binaries folder into the version folder. `x86_64-apple-darwin` is the SDK root folder that holds all SDK tools (nillion, nilup, node-key2peerid, node-keygen, program-simulator, pynadac, run-local-cluster, and user-keygen).

#### Download PyNada DSL and Python Client binaries

Download the PyNada DSL binaries and Python Client binaries. Save these in the version folder.

#### Resulting binaries folder structure

```
├── Desktop
│   ├── nillion-binaries
│   │   ├── v2024-03-20-123456789
│   │   │   ├── x86_64-apple-darwin
│   │   │   │   ├── foundry.sh
│   │   │   │   ├── nillion
│   │   │   │   ├── nilup
│   │   │   │   ├── node-key2peerid
│   │   │   │   ├── node-keygen
│   │   │   │   ├── program-simulator
│   │   │   │   ├── pynadac
│   │   │   │   ├── run-local-cluster
│   │   │   │   ├── user-keygen
│   │   │   ├── nada_dsl-0.1.0-py3-none-any.whl
│   │   │   ├── py_nillion_client-0.1.1-cp37-abi3-macosx_10_7_x86_64.whl
```

  </TabItem>
  <TabItem value="linux-arm" label="Linux (ARM chip)">

#### Decompress SDK binaries

Decompress the SDK binaries folder with the following command:

```bash

tar -xzvf {path/to/aarch64-unknown-linux}

```

Move the decompressed `aarch64-unknown-linux` SDK binaries folder into the version folder. `aarch64-unknown-linux` is the SDK root folder that holds all SDK tools (nillion, nilup, node-key2peerid, node-keygen, program-simulator, pynadac, run-local-cluster, and user-keygen).

#### Download PyNada DSL and Python Client binaries

Download the PyNada DSL binaries and Python Client binaries. Save these in the version folder.

#### Binaries folder structure

```
├── Desktop
│   ├── nillion-binaries
│   │   ├── v2024-03-20-123456789
│   │   │   ├── aarch64-unknown-linux
│   │   │   │   ├── foundry.sh
│   │   │   │   ├── nillion
│   │   │   │   ├── nilup
│   │   │   │   ├── node-key2peerid
│   │   │   │   ├── node-keygen
│   │   │   │   ├── program-simulator
│   │   │   │   ├── pynadac
│   │   │   │   ├── run-local-cluster
│   │   │   │   ├── user-keygen
│   │   │   ├── nada_dsl-0.1.0-py3-none-any.whl
│   │   │   ├── py_nillion_client-0.1.1-cp37-abi3-manylinux_2_17_aarch64.manylinux2014_aarch64.whl
```

  </TabItem>
    <TabItem value="linux-amd" label="Linux (Intel/AMD chip)">

#### Decompress SDK binaries

Decompress the SDK binaries folder with the following command:

```bash

tar -xzvf {path/to/x86_64-unknown-linux}

```

Move the decompressed `x86_64-unknown-linux` SDK binaries folder into the version folder. `x86_64-unknown-linux` is the SDK root folder that holds all SDK tools (nillion, nilup, node-key2peerid, node-keygen, program-simulator, pynadac, run-local-cluster, and user-keygen).

#### Download PyNada DSL and Python Client binaries

Download the PyNada DSL binaries and Python Client binaries. Save these in the version folder.

#### Binaries folder structure

```
├── Desktop
│   ├── nillion-binaries
│   │   ├── v2024-03-20-123456789
│   │   │   ├── x86_64-unknown-linux
│   │   │   │   ├── foundry.sh
│   │   │   │   ├── nillion
│   │   │   │   ├── nilup
│   │   │   │   ├── node-key2peerid
│   │   │   │   ├── node-keygen
│   │   │   │   ├── program-simulator
│   │   │   │   ├── pynadac
│   │   │   │   ├── run-local-cluster
│   │   │   │   ├── user-keygen
│   │   │   ├── nada_dsl-0.1.0-py3-none-any.whl
│   │   │   ├── py_nillion_client-0.1.1-cp37-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl
```

  </TabItem>
</Tabs>

## Clone the Nillion python starter repo

The [Nillion Python Starter](https://github.com/NillionNetwork/nillion-python-starter) repo has everything you need to start building. Clone the repo:

```bash
git clone https://github.com/NillionNetwork/nillion-python-starter.git
cd nillion-python-starter
```

### Install script dependencies

There are a few pre-reqs for using the python starter repo: make sure you have python3 (version >=3.10) and pip, foundry, pidof, and grep installed on your machine.

- [python3 version >=3.10](https://www.python.org/downloads/) version 3.10 or higher with a working [pip](https://pip.pypa.io/en/stable/getting-started/) installed

  :::tip

  Use these commands to confirm that you have python3 (version >=3.10) and pip installed:

  ```
  python3 --version
  python3 -m pip --version
  ```

  :::

- [foundry](https://book.getfoundry.sh/getting-started/installation)
- [pidof](https://command-not-found.com/pidof)
- [grep](https://command-not-found.com/grep)

### Create a .env file by copying the sample

```bash
cp .env.sample .env
```

Update the following SDK path variables within your .env

- `NILLION_WHL_ROOT` with the path to your folder that contains the Python Client binaries and PyNada DSL binaries (both are .whl files)
- `NILLION_SDK_ROOT` with the path to your decompressed Nillion SDK binaries folder that contains tools: node-keygen, user-keygen, node-key2peerid, nil-cli, program-simulator, pynadac, run-local-cluster
- `NILLION_PYCLIENT_WHL_FILE_NAME` with the file name of your Python Client binaries. This is a py_nillion_client .whl file inside of NILLION_WHL_ROOT

```yaml reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/main/.env.sample#L3-L11
```

<!-- :::tip

To enable more verbose logs for debugging, add the following to your .env file:

```bash
RUST_LOG=debug
```

::: -->

### Activate the virtual environment

These scripts activate a python virtual environment at .venv and install py_nillion_client and nada_dsl packages + dependencies listed in the `requirements.txt` file

```bash
./activate_venv.sh
source .venv/bin/activate
```

## Bootstrap a local Nillion node cluster

The bootstrap-local-environment script installs Nada DSL and Nillion Client, then uses the [run-local-cluster](/run-local-cluster) Nillion SDK tool to spin up a local test Nillion cluster that is completely isolated within your computer. The script also populates your .env file with keys, bootnodes, cluster, and payment info that will allow you to connect to the local cluster network.

```bash
./bootstrap-local-environment.sh
```

:::tip

You can stop the local cluster at any time by running

```bash
killall run-local-cluster
```

:::

## Write a Nada program

The Nillion Network uses [Nada](nada-lang-framework), our MPC language, to define MPC programs. The first implementation of Nada is a Python DSL (Domain Specific Language), called PyNada. Let’s write a tiny Nada program that adds 2 secret numbers. Here’s the code for the finished program we’ll write line by line:

```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/main/programs/tiny_secret_addition_complete.py
```

Create a python file for the Nada program in the programs folder

```python
cd programs
touch tiny_secret_addition.py
```

Open the file and import nada_dsl

```python
from nada_dsl import *
```

Create a function called nada_main() that will contain the code you want to run

```python
from nada_dsl import *
def nada_main():
```

### Add a party

In Nada you have to declare the parties involved in the computation through the `Party` type. A `Party` is defined with a name.

:::info

Here’s an example of a `Party`

```python
Party(name="Steph")
```

:::

Create party1, a `Party` named “Party1”

```python
from nada_dsl import *
def nada_main():

    party1 = Party(name="Party1")
```

### Learn about inputs

Nada programs have inputs. An `Input` is defined with a name and a party, which is the `Party` providing the input.

:::info
Here’s an example of an `Input`:

```python
Input(name="numberOfDogs", party=Party(name="Steph"))
```

:::

Nada program inputs are typed. There are a few categories of types

Secrecy level

- Literal: literal values provided in the program
- Public: visible to all nodes
- Secret: secret values to be handled by the computing nodes as shares or particles

Scalar

- Boolean
- Integer
- Rational
- String

These categories are combined into types like SecretInteger, which are used to type an Input. [See all types](nada-lang-framework#nada-data-types)

:::info
Here’s an example of a SecretInteger Input provided by Steph

```python
steph = Party(name="Steph")
stephs_secret_int = SecretInteger(Input(name="numberOfDogs", party=steph))
```

:::

### Create 2 secret integers inputs

- my_int1, a SecretInteger named “my_int1” owned by Party1
- my_int2, a SecretInteger named “my_int2” owned by Party1

```python
from nada_dsl import *
def nada_main():

    party1 = Party(name="Party1")

    my_int1 = SecretInteger(Input(name="my_int1", party=party1))

    my_int2 = SecretInteger(Input(name="my_int2", party=party1))
```

Add the integers by creating a new variable called new_int and setting it equal to my_int1 + my_int2

```python
from nada_dsl import *
def nada_main():

    party1 = Party(name="Party1")

    my_int1 = SecretInteger(Input(name="my_int1", party=party1))

    my_int2 = SecretInteger(Input(name="my_int2", party=party1))

    new_int = my_int1 + my_int2
```

Finally, Nada programs return an output. The `Output` type is used to declare a named output that will be revealed to a concrete `Party`. The Output has a name and a party as parameters.

### Return the output

Nada programs return an array of outputs.

:::info
Here’s an example of an output. The output is named "total_score", its value is `score_int`, and it can be read by the party named Steph.

```python
Output(score_int, "total_score", Party(name="Steph"))
```

:::

Complete your Nada program by adding a final line that returns an array with one output. The output is named "my_output", its value is `new_int`, and it can be ready by `party1`.

### Resulting Nada program

```python
from nada_dsl import *
def nada_main():

    party1 = Party(name="Party1")

    my_int1 = SecretInteger(Input(name="my_int1", party=party1))

    my_int2 = SecretInteger(Input(name="my_int2", party=party1))

    new_int = my_int1 + my_int2

    return [Output(new_int, "my_output", party1)]
```

🎉 You just wrote your first Nada program! Next, let's compile the program.

## Compile the Nada program

Nada programs need to be compiled ahead of being stored. Navigate back to the root of the repo,and compile all programs in the programs folder, including tiny_secret_addition.py, with the compile script. This script runs the pynadac SDK tool.

```bash
cd ..
./compile_programs.sh
```

This results in programs-compiled, a folder of compiled programs.

## Store the Nada program

Next, store the compiled tiny_secret_addition program in the network with the store_program script. This script runs the nil-cli SDK tool to store your program.

```shell
./store_program.sh programs-compiled/tiny_secret_addition.nada.bin
```

Storing a program results in the stored program_id, the network's reference to the program. The program_id naming convention is `{user_id}/{program_name}`

## Store secrets

When we wrote our Nada program, we created 2 secret integers that are inputs to the program. We'll store one of these secrets in the network using the Python Client, and provide the other secret at compute time.

Open the `client_single_party_compute/tiny_secret_addition.py` file. This file contains code to store secrets and code to compute on the tiny_secret_addition program. Let's look at the first half of the code to understand how to store the first secret, `my_int_1: 500`

### Review secret storage code

```yaml reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/main/client_single_party_compute/addition_simple.py#L15-L38
```

When a secret is stored, the network returns its store_id.

## Compute using secrets

The second half of the `client_single_party_compute/tiny_secret_addition.py` example has code for running computation. We create compute bindings to set the program input and output parties. The second secret my_int2: 10 is added at computation time rather than being stored in the network ahead of time. Then compute is run and the output party gets the result.

### Review full example

```yaml reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/main/client_single_party_compute/addition_simple.py#L15-L100
```

### Run the example

Run the script to store secrets and compute on the program.

```bash
cd client_single_party_compute
python3 tiny_secret_addition.py
```

Check out the network result on tiny_secret_addition. Update the SecretInteger input values and run the program again.

## Keep exploring

You've successfully written your first single party Nada program, stored it on a local network cluster, stored secrets on the network, and run compute against secrets. Keep exploring by

- running other examples

  - single party program examples in the [client_single_party_compute folder](https://github.com/NillionNetwork/nillion-python-starter/tree/main/client_single_party_compute)
  - multi party examples in the [client_multi_party_compute folder](https://github.com/NillionNetwork/nillion-python-starter/tree/main/client_multi_party_compute)
  - permissioning secrets examples in the in the [permissions folder](https://github.com/NillionNetwork/nillion-python-starter/tree/main/permissions) for storing and retrieving permissioned secrets and revoking permissions

- reading about [Nillion concepts](/concepts) and the [Nada-lang framework](nada-lang-framework)

- learning how to interact with and manage programs, secrets, and permissions on the Nillion Network with [Nillion Client](/nillion-client)
