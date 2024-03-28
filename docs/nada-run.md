# nada-run

The `nada-run` tool executes a Nada program using the Nada VM with the cryptographic algorithms but without the peer-to-peer (p2p) network.

```bash
Usage: nada-run [OPTIONS] --prime-size <PRIME_SIZE> <PROGRAM_PATH>

Arguments:
  <PROGRAM_PATH>
          Program path to the compiled program file

Options:
  -p, --prime-size <PRIME_SIZE>
          Prime size in bits; 256 is a good default

  -n, --network-size <NETWORK_SIZE>
          The size of the local network

          [default: 3]

  -d, --polynomial-degree <POLYNOMIAL_DEGREE>
          The degree of the polynomial used

          [default: 1]

      --int-secret <INTEGER_SECRETS>
          An integer secret.

          These must follow the pattern `<name>=<value>`.

          [aliases: i]

      --uint-secret <UNSIGNED_INTEGER_SECRETS>
          An unsigned integer secret.

          These must follow the pattern `<name>=<value>`.

          [aliases: ui]

      --secrets-path <SECRETS_PATH>
          A path to load secrets from

      --int-public-variable <INTEGER_PUBLIC_VARIABLES>
          An integer public variable.

          These must follow the pattern `<name>=<value>`.

          [aliases: ip]

      --uint-public-variable <UNSIGNED_INTEGER_PUBLIC_VARIABLES>
          An unsigned integer public variable.

          These must follow the pattern `<name>=<value>`.

          [aliases: uip]

      --public-variables-path <PUBLIC_VARIABLES_PATH>
          A path to load secrets from

  -h, --help
          Print help (see a summary with '-h')

  -V, --version
          Print version
```
