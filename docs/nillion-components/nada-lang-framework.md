---
description: 'Language components: PyNada, the PyNada compiler, and a Nada program simulator'
---

# Nada-lang Framework

### Write programs in PyNada

The Nillion Network uses Nada, our MPC language, to define MPC programs. The first implementation of Nada is a Python DSL (Domain Specific Language), called PyNada.

The Nada language is

* Strongly typed: every variable and expression has a specific type that is checked at compile time to prevent common errors such as type mismatches
* Correctness-oriented: Nada has features including type-checking and static analysis built into the compiler
* Compiled: Nada is a compiled language with different stages

#### Nada Operations

* addition
* subtraction
* multiplication
* comparison
  * greater than
  * greater than or equal to&#x20;
  * less than

#### Nada Data Types

| Public          | Secret                |
| --------------- | --------------------- |
| Integer         | SecretInteger         |
| UnsignedInteger | SecretUnsignedInteger |
| Boolean         | SecretBoolean         |

#### Example Nada program

Here's a tiny Nada program that adds 2 secret integer inputs.

```python
# tiny_addition.py

from nada_dsl import *
def nada_main():

    nilla_the_dog = Party(name="Nilla 🐶")

    secret_int_1 = SecretInteger(Input(name="my_secret_1", party=nilla_the_dog))

    secret_int_2 = SecretInteger(Input(name="my_secret_2", party=nilla_the_dog))

    total = secret_int_1 + secret_int_2

    return [Output(total, "my_output", nilla_the_dog)]
```

tiny\_addition.py takes in 2 [Inputs](concepts.md#inputs) from the same [Party](concepts.md#party)

<table><thead><tr><th width="162">Input name</th><th width="145">Input type</th><th>Party name</th></tr></thead><tbody><tr><td>my_secret_1</td><td>SecretInteger</td><td>Nilla 🐶</td></tr><tr><td>my_secret_2</td><td>SecretInteger</td><td>Nilla 🐶</td></tr></tbody></table>

tiny\_addition.py returns an [Output](concepts.md#outputs) to a [Party](concepts.md#party)

<table><thead><tr><th>Output value</th><th>Output name</th><th>Output Type</th><th>Party name</th><th data-hidden>Output type</th><th data-hidden>Party name</th><th data-hidden>Output name</th></tr></thead><tbody><tr><td>total</td><td>my_output</td><td>SecretInteger</td><td>Nilla 🐶</td><td>SecretInteger</td><td>Nilla 🐶</td><td>my_output</td></tr></tbody></table>

### Compile a PyNada program with pynadac

Before the programs can be stored and run on the Nillion Network, they must be compiled into bytecode. The PyNada Compiler, referred to as pynadac, is a developer tool within the [Nillion SDK](nillion-sdk-and-tools.md) used to compile programs written in PyNada to bytecode.

Compiling the example above outputs the compiled circuit to bytecode in a new file:

* Input program: **tiny\_addition.py**
* Output bytecode: **tiny\_addition.nada.bin**

### Simulate program execution with program-simulator

Use the program-simulator developer tool within the [Nillion SDK](nillion-sdk-and-tools.md)  to quickly execute and iterate on Nada programs under an environment that is a close as it can get to running them in a real network. The program simulator tool

* takes in a compiled PyNada program and secrets
* creates blinding factors locally to hide every secret input you provide to the program
* creates a stripped down version of a Nillion cluster and runs the same bytecode that would be run during a real execution of your program.&#x20;

```python
# secrets file
integers:
  my_secret_1: 6
  my_secret_2: 4
```

Simulated program execution goes through the same flows your code would on the Nillion Network. Here's how you could simulate program execution from the command line assuming you had the following files

* secrets
* tiny\_addition.nada.bin

```
./program-simulator --secrets-path ./secrets tiny_addition.nada.bin
```

The result of executing the `tiny_addition.nada.bin` program on the secret inputs from the `secrets` file with program-simulator is `10`
