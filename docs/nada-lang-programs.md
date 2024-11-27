# Programming with Nada

This is a basic introduction to programming with the Nada embedded domain-specific language (DSL). Use this page to learn how to compile and run a basic Nada program. Once you are ready, proceed to the other tutorials to learn Nada features via simple example programs!

## Example Programs

### Tiny Addition (with a Single Party)

Below is a tiny Nada program `tiny_addition.py` that adds two secret integer inputs. Both of these integer inputs belong to `Nilla 🐶`, who is using the Nillion Network to compute their total. Most importantly, the secret integers are never revealed to the Nillion Network nodes!

```python
from nada_dsl import *

def nada_main():
    nilla_the_dog = Party(name="Nilla 🐶")

    secret_int_1 = SecretInteger(Input(name="my_secret_1", party=nilla_the_dog))
    secret_int_2 = SecretInteger(Input(name="my_secret_2", party=nilla_the_dog))

    total = secret_int_1 + secret_int_2

    return [Output(total, "my_output", nilla_the_dog)]
```

The [`tiny_addition.py`](https://github.com/nillion-oss/nillion-python-starter/blob/main/programs/tiny_secret_addition_complete.py) program takes in two [Inputs](concepts.md#inputs) from the same [Party](concepts.md#party).

<table><thead><tr><th width="162">Input name</th><th width="145">Input type</th><th>Party name</th></tr></thead><tbody><tr><td>`my_secret_1`</td><td>`SecretInteger`</td><td>`Nilla 🐶`</td></tr><tr><td>`my_secret_2`</td><td>`SecretInteger`</td><td>`Nilla 🐶`</td></tr></tbody></table>

The program [`tiny_addition.py`](https://github.com/nillion-oss/nillion-python-starter/blob/main/programs/tiny_secret_addition_complete.py) returns an [Output](concepts.md#outputs) to a [Party](concepts.md#party). Only that party sees the output because it of type `SecretInteger`.

<table>
  <thead>
    <tr><th>Output value</th><th>Output Name</th><th>Output Type</th><th>Party name</th></tr>
  </thead>
  <tbody>
    <tr><td>`total`</td><td>`my_output`</td><td>`SecretInteger`</td><td>`Nilla 🐶`</td></tr>
  </tbody>
</table>

### Ternary conditional operators

Next, let's see an example of our ternary operation:

```python reference showGithubLink
https://github.com/NillionNetwork/python-examples/blob/main/examples_and_tutorials/nada_programs/src/nada_fn_max.py
```

### Multiple parties in Nada

Lastly, below is an example with two parties:

```python reference showGithubLink
https://github.com/NillionNetwork/python-examples/blob/main/examples_and_tutorials/nada_programs/src/addition_simple_multi_party.py
```

For more examples visit our [`programs directory`](https://github.com/nillion-oss/nillion-python-starter/blob/main/programs).

## Compile and run Nada programs

The [`nada`](nada) tool can be used to manage Nada projects (create project, compile, run, and test programs, generate tests, etc.).
Alternatively, you can use the `pynadac` and `nada-run` standalone tools.

### Compile a Nada program with [`pynadac`](pynadac)

Before the programs can be stored and run on the Nillion Network, they must be compiled into bytecode.
The Nada Compiler, referred to as [`pynadac`](pynadac), is a developer tool within the [Nillion SDK](nillion-sdk-and-tools.md) used to compile programs written in Nada to bytecode.

Compiling the example above outputs the compiled circuit to bytecode in a new file:

- Input program: **tiny_addition.py**
- Output bytecode: **tiny_addition.nada.bin**

### Run a program locally with the [`nada-run`](nada-run)

Use the [`nada-run`](nada-run) developer tool within the [Nillion SDK](nillion-sdk-and-tools.md) to quickly execute and iterate on Nada programs under an environment that is a close as it can get to running them in a real network. The local network tool:

- takes in a compiled Nada program and secrets,
- creates blinding factors locally to hide every secret input you provide to the program,
- creates a stripped down version of a Nillion cluster and runs the same bytecode that would be run during a real execution of your program.&#x20;

```python
# secrets file
integers:
  my_secret_1: 6
  my_secret_2: 4
```

Local program execution goes through the same flows your code would on the Nillion Network. Here's how you could execute the program locally from the command line assuming you had the following files

- secrets
- tiny_addition.nada.bin

```
./nada-run --secrets-path ./secrets tiny_addition.nada.bin
```

The result of executing the `tiny_addition.nada.bin` program on the secret inputs from the `secrets` file with `nada-run` is `10`.
