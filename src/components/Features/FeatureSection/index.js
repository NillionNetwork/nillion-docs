import styles from './index.module.css';
import Link from '@docusaurus/Link';
import { QuickStartFeatures } from '@site/src/utils/FeatureCards';

function FeatureItem({ title, description, href, icon, disabled }) {
  if (disabled) {
    return (
      <div className={styles.featureItem}>
        <div className={styles.featureIcon}>{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  return (
    <Link to={href} className={styles.featureItem}>
      <div className={styles.featureIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  );
}

export default function FeatureSection({ data }) {
  return (
    <section className={styles.features}>
      {data.map((props, idx) => (
        <FeatureItem key={idx} {...props} />
      ))}
    </section>
  );
}
