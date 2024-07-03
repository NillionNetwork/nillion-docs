import VenvSetup from './\_nada-venv-setup.mdx';

# nada

`nada` is the tool to manage Nada projects. It can:

- Create a new project,
- Compile Nada programs,
- Get `program-requirements`, the runtime requirements of the preprocessing elements of a program,
- Run Nada programs (also in `debug` mode),
- Test a program (also in `debug` mode),
- Generate a test from a program.

## Requirements

- Install the [Nillion SDK](/nillion-sdk-and-tools#installation) to access the `nada` tool

## Usage

### Create a new project

You can create a new nada project by running

```
nada init <project-name>
```

This will create a new directory with the project name and the following structure:

```
nada-project.toml  # File to configure the project
src/               # Directory to store the programs
src/main.py        # nada program
target/            # Directory where nada will produce the compiled programs
tests/             # Directory to store the tests
```

#### `nada-project.toml` file

This file defines the nada project, it looks like this

```toml
name = "<project name>" # name of the project
version = "<version>"       # version of the project
authors = [""]          # authors of the project

[[programs]]            # program entry, you can have several of these
path = "src/main.py"    # path to the program
prime_size = 128        # prime size to use in the execution of the program
```

#### `nil-sdk.toml` file

We recommend creating a `nil-sdk.toml` file in the project directory to specify the version of the Nada SDK to use.
The file should have the following format:

```toml
version = "<version>"
```

This will ensure that when you call nada or any other Nillion SDK command, it will use the version specified in that file.

### Set up virtual environment

<VenvSetup/>

1. Create a python [virtual environment](https://docs.python.org/3/library/venv.html)

```
python3 -m venv .venv
```

2. Activate the python virtual environment

```
source .venv/bin/activate
```

3. Install [nada-dsl](https://pypi.org/project/nada-dsl/)

```
pip install nada-dsl
```

### Add a new Nada program to the project

To add a new program to the project, you can create a new file in the `src` directory and add a new entry in the `nada-project.toml` file.
There is the option to use another name for your program using the `name` field in the program entry.

Let's say that the new file is called `new_program.py` and you want to call it `my_program`, then you can add a new entry in the `nada-project.toml` file like this:

```toml
[[programs]]
path = "src/new_program.py"
name = "my_program"
prime_size = 128
```

### Build (compile) a program

To build all the programs in the project, you can run

```
nada build
```

Note: this will only build the programs specified in the `nada-project.toml` file. Visit the section [Add a new program to the project](#add-a-new-nada-program-to-the-project) for more information.

Also you can specify which program to build by passing the program name as an argument

```
nada build <program-name>
```

The `build` command will produce a `<program name>.nada.bin` file in the `target` directory.
You can use this file to upload and run it on the Nillion Network.

### Get program requirements

The `program-requirements` command prints the runtime requirements of the preprocessing elements of a specific program.

```
nada program-requirements <program-name>
```

#### Example program and program-requirements:

```
from nada_dsl import *

def nada_main():
    party1 = Party(name="Party1")
    party2 = Party(name="Party2")
    party3 = Party(name="Party3")
    a = SecretInteger(Input(name="A", party=party1))
    b = SecretInteger(Input(name="B", party=party2))

    result = a + b

    return [Output(result, "my_output", party3)]
```

Here are the program requirements of the 3 Party addition program above:

```
Requirements:
 ProgramRequirements {
    alpha_elements: 2,
    runtime_elements: {
        Lambda: 2,
    },
}
```

### Generate a test file

To be able to `run` or `test` programs we need a test file with the inputs and expected outputs.
`nada` has the ability to generate a test file with example values for you.
To generate a test file you can run

```
nada generate-test --test-name <test-name> <program-name>
```

It will generate a test file with the name `<test-name>.yaml` in the `tests` directory.

You should edit the test file to change the inputs and the expected outputs.

### Run a program

To `run` a program using nada you need a test file, visit the [Generate a test file](#Generate-a-test-file) section to see how to generate it.

#### Run in normal mode

To execute a program you can run

```
nada run <test-name>
```

It will run the program associated with that test file and print the output. Similarly to the [nada-run](nada-run.md) tool, it executes a Nada program using the Nada VM with the cryptographic algorithms but without the peer-to-peer (p2p) network.

#### Run in debug mode

`nada` has the ability to run a program in debug mode.
In this mode, all operations are computed in plain text, so you can inspect the intermediary values.
When running in debug mode, you can view the operations performed in the program along with their corresponding values, as it does not execute the cryptographic algorithms.

To execute a program in debug mode you can run

```
nada run --debug <test-name>
```

This will run the program associated with that test file and print all operations, values and the output.

#### Run and get protocols model text file

To execute a program and have a protocols model text file `<test-name>.nada.protocols.txt` generated for your program, run with `-protocols-text` or `-p`

```
nada run <test-name> -protocols-text
```

#### Example program and generated protocols model text file:

```
from nada_dsl import *

def nada_main():
    party1 = Party(name="Party1")
    party2 = Party(name="Party2")
    party3 = Party(name="Party3")
    a = SecretInteger(Input(name="A", party=party1))
    b = SecretInteger(Input(name="B", party=party2))

    result = a + b

    return [Output(result, "my_output", party3)]
```

Here is the generated protocols model text file for the 3 Party addition program above:

```
Inputs:

iaddr(0): A (ref 0) (sizeof: 1)
iaddr(1): B (ref 0) (sizeof: 1)


Literals:


Protocols:
rty(ShamirShareInteger) = P2S iaddr(0)                                                              # result = a + b  -> main.py:10
rty(ShamirShareInteger) = P2S iaddr(1)                                                              # result = a + b  -> main.py:10
rty(ShamirShareInteger) = ADD addr(2) addr(3)                                                       # result = a + b  -> main.py:10


Outputs:
addr(4): my_output
```

#### Run and get bytecode in text format

To execute a program and have a bytecode text file `<test-name>.nada.bytecode.txt` generated for your program, run with `-bytecode-text` or `-b`

```
nada run <test-name> -bytecode-text
```

Here is the generated bytecode text file for the 3 Party addition program above:

```
Header:
Party: Party1 id(0)   # party1 = Party(name="Party1")  -> main.py:4
 Inputs:
  iaddr(0) rty(SecretInteger) = Input(A)                                                              # a = SecretInteger(Input(name="A", party=party1))  -> main.py:7
 Outputs:

Party: Party2 id(1)   # party2 = Party(name="Party2")  -> main.py:5
 Inputs:
  iaddr(1) rty(SecretInteger) = Input(B)                                                              # b = SecretInteger(Input(name="B", party=party2))  -> main.py:8
 Outputs:

Party: Party3 id(2)   # party3 = Party(name="Party3")  -> main.py:6
 Inputs:
 Outputs:
  oaddr(0) rty(SecretInteger) = Output(my_output) addr(2)                                             #   -> main.py:12

Literals:



Operations:
addr(0) rty(SecretInteger) = Load iaddr(0)                                                          # a = SecretInteger(Input(name="A", party=party1))  -> main.py:7
addr(1) rty(SecretInteger) = Load iaddr(1)                                                          # b = SecretInteger(Input(name="B", party=party2))  -> main.py:8
addr(2) rty(SecretInteger) = Addition addr(0) addr(1)
```

### Test a program

To `test` a program using `nada` you need a test file, visit the [Generate a test file](#Generate-a-test-file) section to see how to generate it.

#### Test in normal mode

To run all the tests in the project you can run

```
nada test
```

To run a single test you can run

```
nada test <test-name>
```

This will run the program associated with that test file and check if the output matches what's expected.

#### Test in debug mode

You can also run a test in debug mode, to know more about debug mode visit the [Run in debug mode](#Run-in-debug-mode) section.
To run a test in debug mode you can run

```
nada test --debug <test-name>
```
