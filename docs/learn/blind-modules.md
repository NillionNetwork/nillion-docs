# Blind Modules

Blind Modules are the core technical components of the Nillion Network. Developers and end users of Nillion's technology mainly interact with Blind Modules via SDKs, but also have the option of interacting with them directly via their [APIs](/api/overview).

## nilDB

nilDB is Nillion's secure [NoSQL](https://en.wikipedia.org/wiki/NoSQL) database solution, enabling data to be stored in an encrypted (via symmetric cryptography or HE) and/or decentralized (via MPC) way. Developers are free to treat any combination of one or more nilDB nodes as a cluster. Documents containing a mix of encrypted and plaintext values can be stored in such a cluster. The diagram below illustrates typical storage and query flows involving a cluster of three nodes.

```mermaid
%%{
    init: {
        'theme': 'base',
        'themeVariables': {
            'fontSize': '14px',
            'primaryBorderColor': '#000000',
            'secondaryBorderColor': '#000000',
            'tertiaryBorderColor': '#000000',
            'edgeLabelBackground': '#DFDFDF'
        }
    }
}%%
graph TD

    subgraph CLIENT [" "]
        A
        BLINDFOLD_CLIENT
    end
    style CLIENT fill:#FFFFFF,stroke:#000000
    style A fill:#CCCCFF,stroke:#000000
    style BLINDFOLD_CLIENT fill:#0000FF,color:#FFFFFF

    subgraph NET [" "]
        X
        Y
        Z
    end
    style NET fill:#CCCCFF,stroke:#000000
    style X fill:#0000FF,color:#FFFFFF
    style Y fill:#0000FF,color:#FFFFFF
    style Z fill:#0000FF,color:#FFFFFF

    subgraph SERVICE [" "]
        BLINDFOLD_SERVICE
        R
    end
    style SERVICE fill:#FFFFFF,stroke:#000000
    style BLINDFOLD_SERVICE fill:#0000FF,color:#FFFFFF
    style R fill:#CCCCFF,stroke:#000000

    A[Application] -->|data| BLINDFOLD_CLIENT[<b>blindfold</b>]
    BLINDFOLD_CLIENT -->|data secret share| X[<b>nilDB Node</b>]
    BLINDFOLD_CLIENT -->|data secret share| Y[<b>nilDB Node</b>]
    BLINDFOLD_CLIENT -->|data secret share| Z[<b>nilDB Node</b>]
    X <-->|query secret share<br/>reply secret share| BLINDFOLD_SERVICE[<b>blindfold</b>]
    Y <-->|query secret share<br/>reply secret share| BLINDFOLD_SERVICE
    Z <-->|query secret share<br/>reply secret share| BLINDFOLD_SERVICE
    BLINDFOLD_SERVICE <-->|query<br/>reply| R[Service Provider]
```

nilDB is the Blind Module that underpins Nillion's [Private Storage](/build/private-storage/overview) solutions. When using nilDB directly, data is accessed via an easy-to-use RESTful API with endpoints to create/upload, retrieve, and query data. Developers can use the [blindfold library](/build/private-storage/blindfold) to encrypt and/or secret share data on the client side before using the [RESTful API](/api/nildb/overview) to send the ciphertexts and/or secret shares to the nodes.

## nilAI

nilAI is Nillion's secure AI offering, which runs LLMs securely inside TEEs. nilAI is the Blind Module that underpins Nillion's [Private LLMs](/build/private-llms/overview) solutions.

```mermaid
%%{
    init: {
        'theme': 'base',
        'themeVariables': {
            'fontSize': '14px',
            'primaryBorderColor': '#000000',
            'secondaryBorderColor': '#000000',
            'tertiaryBorderColor': '#000000',
            'edgeLabelBackground': '#DFDFDF'
        }
    }
}%%
graph LR
    linkStyle default interpolate basis

    subgraph NILAI ["nilAI node<br/>"]
        TEE
    end
    style NILAI fill:#0000FF,color:#FFFFFF

    subgraph TEE
        L
    end
    style TEE fill:#DDDDDD,stroke:#FFFFFF,color:#000000
    style L fill:#FFFFFF,stroke:#000000,color:#000000

    U[User] -->|encrypted prompt| L[<b>LLM</b>]
    L  -->|encrypted reply| U
    NILDB[nilDB Cluster] -->|encrypted data| L
    style U fill:#CCCCFF,stroke:#000000
    style NILDB fill:#0000FF,color:#FFFFFF
```

The nilAI Blind Module can be accessed via an [easy-to-use RESTful API](/api/nilai/overview) that allows users to run inference using supported models.
