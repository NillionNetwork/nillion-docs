# Functions

The Nada DSL supports a limited form of user-defined functions.

## Basic Example

The example below introduces a function that calculates the total of three secret integer values. Notice that the arguments and the function itself both have [Python type annotations](https://docs.python.org/3/library/typing.html).

<iframe src='img/nada-lang-tutorial-functions-0.html' height='334px' width='100%'></iframe>
<!--```python
from nada_dsl import *

def total(x: SecretInteger, y: SecretInteger, z: SecretInteger) -> SecretInteger:
    return x + y + z

def nada_main():
    data_owner = Party(name="data_owner")

    x = SecretInteger(Input(name="x", party=data_owner))
    y = SecretInteger(Input(name="y", party=data_owner))
    z = SecretInteger(Input(name="z", party=data_owner))

    t = total(x, y, z)

    return [Output(t, "t", data_owner)]
```-->
