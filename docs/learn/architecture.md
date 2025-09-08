# Architecture

The architecture of the Nillion Network is geared towards enabling, supporting, enhancing, and monitoring web-compatible apps and workflows that incorporate privacy-enhancing technologies (PETs).

## Overview and Components

The Nillion Network architecture consists of two main components: the **nilChain** and the **Petnet**. The nilChain enables payments and incentivizes participation in the Nillion Network. The Petnet allows builders to leverage privacy-enhancing technologies (PETs) to store and compute over data while it remains encrypted.

```mermaid
%%{
    init: {
        'theme': 'base',
        'themeVariables': {
            'fontSize': '18px',
            'primaryTextColor': '#000000',
            'primaryBorderColor': '#000000',
            'secondaryBorderColor': '#000000',
            'tertiaryBorderColor': '#000000',
            'edgeLabelBackground': '#DFDFDF'
        }
    }
}%%
graph TD

    subgraph SDKS_AND_LIBRARIES [SDKs and Libraries]
        direction LR
        SECRETVAULTS[<a style="color:#000000" href="/build/private-storage/secretvaults"><b>secretvaults</b></a>]
        ---BLINDFOLD[<a style="color:#000000" href="/build/private-storage/blindfold"><b>blindfold</b></a>]
        ---NUC[<a style="color:#000000" href="/build/permissions-and-payments#nuc"><b>nuc</b></a>]
        ---NILRAG[<a style="color:#000000" href="/build/private-llms/nilRAG"><b>nilRAG</b></a>]
    end
    classDef COLLECTION color:#000000,padding-left:230px,padding-right:230px
    SDKS_AND_LIBRARIES:::COLLECTION
    style SDKS_AND_LIBRARIES fill:#FFFFFF,stroke:#000000
    classDef LIBRARY_SDK fill:#DDDDDD,stroke:#000000
    SECRETVAULTS:::LIBRARY_SDK
    BLINDFOLD:::LIBRARY_SDK
    NUC:::LIBRARY_SDK
    NILRAG:::LIBRARY_SDK

    subgraph NILCHAIN [<b>nilChain</b>]
        subgraph MECHANISMS [<b>Mechanisms</b>]
            direction LR
            PAYMENTS[<b>Payments</b>]
            ---VALIDATION[<b>Validation</b>]
            ---CRYPTOECONOMICS[<b>Cryptoeconomics</b>]
        end
    end
    NILCHAIN:::COMPONENT
    style NILCHAIN fill:#CCCCFF,color:#000000
    style MECHANISMS fill:#0000FF,stroke:#000000,color:#FFFFFF
    classDef MECHANISM fill:#DDDDDD,stroke:#FFFFFF
    PAYMENTS:::MECHANISM
    VALIDATION:::MECHANISM
    CRYPTOECONOMICS:::MECHANISM

    subgraph PETNET [<b>Petnet</b>]
        subgraph BLIND_MODULES [<a style="color:#FFFFFF" href="/learn/blind-modules"><b>Blind Modules</b></a>]
            NILDB[<a style="color:#000000" href="/build/private-storage/overview"><b>nilDB</b></a>]
            ---NILAI[<a style="color:#000000" href="/build/private-storage/overview"><b>nilAI</b></a>]
        end
    end
    PETNET:::COMPONENT
    style PETNET fill:#CCCCFF,color:#000000
    style BLIND_MODULES fill:#0000FF,stroke:#000000,color:#FFFFFF
    classDef BLIND_MODULE fill:#DDDDDD,stroke:#FFFFFF
    NILDB:::BLIND_MODULE
    NILAI:::BLIND_MODULE

    classDef COMPONENT stroke:#5C5DB3,padding-left:10px,padding-right:610px

    SDKS_AND_LIBRARIES ---> NILCHAIN
    SDKS_AND_LIBRARIES ---> PETNET

    linkStyle default stroke-width:3px,stroke:#8A89FF
    linkStyle 0,1,2,3,4,5 fill:#FFFFFF,stroke-width:0px,stroke:#FFFFFF
```
<br/>

Developers can interact with the various node types found in each network component either directly via their [corresponding APIs](/api/overview) or via the SDKs and libraries that support [Private Storage](/build/private-storage/overview) and [Private LLMs](/build/private-llms/overview).

### nilChain

The nilChain is a blockchain that manages shared resources for the whole Nillion Network. It's built on top of the Cosmos SDK stack and supports payments, rewards, and cryptoeconomic staking. The main purpose of nilChain is to enable coordination, so it does not have an open execution environment for running smart contracts.

### Petnet

The Petnet consists of a network of nodes that can be recruited into clusters by builders (depending on which PET they employ). Developers have the power to pick their own point on the secure computation trade-off space and to decide what matters to them.

The Petnet nodes support secure storage and computation over data, and these capabilities can be leveraged using the variety of SDKs that can be used to interact with the nodes. Each node supports the use of PETs by operating one or more [Blind Modules](/learn/blind-modules).

## Guiding Assumptions and Design Principles

The architecture of the Nillion Network is informed by a [pragmatic perspective](/articles/nillion-network-architecture) that [acknowledges the realities](/articles/nillion-network-architecture#guiding-assumptions) that PETs infrastructure components and software artifacts inhabit today: apps are likely to use a combination of different PETs, product-market fit of PETs is difficult to predict today, and incentive mechanisms for deploying PETs are not yet mature. This leads to an [emphasis on three design principles](/articles/nillion-network-architecture#interoperability-modularity-and-portability) throughout the architecture: interoperability, modularity, and portability.
