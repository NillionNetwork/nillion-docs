# Nada Numpy Dot Product Tutorial

In this tutorial, we’ll explore the capabilities of Nada Numpy together. Before we start, make sure you have the Nillion SDK installed.

To get started, we can initialize our project structure with the following command:
```bash
nada init nada-dot-product
```

This sets up everything we need. Now, let’s dive into the code! We’ll create a program that computes the dot product of two arrays. Here’s the complete code to put in `src/main.py`:

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
from nada_dsl import Output, SecretInteger
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

Now, let’s define our inputs. We’ll create two `NadaArrays`, each with three elements. The `na.array` function allows us to define an array with arbitrary dimensions and types.

```python
    a = na.array([3], parties[0], "A", SecretInteger)
```

This line creates an array `a` with 3 elements, owned by `Party0`, named `“A”`, and of type `SecretInteger`.

Similarly, we define the second array `b`:

```python
    b = na.array([3], parties[1], "B", SecretInteger)
```

This array is also 3 elements long, owned by `Party1`, named `“B”`, and of type `SecretInteger`.

:::tip
Under the hood, NadaArray creates variables for each element of the array. For example, `a` will have variables `"A_0"`, `"A_1"`, and `"A_2"`, while `b` will have `"B_0"`, `"B_1"`, and `"B_2"`.
:::

### 4. Computation Section

With our inputs ready, we can perform computations. Calculating the dot product of the two arrays is straightforward. In the Numpy fashion, we use the `dot` method:

```python
    result = a.dot(b)
```

This line computes the dot product of arrays `a` and `b`. If our input arrays were `a = [1, 2, 3]` and `b = [4, 5, 6]`, the dot product would be computed as `1*4 + 2*5 + 3*6 = 32`.

### 5. Output Section

Finally, we need to produce the output. Since `NadaArray` is not a base Nada type, we use the `.output` method to generate the output. This method takes the output party and the output variable name as arguments:

```python
    return na.output(result, parties[2], "my_output")
```

In this case, we invoke `na.output(result, parties[2], "my_output")` to specify that the output party will be `Party2` and the name of the output variable will be `"my_output"`.

With everything in place, we can build and test our program:
```bash
nada build
```

## Using Nada Numpy with Nillion Network

After completing the program writing, we can upload it and interact with it in the network with the ease provided by Nada Numpy. For that, we use the Python Nillion Client. We can use the same complete code as for other examples. The only difference is how Nada Numpy allows to easily include arrays in our uploads to the Nillion Network with the Nada Numpy client. We add the link to the [complete code](https://github.com/NillionNetwork/nada-algebra/blob/main/examples/broadcasting/main.py).

First, import the necessary modules:
```python
import numpy as np
import nada_numpy.client as na_client
```

Then, we can use it to introduce arrays with a similar syntax that will take care of the array formatting `na_client.array`. The first element will be the array with the secret values that we want to upload. The second value is the name, which shall match with the initial name set on the Nada Program.

```python
A = np.ones((3,)) # Sample numpy array with ones [1, 1, 1]
stored_secret = nillion.Secrets(na_client.array(A, "A"))
```

And that’s it! You’ve successfully created, built, and integrated a Nada Numpy program with the Nillion Network.

For more examples, please visit our [Github Repository Examples](https://github.com/NillionNetwork/nada-algebra/tree/main/examples).