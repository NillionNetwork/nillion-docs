# Other

There are some auxiliary hooks that you may use:
- [useNilPoolStatus](#usenilpoolstatus)
- [useNillion](#usenillion)

### useNilPoolStatus
//TODO: Waiting on team response.
Pool Status refers to the preprocessing pool's status

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