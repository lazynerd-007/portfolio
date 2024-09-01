import React from 'react';
import styles from './Services.module.css';

const Services: React.FC = () => {
  return (
    <section id="services" className={styles.services}>
      <h2 className={styles.sectionTitle}>Services</h2>
      <div className={styles.serviceGrid}>
        <div className={styles.serviceItem}>
          <span className={styles.serviceNumber}>01</span>
          <h3>Digital Branding</h3>
          <p>Blend of strategic thinking and creative flair to craft a digital identity that resonates and captivates.</p>
          <span className={styles.arrow}>→</span>
        </div>
        <div className={styles.serviceItem}>
          <span className={styles.serviceNumber}>02</span>
          <h3>Visual Design</h3>
          <p>Blend of artistic intuition with strategic insight to craft a visual identity.</p>
          <span className={styles.arrow}>→</span>
        </div>
        <div className={styles.serviceItem}>
          <span className={styles.serviceNumber}>03</span>
          <h3>UX Research</h3>
          <p>Blend of functionality with aesthetics to create delightful experience.</p>
          <span className={styles.arrow}>→</span>
        </div>
        <div className={styles.serviceItem}>
          <span className={styles.serviceNumber}>04</span>
          <h3>Art Direction</h3>
          <p>Blend of strategic thinking and artistic finesse to craft a visual identity that goes beyond aesthetics.</p>
          <span className={styles.arrow}>→</span>
        </div>
      </div>
    </section>
  );
};

export default Services;