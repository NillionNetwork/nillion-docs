import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NetworkTable from '@site/src/components/Networks/index';
import {PythonTestnetEnv, ReactTestnetEnv} from '@site/src/components/Networks/TestnetEnv';

# Network Configuration

## Testnet

:::info
- If your SDK >= 0.7.0, you will be using `photon2`.
- If your SDK >= 0.6.0, you will be using `photon1`. 
:::

Use the Testnet configuration to connect to the integrated Nillion Testnet. Check out [Testnet wallet and faucet guides here](/testnet-guides).

<Tabs>


<TabItem value="photon" label="Network" default>
<NetworkTable/>
</TabItem>

<TabItem value="python" label="Python .env">
<PythonTestnetEnv/>
</TabItem>

<TabItem value="react" label="React .env">
<ReactTestnetEnv/>
</TabItem>

</Tabs>

## Local Devnet

Use the [nillion-devnet](/nillion-devnet) SDK tool to spin up a devnet that you can interact with locally while you keep the process running:

```
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

Copy the path printed after "🌄 environment file written to" and open the file to see your local devnet network configuration
