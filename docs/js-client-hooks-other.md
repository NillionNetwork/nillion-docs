# Other

There are some auxiliary hooks that you may use:
- [useNilPoolStatus](#usenilpoolstatus)
- [useNillion](#usenillion)

### useNilPoolStatus
Pool Status refers to the preprocessing pool's status. A simple call to the hook should provide their status.

```ts reference showGithubLink
https://github.com/NillionNetwork/client-ts/blob/main/examples-nextjs/app/components/pool-status.tsx
```

### useNillion
This hook gives all access to the aforementioned properties of all of hooks.

```ts
import { useNillion } from "@nillion/client-react-hooks";

...
const nillion = useNillion()
...

nillion.client.XXX // whatever you want to use from the client.

```

Below is the source code for refernce

```ts reference showGithubLink
https://github.com/NillionNetwork/client-ts/blob/main/client-react-hooks/src/use-nillion.ts
```