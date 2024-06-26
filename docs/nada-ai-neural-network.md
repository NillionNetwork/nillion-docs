# Nada AI Multi-Layer Perceptron Tutorial

In this tutorial, we’ll explore the capabilities of Nada AI to create a simple Multi-Layer Perceptron (MLP) model for inference. First, we'll define our model, and then import it to Nada and the Nillion Network.

**Before starting, make sure you have the Nillion SDK installed.**

## Installation

First things first, let’s get Nada Numpy installed on your system. It’s as easy as running:
```bash
pip install nada-ai
```

## Defining our Multi-Layer Perceptron Model

If you've previously installed `nada-ai`, you should already have the dependencies required for this demo. We will define a simple MLP with two linear layers and a ReLU activation. Here is the script to define it:

```python
import torch

# Create custom torch Module
class MyNN(torch.nn.Module):
    """My simple neural net"""

    def __init__(self) -> None:
        """Model is a two layers and an activations"""
        super(MyNN, self).__init__()
        self.linear_0 = torch.nn.Linear(8, 4)
        self.linear_1 = torch.nn.Linear(4, 2)
        self.relu = torch.nn.ReLU()

    def forward(self, x: torch.tensor) -> torch.tensor:
        """My forward pass logic"""
        x = self.linear_0(x)
        x = self.relu(x)
        x = self.linear_1(x)
        return x

my_nn = MyNN()
```

