import CTABanner from '@site/src/components/CTABanner';

# Collection Explorer

[![Collection Explorer](/img/collection-explorer/collection-explorer-card.png)](https://collection-explorer.nillion.com/)

The [Nillion Collection Explorer](https://collection-explorer.nillion.com) is a no-code builder tool for creating and managing Nillion Private Storage schemas, collections, and records. This web-based interface provides a UI abstraction that speeds up and simplifies development by allowing builders to interact with Nillion's private data storage infrastructure without requiring programming knowledge or command-line tools. Everything possible through the Collection Explorer is also available programmatically via the Nillion [Secretvaults SDK](/blind-computer/build/storage/secretvaults).

## What is the Collection Explorer?

The Collection Explorer is your gateway to [Nillion Private Storage](/blind-computer/build/storage/overview) as a **builder**, where you can:

- **Create standard collections by building schemas** that define the structure and validation rules for your private data
- **Store and manage records** with automatic encryption for sensitive fields
- **Control data privacy** by marking specific fields as encrypted for distribution across nilDB nodes

This database management interface is specifically designed for privacy-preserving data storage across distributed clusters.

## Getting Started

### Set Your Nillion Network Configuration

<CTABanner
  question='Prerequisite: having a Nillion API Key'
  instruction='You need a Nillion API Key with an active nilDB subscription to use the Collection Explorer tool.'
  buttonText='Get a Nillion API Key'
  buttonLink='/blind-computer/build/network-api-access'
  event='collections-explorer-api-key-cta'
  external={false}
/>

Once you have a Nillion API Key with an active nilDB subscription, go to the [Collection Explorer](https://collection-explorer.nillion.com/) and configure your connection to the Nillion Network:

1. Navigate to "⚙️ Network Settings" in the navbar
2. Configure your nilDB Network settings:
   - **Node endpoints**: Defaults to [nilDB Testnet nodes](/blind-computer/build/network-config#nildb-nodes)
   - **nilAuth**: Uses Testnet nilAuth by default
   - **nilChain**: Points to Testnet nilChain URL
3. Enter your [Nillion API Key](/blind-computer/build/network-api-access) for authenticated access
4. Save your configuration - these settings will persist across Collection Explorer sessions

[![Set API Key](/img/collection-explorer/collection-explorer-set-nillion-api-key.png)](https://collection-explorer.nillion.com/)

## Managing Collections

### View Your Collections

The Collections dashboard provides an overview of all collections where your builder DID is the owner:

- Browse all collections associated with your builder account
- **Search functionality**: Filter collections by name or collection ID for quick access
- View key metrics like record count and creation timestamps
- See collection types (standard or owned)

[![View Collections](/img/collection-explorer/collection-explorer-view-collections.png)](https://collection-explorer.nillion.com/collections)

### Create New Collections

You have two options for creating collections, depending on your preference and technical expertise:

#### Option 1: Visual Schema Builder (Recommended)

The custom schema builder provides an intuitive, visual interface:

- **Field-by-field creation**: Add fields one by one using a graphical interface
- **Field type selection**: Choose from various data types (string, number, boolean, etc.)
- **Validation rules**: Set constraints like required fields, min/max values, and format requirements
- **Privacy controls**: Mark sensitive fields as "Secret" for automatic blindfold storage encryption and secret sharing across nilDB nodes
- **Live preview**: See your JSON Schema update in real-time as you build
- **Schema validation**: Automatic validation ensures your schema is properly formatted

[![Create Collection with the UI](/img/collection-explorer/collection-explorer-create-collection-ui.png)](https://collection-explorer.nillion.com/)

#### Option 2: JSON Schema Upload (for devs with existing JSON schema code)

If you already have a JSON Schema or prefer working with code:

- **Direct paste**: Copy and paste your existing JSON Schema code
- **Automatic validation**: The system validates your JSON Schema structure before creation
- **Error feedback**: Get immediate feedback on any schema formatting issues
- **Faster setup**: Skip the visual builder if you're comfortable with JSON

[![Create Collection by uploading json](/img/collection-explorer/collection-explorer-create-collection-json.png)](https://collection-explorer.nillion.com/)

## Working with Records and Schemas

### Managing Collection Records

Once you have a collection, you can fully manage its data:

[![View Records](/img/collection-explorer/collection-explorer-records.png)](https://collection-explorer.nillion.com/)

**Collection Overview:**

- View collection metadata including name, unique collection ID, total record count, storage size, and creation/modification timestamps
- See collection type (standard or owned) and owner DID

**Record Management:**

- **Add new records**: Create records that automatically validate against your collection's schema
- **View existing records**: Browse all records in a table format with pagination
- **Edit records**: Modify existing records with real-time schema validation
- **Delete records**: Remove individual records or bulk delete multiple records
- **Privacy toggle**: Show/hide encrypted fields to protect sensitive information during viewing

**Collection Administration:**

- **Delete collections**: Remove entire collections when they're no longer needed (use with caution - collections are immutable once created)
- **Export options**: Copy collection data for backup or migration purposes

### Viewing and Managing Schemas

Understanding and modifying your collection's structure:

[![View Collection Schema](/img/collection-explorer/collection-explorer-view-schema.png)](https://collection-explorer.nillion.com/)

- **Schema visualization**: See the complete JSON Schema that defines your collection's structure and validation rules
- **Copy functionality**: Easily copy schema JSON for use in other applications or for backup
- **Field analysis**: Review all field types, constraints, and privacy settings at a glance
- **Field type identification**: Distinguish between plaintext fields (stored as-is across nodes) and encrypted fields (split into shares across the cluster)
- **Validation rules**: Understand what data validation occurs when records are added or modified

## Next Steps

After familiarizing yourself with the Collection Explorer:

1. Create your first collection using sample data to understand the workflow
2. Experiment with different field types and encrypted field settings
3. Explore the JSON Schema output to understand how to integrate with applications
4. Check out the [Secretvaults SDK](/blind-computer/build/storage/secretvaults) documentation for programmatic access to your collections
