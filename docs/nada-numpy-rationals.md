# Rational Numbers Tutorial

This tutorial shows how to use Nada Numpy Rational datatypes to work with fixed-point numbers in Nada.

## Notions

This tutorial uses fixed-point numbers as it is the only available way to use Fixed-Point numbers in Nada. The representation of a fixed-point number uses integer places to represent decimal digits. Thus, every number is multiplied by a scaling factor, that we refer to as `SCALE` ($\Delta = 2^{16}$) or `LOG_SCALE` in its logarithmic notation ($log_2\Delta = 16$). In a nutshell, this means we will use 16 bits to represent decimals.

If we want to input a variable `a = float(3.2)`, we need to first encode it. For that, we will define a new variable `a'` which is going to be the scaled version. In this case, the scaling factor (to simplify) is going to be 3 bits so, $log_2\Delta = 3$ and $\Delta = 2^3 = 8$. With the following formula, we compute the encoded value:

<!--$$ a' = round(a * \Delta) = round(a * 2^{log_{2}\Delta}) = 3.2 \cdot 2^3 = 3.2 \cdot 8 = 26 $$-->
$$ a' = round(a * \Delta) = 3.2 \cdot 2^3 = 3.2 \cdot 8 = 26 $$ 

Thus, to introduce a value with 3 bits of precision, we would be inputting 26 instead of 3.2.

## Example

```python
from nada_dsl import *

# Step 0: Nada Numpy is imported with this line
import nada_numpy as na


def nada_main():
    # Step 1: We use Nada Numpy wrapper to create "Party0", "Party1" and "Party2"
    parties = na.parties(3)

    # Step 2: Party0 creates an array of dimension (3, ) with name "A"
    a = na.array([3], parties[0], "A", SecretInteger)

    # Step 3: Party1 creates an array of dimension (3, ) with name "B"
    b = na.array([3], parties[1], "B", SecretInteger)

    # Step 4: The result is of computing the dot product between the two
    result = a.dot(b)

    # Step 5: We can use result.output() to produce the output for Party2 and variable name "my_output"
    return na.output(result, parties[1], "my_output")
```

Let’s break this down step-by-step.

### 1. Import Section

Start by importing the necessary modules. We need Nada DSL and Nada Numpy, so we import them like this:

```python
from nada_dsl import *
import nada_numpy as na
```

Next, define the main function for our program:

```python
def nada_main():
```

### 2. Party Declaration Section

In this section, we’ll declare the parties involved in our computation. Parties represent the different participants in our Nada program. Nada Numpy makes it easy to create multiple parties with the `na.parties` function:

```python
    parties = na.parties(3)
```

This line creates a list of three parties named: `Party0`, `Party1`, and `Party2`.

### 3. Input Declaration Section

Now, let’s define our inputs. We’ll create two secret rational numbers using `na.SecretRational`. This function allows us to define rational numbers with a specific owner and name.

```python
    a = na.SecretRational("my_input_0", parties[0])
```

This line creates a secret rational number `a` owned by `Party0`, named `“my_input_0”`.

Similarly, we define the second secret rational number `b`:

```python
    b = na.SecretRational("my_input_1", parties[1])
```

This secret rational number is owned by `Party1`, named `“my_input_1”`.

We also define a compile-time rational number `c`:

```python
    c = na.Rational(1.2)
```

This line creates a compile-time rational number `c` with a value of 1.2.

### 4. Computation Section

With our inputs ready, we can perform computations. In this example, we compute a specific rational operation. 

```python
    out_0 = ((a + b - c) * b) / (a + b - c)
```

This line performs the operation `(a + b - c) * b / (a + b - c)`, which simplifies to `b` because the numerator and denominator are the same.

### 5. Output Section

Finally, we need to produce the output. Since `SecretRational` is not a base Nada type, we use the `Output` method to generate the output. This method takes the value, output party, and output variable name as arguments:

```python
    return [
        Output(out_0.value, "my_output_0", parties[2]),
    ]
```

In this case, we specify that the output party will be `Party2` and the name of the output variable will be `"my_output_0"`.

With everything in place, we can build and test our program:
```bash
nada build
```

(Optional) Next, ensure that the program functions correctly by testing it with:
```bash
nada test
```

Finally, we can call our Nada program via the Nillion Python client by running:
```bash
python3 main.py
```

And that’s it! You’ve successfully created, built, and integrated a Nada Numpy Rational numbers program.