We will not be delving into the model training, as it remains out of the scope, however, we refer you to the [source code](https://github.com/NillionNetwork/nada-ai/blob/main/examples/multi_layer_perceptron/01_model_provider.ipynb) in case you want to train a model with similar characteristics.

Now, let's break down the different parts of the program. 

First, we import the necessary modules, in this case Pytorch with `torch`.

```python
import torch
```

Next, we define our neural network class `MyNN`, which inherits from `torch.nn.Module`. The `__init__` method initializes two linear layers and a ReLU activation function.

```python
class MyNN(torch.nn.Module):
    """My simple neural net"""

    def __init__(self) -> None:
        """Model is a two layers and an activations"""
        self.linear_0 = nn.Linear(8, 4)
        self.linear_1 = nn.Linear(4, 2)
        self.relu = nn.ReLU()
```

The `forward` method defines the forward pass logic of the neural network. It applies the first linear transformation, followed by a ReLU activation, and then the second linear transformation.

```python
    def forward(self, x: na.NadaArray) -> na.NadaArray:
        """My forward pass logic"""
        x = self.linear_0(x)
        x = self.relu(x)
        x = self.linear_1(x)
        return x
```

Now that we've defined our model, we can proceed to migrate it to Nillion for private execution.

## Writing our Nada-AI Program

To get started, initialize your project structure with the following command:
```bash
nada init nada-mlp
```

This sets up your environment. We'll create a program that performs inference using our MLP model. Here’s the complete code to place in `src/main.py`:

```python
import nada_numpy as na
from nada_ai import nn

class MyNN(nn.Module):
    """My simple neural net"""

    def __init__(self) -> None:
        """Model is a two layers and an activations"""
        self.linear_0 = nn.Linear(8, 4)
        self.linear_1 = nn.Linear(4, 2)
        self.relu = nn.ReLU()

    def forward(self, x: na.NadaArray) -> na.NadaArray:
        """My forward pass logic"""
        x = self.linear_0(x)
        x = self.relu(x)
        x = self.linear_1(x)
        return x

def nada_main():
    # Step 1: We use Nada Numpy wrapper to create "Provider" and "User"
    user = Party(name="User")
    provider = Party(name="Provider")

    # Step 2: Instantiate model object
    my_model = MyNN()

    # Step 3: Load model weights from Nillion network by passing model name (acts as ID)
    # In this example, Provider provides the model and User runs inference
    my_model.load_state_from_network("my_nn", provider, na.SecretRational)

    # Step 4: Load input data to be used for inference (provided by User)
    my_input = na.array((8,), user, "my_input", na.SecretRational)

    # Step 5: Compute inference
    # Note: completely equivalent to `my_model.forward(...)`
    result = my_model(my_input)

    # Step 6: We can use result.output() to produce the output for User and variable name "my_output"
    return result.output(user, "my_output")
```

Now, let's break down each section one step at a time.

### 1. Import Section

Start by importing the necessary modules:
```python
import nada_numpy as na
from nada_ai import nn
```

### 2. Neural Network Definition

Define your neural network model as shown previously. Ensure this is included in `src/main.py`. As you can see, the model is almost a 1:1 translation from Torch to Nada AI.


<table>
<tr>
<th>Torch</th>
<th>Nada AI</th>
</tr>
<tr>
<td>

```python
import torch

class MyNN(torch.nn.Module):
    """My simple neural net in Torch"""

    def __init__(self) -> None:
        """Model is a two layers and an activations"""
        super(MyNN, self).__init__()
        self.linear_0 = torch.nn.Linear(8, 4)
        self.linear_1 = torch.nn.Linear(4, 2)
        self.relu = torch.nn.ReLU()

    def forward(self, x: torch.tensor) -> torch.tensor:
        """My forward pass logic"""
        x = self.linear_0(x)
        x = self.relu(x)
        x = self.linear_1(x)
        return x
```
</td>
<td>

```python
from nada_ai import nn
import nada_numpy as na

class MyNN(nn.Module):
    """My simple neural net in Nada AI"""

    def __init__(self) -> None:
        """Model is a two layers and an activations"""
        self.linear_0 = nn.Linear(8, 4)
        self.linear_1 = nn.Linear(4, 2)
        self.relu = nn.ReLU()

    def forward(self, x: na.NadaArray) -> na.NadaArray:
        """My forward pass logic"""
        x = self.linear_0(x)
        x = self.relu(x)
        x = self.linear_1(x)
        return x
```
</td>
</tr>
</table>



### 3. Party Declaration Section

Declare the parties involved in the computation. In this case, we have two parties, `User` and `Provider`.

```python
user = Party(name="User")
provider = Party(name="Provider")
```
This line creates two parties: `User` and `Provider`. 

### 4. Model Initialization Section

Now, let's instantiate the neural network model:

```python
my_model = MyNN()
```

Here, `MyNN()` initializes our previously defined MLP model. Next, we need to load the model weights:

```python
my_model.load_state_from_network("my_nn", provider, na.SecretRational)
```
This line loads the model weights using the model name `"my_nn"` for `Provider`. The weights are of type `SecretRational`.

### 5. Input Data Loading Section

Next, load the user data for inference. We rely on Nada Numpy for this task:

```python
my_input = na.array((8,), user, "my_input", na.SecretRational)
```
This line creates an array `my_input` with 8 elements, owned by `User`, named `"my_input"`, and of type `SecretRational`.

### 6. Inference Computation Section

With our inputs ready, we can perform the computations:

```python
result = my_model(my_input)
```
This line computes the result of the MLP inference.

### 7. Output Section

As a final step, we determine the output of the computation. In this case, `User` receives `my_output` as a result of the computation.

```python
return na.output(result, user, "my_output")
```
This line specifies that `User` will receive the output named `"my_output"`.

With this structure in place, you can build and test your program using:
```bash
nada build
```

## Using Nada Numpy with Nillion Network

Once your program is written, you can integrate it with the Nillion Network using the Python Nada Numpy client. The process is similar to other examples. For detailed instructions and the complete code, refer to the [GitHub repository](https://github.com/NillionNetwork/nada-ai/blob/main/examples/multi_layer_perceptron/).

First, import the necessary modules, including the `TorchClient` from Nada AI:

```python
from nada_ai.client import TorchClient
```

Then, use `TorchClient` to format your input model for upload to the Nillion Network:

```python
# Create and store model secrets via TorchClient
model_client = TorchClient(my_nn)
model_secrets = nillion.Secrets(
    model_client.export_state_as_secrets("my_nn", na.SecretRational)
)

```

That’s it! You’ve successfully created, built, and integrated a Nada AI MLP model with the Nillion Network.

For more examples, please visit our [Github Repository Examples](https://github.com/NillionNetwork/nada-ai/tree/main/examples).