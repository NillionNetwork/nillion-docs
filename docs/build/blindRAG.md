# blindRAG

Retrieval Augmented Generation (RAG) is a technique that grants large language
models (LLMs) information retrieval capabilities and context that they might be
missing. Nillion's RAG (blindRAG) uses [SecretLLM](/build/secretLLM/overview), [SecretVault](/build/secret-vault), and the
[nilQL](/build/nilQL) encryption library.

:::info
blindRAG lets you to store private information in [SecretVault](/build/secret-vault) and then use it as context when you use the [SecretLLM](/build/secretLLM/overview) chat endpoint.
:::


## Library Overview
Data owners often possess valuable files that clients wish to query to enhance
their LLM-based inferences. However, ensuring privacy is a key challenge: data
owners want to keep their data confidential, and clients are equally concerned
about safeguarding their queries. blindRAG addresses this challenge by enabling
secure data sharing and querying. It allows data owners to store their data
securely in SecretVault while allowing clients to query the data without
exposing their queries or compromising the data's privacy. The process involves
leveraging a SecretLLM for secure computation through nilAI. Data owners upload
their information to SecretVault, while SecretLLM processes client queries and
retrieves the most relevant results (top-k) without revealing sensitive
information from either party.

blindRAG supports optional clustering to accelerate query retrieval. Data owners 
locally partition their dataset into clusters, then upload the clusters to 
SecretVault. At query time, SecretLLM first identifies the most relevant cluster 
for the incoming query embedding and then executes RAG within that subset. 
By minimizing the search space, this approach reduces comparison overhead and 
significantly speeds up inference.


Let us deep dive into the entities and their roles in the system.

1. **Data Owners:** Securely upload files to SecretVault. Before sending the
   files to SecretVault, they are processed into multiple chunks of data and
   their corresponding embeddings. The embeddings are used for similarity
   search, while the chunks are used to retrieve the actual uploaded files. Once
   the files are encoded into chunks and embeddings, they are blinded before
   being uploaded to SecretVault, where each chunk and embedding is
   secret-shared. Optionally, data owners can locally partition their data 
   into clusters and upload the chunks and embeddings along with the 
   corresponding cluster information to SecretVault.

   For instance, a data owner, wishes to upload the following file to SecretVault and later use it to provide context to SecretLLM:
    :::note Employees Example
    ```
    Kyle Moore works at Jackson, Gray and Lewis as a Economist. Kyle Moore was born on 1915-09-27 and lives at 6206 Caroline Point, Bishopland, MI 34522.

    Michelle Ross works at Davis-Alvarez as a Tree surgeon. Michelle Ross was born on 1946-09-15 and lives at 33554 Deanna Summit Apt. 813, Hurstshire, IA 55587.

    Danielle Miller works at Bailey and Sons as a Engineer, mining. Danielle Miller was born on 2007-10-22 and lives at 61586 Michael Greens, New Holly, CO 29872.
    ...
    ```
    :::

    Let's dive a bit more into the example of employees records. First, data
    owners need to create a schema and a query in SecretVault. If clustering is enabled, 
    data owners also create a clusters' schema to store the centroids of
    the clusters.
    <details>
    <summary>Full bootstrap.py</summary>
    ```py reference showGithubLink
    https://github.com/NillionNetwork/blindRAG/blob/main/examples/init/bootstrap.py
    ```
    </details>

    Now that the schemas and the query are ready, data owners can upload their data. If clustering is enabled,
    data owners start by locally computing the clusters centroids using
    [scikit-learn KMeans](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html) method.
    <details>
    <summary>Full write.py</summary>
    ```py reference showGithubLink
    https://github.com/NillionNetwork/blindRAG/blob/main/examples/data_owner/write.py
    ```
    </details>


