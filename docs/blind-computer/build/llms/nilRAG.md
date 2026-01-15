# nilRAG Library

Retrieval augmented generation (RAG) is a technique that grants large language models (LLMs) information retrieval capabilities and context that they might be missing. The nilRAG library leverages features of [Private LLMs](/blind-computer/build/llms/overview) and [Private Storage](/blind-computer/build/storage/overview) together with the
[blindfold](/blind-computer/build/storage/blindfold) encryption library.

:::info
nilRAG makes it possible to store sensitive information in [Private Storage](/blind-computer/build/storage/overview) and then to use that information as context when leveraging the chat endpoint made available by [Private LLMs](/blind-computer/build/llms/overview).
:::

## Library Overview

Data owners often possess valuable files that clients wish to query to enhance their LLM-based inferences. However, ensuring privacy is a key challenge: data owners want to keep their data confidential, and clients are equally concerned about safeguarding their queries. nilRAG addresses this challenge by enabling secure data sharing and querying. It allows data owners to store their data securely in nilDB while allowing clients to query the data without exposing their queries or compromising the data's privacy. The process involves leveraging an LLM for secure computation via nilAI. Data owners upload their information to nilDB and an LLM on a nilAI node processes client queries and retrieves the most relevant results (top-*k*) without revealing sensitive information from either party.

Let us do a deep dive into the entities and their roles in the system.

1. **Data Owners:** Securely upload files to nilDB. Before sending the
   files to nilDB, they are split up into multiple chunks of data and
   their corresponding embeddings. The embeddings are used for similarity
   search, while the chunks are used to retrieve the actual uploaded files. Once
   the files are encoded into chunks and embeddings, they are blinded before
   being uploaded to nilDB, where each chunk and embedding is stored in
   secret-shared form.

   For instance, a data owner, wishes to upload the following file to nilDB and later use it to provide context to an LLM on a nilAI node:
   :::note Employees Example

   ```
   Kyle Moore works at Jackson, Gray and Lewis as a Economist. Kyle Moore was born on 1915-09-27 and lives at 6206 Caroline Point, Bishopland, MI 34522.

   Charles Anderson works at Evans, Parker and Ramirez as a Surveyor, insurance. Charles Anderson was born on 2016-12-13 and lives at 0527 William Walk Suite 976, Lake Jason, MS 97840.

   Danielle Miller works at Bailey and Sons as a Engineer, mining. Danielle Miller was born on 2007-10-22 and lives at 61586 Michael Greens, New Holly, CO 29872.
   ...
   ```

   :::

   Let's dive a bit more into the example involving employee records. First, data
   owners need to create a schema and a query in nilDB using secretvaults:
    <details>
    <summary>init/bootstrap.py</summary>
    ```py reference showGithubLink
    https://github.com/NillionNetwork/nilrag/blob/main/examples/init/bootstrap.py
    ```
    </details>

   Now that the schema and the query are ready, data owners can upload their data:
    <details>
    <summary>data_owner/write.py</summary>
    ```py reference showGithubLink
    https://github.com/NillionNetwork/nilrag/blob/main/examples/data_owner/write.py
    ```
    </details>

2. **Client:** The client submits a query to search against the data owners'
   uploaded files using secretvaults, retrieves the most relevant data, and uses the
   top-*k* results for privacy-preserving inference with an LLM on a nilAI node. Using a similar
   encoding to that used by data owners, the query is transformed into its corresponding
   embeddings.

   Going back to our example, the client can query an LLM on a nilAI node by asking about Danielle:
   :::note Employees Example

   ```
   Who is Danielle Miller?
   ```

   :::

   Below is an example of how clients can run such a query:
   <details>
   <summary>client/query.py</summary>
   ```py reference showGithubLink
   https://github.com/NillionNetwork/nilrag/blob/main/examples/client/query.py
   ```
   </details>

3. **Private Storage:** The blinded chunks are stored and embeddings are provided
   by data owners. When a client submits a query, the differences between the query's
   embeddings and each stored embedding are computed in a privacy-preserving manner.

4. **Private LLMs:** An LLM on a nilAI node connects to nilDB to fetch the blinded
   differences between the query and the stored embeddings and then computes the
   closest matches. Finally, it uses the top-*k* matches for inference.

   Finally, the client can query the LLM on nilAI by asking about Danielle:
   :::note Employees Example

   ```
   Danielle Miller is an engineer who works at Bailey and Sons, specializing in mining. She was born on October 22, 2007, and lives at 61586 Michael Greens, New Holly, CO 29872.
   ```

   :::

You can reproduce the example above by following the [README](https://github.com/NillionNetwork/nilrag).

## Implementation

nilRAG is a standalone open-source library available on [PyPI](https://pypi.org/project/nilrag) and on [GitHub](https://github.com/NillionNetwork/nilrag). Developers can use nilRAG as a feature of [Private LLMs](/blind-computer/build/llms/overview) to enhance the inference with context that has been uploaded to [Private Storage](/blind-computer/build/storage/overview).

### Performance Expectations

Presented below are a series of benchmarks that evaluate the performance of nilRAG. Currently, nilRAG scales linearly to the number of rows stored in nilDB. The table shows latency to upload to nilDB multiple paragraphs of a few sentences long, as well as the runtime for AI inference using an LLM on a nilAI node with nilRAG.

| Number of Paragraphs Stored in nilDB | Upload Time to nilDB (sec.) | Query Time (Inference + RAG) (sec.) |
| ------------------------------------ | --------------------------- | ----------------------------------- |
| 1                                    | 0.2                         | 2.4                                 |
| 10                                   | 0.4                         | 3.1                                 |
| 100                                  | 1.0                         | 5.8                                 |
| 1000                                 | 10.5                        | 13.2                                |
| 10000                                | 51.3                        | 21.9                                |

Additionally, using multiple concurrent users, the query time for inference with nilRAG increases. Performing inference with nilRAG with a content of 100 paragraphs takes approximately 5 seconds for a single user, while with ten concurrent users the inference time for the same content goes up to almost 9 seconds. We are continuing our research to further accelerate nilRAG and make it more scalable. Stay tuned!
