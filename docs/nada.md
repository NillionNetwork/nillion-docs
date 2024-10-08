import VenvSetup from './\_nada-venv-setup.mdx';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# nada

Use the `nada` CLI tool to manage Nada projects. It can:

- Create a new Nada project
- Compile Nada programs
- Get program-requirements, the runtime requirements of the [preprocessing elements](/glossary#preprocessing-elements) of a program
- Generate test files for Nada programs
- Run Nada programs
- Test Nada programs
- Get benchmark summaries of Nada program tests to measure performance

## Usage

Install the [Nillion SDK](/nillion-sdk-and-tools#installation) to use the `nada` tool

```
Usage: nada <COMMAND>

Commands:
  init                  Create a new nada project
  build                 Build a program
  run                   Run a program using the inputs from a test case
  test                  Run tests
  benchmark             Benchmark one or multiple programs
  generate-test         Generate a test for a program with example values
  program-requirements  Get requirements for program
  shell-completions     Generate shell completions
  list-protocols        List Protocols (instructions) in JSON format
  publish               Publish a nada program
  help                  Print this message or the help of the given subcommand(s)
```

## Create a new project

You can create a new Nada project by running

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

### Set up a virtual environment

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
pip install --upgrade nada-dsl
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

## Build (compile) a program

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

## Get program requirements

The `program-requirements` command prints the runtime requirements of the [preprocessing elements](/glossary#preprocessing-elements) of a specific program.

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

## Generate a test file

To be able to `run` or `test` programs we need a test file with the inputs and expected outputs.
`nada` has the ability to generate a test file with example values for you.
To generate a test file you can run

```
nada generate-test --test-name <test-name> <program-name>
```

It will generate a test file with the name `<test-name>.yaml` in the `tests` directory.

You should edit the test file to change the inputs and the expected outputs.

## Run a program

To `run` a program using nada you need a test file, visit the [Generate a test file](/nada#generate-a-test-file) section to see how to generate it.

#### Run in normal mode

To execute a program you can run

```
nada run <test-name>
```

It will run the program associated with that test file and print the output. Similarly to the [nada-run](nada-run.md) tool, it executes a Nada program using the Nada VM with the cryptographic algorithms but without the peer-to-peer (p2p) network.

### Run in debug mode

`nada` has the ability to run a program in debug mode.
In this mode, all operations are computed in plain text, so you can inspect the intermediary values.
When running in debug mode, you can view the operations performed in the program along with their corresponding values, as it does not execute the cryptographic algorithms.

To execute a program in debug mode you can run

```
nada run --debug <test-name>
```

This will run the program associated with that test file and print all operations, values and the output.

<Tabs>

<TabItem value="debug" label="Debug in plain text">

```
(.venv) ➜  nada-by-example git:(main) ✗ nada run --debug addition_test
Running program 'addition' with inputs from test case addition_test
Building ...
Running ...
Header:
    Party: Alice id(0)   # party_alice = Party(name="Alice")  -> addition.py:4
     Inputs:
      iaddr(0) rty(SecretInteger) = Input(num_1)                                                          # num_1 = SecretInteger(Input(name="num_1", party=party_alice))  -> addition.py:7
     Outputs:

    Party: Bob id(1)   # party_bob = Party(name="Bob")  -> addition.py:5
     Inputs:
      iaddr(1) rty(SecretInteger) = Input(num_2)                                                          # num_2 = SecretInteger(Input(name="num_2", party=party_bob))  -> addition.py:8
     Outputs:

    Party: Charlie id(2)   # party_charlie = Party(name="Charlie")  -> addition.py:6
     Inputs:
     Outputs:
      oaddr(0) rty(SecretInteger) = Output(sum) addr(2)                                                   #   -> addition.py:10

    Literals:


    Loading Literals:

    Loading Inputs:

    Computing:
addr(0) rty(SecretInteger) = Load iaddr(0)                                                          # num_1 = SecretInteger(Input(name="num_1", party=party_alice))  -> addition.py:7
      SecretInteger(30 mod 340282366920938463463374607429104828419)
addr(1) rty(SecretInteger) = Load iaddr(1)                                                          # num_2 = SecretInteger(Input(name="num_2", party=party_bob))  -> addition.py:8
      SecretInteger(10 mod 340282366920938463463374607429104828419)
addr(2) rty(SecretInteger) = Addition addr(0) addr(1)                                               # sum = num_1 + num_2  -> addition.py:9
      SecretInteger(40 mod 340282366920938463463374607429104828419) = SecretInteger(30 mod 340282366920938463463374607429104828419) + SecretInteger(10 mod 340282366920938463463374607429104828419)

    Loading Outputs:
oaddr(0) rty(SecretInteger) = Output(sum) addr(2)                                                   #   -> addition.py:10
      SecretInteger(NadaInt(40))


Program ran!
Outputs: {
    "sum": SecretInteger(
        NadaInt(
            40,
        ),
    ),
}
```

</TabItem>

<TabItem value="program" label="Nada program">
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/addition.py
```
</TabItem>

<TabItem value="test" label="Test file">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/addition_test.yaml
```
</TabItem>
</Tabs>


### Run and get metrics

Run a program with the --metrics flag to retrieve detailed execution metrics of your program. You can specify the format for the metrics output using the following values:

- text: Outputs metrics in a human-readable format directly to the console.
- json: Outputs metrics in JSON format and saves it to a metrics.json file.
- yaml: Outputs metrics in YAML format and saves it to a metrics.yaml file.

For detailed information on the metrics reported, pleas, visit the [Nada Metrics](/nada-metrics) section.

#### Example metrics usage

The following command runs the addition_test program and outputs detailed performance metrics in text format:

```
nada run addition_test --metrics text
```

<Tabs>

<TabItem value="metrics" label="Metrics">

```
(.venv) ➜  nada-by-example git:(main) ✗ nada run addition_test --metrics text
Running program 'addition' with inputs from test case addition_test
Building ...
Running ...
Program ran!
Preprocessing elements:

Execution metrics:
	Total duration: 1ms 160us 150ns
	Total rounds: 0

	Local protocols: (execution order)
		Addition:
			calls: 1
			total duration: 114us 383ns (min: 292ns, max: 570us 208ns)
	Online protocols: (execution order)

Outputs: {
    "sum": SecretInteger(
        NadaInt(
            40,
        ),
    ),
}
```

</TabItem>

<TabItem value="program" label="Nada program">
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/addition.py
```
</TabItem>

<TabItem value="test" label="Test file">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/addition_test.yaml
```
</TabItem>
</Tabs>

### Run and get metrics on the execution plan

To get detailed metrics on the program execution, including information on each protocol instance execution, we can use the flag `--metrics-execution-plan` in addition to the command we see in the [Run and get metrics](/nada#run-and-get-metrics) section.

The result report includes the following information:
- The summary of metrics on the program execution.
- The detailed metrics on the protocol execution (instructions). This information is organized following the Execution Plan. If you want to know more about the execution plan, you can visit the [Execution Plan](/nada-execution-plan) section.

#### Example metrics on execution plan usage

The following command runs the addition_test program and outputs detailed performance metrics in text format:

```
nada run addition_test --metrics text --metrics-execution-plan
```

<Tabs>

<TabItem value="metrics" label="Metrics">

```
Summary:
Preprocessing elements:

Execution metrics:
	Execution duration: 
		431us 35ns

	Compute duration: 
		total duration: 28us 894ns (min: 10us 701ns, max: 90us 242ns)

	Total rounds: 0

	Local protocols: (execution order)
		Addition:
			calls: 1
			total duration: 16us 630ns (min: 6us 459ns, max: 49us 994ns)

	Online protocols: (execution order)


Execution Plan:
Step #0:

	Count of communication rounds: 0

	Protocols:
		addr(2) - Addition:
			Execution step: 0
			Total duration: 16us 630ns
			Number of communication rounds: 0
			Total message size: 0

```

</TabItem>

<TabItem value="program" label="Nada program">
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/addition.py
```
</TabItem>

<TabItem value="test" label="Test file">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/addition_test.yaml
```
</TabItem>
</Tabs>

### Run and get protocols model text file

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
Literals:


Inputs:
iaddr(0): A (sizeof: 1)
iaddr(1): B (sizeof: 1)


Outputs:
addr(2) (ShamirShareInteger): my_output


Execution plan:
Execution step 0 [Local]:
	addr(2) - rty(ShamirShareInteger) = "ADD" iaddr(0) iaddr(1)                                         # result = a + b  -> main.py:11
Execution step 0 [Online]:

```

### Run and get bytecode in text format

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

## Test a program

To `test` a program using `nada` you need a test file, visit the [Generate a test file](/nada#generate-a-test-file) section to see how to generate it.

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

You can also run a test in debug mode, to know more about debug mode visit the [Run in debug mode](/nada#run-in-debug-mode) section.
To run a test in debug mode you can run

```
nada test --debug <test-name>
```

## Get a benchmark summary for a program

The Nada CLI benchmarking tool lets you run multiple programs and track their performance across multiple runs. It gives you a report that includes a summary of the metrics of the executions for each program. Visit the [Nada Metrics](/nada-metrics) section for more information about them.

This helps developers fine-tune their programs by showing where time is spent and how much data is transmitted during each protocol round.

### Usage

```
Usage: nada benchmark [OPTIONS] [TESTS]...

Arguments:
  [TESTS]...  Names of the tests to use to benchmark the programs, if not specified benchmark all tests

Options:
      --run-count <RUN_COUNT>      How many times each test should be run [default: 1]
      --message-size-calculation   Measure protocol round size. Sizes are in bytes
  -h, --help                       Print help
```

### Example benchmarking

<Tabs>

<TabItem value="benchmark" label="Benchmark">

```bash
nada benchmark list_scan_linear_test
Running...
████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ 1/1

╭────────┬─────────────────┬──────────────────┬────────┬────────────────────┬────────────────────────┬─────────────────┬──────────────────╮
│ Benchmark summary                                                                                                                       │
├────────┼─────────────────┼──────────────────┼────────┼────────────────────┼────────────────────────┼─────────────────┼──────────────────┤
│ Test   │ Total Duration  │ Compute Duration │ Rounds │ Total message size │ Preprocessing elements │ Local protocols │ Online protocols │
├────────┼─────────────────┼──────────────────┼────────┼────────────────────┼────────────────────────┼─────────────────┼──────────────────┤
│ test01 │ 4ms 453us 487ns │ 250us 291ns      │ 46     │ 24kB               │ 22                     │ 2               │ 2                │
├────────┼─────────────────┼──────────────────┼────────┼────────────────────┼────────────────────────┼─────────────────┼──────────────────┤
│ 1 run(s) per protocol                                                                                                                   │
╰────────┴─────────────────┴──────────────────┴────────┴────────────────────┴────────────────────────┴─────────────────┴──────────────────╯

╭───────────────────────┬─────────┬───────────────────────╮
│ Preprocessing elements                                  │
├───────────────────────┼─────────┼───────────────────────┤
│ Test                  │ compare │ equals integer secret │
├───────────────────────┼─────────┼───────────────────────┤
│ list_scan_linear_test │ 2       │ 20                    │
╰───────────────────────┴─────────┴───────────────────────╯

╭───────────────────────┬───────────┬───────┬───────────────────────┬───────────┬───────╮
│ Local protocols                                                                       │
├───────────────────────┼───────────┼───────┼───────────────────────┼───────────┼───────┤
│ Addition                                  │ IfElsePublicBranches                      │
├───────────────────────┼───────────┼───────┼───────────────────────┼───────────┼───────┤
│ Test                  │ Duration  │ Calls │ Test                  │ Duration  │ Calls │
├───────────────────────┼───────────┼───────┼───────────────────────┼───────────┼───────┤
│ list_scan_linear_test │ 6us 624ns │ 20    │ list_scan_linear_test │ 5us 216ns │ 20    │
╰───────────────────────┴───────────┴───────┴───────────────────────┴───────────┴───────╯

╭───────────────────────┬─────────────┬───────┬────────┬────────────┬───────────────────────┬────────────┬───────┬────────┬────────────╮
│ Online protocols                                                                                                                     │
├───────────────────────┼─────────────┼───────┼────────┼────────────┼───────────────────────┼────────────┼───────┼────────┼────────────┤
│ EqualsSecret                                                      │ LessThanShares                                                   │
├───────────────────────┼─────────────┼───────┼────────┼────────────┼───────────────────────┼────────────┼───────┼────────┼────────────┤
│ Test                  │ Duration    │ Calls │ Rounds │ Round data │ Test                  │ Duration   │ Calls │ Rounds │ Round data │
├───────────────────────┼─────────────┼───────┼────────┼────────────┼───────────────────────┼────────────┼───────┼────────┼────────────┤
│ list_scan_linear_test │ 455us 890ns │ 20    │ 40     │ 19kB       │ list_scan_linear_test │ 158us 16ns │ 2     │ 6      │ 5kB        │
╰───────────────────────┴─────────────┴───────┴────────┴────────────┴───────────────────────┴────────────┴───────┴────────┴────────────╯
```
</TabItem>

<TabItem value="program" label="Nada program">
```python reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/src/list_scan_linear.py
```
</TabItem>

<TabItem value="test" label="Test file">
```yaml reference showGithubLink
https://github.com/NillionNetwork/nada-by-example/blob/main/tests/list_scan_linear_test.yaml
```
</TabItem>
</Tabs>