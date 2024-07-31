import DocCardList from '@theme/DocCardList';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Python Client

[py-nillion-client](https://pypi.org/project/py-nillion-client/) is a Python client for building on top of the Nillion Network. It can be used to manage Nada programs, store and retrieve secrets, and run computations.

## Installation

Install the [py-nillion-client](https://pypi.org/project/py-nillion-client/) PyPi package in an existing Python application

```bash
pip install --upgrade py-nillion-client
```

## Usage

### Import Python Client

```python3
import py_nillion_client as nillion
```

### Initialize a client

Initialize an instance of the NillionClient connected to the Nillion Network using [helpers](https://github.com/NillionNetwork/nillion-python-starter/tree/main/helpers) from [nillion-python-starter](https://github.com/NillionNetwork/nillion-python-starter)

<Tabs>
<TabItem value="main" label="main.py" default>
```python 
import os
from dotenv import load_dotenv # pip install python-dotenv
from helpers.nillion_client_helper import create_nillion_client
from helpers.nillion_keypath_helper import getUserKeyFromFile, getNodeKeyFromFile

# Loads environment variables from the .env file
load_dotenv()  

def main():
    userkey = getUserKeyFromFile(os.getenv("NILLION_USERKEY_PATH_PARTY_1"))
    nodekey = getNodeKeyFromFile(os.getenv("NILLION_NODEKEY_PATH_PARTY_1"))
    # Initialize Nillion Client instance
    client = create_nillion_client(userkey, nodekey)
    # Print the user id
    print(client.user_id)

if __name__ == "__main__":
    main()
```
</TabItem>

<TabItem value="client" label="nillion_client_helper.py">
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/main/helpers/nillion_client_helper.py
```
</TabItem>

<TabItem value="keypath" label="nillion_keypath_helper.py">
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/main/helpers/nillion_keypath_helper.py
```
</TabItem>

<TabItem value="env" label=".env">
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/main/.env.sample
```
</TabItem>
<TabItem value="bootstrap" label="bootstrap_script">
```python reference showGithubLink
https://github.com/NillionNetwork/nillion-python-starter/blob/main/bootstrap-local-environment.sh
```
</TabItem>
</Tabs>
## Resources

<DocCardList/>
