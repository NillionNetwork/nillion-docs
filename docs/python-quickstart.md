import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import IframeVideo from '@site/src/components/IframeVideo/index';
import SdkInstallation from './\_sdk-installation.mdx';

# Python Developer Quickstart

Welcome to the Python Quickstart. By the end of this guide, you will have:

1. Installed the [Nillion SDK](https://docs.nillion.com/nillion-sdk-and-tools) and set up your dev environment
2. Written, compiled, and tested your first nada program using the `nada` tool
3. Connected to the local devnet and run your program using the Python client

Once you have finished, explore more examples and tutorials in the [Python examples repo](https://github.com/NillionNetwork/python-examples) to continue your Nillion developer journey!

## Install the Nillion SDK tools

<SdkInstallation/>

## Fork & clone the QuickStart repo and set up environment

The [Nillion Python Starter repo](https://github.com/NillionNetwork/nillion-python-starter) has everything you need to start building.

1. Fork the repo on GitHub - it will be forked into a repo called `your-github-username/nillion-python-starter`
2. Clone the forked repo
   ```bash
   git clone https://github.com/<your-github-username>/nillion-python-starter.git
   cd nillion-python-starter
   ```
3. Ensure you have python3.11 or above:

   :::tip
   
   Use these commands to confirm that you have python3 (version >=3.11) and pip installed:
   
   ```bash
   python3 --version
   python3 -m pip --version
   ```

4. Create and activate a virtual environment
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```

5. Install the requirements
   ```bash
   pip install --upgrade -r requirements.txt
   ```

You now have everything we need to start your Nillion developer journey. We will work in the `quickstart` directory, however, if you ever get stuck, you can see a fully completed version of the quickstart in the `quickstart_complete` directory.

## Write your first nada program

The Nillion Network uses [Nada](https://docs.nillion.com/nada-lang), our MPC language, to define MPC programs. The first implementation of Nada is a Python DSL (Domain Specific Language), called Nada. In this section we will write a simple program that adds two numbers together.

### Setup your project with the nada tool

Before we start writing your first nada program, we will use the `nada` tool to create our nada project which we will call `nada_quickstart_programs`.

```bash
cd quickstart
nada init nada_quickstart_programs
```

This will create a directory called `nada_quickstart_programs`.

### Your first program
The code for the finished program is below - it is a simple program that has one party and adds two secret integer inputs together.

```python
from nada_dsl import *

def nada_main():

    party1 = Party(name="Party1")

    my_int1 = SecretInteger(Input(name="my_int1", party=party1))

    my_int2 = SecretInteger(Input(name="my_int2", party=party1))

    new_int = my_int1 + my_int2

    return [Output(new_int, "my_output", party1)]
```

Now we will write it from scratch, explaining how it works as we go. Once we have written the program, we will use the `nada` tool to run and test it.

1. Create a program file:
   ```bash
   cd quickstart/nada_quickstart_programs/src
   touch secret_addition.py
   ```
2. Write or copy the program above into this file

### Understanding the program you have just written

We will now go through the program slowly, and explain what is each part is doing. 

1. First we must import nada_dsl and create a function nada_main() - this function will contain our programs code.
   ```python
   from nada_dsl import *
   
   def nada_main():
   ```
2. Add a party
   ```python
   from nada_dsl import *
   
   def nada_main():
   
       party1 = Party(name="Party1")
   ```

   This is a one party program, however you can add multiple parties analogously, for example we could define `party2 = Party(name="Party2")`.
3. Add inputs to the program
   ```python
   from nada_dsl import *
   
   def nada_main():
   
       party1 = Party(name="Party1")
   
       my_int1 = SecretInteger(Input(name="my_int1", party=party1))
   
       my_int2 = SecretInteger(Input(name="my_int2", party=party1))
   ```
   
   This program has two inputs, both secret integers. Each input must have a `name` and a `party` associated to it. Currently in nada you can only compute on secret or public integers (and rationals by using the `nada-algebra` library).

4. Compute on the inputs
   ```python
   from nada_dsl import *
   
   def nada_main():
   
       party1 = Party(name="Party1")
   
       my_int1 = SecretInteger(Input(name="my_int1", party=party1))
   
       my_int2 = SecretInteger(Input(name="my_int2", party=party1))
   
       new_int = my_int1 + my_int2
   ```
   This performs a simple addition on the inputs. For all other built in operations available in nada, [see here](https://docs.nillion.com/nada-lang-operators).

5. Return the output of the program
   ```python
   from nada_dsl import *
   
   def nada_main():
   
       party1 = Party(name="Party1")
   
       my_int1 = SecretInteger(Input(name="my_int1", party=party1))
   
       my_int2 = SecretInteger(Input(name="my_int2", party=party1))
   
       new_int = my_int1 + my_int2
   
       return [Output(new_int, "my_output", party1)]
   ```
   To output the result of a program, we must provide a name - in this case my_output - and a party to whom the output is provided - in this case party1.

## Compile, run and test your program

Make sure you are in the `quickstart/nada_quickstart_programs` directory.

Now we will use the `nada` tool to compile, run and test the program we have just written. More information about the nada tool can be found [here](https://docs.nillion.com/nada).

1. Add your program to nada-project.toml

   For the nada tool to know about our program, we need to add the following to the to the nada-project.toml file.
   ```bash
   [[programs]]
   path = "src/secret_addition.py"
   name = "secret_addition"
   prime_size = 128
   ```

2. Build (compile) our program
   ```bash
   nada build
   ```

   This will compile all programs listed in the nada-project.toml file. You will see the binary files outputted in the nada-programs/target directory.

3. Generate test
   ```bash
   nada generate-test --test-name secret_addition_test secret_addition
   ```

   This uses the nada tool to generate a test, that will be stored in tests. Here secret_addition_test is the name of the test, and secret_addition is the name of the program we want to test.

4. Run the program
   ```bash
   nada run secret_addition_test
   ```
   
   Now we run the program. This uses the inputs defined in the test file (tests/secret_addition_test.yaml) and runs the program and prints the result. Make note of the result, we will need it next.

5. Test the program
   ```bash
   nada test secret_addition_test
   ```
   
   Finally, we test the program.

## Connect to the devnet and run your program
We have written and tested our nada program, now we need to run it against the local devnet. In this section we will:

1. Spin up a local Nillion devnet.
2. Use the Nillion python client to interact with the local devnet and compute the program we have just written.

### Spinning up a local Nillion devnet
Spinning up a local Nillion devnet is easy, simply run the following command:

```bash
nillion-devnet
```

All configurations of the devnet you will need are written to the following environment file `/Users/<user>/.config/nillion/nillion-devnet.env`
You need to leave the devnet running in the background while you run your program in the next section.

### Using the Python client to run your program

In this section, we will use the python client run a computation on the local devnet. 

We will write the following code within the `quickstart/client_code` directory in the `run_my_first_program.py` [file here](https://github.com/NillionNetwork/nillion-python-starter/blob/main/quickstart/client_code/run_my_first_program.py). You can [view the completed client code here](https://github.com/NillionNetwork/nillion-python-starter/blob/main/quickstart_complete/client_code/secret_addition_complete.py), feel free to refer back to it whenever you need.

1. Import the packages we will be using
    
   ```python
   import asyncio
   import os
   
   from nillion_client import (
      InputPartyBinding,
      Network,
      NilChainPayer,
      NilChainPrivateKey,
      OutputPartyBinding,
      Permissions,
      SecretInteger,
      VmClient,
      PrivateKey,
   )
   from dotenv import load_dotenv
   
   home = os.getenv("HOME")
   load_dotenv(f"{home}/.config/nillion/nillion-devnet.env")
   
   async def main():
   ```
    
    Here the `nillion-client` imports will help us interact with the local chain and abstract away some of the technical details when using the python client, and finally we load the `.env` file containing the configs of the local devnet.
    
2. Obtain the local devnet config and create a user, payment config & node key, then initialize the client and topup the balance.
    
    ```python
    # 2. Initial setup, Initialize NillionClient against nillion-devnet
    # Use the devnet configuration generated by `nillion-devnet`
    network = Network.from_config("devnet")

    # Create payments config and set up Nillion wallet with a private key to pay for operations
    nilchain_key: str = os.getenv("NILLION_NILCHAIN_PRIVATE_KEY_0")  # type: ignore
    payer = NilChainPayer(
        network,
        wallet_private_key=NilChainPrivateKey(bytes.fromhex(nilchain_key)),
        gas_limit=10000000,
    )

    # Use a random key to identify ourselves
    signing_key = PrivateKey()
    client = await VmClient.create(signing_key, network, payer)
    party_name = "Party1"
    program_name = "secret_addition_complete"
    program_mir_path = f"../nada_quickstart_programs/target/{program_name}.nada.bin"
   
   # Adding funds to the client balance so the upcoming operations can be paid for
    funds_amount = 1000
    print(f"💰  Adding some funds to the client balance: {funds_amount} uNIL")
    await client.add_funds(funds_amount)
    ```
    
    Here we load the network config created by `nillion-devnet`, then setup payment config and initialize the NillionClient. Finally we are adding some funds to pay for the operations coming next.
    
3. Store a program
    
    ```python
    # 3. Store the program
    print("-----STORE PROGRAM")

    # Store program
    program_mir = open(program_mir_path, "rb").read()
    program_id = await client.store_program(program_name, program_mir).invoke()

    # Print details about stored program
    print(f"Stored program_id: {program_id}")
    ```
    
    Here we store the program and construct the `program_id` as we will need this later. Note: program ids always follow the same structure.
    
4. Store a secret
    
    ```python
    # 4. Create the 1st secret, add permissions and store it in the network
    print("-----STORE SECRETS")

    # Create a secret
    values = {
        "my_int1": SecretInteger(500),
    }

    # Create a permissions object to attach to the stored secret
    permissions = Permissions.defaults_for_user(client.user_id).allow_compute(
        client.user_id, program_id
    )

    # Store a secret
    values_id = await client.store_values(
        values, ttl_days=5, permissions=permissions
    ).invoke()
    ```
    
    First we create a secret object, making sure the name of the secret (`my_int1`) matches the name of the secret in the program. Then we create compute permissions; even if a party is computing on its own secret it still needs to grant permissions. Finally we pass the permissions to the `store_values` method which stores the secret in the network.
    
5. Setup and action the computation
    
    ```python
    # 5. Create compute bindings to set input and output parties, add a computation time secret & run the computation
    print("-----COMPUTE")

    # Bind the parties in the computation to the client to set input and output parties
    input_bindings = [InputPartyBinding(party_name, client.user_id)]
    output_bindings = [OutputPartyBinding(party_name, [client.user_id])]

    # Create a computation time secret to use
    compute_time_values = {"my_int2": SecretInteger(10)}

    # Compute, passing in the compute time values as well as the previously uploaded value.
    print(f"Invoking computation using program {program_id} and values id {values_id}")
    compute_id = await client.compute(
        program_id,
        input_bindings,
        output_bindings,
        values=compute_time_values,
        value_ids=[values_id],
    ).invoke()
    ```
    
    Before running a computation, we have to create bindings which set the input and output parties for the program - in this case, this is all the same party, `Party1`. We then add a computation time secret which will act as the second input to the program (`my_int2`).
    
6. Return the result of the computation
    
    ```python
    # 6. Return the computation result
    print(f"The computation was sent to the network. compute_id: {compute_id}")
    result = await client.retrieve_compute_results(compute_id).invoke()
    print(f"✅  Compute complete for compute_id {compute_id}")
    print(f"🖥️  The result is {result}")
    balance = await client.balance()
    print(f"💰  Final client balance: {balance.balance} uNIL")
    client.close()
    return result
    ```
    
    Finally we return the result of the computation. Here we await for the next event to be available in the network, and then print the result and remaining balance.

7. Run the completed python script

   Ensure you can run the script by putting the following at the end:
   
   ```python
   if __name__ == "__main__":
       asyncio.run(main())
   ```
   
   Run the script to store the program, store secrets and compute on the program.
   
   ```bash
   cd client_code
   mv run_my_first_program.py secret_addition.py
   python3 secret_addition.py
   ```
   
   You will now see the program executing and the result printed.

## Keep exploring

Congratulations, you've successfully written your first single party Nada program and run it on the local devnet. Checkout the resources below to continue your Nillion developer journey. 

- Python examples repo:
  - Examples:
    - [single party examples](https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/core_concept_single_party_compute)
    - [multi-party examples](https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/core_concept_multi_party_compute)
    - [storing and retrieving integers and blobs](https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/core_concept_store_and_retrieve_secrets)
    - [using permissions](https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/core_concept_permissions)
  - Tutorials:
    - [Voting schemes](https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/voting_tutorial)
    - [Millionaire's tutorial](https://github.com/NillionNetwork/python-examples/tree/main/examples_and_tutorials/millionaires_problem_example)
      <IframeVideo videoSrc="https://www.loom.com/embed/d77604f001be4293b1b0c72c67620071?sid=d8dba7d7-0643-47cf-bf44-8b8b33c18cd6"/>
