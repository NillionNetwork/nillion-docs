# Key Concepts

This glossary defines key terms as they are used throughout the nilAI documentation and system.

## Attestation

A cryptographic proof mechanism that verifies the integrity of the TEE environment. nilAI provides two layers of attestation:

- **Environment Attestation**: Verifies the GPU environment and service integrity through a verifying key
- **Response Signatures**: Cryptographic signatures included with every chat completion response, proving the response originated from the attested environment

## Chunks

Segments of data created when files are processed for nilRAG. When a data owner uploads files:

- Files are split into multiple chunks of data
- Each chunk has a corresponding [embedding](#embeddings) for similarity search
- Chunks are blinded before being uploaded to Private Storage
- During retrieval, chunks provide the actual content for LLM context

## Embeddings

Numerical vector representations of text used for similarity search in nilRAG:

- Generated from chunks when data owners upload files
- Used to match client queries against stored content
- Stored in secret-shared form in Private Storage
- Enable privacy-preserving similarity comparisons without exposing raw data


## NVIDIA Confidential Computing

The hardware security technology that enables TEE-based AI inference in nilAI. NVIDIA Confidential Computing provides GPU-level isolation and encryption, ensuring that AI model processing remains private even from the infrastructure provider.

## OpenAI-Compatible API

The interface standard used by nilAI for AI inference. Existing applications using OpenAI-style code can migrate to private LLMs by changing the endpoint URL while keeping the same code structure and API calls.

## Signed Responses

Cryptographic signatures included with every chat completion response from nilAI. These signatures allow verification that:

- The response came from an attested TEE environment
- The response has not been tampered with
- The processing occurred in a verified secure enclave