# node-key2peerid

The node-key2peerid tool uses your [node key](concepts.md#node-key) or a node key file to tell you your node's [peer id](concepts.md#peer-id)

### Usage

```bash
node-key2peerid [OPTIONS] [KEYFILE]
```

```bash
Arguments:
  [KEYFILE]  node keypair file path to load

Options:
  -k, --key <KEY>    node keypair as base58 string
  -s, --seed <SEED>  seed to generate the keypair
  -h, --help         Print help
  -V, --version      Print version
```
