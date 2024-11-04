import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import IframeVideo from '@site/src/components/IframeVideo/index';
import SdkInstallation from './\_sdk-installation.mdx';
import QuickstartIntro from './\_quickstart-intro.mdx';
import VenvSetup from './\_nada-venv-setup.mdx';
import UnderstandingProgram from './\_understanding-first-nada-program.mdx';
import CompileRunTest from './\_quickstart-compile-run-test.mdx';
import ThemedImage from '@theme/ThemedImage';

# Build a Blind App

:::info

This is the 3rd step in the Blind App Quickstart. Before starting this guide,

1. [Install the Nillion SDK](/quickstart-install)
2. [Create a Nada project](/quickstart-nada) and write your first Nada program

Also check that you have [Node (>= v18.17)](https://nodejs.org/en/download/) installed by running
`node -v`

:::


### Install repo dependencies and run the starter

Go back to the root directory you created and run the development command. 

Open http://localhost:3000/ to see your starter app running locally at port 3000


```
npm run dev
```


<ThemedImage
  alt="Nillion Quickstart Demo"
  sources={{
    light: '/img/nillion_quickstart_demo_light.png',
    dark: '/img/nillion_quickstart_demo_dark.png',
  }}
/>

For this Quickstart, we'll focus on the Nillion Operations page and the Nillion Blind Computation Demo page.

## Connect the blind app to nillion-devnet

In the screenshot of cra-nillion, you'll notice that cluster id and other configuration variables needed to connect to the Nillion Network are not set, so it's not possible to connect NillionClient.

### Spin up a local Nillion devnet

Open a separate terminal and run the devnet using any seed (the example uses "my-seed") so the cluster id, websockets, and other environment variables stay constant even when you restart nillion-devnet.

```shell
nillion-devnet
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
🌄 environment file written to /Users/XXX/Library/Application Support/nillion.nillion/nillion-devnet.env
```

Refresh your page and you should now be able to press the `Login` button and it should turn into `Log Out`.

Now you can interact with the local devnet and `Store a Secrete Integer` and `Fetch the Value`. 


# Interacting with our Nada Program

We want to now interact with the `secret_addition` Nada program we created in the previous step. So let's interact with the other module boxes. 

1. Upload your program from your `nada/src/target/secret_addition.nada.bin`
2. Copy the `programID` and use it in the `Compute` section
3. Copy the `computeOutputID` and use it in the `Compute Output` section

<ThemedImage
  alt="CNA Output"
  sources={{
    light: '/img/cna_program_output_light.png',
    dark: '/img/cna_program_output_dark.png',
  }}
/>

## Next steps

🚀 Woohoo! You've successfully built your first local blind app by writing a Nada program, storing the program on the network, storing secrets on the network, and running compute against secrets. Next, [deploy your blind app to the Nillion Network Testnet](/quickstart-testnet) so anyone in the world can try it.
