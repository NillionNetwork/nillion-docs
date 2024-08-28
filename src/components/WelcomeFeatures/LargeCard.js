import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const LargeCard = ({ href, name, icon, description }) => {
  return (
    <Link to={href} className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.iconWrapper}>
          <img src={icon} alt={`${name} icon`} className={styles.icon} />
        </div>
        <div className={styles.textContent}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default LargeCard;
