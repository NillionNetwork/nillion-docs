# Nada Numpy Introduction

Nada Numpy is an opinionated clone of Numpy, seamlessly integrated with the Nada DSL. It allows for fast and efficient manipulation of array structures using Nada DSL, while extending functionality to include interfacing with decimal numbers.

One key difference between Numpy and Nada Numpy is that Nada Numpy enforces strong typing. Unlike Numpy, which dynamically changes types, Nada Numpy requires a strongly-typed interface, working with root families (`Integer`, `UnsignedInteger`, `Rational`, and `SecretBoolean`).

In this tutorial, we’ll explore the capabilities of Nada Numpy together. Before we start, make sure you have the Nillion SDK installed.

## Installation

First things first, let’s get Nada Numpy installed on your system. It’s as easy as running:
```bash
pip install nada-numpy
```

## Writing a Nada-Numpy program

Nada Numpy aligns with the structure of the Nada DSL. A typical Nada Numpy program comprises the following sections:

	1.	Import Section
	2.	Party Declaration Section
	3.	Input Declaration Section
	4.	Computation Section
	5.	Output Section

To get started, we can initialize our project structure with the following command:
```bash
nada init hello-nada-numpy
```

This sets up everything we need. Now, let’s dive into the code! We’ll create a program that adds two arrays, similar to the Nada DSL starter which adds two variables. Here’s the complete code to put in `src/main.py`:
```python
from nada_dsl import *
import nada_numpy as na

def nada_main():
    parties = na.parties(3)

    a = na.array([3], parties[0], "A", SecretInteger)
    b = na.array([3], parties[1], "B", SecretInteger)

    result = a + b

    return result.output(parties[2], "my_output")
```

Let’s break this down step-by-step.


### 1. Party Declaration Section

Start by importing the necessary modules. We need Nada DSL and Nada Numpy, so we import them like this:

```python
from nada_dsl import *
import nada_numpy as na
```
Next, define the main function for our program:

```python
def nada_main():
```

In this section, we’ll declare the parties involved in our computation. Parties represent the different participants in our Nada program. Nada Numpy makes it easy to create multiple parties with the `na.parties` function:

```python
    parties = na.parties(3)
```

Instead of having to define each party manually, we use Nada Numpy functionality. In this case with `na.parties(3)` we'll be creating a list of three parties named: `Party0`, `Party1` and `Party2`.

### 2. Input Declaration Section

Now, let’s define our inputs. We’ll create two `NadaArrays`, each with three elements. The `na.array` function allows us to define an array with arbitrary dimensions and types.

```python
    a = na.array([3], parties[0], "A", SecretInteger)
```

This line creates an array a with 3 elements, owned by `Party0`, named `“A”`, and of type `SecretInteger`.

Similarly, we define the second array b:
```python
    b = na.array([3], parties[1], "B", SecretInteger)
```
This array is also 3 elements long, owned by `Party1`, named `“B”`, and of type `SecretInteger`.

:::tip

Under the hood, NadaArray creates variables for each element of the array. For example, `a` will have variables `"A_0"`, `"A_1"`, and `"A_2"`, while `b` will have `"B_0"`, `"B_1"`, and `"B_2"`.

:::

### 3. Computation Phase
With our inputs ready, we can perform computations. Adding the two arrays is straightforward. In the Numpy fashion, we'll be operating all the variables consecutively with the `+` operator. 
 
```python
    res = a + b
```

This line operates each entry of the array linearly. If our input arrays were: `a =  [1, 2, 3]` and `b = [4, 5, 6]` we would be summing each entry of array `a` with the corresponding entry of array `b`. That is: `res[0] = a[0] + b[0]`, `res[1] = a[1] + b[1]` and `res[2] = a[2] + b[2]`; and obtaining `res = [5, 7, 9]`.

:::tip

You can experiment with different operations (+, -, *, /) and array dimensions to see what Nada Numpy can do!

:::


### 4. Output Section

Finally, we need to produce the output. Since `NadaArray` is not a base Nada type, we use the `.output` method to generate the output. This method takes the output party and the output variable name as arguments:

```python
    return res.output(parties[2], "my_output")
```

In this case, we'll be invoking `res.output(parties[2], "my_output")` establishing that the output party will be `Party2`and the name of the output variable will be `"my_output"`.

With everything in place, we can build and test our program:
```bash
nada build
```

## Using Nada Numpy with Nillion Network

After completing the program writing, we can upload it and interact with it in the network with the ease provided by Nada Numpy. For that, we use the Python Nillion Client. We can use the same complete code as for other examples. The only difference is how Nada Numpy allows to easily include arrays in our uploads to the Nillion Networ with the Nada Numpy client. We add the link to the [complete code](https://github.com/NillionNetwork/nada-algebra/blob/main/examples/broadcasting/main.py).

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