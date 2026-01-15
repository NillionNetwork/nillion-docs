import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CTABanner from '@site/src/components/CTABanner';

# AI-Assisted Workflow

To help AI assistants (like Claude, ChatGPT, etc.) provide better support for Nillion development, we provide structured information about our platform, APIs, and development patterns.

## Nillion Builder Guide LLM

The [Nillion Builder Guide LLM](https://chatgpt.com/g/g-687e6e6b52508191bb1537b422aad489-nillion-builder-guide) is a specialized ChatGPT assistant trained on the Nillion docs and development patterns. Chat with it directly to learn about Nillion and start building privacy-preserving apps using Nillion solutions.

<CTABanner
  question='Nillion Builder LLM'
  instruction='The Nillion Builder Guide is a GPT to help developers build on Nillion.'
  buttonText='Open the LLM in ChatGPT'
  buttonLink='https://chatgpt.com/g/g-687e6e6b52508191bb1537b422aad489-nillion-builder-guide'
  event='open-nillion-builder-llm'
  external={true}
/>

## llm.txt
\\
Our `llm.txt` file contains comprehensive information about Nillion's architecture, developer tools, and integration guides. AI assistants can use this to understand:

- Core concepts like Blind Computation and Blind Modules
- Developer flow from wallet creation to app deployment
- Private Storage and Private LLMs solutions
- SDKs, tools, and code examples
- Links to detailed documentation and tutorials

**Access the llm.txt:** [https://docs.nillion.com/llm.txt](https://docs.nillion.com/llm.txt)

### How to Use

When working with AI assistants on Nillion projects:

1. **Reference the llm.txt**: Point your AI assistant to `https://docs.nillion.com/llm.txt` for comprehensive context
2. **Ask specific questions**: The more specific your questions, the better assistance you'll receive
3. **Mention your platform**: Specify if you're using Node.js, Next.js, React, or Python for targeted guidance
4. **Include your use case**: Whether building Private Storage or Private LLMs applications

### Example Prompts

**Note:** These prompts assume you already have a Nillion API Key. If you don't have one yet, follow the [nilPay Guide](/blind-computer/build/network-api-access) to subscribe to services.

<Tabs>
<TabItem value='nilDB' label='Private Storage' default>

- "What is Nillion Private Storage? Reference https://docs.nillion.com/llm.txt"
- "Help me build a Next.js app with Nillion Private Storage using https://docs.nillion.com/llm.txt"
- "Show me how to create Nillion Private Storage collections using https://docs.nillion.com/llm.txt"
- "I need to encrypt sensitive data. Use https://docs.nillion.com/llm.txt for guidance"
- "Help me configure nilDB nodes for my React app using https://docs.nillion.com/llm.txt"
- "Help me store healthcare data securely using Nillion https://docs.nillion.com/llm.txt"

</TabItem>
<TabItem value='nilAI' label='Private LLMs' default>

- "What are Nillion Private LLMs? Reference https://docs.nillion.com/llm.txt"
- "Help me make private AI requests using Nillion https://docs.nillion.com/llm.txt"
- "Help me choose the right Private LLM model using https://docs.nillion.com/llm.txt"
- "I want to build a chat app with Private LLMs. Guide me using https://docs.nillion.com/llm.txt"

</TabItem>
</Tabs>

## Contributing

If you notice gaps in AI assistant understanding of Nillion concepts, please [let us know](https://github.com/NillionNetwork/nillion-docs/issues). The llm.txt is regularly updated to improve AI comprehension of our tools and documentation.
