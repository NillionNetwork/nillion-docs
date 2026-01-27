---
title: "Understanding nilDB Encryption"
description: "How nilDB stores encrypted fields using secret sharing with %share and %allot"
slug: nildb-encryption
authors: nillion-team
tags: [nilDB, encryption, secret-sharing]
image: /img/articles/nildb_diagram.png
hide_table_of_contents: false
---

![Understanding nilDB Encryption](/img/articles/nildb-encryption.png)

When building privacy-preserving applications, a common challenge is figuring out **how to keep sensitive user data safe** while still being able to work with it. Traditional databases store all information in one place making them a single point of failure if breached.

nilDB takes a very different approach. It’s part of Nillion’s **blind modules**, designed for secure and decentralized data storage. Instead of storing plaintext data values, developers can use [**blindfold**](/blind-computer/build/storage/blindfold) encryption within the [**SecretVaults SDK**](/blind-computer/build/storage/secretvaults) to **split encrypted data into mathematical shares**, then distribute and store them across multiple nilDB nodes. No single node ever has access to the full value. To reconstruct the data, you need multiple shares from different nodes.

This approach gives you a much stronger security guarantee: if one node is compromised, the attacker gets nothing useful.

<!-- truncate -->

---

## Encrypted Fields

In nilDB, you can choose whether a field should be stored as **plaintext** or as an **encrypted field**.

- **Plaintext fields** (e.g., `name`) are stored directly in nilDB. They are useful for non-sensitive data that you may want to query, sort, or display easily.
- **Encrypted fields** (e.g., `phone`) are automatically encrypted, secret-shared, and split across multiple nilDB nodes. These fields cannot be read in their raw form by any single node.

Here’s the key difference:

- A plaintext field (`name: "Steph"`) is just stored as-is, like a traditional database.
- An encrypted field (`phone: { "%allot": "+1-555-0123" }`) is transformed into cryptographic shares. Each node only sees a useless fragment, and it takes multiple shares to reconstruct the original.

This means:

- Encrypted fields are **unreadable to the database itself.** Even nilDB nodes don’t know the actual value.
- You, the developer, decide which data should be secret-shared, and which can safely remain in plaintext.
- Queries on encrypted fields work differently (and are often limited) compared to plaintext, so design schemas carefully.

Example schema with both types of fields:

```js
properties: {
  _id: { type: 'string', format: 'uuid' },
  name: { type: 'string' }, // plaintext
  phone: { // encrypted
    type: "object",
    properties: {
      "%share": { type: "string" }
    },
    required: ["%share"]
  },
}

```

👉 In practice, you’ll mix both. Public data (like a username) stays plaintext for performance and usability. Private data (like phone numbers, addresses, or IDs) should be encrypted to ensure nilDB never sees the real values.

---

## Designing Schemas with Encrypted Fields

When programmatically creating a collection schema, you’ll need to **declare which fields should be secret-shared**. For example:

```js
properties: {
  _id: { type: 'string', format: 'uuid' },
  name: { type: 'string' }, // Plaintext field
  email: { // Secret-shared AKA encrypted
    type: "object",
    properties: {
      "%share": { type: "string" }
    },
    required: ["%share"]
  },
  phone: { // Secret-shared AKA encrypted
    type: "object",
    properties: {
      "%share": { type: "string" }
    },
    required: ["%share"]
  },
}

```

👉 Notice the `"%share"` property inside encrypted fields. This is how nilDB knows to treat incoming values as secret-shared when you later use the `"%allot"` keyword.

---

## %share vs %allot

- **`%share`** → used in your schema definition to mark a field as encrypted.
- **`%allot`** → used when inserting or updating data, to signal that the value should be encrypted and distributed across nodes.

Example:

```js
// Schema defines "phone" as a %share field

const sensitiveData = {
  _id: randomUUID(),
  name: "Steph", // Plaintext
  email: "steph@example.com", // Plaintext
  phone: { "%allot": "+1-555-0123" }, // Encrypted
};
```

When nilDB processes this, it knows to encrypt and split the phone number into shares before distributing them across the cluster.

Think of it like **type-checking** in an API: `%share` tells the schema what format to expect, and `%allot` ensures you’re sending the right type of data.

---

## Best Practices for Encrypted Fields

1. **Use `%share` consistently** – any field meant to hold sensitive values must be schema-marked.
2. **Keep non-sensitive data plaintext** – don’t encrypt fields unnecessarily (e.g., names), to keep queries efficient.
3. **Validate your schema early** – mismatches between schema and insert payloads will cause errors.
4. **Design with reconstruction in mind** – remember that multiple shares are required to decrypt data, so plan access patterns accordingly.
5. **Leverage the WebUI for quick starts** – but use programmatic schema creation for production apps.

---

## Building Encrypted Applications with nilDB

nilDB makes it straightforward to add encryption to your app’s data model. You don’t need to implement secret sharing or cryptography yourself, the framework handles it.

- Use the [**Collection Explorer tool**](https://collection-explorer.nillion.com/) if you want a fast way to spin up schemas.
- Or define schemas programmatically in JavaScript for more control.

## Conclusion

nilDB’s `%share` and `%allot` keywords gives you a **simple but powerful model for encryption-by-design**. You can build applications that safeguard sensitive data at the storage layer.
