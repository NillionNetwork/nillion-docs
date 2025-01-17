# Overview

:::info
You may use this test Bearer token we have created for development

```
eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJpc3MiOiJkaWQ6bmlsOnRlc3RuZXQ6bmlsbGlvbjF4dnRuM2FhajQ4dGY3bm5zZW16MGQ2OGVwbjZlcHU0ZjRhNG5mYSIsImF1ZCI6ImRpZDpuaWw6dGVzdG5ldDpuaWxsaW9uMXd3c3Jqbmd4dnU5dGMzMzVsajlrM213d3JybDV3M3EyZDB1ZXR6In0.yOKg-wyJdyn9jK-KNtkjbi9PS0pF9wmgVmd7pIeNGhoTjhgZhzB62atbgzE45OGGYx0gUsw_i2k3K2AdFf_tuQ
```

:::

NILDB API has several endpoints you may interface with:

- System
  - [Health](./get-health-status.api.mdx)
  - [About](./get-node-details.api.mdx)
  - [Accounts](./retrieve-an-organizations-account-details.api.mdx)

- Data

  - [Upload/Create](./upload-data-to-the-specified-schema-collection.api.mdx)
  - [Read](./retrieve-data-from-the-specified-schema-collection-that-matches-the-provided-filter.api.mdx)
  - [Tail](./retrieve-recently-added-documents-from-a-schema-collection.api.mdx)
  - [Update](./update-documents-within-a-schema-collection-that-match-the-given-filter.api.mdx)
  - [Delete](./delete-data-records-that-match-a-given-filter.api.mdx)
  - [Flush](./remove-all-documents-in-a-schema-collection.api.mdx)
  - [Schemas](./list-the-organizations-schemas.api.mdx)

- Queries
  - [List](./list-the-organizations-queries.api.mdx)
  - [Execute](./execute-the-specified-query.api.mdx)
