# 2. Self-Registering

1. After your application is approved, you will receive a link from us to self-register your org
2. **[TEMP]** This is temporarily hosted here XXX for visibility and testing. This should not be in the final docs, as only approved orgs/builders should be able to register. We do not want that page to be public.
3. Here you'll be able to choose a name for your org and select the SecretVault/SecretDataAnalytics nodes that you'd like to deploy to.
4. You will receive and be prompted to securely store your newly created **Credentials** in the form of:
   - A DID (Decentralized Identifier)
   - A private/public keypair
5. Please note that you are solely responsible for keeping your credentials safe and available. We will not be able to retrieve/regenerate them for you, and you will very likely not be able to access your data without these.
6. You will also get a **Cluster Config** describing the nodes that you picked in the form of each nodes:
   - URL
   - DID (Decentralized Identifier)
   - Public key
7. At this stage you should forward us your new DID (from your Credentials), so we can move ahead with registering your schemas and queries as you described them in your application. You can review them using the GET `/schemas` and GET `/queries` endpoints (detailed information in the API Reference page).
