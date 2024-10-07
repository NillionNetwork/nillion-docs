---
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Glossary

#### Information-theoretic security (ITS)

Information-theoretic security is a measure of security that doesn't depend on computational hardness assumptions. ITS guarantees security even against adversaries with unlimited computational power. This type of security is achieved by ensuring that the information required to break the encryption is not present in the cipher text. A classic example of ITS is a one-time pad cipher, which is provably unbreakable as long as the key is truly random, never reused, and kept secret.

#### Linear Secret Sharing Scheme (LSSS)

A Linear Secret Sharing Scheme is a cryptography method where a secret is divided into multiple parts, known as shares. These shares are distributed among participants in such a way that only specific groups of shares can reconstruct the secret. The key property of LSSS is linearity, meaning that any linear combination of valid shares forms another valid share. This allows for flexibility in constructing access structures, determining which sets of participants can together reconstruct the secret.

#### Local Protocol

A Local Protocol is a cryptographic operation performed by nodes during the calculation of a program without the need for communication between them.

#### Masked factors

Masked factors are the protective factors in the Sum of Products. Masked factors are the one-time mask raised to the power of the masked exponent multiplied by the factor.

#### One-time mask

The one-time mask is the multiplicative mask that protects a factor.&#x20;

#### Online Protocol

An Online Protocol is a cryptographic operation performed by nodes during the calculation of a program in which the communication between them is necessary for correct completion.

#### Preprocessing Elements

The preprocessing elements are masks that will be distributed between the nodes as fragments named shares, and they will be used by online protocols during their execution. These masks have been precalculated and made available to nodes by a preprocessor, whose purpose is that nodes have preprocessing elements available at any moment.

#### Privacy-enhancing technologies (PETs)

Privacy-enhancing technologies (PETs) are technologies that embody fundamental data protection principles by minimizing personal data use, maximizing data security, and empowering individuals.

#### Share

The share is the result that a node obtains by multiplying all the masked factors, and adding up all the products of those masked factors using the sum-of-products expression shape.

#### Sum of Products (SoP)

Sum of Products is a mathematical expression of addition of several numbers that have been multiplied.

```python
# Example of a Sum of Products
(a * b) + (c * d)
```

Any computation can be transformed into a sum of products:

```python
# Example of a polynomial computation
x^2 + 2xy + y^2

# Transformation to a sum of products
(x * x) + (2 * x * y) + (y * y)
```

#### Sum of Products (SoP) - **Factors and Terms** <a href="#factors-and-terms" id="factors-and-terms"></a>

- **Terms**: In SoP, a term is a product of factors that are multiplied together. In the example SoP, the terms are (a \* b) and (c \* d). Each term represents a multiplication operation between its factors.
- **Factor:** Factors are the individual elements that are multiplied together within a term. In the example SoP, a and b are factors in the (a\*b) term. c and d are factors in the (c\*d) term. They are the basic building blocks of a term.
