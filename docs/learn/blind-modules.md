# Blind Modules

Blind Modules are the core technology Nillion is building. As a developer or end user of Nillion's technology, you will mainly interact with the SecretSDKs, which are all built on top of our Blind Modules: nilDB and nilAI.

## nilDB

nilDB is Nillion's secure database solution, enabling data to be stored in an encrypted (via symmetric cryptography or HE) and/or decentralized (via MPC) way. Data is stored on a cluster of network nodes (with the current cluster consisting of three nodes).

```mermaid
graph TD

    subgraph CLIENT [" "]
    A
    NILQL0
    end

    subgraph NET [" "]
    X
    Y
    Z
    end

    subgraph SERVICE [" "]
    NILQL1
    R
    end

    A[Application] -->|data| NILQL0[<b>blindfold</b>]
    NILQL0 -->|data secret share| X[<b>nilDB Node</b>]
    NILQL0 -->|data secret share| Y[<b>nilDB Node</b>]
    NILQL0 -->|data secret share| Z[<b>nilDB Node</b>]
    X <-->|query secret share<br/>reply secret share| NILQL1[<b>blindfold</b>]
    Y <-->|query secret share<br/>reply secret share| NILQL1
    Z <-->|query secret share<br/>reply secret share| NILQL1
    NILQL1 <-->|query<br/>reply| R[Service Provider]
    style A fill:#EEEEEE,stroke:#000000
    style NILQL0 fill:#0000FF,color:#FFFFFF
    style NILQL1 fill:#0000FF,color:#FFFFFF
    style X fill:#0000FF,color:#FFFFFF
    style Y fill:#0000FF,color:#FFFFFF
    style Z fill:#0000FF,color:#FFFFFF
    style CLIENT fill:#FFFFFF,stroke:#000000
    style NET fill:#CCCCFF,stroke:#000000
    style R fill:#EEEEEE,stroke:#000000
    style SERVICE fill:#FFFFFF,stroke:#000000
```

nilDB is the Blind Module that underpins Nillion's [Private Storage](/build/private-storage/overview) solutions. When using nilDB, data is accessed via an easy-to-use RESTful API with endpoints to create/upload, retrieve, and query data. Developers can use the [blindfold library](/build/private-storage/blindfold) to encrypt and/or secret share data on the client side before using the RESTful API to send the ciphertexts and/or secret shares to the nodes.

## nilAI

nilAI is Nillion's secure AI offering, which runs LLMs securely inside TEEs. nilAI is the Blind Module that underpins Nillion's [Private LLMs](/build/private-llms/overview) solution.

```mermaid
graph LR
    linkStyle default interpolate basis

    subgraph NILAI ["nilAI node<br/>"]
    TEE
    end

    subgraph TEE
    L
    end

    U[User] -->|encrypted prompt| L[<b>LLM</b>]
    L  -->|encrypted reply| U
    NILDB[nilDB Cluster] -->|encrypted data| L
    style U fill:#EEEEEE,stroke:#000000
    style NILAI fill:#0000FF,color:#FFFFFF
    style TEE fill:#DDDDDD,stroke:#FFFFFF,color:#000000
    style L fill:#FFFFFF,stroke:#000000,color:#000000
    style NILDB fill:#0000FF,color:#FFFFFF

```

Like SecretVault and SecretDataAnalytics, this SDK can be accessed via an easy-to-use RESTful API that allows users to run inference using supported models.
