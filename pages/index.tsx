import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollY = scrollContainerRef.current.scrollTop;
        const heroSection = document.querySelector(`.${styles.hero}`) as HTMLElement;
        const servicesSection = document.querySelector(`.${styles.services}`) as HTMLElement;

        if (heroSection) {
          heroSection.style.transform = `translateY(${scrollY * 0.5}px)`;
        }
        if (servicesSection) {
          servicesSection.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleBubbleMouseEnter = () => {
    setIsCursorVisible(true);
  };

  const handleBubbleMouseLeave = () => {
    setIsCursorVisible(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Olyve Schwarz - Branding Expert</title>
        <meta name="description" content="Award Winning Branding Expert" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div 
        ref={cursorRef} 
        className={styles.cursorAbout} 
        style={{ opacity: isCursorVisible ? 1 : 0 }}
      >
        Hire Me
      </div>

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

      <div className={styles.scrollContainer} ref={scrollContainerRef}>
        <div className={styles.parallaxGroup}>
          <div className={`${styles.parallaxLayer} ${styles.parallaxBase}`}>
            <section className={styles.hero}>
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
                <img src="/hero-image.png" alt="Olyve Schwarz" />
                <div className={styles.imageOverlay}>
                  <span 
                    className={styles.bubbleText} 
                    onMouseEnter={handleBubbleMouseEnter}
                    onMouseLeave={handleBubbleMouseLeave}
                  >
                    Brand Research
                  </span>
                  <span 
                    className={styles.bubbleText}
                    onMouseEnter={handleBubbleMouseEnter}
                    onMouseLeave={handleBubbleMouseLeave}
                  >
                    Visual Presentation
                  </span>
                  <span 
                    className={styles.bubbleText}
                    onMouseEnter={handleBubbleMouseEnter}
                    onMouseLeave={handleBubbleMouseLeave}
                  >
                    Creative Strategy
                  </span>
                  <span 
                    className={styles.bubbleText}
                    onMouseEnter={handleBubbleMouseEnter}
                    onMouseLeave={handleBubbleMouseLeave}
                  >
                    User Experience
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className={styles.parallaxGroup}>
          <div className={`${styles.parallaxLayer} ${styles.parallaxBase}`}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;