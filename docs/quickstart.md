import DownloadSDK from '@site/src/components/DownloadSDK/downloadSDK';

# Developer Quickstart

Start building on Nillion. This quickstart will walk you through

1. Installing the Nillion SDK
2. Setting up a developer environment with nillion-python-starter
3. Running a local network (cluster of nodes)
4. Writing your first Nada program
5. Connecting to the network with NillionClient to store secrets, store programs, and compute on programs with stored secrets

## Download Binaries

<DownloadSDK/>

## Install the Nillion SDK

The [Nillion SDK](nillion-sdk-and-tools) includes tools for generating node keys, peer ids, and user keys, compiling Nada code, simulating programs, running a local network, and connecting to the Nillion network via your cli. Install the Nillion SDK from binaries to have access to SDK tools including nil-cli, node-key2peerid, node-keygen, program-simulator, pynadac, run-local-cluster, and user-keygen.

### SDK Installation

Decompress the Nillion SDK binaries and store the resulting folder on your machine

```bash
# suggested naming convention: nillion-binaries/{version}/{platform}
/Users/steph/Desktop/nillion-binaries/sdk-v2024-02-06-65a7e7887/aarch64-apple-darwin
```

## Clone the Nillion python starter repo

The [Nillion Python Starter](https://github.com/nillion-oss/nillion-python-starter) repo that has everything you need to start building. Clone the repo:

```bash
git clone https://github.com/nillion-oss/nillion-python-starter.git
cd nillion-python-starter
```

### Install script dependencies

There are a few pre-reqs for using the python starter repo: make sure you have foundry, pidof, and grep installed on your machine.

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
https://github.com/nillion-oss/nillion-python-starter/blob/main/.env.sample#L3-L11
```

### Activate the virtual environment

These scripts activate a python virtual environment at .venv and install dependencies listed in the `requirements.txt` file

```bash
source ./activate_venv.sh
pip install -r requirements.txt
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
https://github.com/nillion-oss/nillion-python-starter/blob/main/programs/tiny_secret_addition_complete.py
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

### Add a Party

In Nada you have to declare the parties involved in the computation through the `Party` type. A `Party` is defined with a name.

- Here’s an example of a `Party`:
  ```python
  Party(name="Steph")
  ```

Create party1, a `Party` named “Party1”

```python
from nada_dsl import *
def nada_main():

    party1 = Party(name="Party1")
```

Nada programs have inputs. An `Input` is defined with a name and a party, which is the `Party` providing the input.

- Here’s an example of an `Input`:
  ```python
  Input(name="numberOfDogs", party=Party(name="Steph"))
  ```

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

These categories are combined into types like SecretInteger, which are used to type an Input. See all types [LINK TO ALL TYPES]

- Here’s an example of a SecretInteger Input provided by Steph
  ```python
  steph = Party(name="Steph")
  stephs_secret_int = SecretInteger(Input(name="numberOfDogs", party=steph))
  ```

### Create 2 secret integers

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
https://github.com/nillion-oss/nillion-python-starter/blob/main/client_single_party_compute/addition_simple.py#L15-L36
```

When a secret is stored, the network returns its store_id.

## Compute using secrets

The second half of the `client_single_party_compute/tiny_secret_addition.py` example has code for running computation. We create compute bindings to set the program input and output parties. The second secret my_int2: 10 is added at computation time rather than being stored in the network ahead of time. Then compute is run and the output party gets the result.

### Review full example

```yaml reference showGithubLink
https://github.com/nillion-oss/nillion-python-starter/blob/main/client_single_party_compute/addition_simple.py#L15-L100
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

- running other single party program examples in the [client_single_party_compute folder](https://github.com/nillion-oss/nillion-python-starter/tree/main/client_single_party_compute)

- leveling up: run multi party examples in the [client_multi_party_compute folder](https://github.com/nillion-oss/nillion-python-starter/tree/main/client_multi_party_compute)

- learning how to permission secrets (storing and retrieving permissioned secrets, revoking permissions) in the [permissions folder](https://github.com/nillion-oss/nillion-python-starter/tree/main/permissions)
