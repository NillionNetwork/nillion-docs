import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import IframeVideo from '@site/src/components/IframeVideo/index';
import SdkInstallation from './\_sdk-installation.mdx';
import FoundryInstallation from './\_foundry-installation.mdx';
import QuickstartIntro from './\_quickstart-intro.mdx';
import QuickstartNadaComplete from './\_quickstart-write-nada-complete.mdx';
import QuickstartNada from './\_quickstart-write-nada.mdx';

# Python Developer Quickstart

<QuickstartIntro/>

## Install the Nillion SDK tools

<SdkInstallation/>

## Clone the Nillion python starter repo

The [Nillion Python Starter](https://github.com/NillionNetwork/nillion-python-starter) repo has everything you need to start building. Clone the repo:

```bash
git clone https://github.com/NillionNetwork/nillion-python-starter.git
cd nillion-python-starter
```

### Install script dependencies

There are a few pre-reqs for using the python starter repo: make sure you have python3 (version >=3.11) and pip, foundry, pidof, and grep installed on your machine.

- [python3 version >=3.11](https://www.python.org/downloads/) version 3.11 or higher with a working [pip](https://pip.pypa.io/en/stable/getting-started/) installed

  :::tip

  Use these commands to confirm that you have python3 (version >=3.11) and pip installed:

  ```
  python3 --version
  python3 -m pip --version
  ```

  :::

- anvil tool from [foundry](https://book.getfoundry.sh/getting-started/installation), which can be installed with:

  <FoundryInstallation/>

- [pidof](https://command-not-found.com/pidof)
- [grep](https://command-not-found.com/grep)

### Create a .env file by copying the sample

```bash
cp .env.sample .env
```

### Activate the virtual environment

These scripts activate a python virtual environment at .venv and install py_nillion_client and nada_dsl packages + dependencies listed in the `requirements.txt` file

```bash
bash ./create_venv.sh && source .venv/bin/activate
```

## Bootstrap your local environment and run the nillion-devnet

The bootstrap-local-environment script installs Nada DSL and Nillion Client, then uses the [nillion-devnet](/nillion-devnet) Nillion SDK tool to spin up a local test Nillion cluster that is completely isolated within your computer. The script also populates your .env file with keys, bootnodes, cluster, and payment info that will allow you to connect to the local cluster network.

```bash
./bootstrap-local-environment.sh
```

:::tip

You can stop the local cluster at any time by running

```bash
killall nillion-devnet
```

:::

## Write a Nada program

<QuickstartNadaComplete/>

Create a python file called `tiny_secret_addition.py` in the programs folder. This is where you will write your Nada program code.

```python
cd programs
touch tiny_secret_addition.py
```

<QuickstartNada/>

## Compile the Nada program

Nada programs need to be compiled ahead of being stored. Navigate back to the root of the repo, and compile all programs in the programs folder, including tiny_secret_addition.py, with the compile script. The [compile_programs.sh](https://github.com/NillionNetwork/nillion-python-starter/blob/main/compile_programs.sh) script runs the [pynadac SDK tool](pynadac) on all files in the programs folder.

```bash
cd ..
sh compile_programs.sh
```

This results in programs-compiled, a folder of compiled programs. Check programs-compiled for your compiled output, called `tiny_secret_addition.nada.bin`

## Write a Python script to interact with nillion-devnet

Let's write a Python script that will interact with nillion-devnet. This Python script will:

1. Initialize NillionClient against nillion-devnet
2. Get the user id and party id from NillionClient
3. Store a compiled Nada program in the network
4. Create the 1st secret with bindings to the program
5. Store the secret in the network
6. Create compute bindings to set input and output parties
7. Compute on the program with 1st secret from the network, and the 2nd secret, provided at compute time
8. Print the computation result

Check out the completed Python script [here](https://github.com/NillionNetwork/nillion-python-starter/blob/dave-restructure/examples_and_tutorials/core_concept_single_party_compute/tiny_secret_addition_complete.py)

### Complete the python script 🎯 TODOs

Open the [core_concept_single_party_compute/tiny_secret_addition.py](https://github.com/NillionNetwork/nillion-python-starter/blob/dave-restructure/examples_and_tutorials/core_concept_single_party_compute/tiny_secret_addition.py) file and let's work through the 🎯 TODOs.

:::tip

Open the Nillion [Python Client Reference](/python-client-reference) doc in another tab to search for available classes while completing the 🎯 TODOs.

:::

#### 1. Initialize NillionClient against nillion-devnet

The first step was completed for you. The script uses a `create_nillion_client` helper file to create the instance of `nillion.NillionClient` used throught the script

<Tabs>
  <TabItem value="todo-1" label="Todo #1" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/dave-restructure/examples_and_tutorials/core_concept_single_party_compute/tiny_secret_addition.py#L14-L24
```
  </TabItem>
  <TabItem value="complete-1" label="Complete #1" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/dave-restructure/examples_and_tutorials/core_concept_single_party_compute/tiny_secret_addition_complete.py#L14-L24
```
  </TabItem>
  <TabItem value="nillion-client" label="create_nillion_client helper" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/main/helpers/nillion_client_helper.py
```
  </TabItem>
</Tabs>

#### 2. Get the user id and party id from NillionClient

<Tabs>
  <TabItem value="todo-1" label="Todo #2" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/dave-restructure/examples_and_tutorials/core_concept_single_party_compute/tiny_secret_addition.py#L26-L28
```
  </TabItem>
  <TabItem value="complete-1" label="Complete #2" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/dave-restructure/examples_and_tutorials/core_concept_single_party_compute/tiny_secret_addition_complete.py#L26-L29
```
  </TabItem>
</Tabs>

#### 3. Store a compiled Nada program in the network

<Tabs>
  <TabItem value="todo-3" label="Todo #3" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/dave-restructure/examples_and_tutorials/core_concept_single_party_compute/tiny_secret_addition.py#L29-L37
```
  </TabItem>
  <TabItem value="complete-3" label="Complete #3" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/dave-restructure/examples_and_tutorials/core_concept_single_party_compute/tiny_secret_addition_complete.py#L30-L44
```
  </TabItem>
</Tabs>

#### 4. Create the 1st secret with bindings to the program

<Tabs>
  <TabItem value="todo-4" label="Todo #4" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/dave-restructure/examples_and_tutorials/core_concept_single_party_compute/tiny_secret_addition.py#L38-L44
```
  </TabItem>
  <TabItem value="complete-4" label="Complete #4" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/dave-restructure/examples_and_tutorials/core_concept_single_party_compute/tiny_secret_addition_complete.py#L45-L58
```
  </TabItem>
</Tabs>

#### 5. Store the secret in the network

When we wrote our Nada program, we created 2 secret integers that are inputs to the program. We'll store one of these secrets in the network using the Python Client, and provide the other secret at compute time. Let's store the first secret.

<Tabs>
  <TabItem value="todo-5" label="Todo #5" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/dave-restructure/examples_and_tutorials/core_concept_single_party_compute/tiny_secret_addition.py#L45-L47
```
  </TabItem>
  <TabItem value="complete-5" label="Complete #5" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/dave-restructure/examples_and_tutorials/core_concept_single_party_compute/tiny_secret_addition_complete.py#L59-L65
```
  </TabItem>
</Tabs>

#### 6. Create compute bindings to set input and output parties

<Tabs>
  <TabItem value="todo-6" label="Todo #6" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/dave-restructure/examples_and_tutorials/core_concept_single_party_compute/tiny_secret_addition.py#L48-L50
```
  </TabItem>
  <TabItem value="complete-6" label="Complete #6" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/dave-restructure/examples_and_tutorials/core_concept_single_party_compute/tiny_secret_addition_complete.py#L66-L70
```
  </TabItem>
</Tabs>

#### 7. Compute on the program with 1st secret from the network, and the 2nd secret, provided at compute time

<Tabs>
  <TabItem value="todo-7" label="Todo #7" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/dave-restructure/examples_and_tutorials/core_concept_single_party_compute/tiny_secret_addition.py#L51-L54
```
  </TabItem>
  <TabItem value="complete-7" label="Complete #7" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/dave-restructure/examples_and_tutorials/core_concept_single_party_compute/tiny_secret_addition_complete.py#L71-L84
```
  </TabItem>
</Tabs>

#### 8. Print the computation result

<Tabs>
  <TabItem value="todo-8" label="Todo #8" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/dave-restructure/examples_and_tutorials/core_concept_single_party_compute/tiny_secret_addition.py#L55-L56
```
  </TabItem>
  <TabItem value="complete-8" label="Complete #8" default>
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/dave-restructure/examples_and_tutorials/core_concept_single_party_compute/tiny_secret_addition_complete.py#L85-L93
```
  </TabItem>
</Tabs>

### Run the completed python script

Run the script to store the program, store secrets and compute on the program.

```bash
cd core_concept_single_party_compute
python3 tiny_secret_addition.py
```

Check out the network result on tiny_secret_addition. Update the SecretInteger input values and run the program again.

## Keep exploring

You've successfully written your first single party Nada program, stored the program on the network, stored secrets on the network, and run compute against secrets. Keep exploring by

- running other examples

  - single party program examples in the [core_concept_single_party_compute folder](https://github.com/NillionNetwork/nillion-python-starter/tree/dave-restructure/examples_and_tutorials/core_concept_single_party_compute)
  - multi party examples in the [core_concept_multi_party_compute folder](https://github.com/NillionNetwork/nillion-python-starter/tree/dave-restructure/examples_and_tutorials/core_concept_multi_party_compute)
  - permissioning secrets examples in the in the [permissions folder](https://github.com/NillionNetwork/nillion-python-starter/tree/dave-restructure/examples_and_tutorials/core_concept_permissions) for storing and retrieving permissioned secrets and revoking permissions

- reading about [Nillion concepts](/concepts) and the [Nada Language](nada-lang)

- learning how to interact with and manage programs, secrets, and permissions on the Nillion Network with [Nillion Client](/nillion-client)
- solving the [millionaires problem](/multi-party-computation#classic-scenario-the-millionaires-problem) in the [millionaires_problem_example folder](https://github.com/NillionNetwork/nillion-python-starter/tree/dave-restructure/examples_and_tutorials/millionaires_problem_example)

### Solve the millionaires problem

<IframeVideo videoSrc="https://www.loom.com/embed/d77604f001be4293b1b0c72c67620071?sid=d8dba7d7-0643-47cf-bf44-8b8b33c18cd6"/>
