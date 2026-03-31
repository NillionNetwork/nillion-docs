# Permissions and Payments

NUCs provide the access control layer of the Blind Computer, allowing data owners to define, delegate, and revoke permissions over their data.

## NUC

Built on an extension of [UCAN](https://ucan.xyz/), the NUC framework supports user-originated, cryptographically signed policies for read, write, and compute access. Permissions are enforced at the system level, without relying on centralized coordination. Two versions of the NUC library are available:

- TypeScript library for web and Node.js environments: [GitHub repository](https://github.com/NillionNetwork/nuc-ts) and [NPM package](https://www.npmjs.com/package/@nillion/nuc)
- Python library for server-side applications: [GitHub repository](https://github.com/NillionNetwork/nuc-py) and [PyPI package](https://pypi.org/p/nuc)

To get started with NUCs, see [API Access](/blind-computer/build/storage/api-access).

## Credits

Regarding payments, nilDB and nilCC use a NIL based credit system whereas nilAI - as a product built on top of nilCC - has a Stripe integration. The credits are used in a pay-as-you-go fashion and can be topped up from the respective management portals for these modules. Both nilDB and nilAI provide have a free tier available.