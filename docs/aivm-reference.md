# AIVM API Reference

The AI Virtual Machine (AIVM) is a secure computation environment for running machine learning models. It enables privacy-preserving inference by processing encrypted inputs without exposing the underlying data.

## Requirements

Before using the AIVM client library, ensure you have:
- Python 3.7 or higher
- PyTorch 1.8.0 or higher
- AIVM client library installed (`pip install aivm-client`)

## Supported Model Types

The AIVM currently supports two types of models:
- **LeNet5**: For image classification tasks
- **BertTiny**: For text classification and analysis

## API Reference

### Functions

#### Model Management

#### `upload_model(model_path, model_name, model_type)`
Uploads a custom model to the AIVM server.

**Parameters:**
- `model_path` (str): Path to the model file
- `model_name` (str): Name to identify the model
- `model_type` (ModelType): Type of the model (must be one of the supported types)

**Example:**
```python
import aivm_client as aic

# Upload a custom model directly
aic.upload_model("path/to/model.pth", "MyCustomModel", aic.ModelType.LeNet5)
```

#### `upload_bert_tiny_model(model_path, model_name)`
Convenience function to upload a BertTiny model.

**Parameters:**
- `model_path` (str): Path to the model file
- `model_name` (str): Name to identify the model

**Example:**
```python
import aivm_client as aic

# Upload a custom BertTiny model
aic.upload_bert_tiny_model("path/to/bert_model.pth", "MyBertModel")
```

#### `upload_lenet5_model(model_path, model_name)`
Convenience function to upload a LeNet5 model.

**Parameters:**
- `model_path` (str): Path to the model file
- `model_name` (str): Name to identify the model

**Example:**
```python
import aivm_client as aic

# Upload a custom LeNet5 model
aic.upload_lenet5_model("path/to/lenet_model.pth", "MyLeNetModel")
```

### Inference

#### `get_prediction(inputs, model, model_type=None)`
Performs secure inference using encrypted inputs.

**Parameters:**
- `inputs` (ArithmeticSharedTensor): Encrypted input tensor
- `model` (str): Name of the model to use
- `model_type` (ModelType, optional): Type of the model if using raw cryptensor

**Returns:**
- Prediction result from the model

**Raises:**
- ValueError: If inputs are not of a supported cryptensor type and no model_type is provided

**Example:**
```python
import aivm_client as aic
import torch

# For LeNet5
input_tensor = torch.randn(1, 1, 28, 28)
encrypted_input = aic.LeNet5Cryptensor(input_tensor)
result = aic.get_prediction(encrypted_input, "LeNet5MNIST")

# For BertTiny
sentence = "Hello, this is a test message"
tokens = aic.tokenize(sentence)
encrypted_input = aic.BertTinyCryptensor(*tokens)
result = aic.get_prediction(encrypted_input, "BertTinySpam")
```

#### `get_supported_models()`
Retrieves a list of all models available for inference.

**Returns:**
- list: Names of supported models

**Example:**
```python
import aivm_client as aic

# Get list of available models
models = aic.get_supported_models()
print(f"Available models: {models}")
```

### Text Processing

#### `tokenize(sentence)`
Tokenizes input text for use with BertTiny models.

**Parameters:**
- `sentence` (str): Input text to tokenize

**Returns:**
- tuple: (input_ids, attention_mask) tensors

**Example:**
```python
import aivm_client as aic

# Tokenize text for BertTiny
sentence = "This is a sample text for sentiment analysis"
tokens = aic.tokenize(sentence)
encrypted_input = aic.BertTinyCryptensor(*tokens)
```

## Classes

### `BertTinyCryptensor`
Specialized cryptensor for BertTiny model inputs.

**Inherits from:** `ArithmeticSharedTensor`

**Parameters:**
- `*inputs` (torch.Tensor): Two tensors (tokens and attention_mask), each of shape (1, 128)

**Example:**
```python
import aivm_client as aic

# Create encrypted input for BertTiny
sentence = "Sample text for classification"
tokens = aic.tokenize(sentence)
encrypted_input = aic.BertTinyCryptensor(*tokens)
```

### `LeNet5Cryptensor`
Specialized cryptensor for LeNet5 model inputs.

**Inherits from:** `ArithmeticSharedTensor`

**Parameters:**
- `inputs` (torch.Tensor): Input tensor for the LeNet5 model

**Example:**
```python
import aivm_client as aic
import torch

# Create encrypted input for LeNet5
image = torch.randn(28, 28)  # Sample input image
encrypted_input = aic.LeNet5Cryptensor(image)
```

## Complete Usage Example

Here's a complete example showing how to use the AIVM client for both BertTiny and LeNet5 models:

```python
import aivm_client as aic
import torch

# List available models
models = aic.get_supported_models()
print(f"Available models: {models}")

# Example with LeNet5
image_input = torch.randn(28, 28)
encrypted_image = aic.LeNet5Cryptensor(image_input)
digit_prediction = aic.get_prediction(encrypted_image, "LeNet5MNIST")

# Example with BertTiny
text_input = "This is a sample message for spam detection"
tokens = aic.tokenize(text_input)
encrypted_text = aic.BertTinyCryptensor(*tokens)
spam_prediction = aic.get_prediction(encrypted_text, "BertTinySpam")

# Upload custom models
aic.upload_lenet5_model("path/to/custom_lenet.pth", "MyCustomLeNet")
aic.upload_bert_tiny_model("path/to/custom_bert.pth", "MyCustomBert")
```

## Security Best Practices

When working with the AIVM client, follow these security guidelines:

1. **Model Protection**
   - Keep your model files secure and use proper access controls
   - Regularly update models to patch potential vulnerabilities
   - Use unique model names to prevent conflicts

2. **Input Validation**
   - Always validate input dimensions before encryption
   - Ensure input data is properly normalized
   - Handle edge cases appropriately

3. **Error Handling**
   - Implement proper error handling for failed predictions
   - Log errors without exposing sensitive information
   - Have fallback mechanisms for critical applications

## Troubleshooting

Common issues and their solutions:

1. **Connection Issues**
   ```python
   ConnectionError: Failed to connect to AIVM server
   ```
   - Check if the AIVM server is running
   - Verify network connectivity
   - Ensure proper authentication credentials

2. **Model Loading Errors**
   ```python
   ValueError: Unsupported model type
   ```
   - Verify the model format matches supported types
   - Check if the model file is corrupted
   - Ensure model compatibility with current AIVM version

3. **Memory Issues**
   ```python
   RuntimeError: CUDA out of memory
   ```
   - Reduce batch size
   - Free unused tensors
   - Consider using CPU fallback for large models

For additional support, please refer to our [GitHub issues](https://github.com/NillionNetwork/aivm-client/issues) or contact the development team.
