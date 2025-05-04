import React from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoCircle}>O</span>
        Babatunde Odunewu
      </div>
      <div className={styles.navLinks}>
        <a href="#services">Services</a>
        <a href="#works">Works</a>
        <a href="#about">About</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">&quot;Say Hello&quot;</a>
        <a href="/resume/Babatunde_Odunewu_-_Product_Owner__Agile_Project_Management__Team_Leadership_PM.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
      <button className={styles.hireButton}>Hire Me</button>
    </nav>
  );
};

export default Navbar;