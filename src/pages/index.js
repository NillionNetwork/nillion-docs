import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Link from '@docusaurus/Link';
import LinkButton from '../components/LinkButton';

function HeroSection() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <h2 className={styles.heroSubtitle}>
          Humanity's first blind computer.
        </h2>
        <p className={styles.heroDescription}>
          Nillion is a secure computation network that decentralizes trust for
          high value data in the same way that blockchains decentralized
          transactions.
        </p>
        <div className={styles.getStartedButton}>
          <LinkButton
            text="Get Started"
            link="/blind-computer/learn/overview"
            small={true}
          />
        </div>
      </div>
      <div className={styles.heroImageContainer}>
        {/*<img*/}
        {/*  src="https://nillion.com/wp-content/themes/nillion/assets/images/index/web-summit.svg"*/}
        {/*  alt="Nillion Network Illustration"*/}
        {/*  className={styles.spinningImage}*/}
        {/*/>*/}
      </div>
    </header>
  );
}

function FeatureItem({ title, description, href, icon, badge }) {
  return (
    <Link to={href} className={styles.featureItem}>
      <div className={styles.featureIcon}>{icon}</div>
      {badge && (
        <span className={styles.featureBadge}>
          {/* aria-hidden: the dot is decoration signalling "live", and the badge text
              already carries the meaning for a screen reader. */}
          <span className={styles.featureBadgeDot} aria-hidden="true" />
          {badge}
        </span>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: 'Blacklight L1',
      description:
        'A network for conditional secrets: seal a payload to a committee of nodes and it stays encrypted until an on-chain condition is met.',
      icon: '🔐',
      href: './blacklight/l1/overview',
      badge: 'Testnet',
    },
    {
      title: 'Blacklight L2',
      description:
        'Blacklight is the verification layer of the Blind Computer. Run a node to verify TEE workloads, or have your own apps verified.',
      icon: '🌐',
      href: './blacklight/learn/overview',
    },
    {
      title: 'Blind Computer',
      description: 'Start building on Nillion with one of our developer SDKs.',
      icon: '💻',
      href: './blind-computer/learn/overview',
    },
    {
      title: 'Community',
      description:
        'Join the Nillion community to connect, collaborate, and contribute to the future of blind computation.',
      icon: '🤝',
      href: './community/community-and-support',
    },
  ];

  return (
    <section className={styles.features}>
      {features.map((props, idx) => (
        <FeatureItem key={idx} {...props} />
      ))}
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Nillion Docs"
      noFooter={true}
      wrapperClassName="homepage"
    >
      <main className={styles.main}>
        <HeroSection />
        <FeaturesSection />
      </main>
    </Layout>
  );
}
