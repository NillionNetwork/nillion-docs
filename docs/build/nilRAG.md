# nilRAG

Retrieval Augmented Generation (RAG) is a technique that grants large language
models (LLMs) information retrieval capabilities and context that they might be
missing. Nillion's RAG (nilRAG) uses [SecretLLM)](/build/secretLLM/overview), [SecretVault](/build/secret-vault), and the
[nilQL](/build/nilQL) encryption library.

:::info
nilRAG lets you to store private information in [SecretVault](/build/secret-vault) and then use it as context when you use the [SecretLLM](/build/secretLLM/overview) chat endpoint.
:::


## Library Overview
Data owners often possess valuable files that clients wish to query to enhance
their LLM-based inferences. However, ensuring privacy is a key challenge: data
owners want to keep their data confidential, and clients are equally concerned
about safeguarding their queries. nilRAG addresses this challenge by enabling
secure data sharing and querying. It allows data owners to store their data
securely in SecretVault while allowing clients to query the data without
exposing their queries or compromising the data's privacy. The process involves
leveraging a SecretLLM for secure computation through nilAI. Data owners upload
their information to SecretVault, while SecretLLM processes client queries and
retrieves the most relevant results (top-k) without revealing sensitive
information from either party.


Let us deep dive into the entities and their roles in the system.

1. **Data Owners:** Securely upload files to SecretVault. Before sending the
   files to SecretVault, they are processed into multiple chunks of data and
   their corresponding embeddings. The embeddings are used for similarity
   search, while the chunks are used to retrieve the actual uploaded files. Once
   the files are encoded into chunks and embeddings, they are blinded before
   being uploaded to SecretVault, where each chunk and embedding is
   secret-shared.

   For instance, a data owner, wishes to upload the following file to SecretVault and later use it to provide context to SecretLLM:
    :::note Employees Example
    ```
    Kyle Moore works at Jackson, Gray and Lewis as a Economist. Kyle Moore was born on 1915-09-27 and lives at 6206 Caroline Point, Bishopland, MI 34522.

    Charles Anderson works at Evans, Parker and Ramirez as a Surveyor, insurance. Charles Anderson was born on 2016-12-13 and lives at 0527 William Walk Suite 976, Lake Jason, MS 97840.

    Danielle Miller works at Bailey and Sons as a Engineer, mining. Danielle Miller was born on 2007-10-22 and lives at 61586 Michael Greens, New Holly, CO 29872.
    ...
    ```
    :::

    Let's dive a bit more into the example of employees records. First, Data
    Owners need to create a schema and a query in SecretVault:
    <details>
    <summary>Full 1.init_schema_query.py</summary>
    ```py reference showGithubLink
    https://github.com/NillionNetwork/nilrag/blob/main/examples/1.init_schema_query.py
    ```
    </details>

    Now that the schema and the query are ready, Data Owners can upload their data:
    <details>
    <summary>Full 2.data_owner_upload.py</summary>
    ```py reference showGithubLink
    https://github.com/NillionNetwork/nilrag/blob/main/examples/2.data_owner_upload.py
    ```
    </details>


2. **Client:** The client submits a query to search against the data owners'
    uploaded files in SecretVault, retrieve the most relevant data, and use the
    top-k results for privacy-preserving inference in SecretLLM. Similar to the
    encoding by data owners, the query is processed into its corresponding
    embeddings.

    Going back to our example, the client can query SecretLLM asking about Danielle:
    :::note Employees Example
    ```
    Who is Danielle Miller?
    ```
    :::

    Here is an example of how clients can run such a query:
    <details>
    <summary>Full 3.client_query.py</summary>
    ```py reference showGithubLink
    https://github.com/NillionNetwork/nilrag/blob/main/examples/3.client_query.py
    ```
    </details>


3. **SecretVault:** SecretVault stores the blinded chunks and embeddings
   provided by data owners. When a client submits a query, SecretVault computes
   the differences between the query's embeddings and each stored embedding in a
   privacy-preserving manner.


4. **SecretLLM:** SecretLLM connects to SecretVault to fetch the blinded
   differences between the query and the stored embeddings and then compute the
   closest matches. Finally, it uses the top k matches for inference.

   Lastly, the client can query SecretLLM asking about Danielle:
    :::note Employees Example
    ```
    Danielle Miller is an engineer who works at Bailey and Sons, specializing in mining. She was born on October 22, 2007, and lives at 61586 Michael Greens, New Holly, CO 29872.
    ```
    :::


You can reproduce the example above by following the [README](https://github.com/NillionNetwork/nilrag).

## Implementation

nilRAG is a standalone library available through
[PyPI](https://pypi.org/project/nilrag) and open-source on
[GitHub](https://github.com/NillionNetwork/nilrag). Developers can use nilRAG as
a feature of [SecretLLM](https://docs.nillion.com/build/secretLLM/quickstart) to
enhance the inference with context that has been uploaded to [SecretVault](https://docs.nillion.com/build/secret-vault).


### Performance Expectations

We have performed a series of benchmarks to evaluate the performance of nilRAG.
Currently, nilRAG scales linearly to the number of rows stored in nilDB.
The following table shows latency to upload to nilDB multiple paragraphs of a few sentences long, as well as the runtime for AI inference using SecretLLM with nilRAG.

| Number of Paragraphs Stored in nilDB | Upload Time to nilDB (sec.) | Query Time (Inference + RAG) (sec.) |
| -------------- | ------------------ | ----------------- |
|      1         |         0.2        |        2.4        |
|      10        |         0.4        |        3.1        |
|      100       |         1.0        |        5.8        |
|      1000      |         10.5       |        13.2       |
|      10000     |         51.3       |        21.9       |

Additionally, using multiple concurrent users, the query time for inference with nilRAG increases.
Performing inference with nilRAG with a content of 100 paragraphs takes approximately 5 seconds for a single user, while with ten concurrent users the inference time for the same content goes up to almost 9 seconds.
We're developing new research to further accelerate nilRAG and make it more scalable, stay tuned!
