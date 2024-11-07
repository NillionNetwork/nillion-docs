import VenvSetup from './\_nada-venv-setup.mdx';
import UnderstandingProgram from './\_understanding-first-nada-program.mdx';
import CompileRunTest from './\_quickstart-compile-run-test.mdx';
import PythonVersionInfo from './\_python-version-info.mdx';

# Create a Nada project and write your first Nada program

The <strong>[`nada`](/nada)</strong> tool is used to create a new Nada project, compile all programs in the project, run Nada programs, and generate tests for Nada programs.

:::info

Before starting this guide, [Install the Nillion SDK](/installation)

- Confirm installation:

    ```
    nillion --version
    ```

- Ensure you have a .venv folder inside `nada`
- Check your tree in the previous step.

:::


## Create a new first Nada program

0. Change directories into your new `nada` directory

    ```
    cd nada
    ```

1. Activate the python virtual environment

    ```
    source .venv/bin/activate
    ```

2. Install [nada-dsl](https://pypi.org/project/nada-dsl/) from pypi

    ```
    pip install --upgrade nada-dsl
    ```

## Write your first Nada program

Open the `nada_quickstart_programs` folder in your code editor of choice.

:::info

Your Nada project has the following structure:

```
nada-project.toml  # Configuration file for your Nada programs
src/               # Directory for writing Nada programs
src/main.py        # An example Nada program that adds 2 secret integers
target/            # Directory where `nada build` puts resulting compiled programs
tests/             # Directory where `nada generate-test` puts resulting test files
```

:::

### 1. Create a Nada program file

The `src/` directory is where you'll write your Nada programs. Create a new Nada program file in the src directory. The `secret_addition.py` Nada program will add 2 SecretInteger Nada values together.

```
touch src/secret_addition.py
```

### 2. Write the secret addition Nada program

Copy this Nada program into the `secret_addition.py` file. Don't worry, we'll go through a line by line explanation of the program next.

```python
from nada_dsl import *

def nada_main():

    party1 = Party(name="Party1")

    my_int1 = SecretInteger(Input(name="my_int1", party=party1))

    my_int2 = SecretInteger(Input(name="my_int2", party=party1))

    new_int = my_int1 + my_int2

    return [Output(new_int, "my_output", party1)]
```

### 3. Understand each line of the `secret_addition.py` Nada program

<UnderstandingProgram/>

## Compile, run, and test your Nada program

<CompileRunTest/>

## Next steps

🧮 Fantastic work! You just created your first Nada project and wrote and tested a Nada program. Now you can move onto the final step: hooking up the `secret_addition` Nada program to a blind app, which will be able to store the program, then compute with the program on secret, user provided inputs.
