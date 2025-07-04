import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoCircle}>O</span>
        <span className={styles.logoText}>Babatunde Odunewu</span>
      </div>
      
      {/* Desktop Navigation */}
      <div className={styles.navLinks}>
        <a href="#services">Services</a>
        <a href="#works">Works</a>
        <a href="#about">About</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">&quot;Say Hello&quot;</a>
        <a href="/resume/Babatunde_Odunewu_-_Product_Owner__Agile_Project_Management__Team_Leadership_PM.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
      
      <button className={styles.hireButton}>Hire Me</button>
      
      {/* Mobile Menu Toggle */}
      <button 
        className={styles.mobileMenuToggle}
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuContent}>
          <a href="#services" onClick={closeMobileMenu}>Services</a>
          <a href="#works" onClick={closeMobileMenu}>Works</a>
          <a href="#about" onClick={closeMobileMenu}>About</a>
          <a href="#testimonials" onClick={closeMobileMenu}>Testimonials</a>
          <a href="#contact" onClick={closeMobileMenu}>&quot;Say Hello&quot;</a>
          <a href="/resume/Babatunde_Odunewu_-_Product_Owner__Agile_Project_Management__Team_Leadership_PM.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>Resume</a>
          <button className={styles.mobileHireButton} onClick={closeMobileMenu}>Hire Me</button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay} onClick={closeMobileMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;