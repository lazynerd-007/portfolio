import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";

interface WorkItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const workItems: WorkItem[] = [
  { id: 1, title: "B&O", description: "Marketing site design and build", image: "/airrupies.png", category: "Branding" },
  { id: 2, title: "Cozmetic", description: "Marketing site design and build", image: "/tetris-game.png", category: "Product" },
  { id: 3, title: "Xendou", description: "Marketing site design and build", image: "/background.png", category: "UI/UX" },
  { id: 4, title: "Blvck", description: "Marketing site design and build", image: "/ui-animations.png", category: "Branding" },
];

const Home: NextPage = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollY = scrollContainerRef.current.scrollTop;
        const heroSection = document.querySelector(`.${styles.hero}`) as HTMLElement;

        if (heroSection) {
          const heroHeight = heroSection.offsetHeight;
          const parallaxEffect = Math.max(0, Math.min(scrollY * 0.5, heroHeight * 0.5));
          heroSection.style.transform = `translateY(${parallaxEffect}px)`;
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

  const handleBubbleClick = () => {
    alert("Thank you for your interest! I'm available for hire. Let's discuss your project.");
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  const filteredWorks = activeFilter === "All" 
    ? workItems 
    : workItems.filter(item => item.category === activeFilter);

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

        <section id="works" className={styles.works}>
          <h2 className={styles.sectionTitle}>Works</h2>
          <div className={styles.workFilter}>
            {["All", "Branding", "Product", "UI/UX"].map((filter) => (
              <button
                key={filter}
                className={`${styles.filterButton} ${activeFilter === filter ? styles.filterActive : ''}`}
                onClick={() => handleFilterClick(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className={styles.workGrid}>
            {filteredWorks.map((item) => (
              <div key={item.id} className={styles.workItem}>
                <div className={styles.workItemInner}>
                  <img src={item.image} alt={item.title} />
                  <div className={styles.workItemContent}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button className={styles.expandButton}>↗</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;