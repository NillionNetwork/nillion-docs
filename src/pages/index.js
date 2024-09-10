import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import Link from "@docusaurus/Link";
import LinkButton from "../components/LinkButton";

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
        <LinkButton text="Get Started" link="/quickstart" small={true} />
      </div>
      <div className={styles.heroImageContainer}>
        <img
          src="https://nillion.com/wp-content/themes/nillion/assets/images/index/web-summit.svg"
          alt="Nillion Network Illustration"
          className={styles.spinningImage}
        />
      </div>
    </header>
  );
}

function FeatureItem({ title, description, href, icon }) {
  return (
    <Link to={href} className={styles.featureItem}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "Learn",
      description:
        "Nillion is a secure computation network that decentralizes trust for high value data in the same way that blockchains decentralized transactions.",
      icon: "🎓",
      href: "./what-is-nillion",
    },
    {
      title: "Build",
      description:
        "Start building on Nillion with one of our developer quickstart guides. Create fullstack Python and Javscript applications with Nada.",
      icon: "👷",
      href: "./start-building",
    },
    {
      title: "Community",
      description:
        "Join the Nillion community to connect, collaborate, and contribute to the future of blind computation.",
      icon: "🌐",
      href: "./community-and-support",
    },
  ];

  return (
    <section className={styles.features}>
      {features.map((props, idx) => (
        <FeatureItem {...props} />
      ))}
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Nillion Builder Docs - Humanity's first blind computer"
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
