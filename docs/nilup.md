# nilup

`nilup` is an installer and version manager for the Nillion SDK

To install `nilup`, run:

_For the security-conscious, please download the `install.sh` script, so that you can inspect how it
works, before piping it to `bash`._

```
curl https://nilup.nilogy.xyz/install.sh | bash
```

If you install the Nillion SDK using `nilup`, all the Nillion SDK commands will be managed by `nilup`,
which will pick the version to use based on the next order, from highest to lowest priority:
the `+<version>` flag, the `nil-sdk.toml` file, and the global version set with the `use` command.

### `+<version>` flag

When you call any Nillion SDK command like `nada` you can add a `+<version>` argument to use that version of `nada`.
For example if you run `nada +0.0.4 init` will run `nada` version 0.0.4.

### `nil-sdk.toml` file

If there is a `nil-sdk.toml` or `.nil-sdk.toml` file in the current directory or parent directories, the Nillion SDK commands will use the version specified in that file.

The file should have the following format:

```toml
version = "{version}"
```

### Global version

If no version is specified in the command or in the `nil-sdk.toml` file, the Nillion SDK commands will use the global version set with the `use` command.
You can set the global version with the command

```
nilup use {version}
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
