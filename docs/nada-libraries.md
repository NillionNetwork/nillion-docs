import DocCardList from '@theme/DocCardList';

# Nada Libraries

The Nillion Network leverages [Nada](/nada-lang) for defining programs. We are developing a set of libraries to enhance the developer experience when developing with Artificial Intelligence models and beyond on Nillion. These libraries are built on top of Nada DSL and are meant to be intercompatible with it.

## Nada Numpy

[nada-numpy](/nada-numpy-introduction) is a Python library for algebraic operations on NumPy-like arrays using Nada DSL and the Nillion Network. It offers an easy-to-use interface for various computations like dot products, element-wise operations, and stacking, with broadcasting support similar to NumPy. Key Features include

- Matrix operations: Perform common matrix operations on NadaArrays (a NumPy-like matrix object).
- Element-wise Operations: Perform matrix arithmetic with support for broadcasting.
- Rational Number Support: Use Rational and SecretRational for simplified decimal number operations on Nillion.

## Nada AI

[nada-ai](/nada-ai-introduction) is a Python library for performing ML/AI tasks using Nada DSL and the Nillion Network. It offers an intuitive interface and seamless integration with ML frameworks like PyTorch and Sci-kit learn. Key Features include

- Exporting Model State: Integrates with models from existing ML frameworks, making it easy to export them to the Nillion network for use in Nada programs.
- AI Modules: Provides a PyTorch-like interface to create ML models in Nada by stacking pre-built common components, with the option to create custom components.
- Importing Model State: Easily import an exported model state from the Nillion network for use in a Nada program.

<DocCardList />
