# Nada AI Linear Model Tutorial

In this tutorial, we’ll explore the capabilities of Nada AI to create a basic Linear Regression model for inference. First, we'll train our model, and then import it to Nada and the Nillion Network.

**Before starting, make sure you have the Nillion SDK installed.**

## Installation

First things first, let’s get Nada Numpy installed on your system. It’s as easy as running:
```bash
pip install nada-ai
```

## Training our Linear Regression Model

If you've previously installed `nada-ai`, you should already have the dependencies required for this demo. For simplicity, we'll be training on random inputs and outputs. You can find the complete training script here:

```python
import numpy as np
from sklearn.linear_model import LinearRegression

# Create a random input dataset of 1000 samples with 10 features per sample
X = np.random.randn(1,000, 10)

# We assume trained coefficients are the data from a specific linear model
expected_weights = np.ones((10,))
expected_bias = 4.2  # Value taken randomly

y = X @ expected_weights + expected_bias

model = LinearRegression()
# The learned parameters will likely be close to the coefficients & bias we used to generate the data
fit_model = model.fit(X, y)
```

Now, let's break down the different parts of the program. First, we import the `LinearRegression` model from `sklearn` to be used in our training. Furthermore, we'll use Numpy to produce a random input dataset.

```python
import numpy as np
from sklearn.linear_model import LinearRegression
```

We create a random example in a particular way. First, we produce `X`, which consists of 1000 random samples with 10 features each. Then, we generate our `expected_weights` and `expected_bias` and use those to generate the output `y`. In this way, we assume that training on `X` and `y` should yield the `expected_weights` and `expected_bias` as a result.

```python
# Create a random input dataset of 1000 samples with 10 features per sample
X = np.random.randn(1,000, 10)

# We assume trained coefficients are the data from a specific linear model
expected_weights = np.ones((10,))
expected_bias = 4.2  # Value taken randomly

y = X @ expected_weights + expected_bias
```

Then we can proceed to train our Linear Regression model. The line below first initializes the `LinearRegression` model and then calls the `fit` function to proceed with the training.

```python
model = LinearRegression()
fit_model = model.fit(X, y)
```

Based on the dataset creation, the learned weights and bias should resemble the `expected_weights` and `expected_bias`. These can be extracted to be imported in the next sections. Whether you save them to a `.json` file, or copy-paste them is up to the user.

```python
weights = fit_model.coef_
bias = fit_model.intercept_
```

Now that we've trained our model, we can proceed to migrate it to Nillion for private execution.

## Writing our Nada-AI program

To get started, initialize your project structure with the following command:
```bash
nada init nada-linear-regression
```

This sets up your environment. We'll create a program that performs linear regression inference. Here’s the complete code to place in `src/main.py`:

```python
from nada_dsl import *
import nada_numpy as na
from nada_ai.linear_model import LinearRegression

def nada_main():
    # Step 1: Define the parties involved in our computation
    user = Party(name="User")
    provider = Party(name="Provider")

    # Step 2: Instantiate the linear regression object
    my_model = LinearRegression(10)

    # Step 3: Load model weights from the Nillion network using the model name as ID
    # Provider provides the model and User runs inference
    my_model.load_state_from_network("my_model", provider, na.SecretRational)

    # Step 4: Load input data for inference provided by User
    my_input = na.array((10,), user, "my_input", na.SecretRational)

    # Step 5: Compute inference
    result = my_model.forward(my_input)

    # Step 6: Produce the output for User with the variable name "my_output"
    return na.output(result, user, "my_output")
```

Now, let's break down each section one step at a time.

### 1. Import Section

Start by importing the necessary modules:
```python
import nada_numpy as na
from nada_ai.linear_model import LinearRegression
```

### 2. Party Declaration Section

Declare the parties involved in the computation. In this case, we have a `provider` in charge of training the model and uploading it to the Nillion Network. The `user` will input its data and obtain the output classification. Both contribute to the computation but they learn nothing about each other's inputs.
```python
    user = Party(name="User")
    provider = Party(name="Provider")
```
This line creates two parties: `User` and `Provider`. 

### 3. Model Initialization Section

Now, let's instantiate the linear regression model. We use the Nada AI wrapper for Linear Regression and define the number of weights, matching what we initialized our model with.

```python
    my_model = LinearRegression(10)
```
Here, `LinearRegression(10)` initializes a linear regression model with 10 features. The initialization only includes the declaration of the underlying components. Next, we need to initialize the model by loading the weights. We do that with the following line:

```python
    my_model.load_state_from_network("my_model", provider, na.SecretRational)
```
This line loads the model weights using the model name `"my_model"` for `Provider`. The weights are of type `SecretRational`. 

:::tip

Under the hood, NadaArray creates variables for each element of the LinearRegression model. For example, for a model called `my_model`, we will have variables `my_model_coef_0` to `my_model_coef_10` and `my_model_intercept_0`.

:::

### 4. Input Data Loading Section

Now, we need to load the user data for the inference. We rely on Nada Numpy for this task:
```python
    my_input = na.array((10,), user, "my_input", na.SecretRational)
```
This line creates an array `my_input` with 10 elements, owned by `User`, named `"my_input"`, and of type `na.SecretRational`.

### 5. Inference Computation Section

With our inputs ready, we can perform computations. We use the model that we just initialized with the common `forward` function over the inputs.
```python
    result = my_model.forward(my_input)
```
This line computes the result of the linear regression inference.

### 6. Output Section

As a final step, we have to determine what our outputs of the computation will be. In this case, `User` receives `my_output` as a result of the computation.
```python
    return na.output(result, user, "my_output")
```
This line specifies that `User` will receive the output named `"my_output"`.

With this structure in place, you can build and test your program using:
```bash
nada build
```

## Using Nada Numpy with Nillion Network

Once your program is written, you can integrate it with the Nillion Network using the Python Nada Numpy client. The process is similar to other examples. For detailed instructions and the complete code, refer to the [GitHub repository](https://github.com/NillionNetwork/nada-ai/blob/main/examples/linear_regression/network/compute.py).

First, import the necessary modules and the `SklearnClient` from Nada AI.
```python
from sklearn.linear_model import LinearRegression
from nada_ai.client import SklearnClient
```

Then, we use `SklearnClient` to format our input model for upload to the Nillion Network:
```python
# Create and store model secrets via ModelClient
model_client = SklearnClient(fit_model)  # fit_model is the same model used for training
model_secrets = nillion.Secrets(
    model_client.export_state_as_secrets("my_model", na.SecretRational)
)
```

That’s it! You’ve successfully created, built, and integrated a Nada AI Linear Regression model with the Nillion Network.

For more examples, visit our [Github Repository Examples](https://github.com/NillionNetwork/nada-ai/tree/main/examples).