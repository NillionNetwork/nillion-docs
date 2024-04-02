import React from 'react';
import styles from './styles.module.css'; // Import CSS module for styling
import Link from '@docusaurus/Link';

const LinkButton = ({ text, link }) => {
  return (
    <Link to={link}>
      <button className={styles.customButton}>{text}</button>
    </Link>
  );
};

export default LinkButton;
