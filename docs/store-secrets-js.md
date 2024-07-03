import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Store Values

Store secret values (SecretBlob or SecretInteger values) in the network by the cluster, secret values, permissions, and payment receipt.

## Create a SecretBlob to Store

Create a SecretBlob, with one or more secret strings encoded as bytearrays

```ts 
const secretName = 'my-password'
const secretValue = 'abcdefg'
const nillionSecret = new nillion.NadaValues();
const byteArraySecret = new TextEncoder().encode(secretValue);
const secretBlob = nillion.NadaValue.new_secret_blob(byteArraySecret);
nillionSecret.insert(secretName, secretBlob);
```

## Create a SecretInteger to Store

Create a SecretInteger with one or more secrets values

```ts 
const secretName = 'my-score'
const secretValue = 100
const nillionSecret = new nillion.NadaValues();
const secretInteger = nillion.NadaValue.new_secret_integer(
    secretValue.toString()
);
nillionSecret.insert(secretName, secretInteger);
```

## Get a Quote to Store Values

<Tabs>

<TabItem value="getquote" label="Get quote to store secret" default>
```ts
const ttl_days = 30; // set how long to store values
const storeOperation = nillion.Operation.store_values(
    nillionSecret,
    ttl_days
);

const quote = await getQuote({
    client: nillionClient,
    operation: storeOperation,
});
```
</TabItem>

<TabItem value="getQuote" label="getQuote helper">
```ts reference showGithubLink
https://github.com/NillionNetwork/cra-nillion/blob/main/src/nillion/helpers/getQuote.ts
```
</TabItem>
</Tabs>


## Pay to Store Values and get Payment Receipt

<Tabs>

<TabItem value="receipt" label="Payment receipt" default>
```ts reference showGithubLink
https://github.com/NillionNetwork/cra-nillion/blob/main/src/nillion/components/StoreSecretForm.tsx#L133-L140
```
</TabItem>

<TabItem value="helpers" label="helper functions">
```ts reference showGithubLink
https://github.com/NillionNetwork/cra-nillion/blob/main/src/nillion/helpers/nillion.ts#L24-L71
```
</TabItem>

</Tabs>


## Store Secrets JavaScript Helper Function

```ts reference showGithubLink
https://github.com/NillionNetwork/cra-nillion/blob/main/src/nillion/helpers/storeSecrets.ts
```