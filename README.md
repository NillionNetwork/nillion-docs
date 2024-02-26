# Nillion docs

The Nillion docs are built using [Docusaurus v3](https://docusaurus.io/). Documentation content lives in the docs folder of this repo, and new sections can be added to the sidebar by including the pages in sidebar.js.

## Improving the docs

Got a suggestion for improving the docs? Let us know by [creating a Github Issue](https://github.com/nillion-oss/nillion-docs/issues/new?assignees=&labels=documentation&projects=&template=improve-documentation.md&title=%5BDOCS%5D)

## Asking questions

Use our [Github Discussions forum](https://github.com/orgs/nillion-oss/discussions?discussions_q=) to ask technical questions and share ideas about Nillion.

## Running the docs locally

### Installation

```
$ yarn
```

### Local Development

```
$ cp .env.sample .env
```

Create a .env file by copying the sample and add environment variables.

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Search

The docs use [Algolia DocSearch](https://docsearch.algolia.com/docs/what-is-docsearch) for search, with crawling once a week on Mondays on the 'nillion_docs' index.

### Deployment

The docs are deployed to [docs.nillion.com](https://docs.nillion.com/) with Vercel.
