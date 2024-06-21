As a developer, you must have worked with keys or secrets, and needed to store them safely so that it is not publicly accessible. To understand better, let us take example of a fintech startup that needs to store API keys for interfacing with banking services. Traditionally, these secrets might be managed through environment variables or encrypted databases, which, while effective, can pose challenges in terms of scalability and security, especially as the infrastructure grows.

How do you ensure scalability and security? In this guide, you will learn about [Nillion Network](https://nillion.com/) and explore how you can leverage their Python client to store secrets securely, and in a decentralized way. 

## Pre-requisites

Before getting started with the implementation, here are the prerequisites:

- Working knowledge on Python
- [Nillion Python client installed](https://docs.nillion.com/python-client#installation)
- An IDE with Python installed
- [Pip](https://pypi.org/project/pip/) - Python package installer
- Basic cryptography understanding

## Introduction to Nillion

Nillion is a secure computation network that decentralizes the handling of high-value data, much like how blockchains have revolutionized transaction trust. It allows developers use its proprietary language, Nada, to create and manage "blind computation" programs. These programs can be compiled, uploaded, and run on the Nillion Network, enabling secure storage and processing of sensitive data without the need for decryption, thus maintaining data integrity and security.

Nillion addresses common challenges in high-value data management such as secure storage, secure computations on encrypted data, and decentralization. By leveraging privacy-enhancing technologies such as Multi-Party Computation (MPC), Nillion allows for data to be stored and computed on directly within its distributed network. This approach eliminates vulnerabilities associated with traditional decrypt-compute-re-encrypt cycles and facilitates secure, efficient, and decentralized data management.

## Storing secrets with Python client

Using Nillion’s Python client we will be storing a `SecretBlob` and `SecretInteger`

Before we get started with storing secrets with the Python client, we need to:

### Installing the Nillion SDK

1. **Install nilup:**
    
    ```bash
    curl https://nilup.nilogy.xyz/install.sh | bash
    ```
    
2. **Confirm nilup installation:**
    
    ```bash
    nilup -V
    ```
    
3. **Install the latest Nillion SDK version:**
    
    ```bash
    nilup install latest
    nilup use latest
    nilup init
    ```
    
4. **Enable nilup telemetry to understand how the software is used (optional):**
    
    ```bash
    nilup instrumentation enable --wallet quest-<your-eth-wallet-address>
    ```
    
5. **Confirm Nillion tool installation:**
    
    ```bash
    nillion -V
    ```
    

### Clone the Nillion Python starter repo

1. **Clone the repo:**
    
    ```bash
    git clone https://github.com/NillionNetwork/nillion-python-starter.git
    cd nillion-python-starter
    ```
    

### Install script dependencies

1. **Ensure prerequisites (Python 3.11+, pip, foundry, pidof, grep):**
    
    ```bash
    python3 --version
    python3 -m pip --version
    curl -L https://foundry.paradigm.xyz | bash
    foundryup
    ```
    

### Setup environment

1. **Create a .env file:**
    
    ```bash
    cp .env.sample .env
    ```
    
2. **Activate the virtual environment:**
    
    ```bash
    bash ./create_venv.sh && source .venv/bin/activate
    ```
    

### Storing a SecretBlob

Now that the basic setup is done, we will move forward with storing secrets with the Nillion Python client.

**Step 1: Install the Python client**

```bash
pip install py-nillion-client
```

**Step 2: Import necessary libraries**

Import the necessary Python libraries and modules, including `os` for environment variables, `asyncio` for asynchronous operations, and components from Nillion.

```python
import os
import asyncio
from nillion import create_nillion_client, getUserKeyFromFile, getNodeKeyFromFile, Secrets, SecretBlob
```

**Step 3: Set up authentication and initialize Client**

Prepare your environment variables and use them to initialize the Nillion client. Make sure your Nillion API keys and cluster ID are correctly set in your environment variables for security.

```python
async def main():
    cluster_id = os.getenv("NILLION_CLUSTER_ID")
    userkey = getUserKeyFromFile(os.getenv("NILLION_USERKEY_PATH_PARTY_1"))
    nodekey = getNodeKeyFromFile(os.getenv("NILLION_NODEKEY_PATH_PARTY_1"))
    client = create_nillion_client(userkey, nodekey)
```

**Step 4: Create and store the secret**

Define the secret you wish to store and use the `store_secrets` method to save it. Notice how the permissions and bindings are handled.

```python
# Create a SecretBlob
    secret_name = "my_blob"
    secret_value = bytearray("gm, builder!", "utf-8")
    secret_integer = Secrets({
        secret_name: SecretBlob(secret_value),
    })

    # Store the SecretBlob
    store_id = await client.store_secrets(
        cluster_id, None, secret_integer, None
    )

    print(f"The secret is stored at store_id: {store_id}")

```

**Step 5: Execute the Async Function**

Since the main function is asynchronous, you need to run it using `asyncio`.

```python

if __name__ == "__main__":
    asyncio.run(main())
```

### Storing a SecretInteger

**Step 1: Environment Setup**

Make sure the Nillion Python client is installed in your Python environment. Install it using pip if it's not already installed:

```bash
pip install py-nillion-client
```

**Step 2: Import required libraries**

Import the necessary Python libraries and Nillion client components. You'll also need the `asyncio` library for asynchronous programming.

```python
import os
import asyncio
from nillion import create_nillion_client, getUserKeyFromFile, getNodeKeyFromFile, Secrets, SecretInteger
```

**Step 3: Initialize the Nillion client**

Set up your environment variables for secure access and initialize the Nillion client with user and node keys from files specified in the environment variables.

```python

async def main():
    cluster_id = os.getenv("NILLION_CLUSTER_ID")
    userkey = getUserKeyFromFile(os.getenv("NILLION_USERKEY_PATH_PARTY_1"))
    nodekey = getNodeKeyFromFile(os.getenv("NILLION_NODEKEY_PATH_PARTY_1"))
    client = create_nillion_client(userkey, nodekey)
```

**Step 4: Define and store the integer secret**

Create a `SecretInteger` object and store it using the `store_secrets` method. Note the handling of bindings and permissions.

```python
    # Create a SecretInteger
    secret_name = "my_int1"
    secret_value = 100
    secret_integer = Secrets({
        secret_name: SecretInteger(secret_value),
    })

    # Store the SecretInteger
    store_id = await client.store_secrets(
        cluster_id, None, secret_integer, None
    )

    print(f"The secret is stored at store_id: {store_id}")
```

**Step 5: Execute the asynchronous function**

Run the asynchronous main function using `asyncio.run` to execute the storage process.

```python
if __name__ == "__main__":
    asyncio.run(main())
```

## Conclusion

In this guide, you learnt about the importance of storing a secret especially in sensitive sectors like fintech.  Through the code example, you discovered the potential of the Nillion Network to transform how developers handle and secure sensitive data, such as API keys, using decentralized computation methods like Multi-Party Computation (MPC).

If you wish to learn more about Nillion Network, here are some resources:

- [Nillion documentation](https://docs.nillion.com/)
- [Nillion Python client](https://docs.nillion.com/python-client)
- [Storing a secret with Nillion’s python client](https://docs.nillion.com/store-secrets)
- [Nillion forum](https://www.nillhub.com/)
- [Nillion GitHub repository](https://github.com/NillionNetwork)