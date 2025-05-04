import React from 'react';
import styles from './Marquee.module.css';

const Marquee: React.FC = () => {
  const content = "Let&apos;s work together ✌️ ";
  const repeatedContent = content.repeat(10); // Repeat the content to ensure continuous flow

  return (
    <section className={styles.marqueeContainer}>
      <div className={styles.marquee}>
        <span>{repeatedContent}</span>
      </div>
      <div className={styles.marquee} aria-hidden="true">
        <span>{repeatedContent}</span>
      </div>
    </section>
  );
};

export default Marquee;