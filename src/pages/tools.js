import React from 'react';
import Layout from '@theme/Layout';
import indexStyles from './index.module.css';
import styles from './tools.module.css';
import ToolFeatureItem from '../components/ToolFeatureItem';

export default function Tools() {
  const tools = [
    {
      title: 'NIL Faucet',
      description: 'Get NIL (nilChain Testnet tokens) to start building apps.',
      icon: '💧',
      href: 'https://faucet.nillion.com',
      external: true,
      guideHref: '/community/guides/testnet-faucet',
      guideExternal: false,
    },
    {
      title: 'nilPay Subscription Platform',
      description:
        'Pay NIL to get a Nillion API Key and subscribe to nilDB (Private Storage) or nilAI (Private LLMs) services.',
      icon: '🔑',
      href: 'https://nilpay.vercel.app/',
      external: true,
      guideHref: '/build/network-api-access',
      guideExternal: false,
    },
    {
      title: 'Collection Explorer',
      description:
        'A no-code tool for creating and managing Nillion Private Storage schemas, collections, and records.',
      icon: '📦',
      href: 'https://collection-explorer.nillion.com',
      external: true,
      guideHref: '/build/private-storage/collection-explorer',
      guideExternal: false,
    },
    {
      title: 'Network Status Page',
      description:
        'Check the status of testnet and mainnet nodes in the Nillion Network.',
      icon: '⚡',
      href: 'https://status.nillion.com',
      external: true,
    },
    {
      title: 'NUC Viewer',
      description: 'Decode and inspect Nillion NUCs.',
      icon: '🔍',
      href: 'https://nillion.tools/nuc-viewer',
      external: true,
    },
    {
      title: 'Blindfold Library Demo',
      description:
        'A demo page to encrypt and decrypt data using Blindfold library operations (store, match, and sum).',
      icon: '🙈',
      href: 'https://blindfold.nillion.com',
      external: true,
      guideHref: '/build/private-storage/blindfold',
      guideExternal: false,
    },
  ];

  return (
    <Layout
      title="Tools"
      description="Developer tools for building privacy-preserving apps on Nillion."
      wrapperClassName="toolsPage"
    >
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>Nillion Developer Tools</h1>
        </div>
        <section className={indexStyles.features}>
          {tools.map((props, idx) => (
            <ToolFeatureItem key={idx} {...props} />
          ))}
        </section>
      </main>
    </Layout>
  );
}
