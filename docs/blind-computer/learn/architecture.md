# Architecture

The architecture of the blind computer is geared towards enabling, supporting, enhancing, and monitoring web-compatible apps and workflows that incorporate privacy-enhancing technologies (PETs).

## Overview and Components

When using the blind computer, developers rely on two components: the **Petnet** and **Nillion's L2**. The Petnet allows builders to leverage privacy-enhancing technologies (PETs) to store and compute over data while it remains encrypted. Nillion's L2 enables payments and incentivizes node participation.

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
          SECRETVAULTS[<a style="color:#000000" href="/blind-computer/build/storage/secretvaults"><b>secretvaults</b></a>]
          -.-BLINDFOLD[<a style="color:#000000" href="/blind-computer/build/storage/blindfold"><b>blindfold</b></a>]
          -.-NUC[<a style="color:#000000" href="/build/permissions-and-payments#nuc"><b>nuc</b></a>]
          -.-NILRAG[<a style="color:#000000" href="/blind-computer/build/llms/nilRAG"><b>nilRAG</b></a>]
      end
      classDef COLLECTION padding-left:230px,padding-right:230px,color:#888888,font-weight:bold
      SDKS_AND_LIBRARIES:::COLLECTION
      style SDKS_AND_LIBRARIES fill:#f5f5f5,stroke:#cccccc
      classDef LIBRARY_SDK fill:#ffffff,stroke:#cccccc,color:#000000
      SECRETVAULTS:::LIBRARY_SDK
      BLINDFOLD:::LIBRARY_SDK
      NUC:::LIBRARY_SDK
      NILRAG:::LIBRARY_SDK

      subgraph PETNET [<b>Petnet</b>]
          subgraph BLIND_MODULES [<b>Blind Modules</b>]
              NILCC[<a style="color:#000000" href="/blind-computer/build/compute/overview"><b>nilCC</b></a>]
              -.-NILDB[<a style="color:#000000" href="/blind-computer/build/storage/overview"><b>nilDB</b></a>]
              -.-NILAI[<a style="color:#000000" href="/blind-computer/build/storage/overview"><b>nilAI</b></a>]
          end
      end
      PETNET:::COMPONENT_LEFT
      style PETNET fill:#f5f5f5,stroke:#cccccc,color:#000000
      style BLIND_MODULES fill:#f5f5f5,stroke:#cccccc,color:#000000
      classDef BLIND_MODULE fill:#ffffff,stroke:#cccccc,color:#000000
      NILCC:::BLIND_MODULE
      NILDB:::BLIND_MODULE
      NILAI:::BLIND_MODULE


      subgraph NILCHAIN [<b>Nillion L2</b>]
          subgraph MECHANISMS [<b>Mechanisms</b>]
              direction LR
              PAYMENTS[<b>Payments</b>]
              -.-AUTHENTICATION[<b>Authentication</b>]
              -.-CRYPTOECONOMICS[<b>Cryptoeconomics</b>]
          end
      end
      NILCHAIN:::COMPONENT_RIGHT
      style NILCHAIN fill:#f5f5f5,stroke:#cccccc,color:#000000
      style MECHANISMS fill:#f5f5f5,stroke:#cccccc,color:#000000
      classDef MECHANISM fill:#ffffff,stroke:#cccccc,color:#000000
      PAYMENTS:::MECHANISM
      AUTHENTICATION:::MECHANISM
      CRYPTOECONOMICS:::MECHANISM

      classDef COMPONENT_LEFT stroke:#cccccc,padding-left:10px,padding-right:410px
      classDef COMPONENT_RIGHT stroke:#cccccc,padding-left:10px,padding-right:660px

      SDKS_AND_LIBRARIES ---> PETNET
      SDKS_AND_LIBRARIES ---> NILCHAIN

      linkStyle default stroke-width:3px,stroke:#5555CC
      linkStyle 0,1,2,3,4,5,6 stroke-width:0px !important,stroke:transparent !important
```

<br/>

Developers can interact with each network component either directly via its [corresponding APIs](/api/overview) or via SDKs and libraries (such as those that support [private compute](/blind-computer/build/compute/overview), [private storage](/blind-computer/build/storage/overview) and [private LLMs](/blind-computer/build/llms/overview)).

### Petnet

The Petnet consists of a network of independent nodes that can be recruited into clusters by builders (depending on which PET they employ). Developers have the power to pick their own point on the secure computation trade-off space and to decide what matters to them.

The Petnet nodes support secure storage and computation over data, and these capabilities can be leveraged using the variety of SDKs that can be used to interact with the nodes. Each node supports the use of PETs by operating one or more [blind modules](/blind-computer/learn/blind-modules).

### Nillion L2

Nillion's Ethereum L2 is an EVM-compatible Layer 2 network. It manages shared resources, payments, rewards, and cryptoeconomic staking. Its main purpose is to enable coordination and [verification](/blacklight/learn/overview) of the blind computer.

## Guiding Assumptions and Design Principles

The architecture of the blind computer is informed by a [pragmatic perspective](/articles/nillion-network-architecture) that [acknowledges the realities](/articles/nillion-network-architecture#guiding-assumptions) that PETs infrastructure components and software artifacts inhabit today: apps are likely to use a combination of different PETs, product-market fit of PETs is difficult to predict today, and incentive mechanisms for deploying PETs are not yet mature. This leads to an [emphasis on three design principles](/articles/nillion-network-architecture#interoperability-modularity-and-portability) throughout the architecture: interoperability, modularity, and portability.
