# Debugging Nada

Nada DSL provides a way to easily interface with MPC in a user-friendly programming language. However, given the restrictions of MPC, behaviors that Python as the metaprogramming layer would enable are often not permitted. When trying to debug programs, there are a few strategies that can help us understand what's happening in Nada.

## Think Big, Code Small

A fundamental part of successfully developing complex functionality in Nada relies on following a set of best practices when developing your programs. Debugging large pieces of code can be a nightmare. Thus, setting up your project in an appropriate manner can help avoid headaches. Our recommendation here is to build and test small pieces of code. For that, we can use the `nada` project management tool and its capabilities.

These few tips when setting up your project can help ensure a healthier development lifecycle:

1. **Don't use `main` to write your code**: Instead, write it in another `.py` file, import it, and execute it. This way, we can use multiple test files for each piece of code, ensuring consistent behavior.

    <table>
    <tr>
    <th>DO:</th>
    <th>DON'T:</th>
    </tr>
    <tr>
    <td>

    ```bash
    src
    ├── lib.py
    └── main.py
    ```

    ```python 
    # lib.py
    from nada_dsl import *

    def func(a, b):
        return a + b
    ```

    ```python 
    # main.py
    from nada_dsl import *
    from lib import func

    def main():
        ...
        c = func(a, b)
        ...
    ```
    </td>
    <td>

    ```bash
    src
    └── main.py
    ```

    ```python 
    # main.py

    from nada_dsl import *

    def func(a, b):
        return a + b

    def main():
        ...
        c = func(a, b)
        ...
    ```
    </td>
    </tr>
    </table>

2. **Create and test multiple compilation units**: Using the `nada` project management tool, one can create multiple independent compilation units, that is, programs that compile independently. To create a separate compilation unit, follow these steps:

    * Add the following line to `nada-project.toml`:
    ```toml
    [[programs]]
    path = "src/test_func.py" # test_func must be replaced by the name of your choice.
    prime_size = 128 # Can also be 64 or 256
    ```

    * Create the appropriate file in the `src/` directory, in this case, `test_func.py`:

    ```bash
    src
    ├── lib.py
    ├── main.py
    └── test_func.py
    ```

    * Use this file to test a single functionality, in this case our function `func`:

    ```python
    # test_func.py
    from nada_dsl import *
    from lib import func

    def main():
        ...
        c = func(a, b)
        ...
    ```

    After this point, whenever we execute `nada build`, `nada` will compile all the programs in the `nada-project.toml` file. This can serve as a way to test that any changes do not break other functionalities. Furthermore, if you wish to compile a single file, you can do so with: `nada build <file>`, in this case `nada build test_func`.

3. **Add Tests for Every Function**: Adding tests for every function can be a good way to detect wrong behavior and to test for corner cases. For that, you can use `nada generate-test` to produce a test file named `test_func_1.yaml` in the `tests/` directory, with the following command:
    ```bash
    # nada generate-test --test-name <test_name> <source_file>
    nada generate-test --test-name test_func_1 test_func
    ```

    This will produce the following tree:

    ```bash
    ├── src
    │   ├── lib.py
    │   ├── main.py
    │   └── test_func.py
    └── tests
        └── test_func_1.yaml
    ```
    You can create as many tests as you wish for the same compilation unit. If you execute `nada test`, it will execute all the existing tests for all compilation units. This can be a good way to check for any regression errors in your Nada programs. If you wish to execute the tests for a single file, you can do so with `nada test test_func_1`.

4. **Don't use `print` to debug**: Using `print` statements to debug is a usual way to diagnose the potential misbehavior of a program. However, Nada DSL does **not** currently support `print` statements and will fail if any are included. The best way to diagnose the behavior at a certain point is to use Python exceptions. The following is an example to understand the type of a variable:

    ```python
    my_int1 = SecretInteger(Input(name="my_int1", party=party1))
    my_int2 = SecretInteger(Input(name="my_int2", party=party1))

    new_int = my_int1 + my_int2
    raise Exception(type(new_int)) # Exception on the type
    ```
    This exception will show us which type the `new_int` variable holds and can help us reason about what is failing in our program.