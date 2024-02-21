# Nillion’s MPC Protocol

Nillion’s novel MPC protocol extends the capabilities of [Linear Secret-Sharing Schemes (LSSS)](glossary.md#linear-secret-sharing-scheme-lsss) to perform some non-linear operations, specifically evaluating a [sum of products](glossary.md#sum-of-products-sop) of non-zero user inputs.

The protocol workflow is split into 2 phases:

### **Phase 1: Pre-processing to create shares**

The pre-processing phase prepares for the network to securely handle the high value data so that future computations can be performed without revealing individual inputs.

The point of pre-processing is to generate and distribute [shares](glossary.md#share) (masks) for each [factor and term](glossary.md#factors-and-terms) in the sum of products expression using standard MPC techniques.

Pre-processing is independent of input values. This phase only depends on the number of inputs (factors and terms) so that the appropriate number of shares are created ahead of computation. &#x20;

### **Phase 2: Non-Interactive computation on masked factors**

The computation phase is where the actual calculations on the private inputs are performed. Computation can be broken into 3 stages: input, evaluation, and output.

#### Input Stage

Shares generated during the pre-processing phase are distributed to parties. A party receives one share per input. Parties combine their inputs with shares to create masked factors. These multiplicatively homomorphic masked factors are broadcasted to the network, maintaining [information-theoretic security (ITS)](glossary.md#information-theoretic-security-its).

#### Evaluation Stage

The evaluation stage utilizes the computationally homomorphic properties of the masked factors, enabling operations like addition and multiplication to be carried out directly on the masked data.&#x20;

Parties perform local calculations on masked factors.&#x20;

#### Output Stage

Parties reveal the result of local calculations. These results are aggregated to derive and output the final result of the multi-party computation.&#x20;

### Protocol Features

Nillion’s novel MPC protocol achieves

- **Non-linear arithmetic capabilities:** The protocol can evaluate a sum of products of hidden inputs without leaking input information to any of the parties.
- **Efficient pre-processing**: The creation of shares is independent of input values and only depends on the number of inputs (factors and terms) in each term.
- **Asynchronous computation:** The non-interactive nature of the computation phase aligns with asynchronous workflows and accelerates the process, as it does not require message exchanges between parties.
- **ITS security**: The protocol upholds the ITS inherent in LSSS, meaning it is secure against adversaries with unlimited computing resources and time.

Read the full technical paper on Nillion's MPC Protocol: [Evaluation of Arithmetic Sum-of-Products Expressions in Linear Secret Sharing Schemes with a Non-Interactive Computation Phase](https://eprint.iacr.org/2023/1740)

&#x20;

&#x20;
