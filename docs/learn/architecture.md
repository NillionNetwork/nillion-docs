# Architecture

![Nillion's network architecture diagram](/img/network_diagram.png)

The Nillion Network architecture consists of two main components: the Petnet and nilChain. The Petnet allows builders to leverage privacy-enhancing technologies (PETs) to store and compute over data while it remains encrypted. The nilChain enables payments and incentivizes participation in the Nillion Network.

## Petnet

The Petnet consists of a network of nodes that can be recruited into clusters by builders (depending on which PET they employ). Developers have the power to pick their own point on the secure computation trade-off space and to decide what matters to them.

The Petnet nodes support secure storage and computation over data, and these capabilities can be leveraged using the variety of SDKs that can be used to interact with the nodes. Each node supports the use of PETs by operating one or more [Blind Modules](/build/blind-modules).

## nilChain

The nilChain is a blockchain that manages shared resources for the whole Nillion Network. It's built on top of the Cosmos SDK stack and supports rewards, cryptoeconomic stake, and governance, as well as enabling inter-cluster coordination. Since its main purpose is to enable coordination, the chain does not have an open execution environment for running smart contracts.

### Mermaid Diagram

```mermaid
graph TD
    A[Hungry] --> B{Time Available?}
    B -->|< 30 mins| C[Check Food Delivery]
    B -->|> 30 mins| D[Check Kitchen]

    C --> E{Delivery Apps}
    E -->|High Fees| F[Check Direct Restaurant Order]
    E -->|Good Deals| G[Compare Restaurant Options]

    D --> H{Ingredients Check}
    H -->|Missing Items| I[Check Grocery Store]
    H -->|Have Everything| J[Begin Prep]

    I -->|Store Nearby| K[Quick Grocery Run]
    I -->|Store Far| L[Back to Delivery Apps]

    G --> M{Restaurant Wait Time?}
    M -->|> 45 mins| N[Too Long - Reconsider]
    M -->|< 45 mins| O[Place Order]

    J --> P{Recipe Complexity}
    P -->|Simple| Q[Quick Meal Prep]
    P -->|Complex| R[Full Cooking Process]

    K --> J
    N --> D

    O --> S[Track Order]
    S --> T{Delivery Status}
    T -->|Delayed| U[Contact Support]
    T -->|On Time| V[Food Arrives]

    Q --> W[Quick Meal Ready]
    R --> X[Home Cooked Meal]

    U --> Y[Wait or Cancel?]
    Y -->|Wait| V
    Y -->|Cancel| Z[Refund Process]
    Z --> A

    style A fill:#d4f1f4
    style B fill:#e1e5f2
    style O fill:#90EE90
    style V fill:#90EE90
    style W fill:#90EE90
    style X fill:#90EE90
    style U fill:#ffcccb
    style Z fill:#ff6961
```
