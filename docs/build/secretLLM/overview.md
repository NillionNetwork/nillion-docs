# SecretLLM

## What is SecretLLM

SecretLLM is a set of OpenAI-compatible APIs that run AI models within a Trusted Execution Environment (TEE). You can use SecretLLM to build new private AI applications or migrate existing ones to run in a secure SecretLLM environment where your data remains private.

## How SecretLLM Works

1. Send your prompt to SecretLLM over HTTPS (just like any secure web request)
2. Your prompt runs inside a Trusted Execution Environment where it is hidden from the cloud provider
3. Get your result back over HTTPS, complete with a cryptographic signature

## Available Models

| Model                                                 | Parameters | Features                      | Best For                                                                                             | Access                                                                |
|-------------------------------------------------------|------------| ----------------------------- |------------------------------------------------------------------------------------------------------| --------------------------------------------------------------------- |
| meta-llama/Llama-3.2-3B-Instruct                      | 3B         | Chat completion, tool support | Quick responses, simple Q&A, basic chat. Faster inference with lower resource usage.                 | Testnet                                                               |
| meta-llama/Llama-3.1-8B-Instruct                      | 8B         | Chat completion, tool support | More complex tasks, detailed responses, code generation. Higher quality but slower inference.        | Testnet                                                               |
| deepseek-ai/DeepSeek-R1-Distill-Qwen-14B              | 14B        | Chat completion               | Reasoning and complex tasks that require a long output. Slowest of the three.                        | [Apply for access](/build/secretLLM/access#apply-for-a-nilai-api-key) |
| hugging-quants/Meta-Llama-3.1-70B-Instruct-AWQ-INT4   | 70B        | Chat completion, tool support | Very high-quality responses, complex reasoning, detailed generation (e.g., coding, creative writing) | [Apply for access](/build/secretLLM/access#apply-for-a-nilai-api-key) |

For most use cases, start with the 3B model and move up if you need more capability.

## Key Features

- **Drop-in Privacy**: Keep your OpenAI-style code, just point it to SecretLLM
- **Privacy Through TEEs**: All processing happens within a TEE, built on NVIDIA Confidential Computing
- **Standard Security**: HTTPS encryption provides end-to-end protection for all data in transit between your application and the TEE environment
- **Cryptographic Attestation**: Verify the integrity of your TEE environment through our attestation API
- **Signed Responses**: Every model response includes a cryptographic signature for verification

## Attestation & Verification

SecretLLM provides two layers of cryptographic proof:

1. **Environment Attestation**: Verify your TEE's integrity through the attestation endpoint, including:

   - GPU environment verification
   - Service verification through a verifying key

2. **Response Signatures**: Every chat completion response includes a cryptographic signature, allowing you to verify that the response came from the attested environment.

## Getting Started

1. Get access to SecretLLM by obtaining your nilAI API key and node URL
2. Use your API key to check the `/models` endpoint for available models
3. Start running private AI using your chosen model
4. Optionally, verify your environment using the attestation API


### Enhance SecretLLM by providing context from SecretVault and blindRAG
Optionally, you can use blindRAG to allow SecretLLM to access SecretVault and retrieve relevant context!
See our [blindRAG documentation](https://docs.nillion.com/build/blindRAG) for details.
