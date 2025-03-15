import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.companyInfo}>
          <h2 className={styles.companyName}>Ganesh Nalawade</h2>
          <p className={styles.companyDesc}>
            Paving the way in innovative tech solutions.
          </p>
        </div>
        <div className={styles.footerLinks}>
          <a href="/about" className={styles.footerLink}>
            About
          </a>
          <a href="/contact" className={styles.footerLink}>
            Contact
          </a>

        </div>
        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/ganesh-nalawade/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ganeshn523"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            GitHub
          </a>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.copyRight}>
          © {new Date().getFullYear()} Ganesh Nalawade. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
