import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  // Read-only contact details (no button)
  const contactDetails = [
    { label: 'Email', value: 'ganeshnalawade523@gmail.com' },
    { label: 'Phone', value: '+91 8806643429' },
    { label: 'Address', value: '301 Tarangan Near Nagarpanchayat, Shirala 415 408, Sangli, Maharashtra' },
  ];

  // Social media details (with Visit button)
  const socialMedia = [
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/ganesh-nalawade/' },
    { label: 'GitHub', link: 'https://github.com/ganeshn523' },
    // Add additional social media if needed
  ];

  return (
    <section className={styles.contact}>
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.listsContainer}>
        <div className={styles.listSection}>
          <h2 className={styles.sectionTitle}>Contact Information</h2>
          <ul className={styles.infoList}>
            {contactDetails.map((detail, index) => (
              <li key={index} className={styles.infoItem}>
                <span className={styles.label}>{detail.label}:</span>
                <span className={styles.value}>{detail.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.listSection}>
          <h2 className={styles.sectionTitle}>Social Media</h2>
          <ul className={styles.infoList}>
            {socialMedia.map((item, index) => (
              <li key={index} className={styles.infoItem}>
                <span className={styles.label}>{item.label}:</span>
                <button
                  className={styles.visitButton}
                  onClick={() => window.open(item.link, '_blank', 'noopener,noreferrer')}
                >
                  Visit
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
