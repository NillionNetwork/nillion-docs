import styles from './styles.module.css';

export default function IframeVideo({ videoSrc }) {
  return (
    <div className={styles.container}>
      <iframe src={videoSrc} className={styles.iframe}></iframe>
    </div>
  );
}
