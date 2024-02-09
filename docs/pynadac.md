# pynadac

The pynadac tool is a Nada compiler for PyNada programs. It compiles programs to program_name.nada.bin files and can also generate MIR JSON files like program_name.nada.json.

### Usage

```bash
pynadac [OPTIONS] <PROGRAM_PATH>
```

```bash
Arguments:
  <PROGRAM_PATH>  The path to the program to be compiled

Options:
  -t, --target-dir <TARGET_DIR>  The target directory where output files will be written to [default: .]
  -m, --generate-mir-json        Generate a MIR JSON file as an extra output
  -h, --help                     Print help
  -V, --version                  Print version
```
