# Access

In order to use SecretVault/SecretDataAnalytics with your own schemas and queries, please fill in this [form.](https://forms.gle/Um3xLwMKyKPyAP9i6)

Our requirements are to:

- Provide details on how you're planning to use them and your goals.
- Provide detailed representation of the schemas and queries you'll need in JSON schema format. Please make sure they are valid by using tools like [JSON Schema Validator](https://www.jsonschemavalidator.net/).

You will hear back from us if your applications is approved or feedback is required, and you can then proceed with registering.

# Self-Registering

1. After your application is approved, you will receive a link from us to self-register your org
2. Here you'll be able to choose a name for your org and select the SecretVault/SecretDataAnalytics nodes that you'd like to deploy to.
3. You will receive and be prompted to securely store your newly created **Credentials** in the form of:
   - A DID (Decentralized Identifier)
   - A private/public keypair
4. Please note that you are solely responsible for keeping your credentials safe and available. We will not be able to retrieve/regenerate them for you, and you will very likely not be able to access your data without these.
5. You will also get a **Cluster Config** describing the nodes that you picked in the form of each nodes:
   - URL
   - DID (Decentralized Identifier)
   - Public key
6. At this stage you should forward us your new DID (from your Credentials), so we can move ahead with registering your schemas and queries as you described them in your application. You can review them using the GET `/schemas` and GET `/queries` endpoints (detailed information in the API Reference page).
