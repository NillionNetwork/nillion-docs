import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import IframeVideo from '@site/src/components/IframeVideo/index';
import LinkButton from '@site/src/components/LinkButton/index';
import SdkInstallation from './\_sdk-installation.mdx';
import ThemedImage from '@theme/ThemedImage';

# Blind App Quickstart

## What is a blind app?

A blind app runs blind computation on Nillion using one or more privacy-preserving [Nada](/nada-lang) programs. Nada programs compute on secret integers without ever seeing the underlying input values, making them ideal for sensitive data operations.

<div style={{ textAlign: 'center' }}>
  <ThemedImage
    alt="Nillion Quickstart Demo"
    sources={{
        light: '/img/nillion_quickstart_demo_light.png',
        dark: '/img/nillion_quickstart_demo_dark.png',
      }}
  />
  <p>This is an output for the [Create Nillion App](https://github.com/NillionNetwork/create-nillion-app) boilerplate</p>
</div>

## Start building blind apps on Nillion

:::info
This Blind App Quickstart is ideal for developers interested in creating frontends or fullstack web apps on Nillion. If you want to connect a backend to Nillion, [check out the Python Quickstart](/python-quickstart)
:::

Build your first blind application on Nillion. Follow the steps in this blind app quickstart to

1. [Install the Nillion SDK](/quickstart-install) via [create-nillion-app](https://github.com/NillionNetwork/create-nillion-app)
2. [Create a Nada project](/quickstart-nada) and write your first Nada program
3. [Build a blind app](/quickstart-blind-app) with the boilerplate repo from the CLI and run the local `nillion-devnet`.
4. [Deploy your blind app to the Nillion Testnet](/quickstart-testnet) so the world can try it
