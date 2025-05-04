import React from 'react';
import styles from './AboutMe.module.css';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className={styles.aboutMe}>
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.content}>
        <div className={styles.profileImageContainer}>
          <img src="/profile-image.jpg" alt="Babatunde Odunewu" className={styles.profileImage} />
        </div>
        <div className={styles.infoContainer}>
          <h3>Hi 👋 I am Babatunde Odunewu</h3>
          <p>A product designer with a knack for turning problems and opportunities into clean design solutions.</p>
          <p>As a product designer, I specialize in creating unique visual identities for digital products. I believe that a stunning design starts with common values, open communication, and respect for your audience.</p>
        </div>
        <div className={styles.experienceEducationContainer}>
          <div className={styles.experienceContainer}>
            <h4>Experience</h4>
            <ul>
              {[
                { role: 'Full Time Freelancing', company: 'Self', period: '2019 - Present', image: '/self-icon.png' },
                { role: 'Senior Product Designer', company: 'Qonto', period: '2020 - 2022', image: '/qonto-icon.png' },
                { role: 'Creative Head', company: 'Qonto Industries', period: '2019 - 2021', image: '/qonto-industries-icon.png' },
                { role: 'Design Intern', company: 'Qonto Works', period: '2018 - 2019', image: '/qonto-works-icon.png' },
              ].map((job, index) => (
                <li key={index}>
                  <img src={job.image} alt={job.company} className={styles.companyIcon} />
                  <div>
                    <span className={styles.role}>{job.role}</span>
                    <span className={styles.company}>{job.company}</span>
                    <span className={styles.period}>{job.period}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.educationContainer}>
            <h4>Education</h4>
            <ul>
              {[
                { degree: 'Master in Design', school: 'Cranfield University, UK', period: '2019 - 2021', image: '/cranfield-icon.png' },
                { degree: 'MSc in Innovation Design', school: 'QMUL, London, UK', period: '2018 - 2019', image: '/qmul-icon.png' },
                { degree: 'BSc in IT', school: 'QMUL, London, UK', period: '2015 - 2018', image: '/qmul-icon.png' },
              ].map((edu, index) => (
                <li key={index}>
                  <img src={edu.image} alt={edu.school} className={styles.schoolIcon} />
                  <div>
                    <span className={styles.degree}>{edu.degree}</span>
                    <span className={styles.school}>{edu.school}</span>
                    <span className={styles.period}>{edu.period}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.skillsContainer}>
          <h4>Skills</h4>
          <ul>
            {[
              { name: 'Figma', icon: '/figma-icon.svg' },
              { name: 'Sketch', icon: '/sketch-icon.svg' },
              { name: 'Webflow', icon: '/webflow-icon.svg' },
              { name: 'Illustrator', icon: '/illustrator-icon.svg' },
              { name: 'Framer', icon: '/framer-icon.svg' }
            ].map((skill, index) => (
              <li key={index}>
                <div className={styles.skillIconContainer}>
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.statsContainer}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>8</span>
            <span className={styles.statLabel}>Years of Experience</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>15</span>
            <span className={styles.statLabel}>Projects Completed</span>
          </div>
        </div>
      </div>
      <div className={styles.actions}>
        <a href="/resume/Babatunde_Odunewu_-_Product_Owner__Agile_Project_Management__Team_Leadership_PM.pdf" target="_blank" rel="noopener noreferrer" className={styles.viewResume}>View Resume</a>
        <button className={styles.getInTouch}>
          Get in Touch
          <img src="/message-icon.svg" alt="Message" className={styles.messageIcon} />
        </button>
      </div>
    </section>
  );
};

export default AboutMe;