2. **Client:** The client submits a query to search against the data owners'
    uploaded files in SecretVault, retrieve the most relevant data, and use the
    top-k results for privacy-preserving inference in SecretLLM. Similar to the
    encoding by data owners, the query is processed into its corresponding
    embeddings. If clustering is enabled, the most relevant cluster is first 
    identified and RAG is executed over this cluster.

    Going back to our example, the client can query SecretLLM asking about Michelle:
    :::note Employees Example
    ```
    Who is Michelle Ross?
    ```
    :::

    Here is an example of how clients can run such a query:
    <details>
    <summary>Full query.py</summary>
    ```py reference showGithubLink
    https://github.com/NillionNetwork/blindRAG/blob/main/examples/client/query.py
    ```
    </details>


3. **SecretVault:** SecretVault stores the blinded chunks and embeddings
   provided by data owners. When a client submits a query, SecretVault computes
   the differences between the query's embeddings and each stored embedding in a
   privacy-preserving manner. If clustering is enabled, SecretVault also stores the 
   cluster centroids in a separate schema. In the original schema, the blinded chunks
   and embeddings are stored along with the corresponding centroid.


4. **SecretLLM:** SecretLLM connects to SecretVault to fetch the blinded
   differences between the query and the stored embeddings and then compute the
   closest matches. If clustering is enabled, SecretLLM starts by retrieving the
   centroid points. Finally, it uses the top k matches for inference.

   Lastly, the client can query SecretLLM asking about Michelle:
    :::note Employees Example
    ```
    Michelle Ross is an engineer who works at Bailey and Sons, specializing in mining. She was born on October 22, 2007, and lives at 61586 Michael Greens, New Holly, CO 29872.
    ```
    :::


You can reproduce the example above by following the [README](https://github.com/NillionNetwork/blindrag).

## Implementation

blindRAG is a standalone library available through
[PyPI](https://pypi.org/project/blindrag) and open-source on
[GitHub](https://github.com/NillionNetwork/blindrag). Developers can use blindRAG as
a feature of [SecretLLM](https://docs.nillion.com/build/secretLLM/quickstart) to
enhance the inference with context that has been uploaded to [SecretVault](https://docs.nillion.com/build/secret-vault).


### Performance Expectations

We have performed a series of benchmarks to evaluate the performance of blindRAG with and without clustering.
Currently, blindRAG scales linearly to the number of rows stored in SecretVault.
The following table shows latency to upload to SecretVault multiple paragraphs of a few sentences long, as well as the runtime for AI inference using SecretLLM with blindRAG.

<table>
  <thead>
    <tr>
      <th rowspan="2">Number of Paragraphs Stored in SecretVault</th>
      <th colspan="2">RAG Time (sec.)</th>
      <th colspan="2">Query Time (Inference + RAG, sec.)</th>
    </tr>
    <tr>
      <th>No Clusters</th>
      <th>5 Clusters</th>
      <th>No Clusters</th>
      <th>5 Clusters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>0.2</td>
      <td> - </td>
      <td>2.4</td>
      <td> - </td>
    </tr>
    <tr>
      <td>10</td>
      <td>0.4</td>
      <td> - </td>
      <td>3.1</td>
      <td> - </td>
    </tr>
    <tr>
      <td>100</td>
      <td>2.3 </td>
      <td> 1.7 </td>
      <td>2.9</td>
      <td> 2.1 </td>
    </tr>
    <tr>
      <td>1 000</td>
      <td>5.8</td>
      <td>2.5</td>
      <td>7.0</td>
      <td>3.2</td>
    </tr>
    <tr>
      <td>5 000</td>
      <td>20.0</td>
      <td>5.7</td>
      <td>25.1</td>
      <td>5.9</td>
    </tr>
    <tr>
      <td>10 000</td>
      <td>39.2</td>
      <td>10.0</td>
      <td>47.5</td>
      <td>8.9</td>
    </tr>
    <tr>
      <td>20 000</td>
      <td>74.7</td>
      <td>11.3</td>
      <td>92.5</td>
      <td>19.8</td>
    </tr>
  </tbody>
</table>

Additionally, using multiple concurrent users, the query time for inference with blindRAG increases.
Performing inference with blindRAG with a content of 100 paragraphs takes approximately 5 seconds for a single user, while with ten concurrent users the inference time for the same content goes up to almost 9 seconds.
We're developing new research to further accelerate blindRAG and make it more scalable, stay tuned!
