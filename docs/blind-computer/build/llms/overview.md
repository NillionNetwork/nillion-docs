# Private LLMs with nilAI

## What are Private LLMs

Private LLMs are supported via a set of OpenAI-compatible APIs that run AI models within a _trusted execution environment_ (TEE). This makes it possible to build new private AI applications or to migrate existing ones to run in a secure environment where your data remains private.

## How Private LLMs Work

1. Send your prompt over HTTPS (just like any secure web request)
2. Your prompt runs inside a Trusted Execution Environment where it is hidden from the cloud provider
3. Get your result back over HTTPS, complete with a cryptographic signature

## Available Models

| Model                            | Parameters | Features                                                             | Best For                                                                                      | Access                                                                                          |
| -------------------------------- | ---------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| google/gemma-3-27b-it            | 27B        | Multimodal (text + images), 128K context, 140+ languages             | Visual reasoning, long-context analysis, multilingual applications.                           | Testnet                                                                                         |
| openai/gpt-oss-20b               | 20B        | Chain-of-thought reasoning, tool calling, configurable effort levels | Agentic workflows, complex reasoning tasks.                                                   | [Apply for access](https://surveys.nillion.com/developers/7d516c7a-66ae-4c78-b927-bbd912ae7a16) |

## Key Features

- **Drop-in Privacy**: Keep your OpenAI-style code, just point it at a private LLM
- **Privacy Through TEEs**: All processing happens within a TEE, built on NVIDIA Confidential Computing
- **Standard Security**: HTTPS encryption provides end-to-end protection for all data in transit between your application and the TEE environment
- **Cryptographic Attestation**: Verify the integrity of your TEE environment through our attestation API
- **Signed Responses**: Every model response includes a cryptographic signature for verification

## Attestation & Verification

Two layers of cryptographic proof are provided:

1. **Environment Attestation**: Verify your TEE's integrity through the attestation endpoint, including:

   - GPU environment verification
   - Service verification through a verifying key

2. **Response Signatures**: Every chat completion response includes a cryptographic signature, allowing you to verify that the response came from the attested environment.

## Getting Started

1. Get access to private LLMs by obtaining your nilAI API key and node URL
2. Use your API key to check the `/models` endpoint for available models
3. Start running private AI using your chosen model
4. Optionally, verify your environment using the attestation API

### Enhance by Providing Context from Private Storage and nilRAG

Optionally, you can use nilRAG to allow private LLMs to access nilDB private storage in order to retrieve relevant context! See [nilRAG documentation](/blind-computer/build/llms/nilRAG) for details.
