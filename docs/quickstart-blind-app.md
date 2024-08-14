import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import IframeVideo from '@site/src/components/IframeVideo/index';
import SdkInstallation from './\_sdk-installation.mdx';
import QuickstartIntro from './\_quickstart-intro.mdx';
import VenvSetup from './\_nada-venv-setup.mdx';
import UnderstandingProgram from './\_understanding-first-nada-program.mdx';
import CompileRunTest from './\_quickstart-compile-run-test.mdx';

# Build a Blind App with the cra-nillion starter repo

:::info

This is the 3rd step in the Blind App Quickstart. Before starting this guide,

1. [Install the Nillion SDK](/quickstart-install)
2. [Create a Nada project](/quickstart-nada) and write your first Nada program

:::

The [cra-nillion Starter Repo](https://github.com/NillionNetwork/cra-nillion) repo is a Create React App which has everything you need to start building your blind app.

## Clone the CRA-Nillion JavaScript starter repo

Make sure you are in the root of the `quickstart` directory. Clone the repo into your `quickstart` directory.

```bash
git clone https://github.com/NillionNetwork/cra-nillion.git
```

### Install repo dependencies and run the starter

:::info

Before you use [cra-nillion](https://github.com/NillionNetwork/cra-nillion), check that you have [Node (>= v18.17)](https://nodejs.org/en/download/) installed by running
`node -v`
:::

```
cd cra-nillion
npm i
npm start
```

Open http://localhost:8080/ to see your cra-nillion starter app running locally at port 8080

![CRA nillion no cluster](/img/cra-nillion-no-cluster.png)

For this Quickstart, we'll focus on the Nillion Operations page and the Nillion Blind Computation Demo page.

## Connect the blind app to nillion-devnet

In the screenshot of cra-nillion, you'll notice that cluster id and other configuration variables needed to connect to the Nillion Network are not set, so it's not possible to connect NillionClient.

### Spin up a local Nillion devnet

Open a second terminal and run the devnet using any seed (the example uses "my-seed") so the cluster id, websockets, and other environment variables stay constant even when you restart nillion-devnet.

```shell
nillion-devnet --seed my-seed
```

You will see an output like this:

```
nillion-devnet --seed my-seed
ℹ️ cluster id is 222257f5-f3ce-4b80-bdbc-0a51f6050996
ℹ️ using 256 bit prime
ℹ️ storing state in /var/folders/1_/2yw8krkx5q5dn2jbhx69s4_r0000gn/T/.tmpU00Jbm (62.14Gbs available)
🏃 starting nilchain node in: /var/folders/1_/2yw8krkx5q5dn2jbhx69s4_r0000gn/T/.tmpU00Jbm/nillion-chain
⛓  nilchain JSON RPC available at http://127.0.0.1:48102
⛓  nilchain gRPC available at localhost:26649
🏃 starting node 12D3KooWMGxv3uv4QrGFF7bbzxmTJThbtiZkHXAgo3nVrMutz6QN
⏳ waiting until bootnode is up...
🏃 starting node 12D3KooWKkbCcG2ujvJhHe5AiXznS9iFmzzy1jRgUTJEhk4vjF7q
🏃 starting node 12D3KooWMgLTrRAtP9HcUYTtsZNf27z5uKt3xJKXsSS2ohhPGnAm
👛 funding nilchain keys
📝 nillion CLI configuration written to /Users/steph/Library/Application Support/nillion.nillion/config.yaml
🌄 environment file written to /Users/steph/Library/Application Support/nillion.nillion/nillion-devnet.env
```

Copy the path printed after "🌄 environment file written to" and open the file

```
vim "/Users/steph/Library/Application Support/nillion.nillion/nillion-devnet.env"
```

This file has the nillion-devnet generated values for cluster id, websocket, json rpc, and private key. You'll need to put these in your local .env in one of the next steps so that your cra-nillion demo app connects to the nillion-devnet.

Keep the nillion-devnet running in this terminal.

### Create .env file

Make sure you are in the `quickstart/cra-nillion` directory.

Copy the up the .env.example file to a new .env and set up these variables to match the nillion environment file.

```shell
cp .env.example .env
```

Update your newly created .env with environment variables outout in your terminal by nillion-devnet

```
REACT_APP_NILLION_CLUSTER_ID=
REACT_APP_NILLION_BOOTNODE_WEBSOCKET=
REACT_APP_NILLION_NILCHAIN_JSON_RPC=
REACT_APP_NILLION_NILCHAIN_PRIVATE_KEY=
REACT_APP_API_BASE_PATH=/nilchain-proxy

# Optional: add your ETH Address to enable JavaScript Client Telemetry
REACT_APP_YOUR_ETHEREUM_ADDRESS_FOR_NILLION_TELEMETRY=
```

Restart the cra-nillion app process

```
npm start
```

Now the Cluster ID field should be populated with the nillion-devnet cluster id value you set in REACT_APP_NILLION_CLUSTER_ID.

![CRA nillion with cluster](/img/cra-nillion-with-cluster.png)

## Try out the Operations Page

1. Generate User Key - generates a new user key / user id pair
2. Connect with User Key - sets the user key and connects to NillionClient via the Nillion JavaScript Client
3. Hide Nillion User Key and Node Key Connection Info - toggle button to show/hide user and node key options
4. Perform Nillion Operations

To perform an operation (store secret, retrieve secret, update secret, store program, compute), you follow the same pattern:

1. Get quote for the operation
2. Pay quote for the operation and get a payment receipt. On your local nillion-devnet, payments for operations are sent to the local nilchain at REACT_APP_NILLION_NILCHAIN_JSON_RPC are funded by REACT_APP_NILLION_NILCHAIN_PRIVATE_KEY
3. Perform the operation with the payment receipt as a parameter

   ![CRA nillion operations](/img/cra-nillion-operations.png)

## Hook up your secret_addition.py nada program to your first blind app

Now that you understand how Nillion operations work, let's update the Nillion Blind Computation Demo page to use the Nada program you created.

Navigate to the Blind Computation Demo page: http://localhost:8080/compute

The code for Blind Computation Demo page [lives in ComputePage.tsx](https://github.com/NillionNetwork/cra-nillion/blob/main/src/ComputePage.tsx)

```
const outputName = 'my_output';
const partyName = 'Party1';
```

Notice that the ComputePage sets `outputName` which matches the the output name set in secret_addition.py. The ComputePage sets `partyName` which matches the the party name set in secret_addition.py. There are 2 `StoreSecretForm` components on ComputePage, with secretName set to `my_int1` and `my_int2` which matches the the secret names set in secret_addition.py.

<Tabs>
<TabItem value="helpers" label="secret_addition.py" default>
```
from nada_dsl import *

def nada_main():

    party1 = Party(name="Party1")

    my_int1 = SecretInteger(Input(name="my_int1", party=party1))

    my_int2 = SecretInteger(Input(name="my_int2", party=party1))

    new_int = my_int1 + my_int2

    return [Output(new_int, "my_output", party1)]

````
</TabItem>

<TabItem value="compute" label="ComputePage.tsx" >
```ts reference showGithubLink
https://github.com/NillionNetwork/cra-nillion/blob/main/src/ComputePage.tsx
````

</TabItem>

</Tabs>

### Update programName

In order to run blind computation on your `secret_addition.py` Nada program, you'll need to make a few updates:

1. Open a new terminal and navigate to the root `quickstart` folder. List the contents of the folder

```
ls
```

You should see cra-nillion and nada_quickstart_programs folders.

2. Copy your secret_addition.py and secret_addition.nada.bin files nada_quickstart_programs into cra-nillion

```
cp nada_quickstart_programs/src/secret_addition.py cra-nillion/public/programs
cp nada_quickstart_programs/target/secret_addition.nada.bin cra-nillion/public/programs
```

Now your cra-nillion app can use the nada program and the nada program binaries in store program operations.

3. Update programName to `secret_addition` so the cra-nillion repo reads your Nada program.

```ts
// const programName = 'addition_simple';
const programName = "secret_addition";
```

:::tip

Open the Nillion [JavaScript Client Reference](https://nillion.pub/nillion-js-reference/) doc in another tab to search for available Nillion Client classes while working with cra-nillion.

:::

## Run the Blind Computation Demo

Go back to the Blind App on http://localhost:8080/compute and run through the steps on the page to test out the full blind computation flow.

## Next steps

🚀 Woohoo! You've successfully built your first local blind app by writing a Nada program, storing the program on the network, storing secrets on the network, and running compute against secrets. Next, [deploy your blind app to the Nillion Network Testnet](/quickstart-testnet) so anyone in the world can try it.
