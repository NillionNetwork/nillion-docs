---
description: >-
  Multi-Party Computation, or MPC, is a privacy enhancing technology (PET) with
  the potential to transform how we secure and compute on high value data in
  collaborative environments.
---

# Multi-Party Computation (MPC)

Traditional data handling follows a decrypt-compute-reencrypt cycle: data has to be decrypted in order to run a computation, and then re-encrypted for storage or transmission. Decrypted data is vulnerable to unauthorized access and potential security breaches, exposing sensitive information during the computation phase.

MPC enables computation over inputs from multiple parties while keeping the actual data hidden. The data remains confidential throughout the entire process — not only when it's stored or in transit, but also during the actual computation. With MPC, you can collaborate to compute on hidden secrets without ever revealing the actual secrets.

### **Classic Applied MPC: The Millionaire's Problem**

The "Millionaire's Problem" is a classic MPC scenario, first introduced by Andrew Yao in 1982. In the "Millionaire's Problem" problem, two millionaires want to find out who is richer without disclosing their actual net worths. Using MPC, the millionaires can jointly compute who has more money without revealing their individual net worths to each other or anyone else. This is achieved through a series of cryptographic operations that allow each party to input their net worth into a shared computation. The computation is structured in a way that it only outputs the comparison result (i.e., which millionaire is richer) without leaking any specifics about their respective net worths. This problem showcases the power of MPC - it can preserve privacy while enabling collaborative computation.

### Additional MPC Resources

* [Learn about MPC](https://www.mpcalliance.org/learn), a set of resources curated by the [MPC Alliance](https://www.mpcalliance.org/)
* [awesome-mpc Github list](https://github.com/rdragos/awesome-mpc)
