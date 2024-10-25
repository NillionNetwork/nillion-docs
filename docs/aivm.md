# Nillion AIVM

:::warning
[Nillion AIVM](https://github.com/NillionNetwork/nillion-aivm) is currently in early development. While functional, it may contain bugs and is not recommended for deployment in production or critical systems.
:::

[Nillion AIVM](https://github.com/NillionNetwork/nillion-aivm) is a secure inference platform for Deep Learning models based on Multi-Party Computation (MPC). It enables private model inference and custom model deployment while maintaining data confidentiality throughout the computation process. This documentation covers installation, supported models, and usage instructions.

## Supported Models

AIVM currently supports the following pre-trained models for specific learning tasks. You can either utilize these existing models or use the [training scripts](https://github.com/NillionNetwork/nillion-aivm/examples) to produce your own custom-trained versions:

- BertTiny
  - SMS Spam Classification
  - Movie Rating Sentiment Analysis
  - Tweet Sentiment Analysis
- LeNet5
  - Handwritten Digit Recognition (MNIST)
  - Cats vs Dogs Classification

We also have real-life project examples using these models including a Discord Bot for sentiment analysis and hotdog image detection.

More information on the supported models and project ideas can be found [here](./aivm-supported-models.md)

## Installation / Quickstart

:::info
Note: For the Encode Hackathon, you are required to install, run the development network. Then try one of the [examples:](https://github.com/NillionNetwork/nillion-aivm/tree/main/examples)

- 2a-fine-tuning-bert-tiny.ipynb
- 2b-fine-tuning-lenet5.ipynb
- 2c-fine-tuning-bert-tiny-tweet-dataset.ipynb
- 3a-upload-your-bert-tiny-model.ipynb
- 3b-upload-your-lenet5-model.ipynb
- 3c-upload-your-bert-tiny-for-tweet-sentiment.ipynb
  :::

### Recommended Installation

Installing Nillion AIVM is straightforward:

1. Create a virtual environment:

   ```bash
   python3 -m venv .venv
   ```

2. Activate the virtual environment:

   On Linux/macOS:

   ```bash
   source .venv/bin/activate
   ```

   On Windows:

   ```bash
   .\venv\Scripts\activate
   ```

3. Install the package:

   ```bash
   pip install "nillion-aivm[examples]"
   ```

This command installs all necessary dependencies for performing secure inference on AIVM. You can now check the [examples to test Nillion AIVM](https://github.com/NillionNetwork/nillion-aivm)

#### Starting the Development Network

Launch the AIVM development network with:

```shell
aivm-devnet
```

This command starts a persistent process that manages the secure computation infrastructure. To stop the network, use `CTRL`+`C`.

:::info
**Note**: Ensure `aivm-devnet` is running before proceeding with the following examples.

If you get stuck on this with VSCode, ensure the correct venv is selected. If it asks to pip install your packages / no pip is found, you can use `pip install ipykernel -U --force-reinstall` to install it.
:::

### Using Docker to deploy `aivm-devnet`

You can choose to use Docker for deploying `aivm-devnet`. For that, you **must have a working Docker installation**. The only required command is:

```shell
docker run -it -p 50050:50050 nillion/aivm-devnet
```

This commands forwards port 50050 from the Docker to your local machine, which is the port used to connect with the cluster.

## Performing Secure Inference

### Basic Usage

1. First, import the AIVM client and check available models:

```python
import aivm_client as aic

# List all supported models
available_models = aic.get_supported_models()
print(available_models)
```

2. Prepare your input data. Here's an example using PyTorch to load an MNIST dataset input:

```python
# Load the libraries
import torch
import torchvision.datasets as dset
import torchvision.transforms as transforms

# Define the required transformations for MNIST dataset
trans = transforms.Compose(
    [
        transforms.ToTensor(),                # Transform to tensor
        transforms.Resize((28, 28)),          # Resize to (28 x 28)
        transforms.Normalize((0.5,), (1.0,)), # Normalize the image
    ]
)
# Load the dataset
dataset = dset.MNIST(
    root="/tmp/mnist", train=True, transform=trans, download=True
)

# Get entry #20 of the dataset
inputs, _ =  dataset[20]
inputs = inputs.reshape(1, 1, 28, 28)
```

3. Encrypt your input using the appropriate Cryptensor:

```python
# Encrypt the input
encrypted_input = aic.LeNet5Cryptensor(inputs)
```

4. Perform secure inference:

```python
# Get prediction while maintaining privacy
result = aic.get_prediction(encrypted_input, "LeNet5MNIST")
```

The `get_prediction` function automatically handles the secure computation protocol with the `aivm-devnet` nodes, ensuring that your input data remains private throughout the inference process.

## Custom Model Deployment

You can deploy your own trained models to AIVM, provided they follow the supported architectures (BertTiny or LeNet5).

### Uploading Custom Models

1. Import the AIVM client:

```python
import aivm_client as aic
```

2. Upload your custom model:

```python
# For BertTiny models
aic.upload_bert_tiny_model(model_path, "MyCustomBertTiny")

# For LeNet5 models
aic.upload_lenet5_model(model_path, "MyCustomLeNet5")
```

3. Perform inference with your custom model:

```python
# For BertTiny models
result = aic.get_prediction(private_berttiny_input, "MyCustomBertTiny")

# For LeNet5 models
result = aic.get_prediction(private_lenet5_input, "MyCustomLeNet5")
```

### Model Requirements

Custom models must meet these requirements:

- Follow the exact architecture of either BertTiny or LeNet5
- Be trained using PyTorch
- Use the same input dimensions as the original architectures
- Be saved in PyTorch's standard model format (.pth or .pt)

:::info
**Note**: Custom model names must be unique within your AIVM instance.
:::

### Next Steps

Now you can check out the [examples](https://github.com/NillionNetwork/nillion-aivm/tree/main/examples) folder and get started with your own fine-tuned nd custom models.

You can try:

- LeNet5 for digit classification
- BertTiny for spam detection
- BertTiny for tweet sentiment
