# SecretLLM

SecretLLM is a set of OpenAI-compatible APIs that run AI models within a TEE. Build new AI applications or migrate existing ones to run in a secure SecretLLM environment where your data remains private.

## How SecretLLM Works

1. Send your prompt to SecretLLM over HTTPS (just like any secure web request)
2. Your prompt runs inside a Trusted Execution Environment (TEE) where no one, not even Nillion, can see your data
3. Get your result back over HTTPS, complete with a cryptographic signature

## Available Models

| Model | Parameters | Features | Best For |
|-------|------------|----------|-----------|
| meta-llama/Llama-3.2-3B-Instruct | 3B | Chat completion, tool support | Quick responses, simple Q&A, basic chat. Faster inference with lower resource usage. |
| meta-llama/Llama-3.1-8B-Instruct | 8B | Chat completion, tool support | More complex tasks, detailed responses, code generation. Higher quality but slower inference. |


For most use cases, start with the 3B model and move to 8B if you need more capability.

## Key Features

- **Drop-in Privacy**: Keep your OpenAI-style code, just point it to SecretLLM
- **Privacy Through TEEs**: All processing happens within a TEE, built on NVIDIA Confidential Computing
- **Standard Security**: Uses HTTPS for all communication
- **Cryptographic Attestation**: Verify the integrity of your TEE environment through our attestation API
- **Signed Responses**: Every model response includes a cryptographic signature for verification

## Attestation & Verification

SecretLLM provides two layers of cryptographic proof:

1. **Environment Attestation**: Verify your TEE's integrity through the attestation endpoint, including:

   - CPU environment verification
   - GPU environment verification
   - Service verification through a verifying key

2. **Response Signatures**: Every chat completion response includes a cryptographic signature, allowing you to verify that the response came from the attested environment.

## Getting Started

1. Get access to SecretLLM by obtaining your NilAI API key and node URL
2. Use your API key to check the `/models` endpoint for available models
3. Start running private AI using your chosen model
4. Optionally, verify your environment using the attestation API
