import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function CTABanner({
  question,
  instruction,
  buttonText,
  buttonLink,
  external = true,
  event,
}) {
  const ButtonComponent = external ? 'a' : Link;
  const buttonProps = external
    ? { href: buttonLink, target: '_blank', rel: 'noopener noreferrer' }
    : { to: buttonLink };

  if (event) {
    buttonProps['data-umami-event'] = event;
  }

  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.infoSection}>
          <div className={styles.infoIcon}>i</div>
          <div className={styles.textContent}>
            <h3 className={styles.question}>{question}</h3>
            <p className={styles.instruction}>{instruction}</p>
          </div>
        </div>
        <ButtonComponent className={styles.ctaButton} {...buttonProps}>
          {buttonText}
          <svg
            className={styles.arrowIcon}
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
          >
            <path
              d='M4 12L12 4M12 4H4M12 4V12'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </ButtonComponent>
      </div>
    </div>
  );
}
