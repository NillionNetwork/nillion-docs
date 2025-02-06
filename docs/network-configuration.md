import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NetworkTable from '@site/src/components/Networks/index';
import {PythonTestnetEnv, ReactTestnetEnv} from '@site/src/components/Networks/TestnetEnv';

# Network Configuration

## Testnet

:::info

- If your SDK >= 0.9.0, you are on the latest and using our decentralized network
- If your SDK >= 0.7.0, you will be using `photon2`.
- If your SDK =< 0.6.0, you will be using `photon1`.

`photon2` and `photon1` will be sunset in April 2025.
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
ℹ️ cluster id is 9e68173f-9c23-4acc-ba81-4f079b639964
ℹ️ using 256 bit prime
ℹ️ storing state in /var/folders/f4/cqlsh9k167vcx1swjlh_6pp80000gn/T/.tmp6q1Ee0 (718.09Gbs available)
🏃 starting nilchain node in: /var/folders/f4/cqlsh9k167vcx1swjlh_6pp80000gn/T/.tmp6q1Ee0/nillion-chain
⛓  nilchain JSON RPC available at http://127.0.0.1:48102
⛓  nilchain REST API available at http://localhost:26650
⛓  nilchain gRPC available at http://localhost:26649
🏃 starting node 1
🏃 starting node 2
🏃 starting node 3
👛 funding nilchain keys
📝 network configuration written to /Users/XXX/.config/nillion/networks/devnet.yaml
🌄 environment file written to /Users/XXX/.config/nillion/nillion-devnet.env
```

Copy the path printed after "🌄 environment file written to" and open the file to see your local devnet network configuration
