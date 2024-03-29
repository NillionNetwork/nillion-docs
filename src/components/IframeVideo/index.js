import styles from './styles.module.css';

export default function IframeVideo({ videoSrc }) {
  return (
    <div className={styles.container}>
      <iframe
        src={videoSrc}
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
        className={styles.iframe}
      ></iframe>
    </div>
  );
}
