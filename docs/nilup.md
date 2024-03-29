# nilup

`nilup` is an installer and version manager for the Nillion SDK

To install `nilup`, run: `curl https://nilup.nilogy.xyz | bash`

If you install the Nillion SDK using `nilup`, all the Nillion SDK commands will be managed by `nilup`
and it will pick the version to use base on the next order.

### `+<version>` flag
When you call any Nillion SDK command like `nada` you can add a `+<version>` argument to use that version of `nada`.
For example if you run `nada +0.0.4 init` will run `nada` version 0.0.4.

### `nil-sdk.toml` file
If there is a `nil-sdk.toml` or `.nil-sdk.toml` file in the current directory or parent directories, the Nillion SDK commands will use the version specified in that file.

The file should have the following format:
```toml
version = "0.0.4"
```

### Global version
If no version is specified in the command or in the `nil-sdk.toml` file, the Nillion SDK commands will use the global version set with the `use` command.
You can set the global version with the command 
```
nilup use 0.0.4
```

## Usage

```bash
Usage: nilup <COMMAND>

Commands:
  install            Install a version of the Nillion SDK
  uninstall          Uninstall a version of the Nillion SDK
  use                Set a global version of the Nillion SDK to be used
  list-available     List available versions of the Nillion SDK
  list-installed     List installed versions of the Nillion SDK
  instrumentation    Enable/Disable instrumentation
  shell-completions  Generate shell completions
  help               Print this message or the help of the given subcommand(s)

Options:
  -h, --help     Print help
  -V, --version  Print version
```