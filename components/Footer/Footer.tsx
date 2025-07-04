import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logo}>
          <Image src="/logo.svg" alt="Babatunde Odunewu" width={120} height={40} />
        </div>
        <nav className={styles.footerNav}>
          <a href="#services">Services</a>
          <a href="#works">Works</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">&quot;Say Hello&quot;</a>
        </nav>
        <div className={styles.socialLinks}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src="/instagram-icon.svg" alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image src="/twitter-icon.svg" alt="Twitter" width={24} height={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin-icon.svg" alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
            <Image src="/behance-icon.svg" alt="Behance" width={24} height={24} />
          </a>
        </div>
        <div className={styles.copyright}>
          © 2024. Olyve WordPress Theme by Tansh
        </div>
      </div>
      <button className={styles.backToTop} onClick={scrollToTop} aria-label="Back to top">
        <Image src="/arrow-up-icon.svg" alt="Back to Top" width={16} height={16} />
      </button>
    </footer>
  );
};

export default Footer;