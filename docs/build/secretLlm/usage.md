# Usage

SecretLLM (built ontop of nilAI) follows a similar pattern to OpenAI's chat completion [API design](https://platform.openai.com/docs/api-reference/chat). This was done to make the API similar to the industry practices.

All of these endpoints are available for testing in our [API section.](../../api/nilai/overview.mdx)

- [Chat Completion:](../../api/nilai/chat-completion-v-1-chat-completions-post.api.mdx) Standard Chat completion endpoint to generate a response from the AI model
- [Attestation:](../../api/nilai/get-attestation-v-1-attestation-report-get.api.mdx) Generate a cryptographic attestation report.
- [Health:](../../api/nilai/health-check-v-1-health-get.api.mdx) Check the health status of the NilAI operational status
- [Models:](../../api/nilai/get-models-v-1-models-get.api.mdx) Get the list of available models running
- [Usage:](../../api/nilai/get-usage-v-1-usage-get.api.mdx) Track the current usage of tokens with your account
