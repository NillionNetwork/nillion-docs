import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Retrieve Value

Retrieve secret strings and integers from the network. Retrieve and decode a stored secret string (SecretBlob) or a stored secret integer (SecretInteger)


## Get a Quote to Retrieve Value

<Tabs>

<TabItem value="getquote" label="Get quote to retrieve secret" default>
```ts reference showGithubLink
https://github.com/NillionNetwork/cra-nillion/blob/main/src/nillion/components/RetrieveSecretForm.tsx#L50-L55
```
</TabItem>

<TabItem value="getQuote" label="getQuote helper">
```ts reference showGithubLink
https://github.com/NillionNetwork/cra-nillion/blob/main/src/nillion/helpers/getQuote.ts
```
</TabItem>
</Tabs>


## Pay to Retrieve Value and get Payment Receipt

<Tabs>

<TabItem value="receipt" label="Payment receipt" default>
```ts reference showGithubLink
https://github.com/NillionNetwork/cra-nillion/blob/main/src/nillion/components/RetrieveSecretForm.tsx#L69-L76
```
</TabItem>

<TabItem value="helpers" label="helper functions">
```ts reference showGithubLink
https://github.com/NillionNetwork/cra-nillion/blob/main/src/nillion/helpers/nillion.ts#L24-L71
```
</TabItem>

</Tabs>

## Retrieve SecretBlob or SecretInteger

<Tabs>

<TabItem value="receipt" label="Retrieve value" default>
```ts reference showGithubLink
https://github.com/NillionNetwork/cra-nillion/blob/main/src/nillion/components/RetrieveSecretForm.tsx#L79-L84
```
</TabItem>

<TabItem value="retrieve" label="retrieveSecret helper">
```ts reference showGithubLink
https://github.com/NillionNetwork/cra-nillion/blob/main/src/nillion/helpers/retrieveSecret.ts
```
</TabItem>

</Tabs>


