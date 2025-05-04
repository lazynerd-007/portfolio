import React, { useRef, useState } from 'react';
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

  return React.createElement('div', { className: styles.hero }, [
    // Cursor element
    React.createElement('div', { 
      key: 'cursor',
      ref: cursorRef,
      className: styles.cursorAbout,
      style: { opacity: isCursorVisible ? 1 : 0 }
    }, 'Hire Me'),
    
    // Hero content
    React.createElement('div', { key: 'content', className: styles.heroContent }, [
      React.createElement('span', { key: 'tagline', className: styles.tagline }, '✨ Award Winning Branding Expert'),
      React.createElement('h1', { key: 'title', className: styles.title }, 'Bring your vision to ultimate reality'),
      React.createElement('p', { key: 'desc', className: styles.description }, 
        'Specialize in creating unique visual identities for digital products and believe that a stunning design starts with common values, open communication, and respect for your audience.'
      ),
      React.createElement('div', { key: 'cta', className: styles.cta }, [
        React.createElement('button', { key: 'btn', className: styles.portfolioButton }, 'View Portfolio'),
        React.createElement('a', { key: 'email', href: 'mailto:Hello@olyve.me', className: styles.emailLink }, 'Hello@olyve.me')
      ])
    ]),
    
    // Hero image
    React.createElement('div', { key: 'image', className: styles.heroImage }, [
      React.createElement('img', { key: 'img', src: '/hero-image.png', alt: 'Babatunde Odunewu' }),
      React.createElement('div', { key: 'overlay', className: styles.imageOverlay }, 
        ["Brand Research", "Visual Presentation", "Creative Strategy", "User Experience"].map((text, index) => 
          React.createElement('span', {
            key: index,
            className: styles.bubbleText,
            onMouseEnter: handleBubbleMouseEnter,
            onMouseLeave: handleBubbleMouseLeave,
            onClick: handleBubbleClick
          }, text)
        )
      )
    ])
  ]);
}

export default Hero; 