import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="Olyve Schwarz" />
        </div>
        <nav className={styles.footerNav}>
          <a href="#services">Services</a>
          <a href="#works">Works</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">"Say Hello"</a>
        </nav>
        <div className={styles.socialLinks}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/instagram-icon.svg" alt="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/twitter-icon.svg" alt="Twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/linkedin-icon.svg" alt="LinkedIn" />
          </a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
            <img src="/behance-icon.svg" alt="Behance" />
          </a>
        </div>
        <div className={styles.copyright}>
          © 2024. Olyve WordPress Theme by Tansh
        </div>
      </div>
      <button className={styles.backToTop} onClick={scrollToTop} aria-label="Back to top">
        <img src="/arrow-up-icon.svg" alt="Back to Top" />
      </button>
    </footer>
  );
};

export default Footer;