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
version = "0.1.0"       # version of the project
authors = [""]          # authors of the project

[[programs]]            # program entry, you can have several of these
path = "src/main.py"    # path to the program
prime_size = 128        # prime size to use in the execution of the program
```

#### `nil-sdk.toml` file
We recommend creating a `nil-sdk.toml` file in the project directory to specify the version of the Nada SDK to use.
The file should have the following format:
```toml
version = "0.1.0"
```
This will ensure that when you call nada or any other Nillion SDK command, it will use the version specified in that file.

#### Add a new program to the project
To add a new program to the project, you can create a new file in the `src` directory and add a new entry in the `nada-project.toml` file.
There is the option to use another name for your program using the `name` field in the program entry. 

Let's say that the new file is called `new_program.py` and you want to call it `my_program`, then you can add a new entry in the `nada-project.toml` file like this:

```toml
[[programs]]
path = "src/new_program.py"
name = "my_program"
prime_size = 128
```

### Build a program
To build a program you can run
```
nada build
```
It will compile all the programs in the project,
also you can specify which program to build by passing the program name as an argument
```
nada build <program-name>
```
The `build` command will produce a `<program name>.nada.bin` file in the `target` directory.
You can use this file to upload and run it on the Nillion Network.

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
It will run the program associated with that test file and print the output

#### Run in debug mode
`nada` has the ability to run a program in debug mode, 
in this mode, all operations are output in plain text, so you can inspect the intermediary values.
When running in debug mode you can see the operations that are performed in the program, with the corresponding values.

To execute a program in debug mode you can run
```
nada run --debug <test-name>
```
This will run the program associated with that test file and print all operations, values and the output

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
