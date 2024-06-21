# Nada Numpy Matrix Multiplication Tutorial

In this tutorial, we’ll delve into the capabilities of Nada Numpy with a focus on matrix multiplication using the `@` operator. Before we begin, ensure you have the Nillion SDK installed.

To get started, initialize your project structure with the following command:
```bash
nada init nada-matmul
```

This sets up your environment. Now, let's dive into the code! We'll create a program that computes the matrix product of two arrays. Here’s the complete code to place in `src/main.py`:

```python
from nada_dsl import *

# Step 0: Nada Numpy is imported with this line
import nada_numpy as na


def nada_main():
    # Step 1: We use Nada Numpy wrapper to create "Party0", "Party1" and "Party2"
    parties = na.parties(3)

    # Step 2: Party0 creates an array of dimension (3 x 3) with name "A"
    a = na.array([3, 3], parties[0], "A", SecretInteger)

    # Step 3: Party1 creates an array of dimension (3 x 3) with name "B"
    b = na.array([3, 3], parties[1], "B", SecretInteger)

    # Step 4: The result is of computing the dot product between the two which is another (3 x 3) matrix
    result = a @ b

    # Step 5: We can use result.output() to produce the output for Party2 and variable name "my_output"
    return result.output(parties[1], "my_output")
```

Now, let's break down each section step-by-step.

### 1. Import Section

Start by importing the necessary modules:
```python
from nada_dsl import Output, SecretInteger
import nada_numpy as na
```

### 2. Party Declaration Section

Declare the parties involved in the computation using `na.parties`:
```python
    parties = na.parties(3)
```
This line creates three parties: `Party0`, `Party1`, and `Party2`.

### 3. Input Declaration Section

Define the input matrices using `na.array`:
```python
    A = na.array([3, 2], parties[0], "A", SecretInteger)
```
Here, `A` is a matrix of size 3x2, owned by `Party0`, named `"A"`, and of type `SecretInteger`.

Similarly, define matrix `B`:
```python
    B = na.array([2, 4], parties[1], "B", SecretInteger)
```
Matrix `B` is 2x4, owned by `Party1`, named `"B"`, and also of type `SecretInteger`.

### 4. Computation Section

Perform the matrix multiplication using the `@` operator:
```python
    result = A @ B
```
This computes the matrix product of `A` and `B`.

### 5. Output Section

Produce the output for `Party2` with the variable name `"my_output"` using `na.output`:
```python
    return na.output(result, parties[2], "my_output")
```
This line specifies that `Party2` will receive the output named `"my_output"`.

With this structure in place, you can build and test your program using:
```bash
nada build
```

## Using Nada Numpy with Nillion Network

Once your program is written, you can integrate it with the Nillion Network using the Python Nada Numpy client. The process is straightforward, similar to other examples. For detailed instructions and the complete code, refer to the [GitHub repository](https://github.com/NillionNetwork/nada-algebra/blob/main/examples/broadcasting/main.py).

First, import the necessary modules:
```python
import numpy as np
import nada_numpy.client as na_client
```

Then, use `na_client.array` to format your arrays for upload to the Nillion Network:
```python
A = np.ones((3, 2))  # Sample numpy array with ones of shape 3x2
stored_secret = nillion.Secrets(na_client.array(A, "A"))
```

That’s it! You’ve successfully created, built, and integrated a Nada Numpy program with the Nillion Network, focusing on matrix multiplication with the `@` operator.

For more examples, please visit our [Github Repository Examples](https://github.com/NillionNetwork/nada-algebra/tree/main/examples).