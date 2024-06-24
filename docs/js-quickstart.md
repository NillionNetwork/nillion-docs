import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import IframeVideo from '@site/src/components/IframeVideo/index';
import SdkInstallation from './\_sdk-installation.mdx';
import QuickstartIntro from './\_quickstart-intro.mdx';
import QuickstartNadaComplete from './\_quickstart-write-nada-complete.mdx';
import QuickstartNada from './\_quickstart-write-nada.mdx';

# JavaScript Developer Quickstart

<QuickstartIntro/>

## Install the Nillion SDK tools

<SdkInstallation/>

## Clone the Scaffold-Nillion JavaScript starter repo

The [Scaffold-Nillion Starter Repo](https://github.com/NillionNetwork/scaffold-nillion) repo has everything you need to start building. Clone the repo:

```bash
git clone https://github.com/NillionNetwork/scaffold-nillion.git
```

### Install repo dependencies

Before you use [Scaffold-Nillion](https://github.com/NillionNetwork/scaffold-nillion), you need to install the following:

- [Node (>= v18.17)](https://nodejs.org/en/download/)

  - Check version with
    ```
    node -v
    ```

- [python3](https://www.python.org/downloads/) version 3.11 or higher with a working [pip](https://pip.pypa.io/en/stable/getting-started/) installed

  - Confirm that you have python3 (version >=3.11) and pip installed:
    ```
    python3 --version
    python3 -m pip --version
    ```

- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
  - Check version with
    ```
    yarn -v
    ```
- [Git](https://git-scm.com/downloads)

### Install MetaMask Flask and store a Nillion user key in MetaMask Snaps

1. Install the [MetaMask Flask browser extension](https://docs.metamask.io/snaps/get-started/install-flask/) that will let you work with experimental snaps.
2. Create a new test wallet in MetaMask Flask
3. Temporarily disable any other wallet browser extensions (Classic MetaMask, Rainbow Wallet, etc.) while using MetaMask Flask
4. [Visit the Nillion Key Management UI](https://nillion-snap-site.vercel.app/) to generate a user key and store it in MetaMask Snaps - this saves your user key within MetaMask so it can be used by other Nillion web apps

## Run the starter

### 1. Enter the scaffold-nillion folder

```
cd scaffold-nillion
yarn install
```

### 2. Run a local ethereum network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development.

### 3. Open a second terminal and deploy the test ethereum contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network.

### 4. Open a third terminal to run the Nillion devnet:

This bootstraps [nillion-devnet](/nillion-devnet), a local network of nodes and adds cluster info to your NextJS app .env file

```
yarn nillion-devnet
```

### 5. Open another terminal to create and activate a python virtual environment for Nada program development

```
cd packages/nillion && bash create-venv.sh && source .venv/bin/activate
```

The [nada tool](https://docs.nillion.com/nada) was used to initiate a project inside of packages/nillion/next-project-programs. Create a new Nada program `tiny_secret_addition.py` in next-project-programs/src

```
cd next-project-programs
touch src/tiny_secret_addition.py
```

## Write a Nada program

<QuickstartNadaComplete/>

<QuickstartNada/>

## Compile the Nada program

Add the program path, name, and a prime size to your [nada-project.toml file](https://github.com/NillionNetwork/scaffold-nillion/blob/main/packages/nillion/next-project-programs/nada-project.toml)

```toml
[[programs]]
path = "src/tiny_secret_addition.py"
name = "tiny_secret_addition"
prime_size = 128
```

Run the build command from the next-project-programs folder to build all programs added to the nada-project.toml file, creating nada.bin files for each Nada program.

```
nada build
```

Copy the `tiny_secret_addition.nada.bin` program binary file into nextjs public programs folder for eventual use in your web app.

```
cp target/tiny_secret_addition.nada.bin ../../nextjs/public/programs
```

Copy the `tiny_secret_addition.py` program file into nextjs public programs folder for eventual use in your web app.

```
cp src/tiny_secret_addition.py ../../nextjs/public/programs
```

Now the NextJs app has the Nada program and binaries in the `nextjs/public/programs` folder, where the program can be stored using the JavaScript Client.

## Spin up the NextJs Web App

Open one more terminal to start your NextJS web app from the root directory, scaffold-nillion

```
yarn start
```

Open your app on: [http://localhost:3000](http://localhost:3000)

- Visit the Nillion Blind Computation page to try out the Blind Computation Demo: [http://localhost:3000/nillion-compute](http://localhost:3000/nillion-compute)
- Edit the code for this page in `packages/nextjs/app/nillion-compute/page.tsx` to set the programName to "tiny_secret_addition". Now the page will store and compute with the `tiny_secret_addition.py` program you wrote.
  ```ts
  const [programName] = useState<string>('tiny_secret_addition');
  ```

## Complete the TODOs in the Hello World page to hook up a working Nillion store and retrieve example

- Visit the Nillion Hello World page: [http://localhost:3000/nillion-hello-world](http://localhost:3000/nillion-hello-world)
- Notice that the buttons and functionality for this page are not hooked up yet.
- Edit the code for this page in `packages/nextjs/app/nillion-hello-world/page.tsx` to complete each of the 🎯 TODOs to get the page working
- Need a hint on how to get something working? Take a look at the completed `packages/nextjs/app/nillion-hello-world-complete/page.tsx` page

:::tip

Open the Nillion [JavaScript Client Reference](https://nillion.pub/nillion-js-reference/) doc in another tab to search for available classes while completing the 🎯 TODOs.

:::

## Keep exploring

You've successfully written your first single party Nada program, stored the program on the network, stored secrets on the network, and run compute against secrets. Keep exploring by

- reading about [Nillion concepts](/concepts) and the [Nada Language](nada-lang)
- learning how to interact with and manage programs, secrets, and permissions on the Nillion Network with [Nillion Client](/js-client)
- challenging yourself to create a page that solves the [millionaires problem](/multi-party-computation#classic-scenario-the-millionaires-problem)
