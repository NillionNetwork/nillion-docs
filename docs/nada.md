# nada

`nada` is the tool to manage Nada projects. It can:
- Create a new project,
- Compile Nada programs,
- Run Nada programs (also in `debug` mode),
- Test a program (also in `debug` mode),
- Generate a test from a program.

## Requirements

Python and `nada_dsl` are required to compile Nada programs. Is recommended to use a python virtual environment to
install `nada_dsl`.

## Usage

```bash
Usage: nada <COMMAND>

Commands:
  init           Create a new nada project
  build          Build a program
  run            Run a program using the inputs from a test file
  test           Run tests
  generate-test  Generate a test for a program with example values
  help           Print this message or the help of the given subcommand(s)

Options:
  -h, --help  Print help
```

### Example flow

```bash
$ nada init my-nada-project
Creating new nada project: my-nada-project
Project created!

$ cd my-nada-project

$ ls -R
.:
nada-project.toml  src  target  tests

./src:
main.py

./target:

./tests:

$ cat nada-project.toml
name = "my-nada-project"
version = "0.1.0"
authors = [""]

[[programs]]
path = "src/main.py"
prime_size = 128

$ cat src/main.py
from nada_dsl import *

def nada_main():
    party1 = Party(name="Party1")
    party2 = Party(name="Party2")
    party3 = Party(name="Party3")
    a = SecretInteger(Input(name="A", party=party1))
    b = SecretInteger(Input(name="B", party=party2))

    result = a + b

    return [Output(result, "my_output", party3)]

$ nada build
Building program: main
Build complete!

$ nada generate-test --test-name my-main-test main
Generating test 'my-main-test' for
Building ...
Generating test file ...
Test generated!

$ cat tests/my-main-test.yaml
---
program: main
inputs:
  secrets:
    A:
      SecretInteger: "3"
    B:
      SecretInteger: "3"
  public_variables: {}
expected_outputs:
  my_output:
    SecretInteger: "3"

$ nada run my-main-test
Running program 'main' with inputs from test file my-main-test
Building ...
Running ...
Program ran!
Outputs: {
    "my_output": SecretInteger(
        NadaInt(
            6,
        ),
    ),
}

$ nada test my-main-test
Running test: my-main-test
Building ...
Running ...
my-main-test: FAIL
Output 'my_output' expected SecretInteger(NadaInt(3)) but got SecretInteger(NadaInt(6))

$ nada run my-main-test -d
Running program 'main' with inputs from test file my-main-test
Building ...
Running ...
[Heap 1] main.py:7 a = SecretInteger(Input(name="A", party=party1)) -> load [Input 0] <= SecretInteger(3 mod 340282366920938463463374607429104828419)
[Heap 2] main.py:8 b = SecretInteger(Input(name="B", party=party2)) -> load [Input 1] <= SecretInteger(3 mod 340282366920938463463374607429104828419)
[Operation 3] main.py:10 result = a + b => SecretInteger(3 mod 340282366920938463463374607429104828419) + SecretInteger(3 mod 340282366920938463463374607429104828419)  = SecretInteger(6 mod 340282366920938463463374607429104828419)
Program ran!
Outputs: {
    "my_output": SecretInteger(
        NadaInt(
            6,
        ),
    ),
}
```
