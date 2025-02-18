# Blind Modules

Blind Modules are the core technology Nillion is building. As a developer or end user of Nillion's technology, you will mainly interact with the SecretSDKs, which are all built on top of our Blind Modules.

Currently, there are three Blind Modules: nilVM, nilDB & nilAI.

![Nillion's network architecture diagram](/img/network_diagram.png)

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

    A[Application] -->|data| NILQL0[<b>nilQL</b>]
    NILQL0 -->|data secret share| X[<b>nilDB Node</b>]
    NILQL0 -->|data secret share| Y[<b>nilDB Node</b>]
    NILQL0 -->|data secret share| Z[<b>nilDB Node</b>]
    X <-->|query secret share<br/>reply secret share| NILQL1[<b>nilQL</b>]
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

nilDB is the Blind Module that underpins Nillion's SecretVault and SecretDataAnalytics products. [SecretVault](./secret-vault) and [SecretDataAnalytics](./secret-data-analytics) data are accessed via an easy-to-use RESTful API with endpoints to create/upload, retrieve, and query data. Developers can use our nilQL library to encrypt and/or secret share data on the client side before using our RESTful API to send the ciphertexts and/or secret shares to the nodes.

## nilAI

nilAI is Nillion's secure AI offering, which runs LLMs securely inside TEEs. nilAI is the Blind Module that underpins [SecretLLM](/build/secretLLM/overview).

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

## nilVM

The core functionality provided by nilVM is the ability to sign data in a decentralized way using MPC, which can be leveraged using [SecretSigner](/build/secretSigner/overview).


```mermaid 
graph TD

    subgraph NET_L [" "]
    A
    B
    C
    end

    V[User] -->|key share| A[<b>nilVM Node</b>]
    V[User] -->|key share| B[<b>nilVM Node</b>]
    V[User] -->|key share| C[<b>nilVM Node</b>]
    style V fill:#EEEEEE,stroke:#000000
    style A fill:#0000FF,color:#FFFFFF
    style B fill:#0000FF,color:#FFFFFF
    style C fill:#0000FF,color:#FFFFFF
    style NET_L fill:#CCCCFF,stroke:#000000
```

```mermaid 
graph TD

    subgraph NET_R [" "]
    X
    Y
    Z
    end

    U[User] -->|message| X[<b>nilVM Node</b>]
    U[User] -->|message| Y[<b>nilVM Node</b>]
    U[User] -->|message| Z[<b>nilVM Node</b>]
    X -->|signed message| R[Receiver]
    Y -->|signed message| R
    Z -->|signed message| R
    style U fill:#EEEEEE,stroke:#000000
    style X fill:#0000FF,color:#FFFFFF
    style Y fill:#0000FF,color:#FFFFFF
    style Z fill:#0000FF,color:#FFFFFF
    style NET_R fill:#CCCCFF,stroke:#000000
    style R fill:#EEEEEE,stroke:#000000
```

nilVM can also be leveraged using our [Python](/python-client) or [TypeScript](/js-client) clients and includes the [Nada programming language](/nada-lang). Check out full nilVM docs including older [nilVM Quickstarts](/start-building).
