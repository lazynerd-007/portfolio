import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h2>It&apos;s time to talk about your project.</h2>
          <p>Let&apos;s embark on creative journey together by shaping a visual narrative of your brand in the crowded digital space.</p>
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <Image src="/phone-icon.svg" alt="Phone" width={20} height={20} />
              <span>+01 234 567 8902</span>
            </div>
            <div className={styles.contactItem}>
              <Image src="/email-icon.svg" alt="Email" width={20} height={20} />
              <span>sayhello@olyveschwarz.me</span>
            </div>
            <div className={styles.contactItem}>
              <Image src="/address-icon.svg" alt="Address" width={20} height={20} />
              <span>Borough 47, Aveton Gifford,<br />Devon, UK, EX4 1QU</span>
            </div>
          </div>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name">John Doe</label>
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">hello@example.com</label>
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <label htmlFor="subject">Subject</label>
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label htmlFor="message">Message in brief...</label>
            </div>
            <button type="submit" className={styles.sendMessage}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;