# Nillion AIVM

::: warning
Nillion AIVM is currently in early development. While functional, it may contain bugs and is not recommended for deployment in production or critical systems.
::: 
Nillion AIVM is a secure inference platform for Deep Learning models based on Multi-Party Computation (MPC). It enables private model inference and custom model deployment while maintaining data confidentiality throughout the computation process. This documentation covers installation, supported models, and usage instructions.

## Supported Models

AIVM currently supports the following pre-trained models for specific learning tasks. You can either utilize these existing models or deploy your own custom-trained versions:

### BertTiny
- SMS Spam Classification
  - Binary classification for detecting spam messages
  - Input: Text string
  - Output: Binary classification (spam/not spam)
- Movie Sentiment Analysis
  - Sentiment analysis for movie reviews
  - Input: Text string
  - Output: Sentiment score (-1 to 1)

### LeNet5
- Handwritten Digit Recognition (MNIST)
  - Classification of handwritten digits
  - Input: 28x28 grayscale image
  - Output: Digit classification (0-9)
- Cats vs Dogs Classification
  - Binary image classification
  - Input: 28x28 grayscale image
  - Output: Binary classification (cat/dog)

## Installation

Installing Nillion AIVM is straightforward:

```shell
pip install nillion-aivm
```

This command installs all necessary dependencies for performing secure inference on AIVM.

### Starting the Development Network

Launch the AIVM development network with:

```shell
aivm-devnet
```

This command starts a persistent process that manages the secure computation infrastructure. To stop the network, use `CTRL`+`C`.

::: info
**Note**: Ensure `aivm-devnet` is running before proceeding with the following examples.
:::

## Performing Secure Inference

### Basic Usage

1. First, import the AIVM client and check available models:

```python
import aivm_client as aic

# List all supported models
available_models = aic.get_supported_models()
print(available_models)
```

2. Prepare your input data. Here's an example using PyTorch to generate a random input:

```python
import torch

# Create a sample input (e.g., for LeNet5 MNIST)
random_input = torch.randn((1, 1, 28, 28))  # Batch size 1, 1 channel, 28x28 pixels
```

3. Encrypt your input using the appropriate Cryptensor:

```python
# Encrypt the input
encrypted_input = aic.LeNet5Cryptensor(random_input)
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