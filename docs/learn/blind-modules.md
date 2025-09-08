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
            'primaryTextColor': '#000000',
            'primaryBorderColor': '#000000',
            'secondaryBorderColor': '#000000',
            'tertiaryBorderColor': '#000000',
            'edgeLabelBackground': '#DFDFDF'
        }
    }
}%%
graph TD

    subgraph CLIENT [" "]
        CLIENT_APPLICATION
        CLIENT_BLINDFOLD
    end
    style CLIENT fill:#FFFFFF,stroke:#000000
    style CLIENT_APPLICATION fill:#CCCCFF,stroke:#5C5DB3
    style CLIENT_BLINDFOLD fill:#0000FF,stroke:#000000,color:#FFFFFF

    subgraph NODES [" "]
        NODE_X
        NODE_Y
        NODE_Z
    end
    style NODES fill:#CCCCFF,stroke:#000000
    style NODE_X fill:#0000FF,stroke:#000000,color:#FFFFFF
    style NODE_Y fill:#0000FF,stroke:#000000,color:#FFFFFF
    style NODE_Z fill:#0000FF,stroke:#000000,color:#FFFFFF

    subgraph SERVICE [" "]
        BLINDFOLD_SERVICE
        SERVICE_PROVIDER
    end
    style SERVICE fill:#FFFFFF,stroke:#000000
    style BLINDFOLD_SERVICE fill:#0000FF,stroke:#000000,color:#FFFFFF
    style SERVICE_PROVIDER fill:#CCCCFF,stroke:#5C5DB3

    CLIENT_APPLICATION[Application] -->|data| CLIENT_BLINDFOLD[<b>blindfold</b>]
    CLIENT_BLINDFOLD -->|data secret share| NODE_X[<b>nilDB Node</b>]
    CLIENT_BLINDFOLD -->|data secret share| NODE_Y[<b>nilDB Node</b>]
    CLIENT_BLINDFOLD -->|data secret share| NODE_Z[<b>nilDB Node</b>]
    NODE_X <-->|query secret share<br/>reply secret share| BLINDFOLD_SERVICE[<b>blindfold</b>]
    NODE_Y <-->|query secret share<br/>reply secret share| BLINDFOLD_SERVICE
    NODE_Z <-->|query secret share<br/>reply secret share| BLINDFOLD_SERVICE
    BLINDFOLD_SERVICE <-->|query<br/>reply| SERVICE_PROVIDER[Service Provider]
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
            'primaryTextColor': '#000000',
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
        LLM
    end
    style TEE fill:#DDDDDD,stroke:#FFFFFF,color:#000000
    style LLM fill:#FFFFFF,stroke:#000000,color:#000000

    USER[User] -->|encrypted prompt| LLM[<b>LLM</b>]
    LLM  -->|encrypted reply| USER
    NILDB[nilDB Cluster] -->|encrypted data| LLM
    style USER fill:#CCCCFF,stroke:#5C5DB3
    style NILDB fill:#0000FF,stroke:#000000,color:#FFFFFF
```

The nilAI Blind Module can be accessed via an [easy-to-use RESTful API](/api/nilai/overview) that allows users to run inference using supported models.
