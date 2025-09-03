import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import indexStyles from '../../pages/index.module.css';

export default function ToolFeatureItem({
  title,
  description,
  href,
  icon,
  external,
  guideHref,
  guideExternal,
}) {
  const hasGuide = guideHref !== undefined;

  return (
    <div className={`${indexStyles.featureItem} ${styles.toolFeatureItem}`}>
      <div className={`${indexStyles.featureIcon} ${styles.toolIcon}`}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.toolLinks}>
        {external ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.toolLink}
          >
            Open Tool <span className={styles.linkIcon}>↗</span>
          </a>
        ) : (
          <Link to={href} className={styles.toolLink}>
            Open Tool
          </Link>
        )}
        {hasGuide &&
          (guideExternal ? (
            <a
              href={guideHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.guideLink}
            >
              View Guide <span className={styles.linkIcon}>↗</span>
            </a>
          ) : (
            <Link to={guideHref} className={styles.guideLink}>
              View Guide
            </Link>
          ))}
      </div>
    </div>
  );
}