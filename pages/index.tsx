import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Olyve Schwarz - Branding Expert</title>
        <meta name="description" content="Award Winning Branding Expert" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

      <main>
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
            <img src="/hero-image.jpg" alt="Olyve Schwarz" />
            <div className={styles.imageOverlay}>
              <span>Brand Research</span>
              <span>Visual Presentation</span>
            </div>
          </div>
        </section>

<section id="services" className={styles.services}>
          <h2 className={styles.sectionTitle}>Services</h2>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceItem}>
              <span className={styles.serviceNumber}>01</span>
              <h3>Digital Branding</h3>
              <p>Blend of strategic thinking and creative flair to craft a digital identity that resonates and captivates.</p>
              <span className={styles.arrow}>↗</span>
            </div>
            <div className={styles.serviceItem}>
              <span className={styles.serviceNumber}>02</span>
              <h3>Visual Design</h3>
              <p>Blend of artistic intuition with strategic insight to craft a visual identity.</p>
              <span className={styles.arrow}>↗</span>
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
              <span className={styles.arrow}>↗</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;