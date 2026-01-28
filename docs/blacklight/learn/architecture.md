# Architecture

## Overview

Nillion Blacklight is a decentralised verification network designed to continuously verify workloads running inside trusted execution environments (TEEs). The system is composed of three core components that work together to provide ongoing, credibly neutral verification.

* TEE Operators run workloads inside TEEs and submit proofs of liveness (that we call heartbeat transactions - HTXs).
* [**Nillion's Ethereum L2**](/blacklight/verify/network) coordinates verification, consensus, and rewards. Verification coordination is realised by the L2 assigning Blacklight nodes HTXs they should verify.
* Blacklight nodes independently challenge and verify TEE attestations.

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

      subgraph TEE_OPERATORS [<b style="color:#000000;">TEE Operators</b>]
          direction LR
          TEE_1[<b>TEE</b>]
          -.-TEE_2[<b>TEE</b>]
          -.-TEE_3[<b>TEE</b>]
          -.-TEE_4[<b>TEE</b>]
          -.-TEE_5[<b>TEE</b>]
      end
      TEE_OPERATORS:::COMPONENT_TOP
      classDef COLLECTION color:#888888,font-weight:bold
      TEE_OPERATORS:::COLLECTION
      style TEE_OPERATORS fill:#f5f5f5,stroke:#cccccc
      classDef TEE fill:#ffffff,stroke:#cccccc,color:#000000
      TEE_1:::TEE
      TEE_2:::TEE
      TEE_3:::TEE
      TEE_4:::TEE
      TEE_5:::TEE

      subgraph L2 [<b>Nillion Ethereum L2</b>]
          subgraph CONTRACTS [<b style="font-size:14px;">Smart Contracts</b>]
              STAKING[<b>Staking</b>]
              -.-SELECTION[<b>Selection</b>]
              -.-CONSENSUS[<b>Consensus Evaluation</b>]
              -.-REWARDS[<b>Rewards</b>]
          end
      end
      L2:::COMPONENT_LEFT
      style L2 fill:#f5f5f5,stroke:#cccccc,color:#000000
      style CONTRACTS fill:#f5f5f5,stroke:#cccccc,color:#000000
      classDef CONTRACT fill:#ffffff,stroke:#cccccc,color:#000000,font-size:12px
      STAKING:::CONTRACT
      SELECTION:::CONTRACT
      CONSENSUS:::CONTRACT
      REWARDS:::CONTRACT

      subgraph BLACKLIGHT_NODES [<b>Blacklight Nodes</b>]
          direction LR
          NODE_1[<b>Node</b>]
          -.-NODE_2[<b>Node</b>]
          -.-NODE_3[<b>Node</b>]
          -.-NODE_4[<b>Node</b>]
          -.-NODE_5[<b>Node</b>]
          -.-NODE_6[<b>Node</b>]
          -.-NODE_7[<b>Node</b>]
      end
      BLACKLIGHT_NODES:::COMPONENT_RIGHT
      style BLACKLIGHT_NODES fill:#f5f5f5,stroke:#cccccc,color:#000000
      classDef NODE fill:#ffffff,stroke:#cccccc,color:#000000
      NODE_1:::NODE
      NODE_2:::NODE
      NODE_3:::NODE
      NODE_4:::NODE
      NODE_5:::NODE
      NODE_6:::NODE
      NODE_7:::NODE

      classDef COMPONENT_TOP padding-left:10px,padding-right:410px
      classDef COMPONENT_LEFT stroke:#cccccc,padding-left:10px,padding-right:410px
      classDef COMPONENT_RIGHT stroke:#cccccc,padding-left:10px,padding-right:660px

      TEE_OPERATORS --->|HTXs| L2
      L2 --->|assignments| BLACKLIGHT_NODES
      L2 --->|rewards| BLACKLIGHT_NODES
      TEE_OPERATORS --->|attestations| BLACKLIGHT_NODES
      BLACKLIGHT_NODES --->|signed verifications| L2

      linkStyle default stroke-width:3px,stroke:#5555CC
      linkStyle 0,1,2,3,4,5,6,7,8,9,10,11,12 stroke-width:0px !important,stroke:transparent !important
```

<br/>

Together, these components enable continuous, decentralised verification of TEE-backed workloads. In doing so, they act as a credibly neutral trust layer for TEEs.

The central concept underpinning Nillion Blacklight is that of the heartbeat transaction (HTX), a periodic, workload-level proof of liveness submitted by TEE operators that signals a workload is still running inside a real enclave and is ready to be independently verified by the network.

## TEE Operators

TEE operators (such as [nilCC](/blind-computer/build/compute/overview) node operators) run workloads inside Trusted Execution Environments. For each active workload, operators periodically submit heartbeat transactions (HTXs) to [Nillion's Ethereum L2](/blacklight/verify/network). These heartbeats assert that the workload is still running and provide the metadata required for the network to independently verify its execution.

## Nillion's Ethereum L2

[Nillion's Ethereum L2](/blacklight/verify/network) acts as the coordination and settlement layer for Nillion Blacklight. It receives heartbeat transactions (HTXs) from TEE operators and assigns each HTX to a committee of Blacklight nodes selected in a stake-weighted, probabilistic way. After the assigned Blacklight nodes verify the workload and submit their signed results back to the L2, the L2 evaluates whether the committee has reached consensus.

Consensus is determined using two stake-weighted conditions: a quorum requirement (enough of the committee’s total stake has responded) and a threshold requirement (enough of the committee’s total stake agrees on the same outcome). Once these conditions are met, the L2 finalises the verification result for the HTX and distributes rewards from the reward pool (which Blacklight nodes can then claim).

## Blacklight Nodes

[Blacklight nodes](/blacklight/verify/run-node) are permissionless verifier nodes that perform the core verification work of the network. When assigned a HTX, a Blacklight node retrieves the workload’s attestation report directly from the TEE operator and independently verifies its authenticity and correctness.

Each node submits a signed verification result back to the L2. Once consensus is reached, nodes that contributed to the finalised outcome are eligible for rewards.
