import React, { useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

function Hero() {
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const cursorRef = useRef(null);

  const handleBubbleMouseEnter = () => {
    setIsCursorVisible(true);
  };

  const handleBubbleMouseLeave = () => {
    setIsCursorVisible(false);
  };

  const handleBubbleClick = () => {
    alert("Thank you for your interest! I'm available for hire. Let's discuss your project.".replace(/'/g, "'"));
  };

  return (
    <div className={styles.hero}>
      {/* Cursor element */}
      <div 
        ref={cursorRef}
        className={styles.cursorAbout}
        style={{ opacity: isCursorVisible ? 1 : 0 }}
      >
        Hire Me
      </div>
      
      {/* Hero content */}
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Bring your vision to ultimate reality</h1>
        <p className={styles.description}>
          Specialize in creating unique visual identities for digital products and believe that a stunning design starts with common values, open communication, and respect for your audience.
        </p>
        <div className={styles.cta}>
          <a 
            href="https://github.com/lazynerd-007" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.portfolioButton}
          >
            View Portfolio
          </a>
          <a href="mailto:Hello@babsfauwaz.com" className={styles.emailLink}>
            Hello@babsfauwaz.com
          </a>
        </div>
      </div>
      
      {/* Hero image */}
      <div className={styles.heroImage}>
        <Image 
          src="/hero-image.png" 
          alt="Babatunde Odunewu" 
          width={500}
          height={600}
          priority
          style={{ borderRadius: '10px', width: '100%', height: 'auto' }}
        />
        <div className={styles.imageOverlay}>
          {["Brand Research", "Visual Presentation", "Creative Strategy", "System Architecture"].map((text, index) => (
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
    </div>
  );
}

export default Hero; 