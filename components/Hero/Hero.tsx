import React, { useRef, useState } from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  const handleBubbleMouseEnter = () => {
    setIsCursorVisible(true);
  };

  const handleBubbleMouseLeave = () => {
    setIsCursorVisible(false);
  };

  const handleBubbleClick = () => {
    alert("Thank you for your interest! I'm available for hire. Let's discuss your project.");
  };

  return (
    <section className={styles.hero}>
      <div 
        ref={cursorRef} 
        className={styles.cursorAbout} 
        style={{ opacity: isCursorVisible ? 1 : 0 }}
      >
        Hire Me
      </div>
      <div className={styles.heroContent}>
        <span className={styles.tagline}>✨ Award Winning Branding Expert</span>
        <h1 className={styles.title}>
          Bring your vision to<br />ultimate reality
        </h1>
        <p className={styles.description}>
          Specialize in creating unique visual identities for digital products and
          believe that a stunning design starts with common values, open
          communication, and respect for your audience.
        </p>
        <div className={styles.cta}>
          <button className={styles.portfolioButton}>View Portfolio</button>
          <a href="mailto:Hello@olyve.me" className={styles.emailLink}>Hello@olyve.me</a>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src="/hero-image.jpg" alt="Olyve Schwarz" />
        <div className={styles.imageOverlay}>
          {["Brand Research", "Visual Presentation", "Creative Strategy", "User Experience"].map((text, index) => (
            <span 
              key={index}
              className={styles.bubbleText} 
              onMouseEnter={handleBubbleMouseEnter}
              onMouseLeave={handleBubbleMouseLeave}
              onClick={handleBubbleClick}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;