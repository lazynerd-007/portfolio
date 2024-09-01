import React from 'react';
import styles from './AboutMe.module.css';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className={styles.aboutMe}>
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.content}>
        <div className={styles.profileImage}>
          <img src="/profile-image.jpg" alt="Olyve Schwarz" />
        </div>
        <div className={styles.info}>
          <h3>Hi 👋 I am Olyve Schwarz</h3>
          <p>A product designer with a knack for turning problems and opportunities into clean design solutions.</p>
          <p>As a product designer, I specialize in creating unique visual identities for digital products. I believe that a stunning design starts with common values, open communication, and respect for your audience.</p>
        </div>
        <div className={styles.experience}>
          <h4>Experience</h4>
          <ul>
            <li>
              <span className={styles.role}>Full Time Freelancing</span>
              <span className={styles.company}>Self</span>
              <span className={styles.period}>2019 - Present</span>
            </li>
            <li>
              <span className={styles.role}>Senior Product Designer</span>
              <span className={styles.company}>Qonto</span>
              <span className={styles.period}>2020 - 2022</span>
            </li>
            <li>
              <span className={styles.role}>Creative Head</span>
              <span className={styles.company}>Qonto Industries</span>
              <span className={styles.period}>2019 - 2021</span>
            </li>
            <li>
              <span className={styles.role}>Design Intern</span>
              <span className={styles.company}>Qonto Works</span>
              <span className={styles.period}>2018 - 2019</span>
            </li>
          </ul>
        </div>
        <div className={styles.education}>
          <h4>Education</h4>
          <ul>
            <li>
              <span className={styles.degree}>Master in Design</span>
              <span className={styles.school}>Cranfield University, UK</span>
              <span className={styles.period}>2019 - 2021</span>
            </li>
            <li>
              <span className={styles.degree}>MSc in Innovation Design</span>
              <span className={styles.school}>QMUL, London, UK</span>
              <span className={styles.period>2018 - 2019</span>
            </li>
            <li>
              <span className={styles.degree}>BSc in IT</span>
              <span className={styles.school}>QMUL, London, UK</span>
              <span className={styles.period}>2015 - 2018</span>
            </li>
          </ul>
        </div>
        <div className={styles.skills}>
          <h4>Skills</h4>
          <ul>
            <li>
              <img src="/figma-icon.svg" alt="Figma" />
              <span>Figma</span>
            </li>
            <li>
              <img src="/sketch-icon.svg" alt="Sketch" />
              <span>Sketch</span>
            </li>
            <li>
              <img src="/webflow-icon.svg" alt="Webflow" />
              <span>Webflow</span>
            </li>
            <li>
              <img src="/illustrator-icon.svg" alt="Illustrator" />
              <span>Illustrator</span>
            </li>
            <li>
              <img src="/framer-icon.svg" alt="Framer" />
              <span>Framer</span>
            </li>
          </ul>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>12</span>
            <span className={styles.statLabel}>Years of Experience</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>3K</span>
            <span className={styles.statLabel}>Projects Completed</span>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.viewResume}>View Resume</button>
        <button className={styles.getInTouch}>Get in Touch</button>
      </div>
    </section>
  );
};

export default AboutMe;