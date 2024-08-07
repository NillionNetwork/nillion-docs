# Nada AI

[nada-ai](https://github.com/NillionNetwork/nada-ai/) is a cutting-edge Machine Learning framework inspired by SKLearn and PyTorch, designed to seamlessly integrate model-building capabilities into Nada DSL. With Nada AI, effortlessly import AI models into the Nillion ecosystem for inference, leveraging the robust foundation of [Nada Numpy](./nada-numpy-introduction).

Nada AI boasts a strongly-typed interface, utilizing root families (`Integer`, `UnsignedInteger`, `Rational`, and `SecretBoolean`). This ensures strict type enforcement at the library level, guaranteeing compliance with Nada DSL rules.

### LLMs and Nada AI

Choosing blind computing involves certain trade-offs compared to traditional computing. While you gain enhanced privacy, there are added computational overheads and capacity constraints.

**Currently, Nada-AI does not support Large Language Models (LLMs)**. However, we are actively working on integrating this capability into our platform. In the meantime, follow our [3-phase workflow](/nada-ai-introduction#discover-the-power-of-privacy-preserving-ai) with a [supported model](/nada-ai-introduction#supported-models) to build a blind AI project with Nada:

### Discover the Power of Privacy-Preserving AI

In this tutorial series, you'll dive into creating your own privacy-preserving AI models for inference. Developing a model with Nillion involves three distinct phases:

1. **Train Your Plaintext Model**: Use your dataset to train a model with your preferred AI tools. Nada AI currently supports Scikit-Learn, various layers in PyTorch, and the Prophet time series model.
2. **Write Your Nada Program**: Develop the Nada code to be executed in MPC, utilizing the bridges provided by Nada AI. You'll find it strikingly similar to the original Python code.
3. **Store and Run Your Program**: Compile the Nada code, store it on Nillion, and execute it on the network to obtain live, privacy-preserving predictions from your model.

Explore our [GitHub Repository Examples](https://github.com/NillionNetwork/nada-ai/tree/main/examples) for hands-on learning and insights.

### Supported Models

- **Multilayer Perceptron**: With the following layers available: `Linear`, `Conv2d`, `AvgPooling2d`, `DotProductSimilarity`, `ReLU`, `Flatten`.
- **Linear Regression Model**: Linear model.
- **Logistic Regression Model**: Linear model implementation with cleartext sigmoid and potential multiclass classification.
- **Prophet**: Time series forecasting model.

### Important Considerations and Limitations

_Nada AI is currently in active development. Please note:_

- _AI training is **not** supported at this time. Both MPC and AI training are computationally intensive tasks requiring specific setups for efficient use. The current roadmap includes support for Federated Learning and other training procedures for privacy-preserving AI training._
- _The described workloads have been tested on the Nillion devnet tool. Due to high demand, running large models on the Nillion Testnet or Mainnet may not always be possible. For specific use cases or if you wish to run models on the Testnet or Mainnet, please contact us [here](https://app.deform.cc/form/51a162ff-4ffb-4d9b-86ec-249f087a332f/?page_number=0)._

Embark on your journey with Nada AI and revolutionize your approach to privacy-preserving machine learning!
