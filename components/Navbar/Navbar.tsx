import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoCircle}>O</span>
        Olyve Schwarz
      </div>
      <div className={styles.navLinks}>
        <a href="#services">Services</a>
        <a href="#works">Works</a>
        <a href="#about">About</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">"Say Hello"</a>
      </div>
      <button className={styles.hireButton}>Hire Me</button>
    </nav>
  );
};

export default Navbar;