import React from 'react';
import styles from './About.module.css';
import Myimage from '../assets/Myimage.png'; // Replace with your actual image

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src={Myimage}
            alt="About Me"
            className={styles.aboutImage}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.description}>
            I am Ganesh Nalawade, a passionate IT Enthusiast with a background in Electronics & Telecommunication and a deep interest in Python Development, Cloud Computing, and modern programming technologies. I enjoy solving complex problems and crafting innovative solutions.
          </p>
          <p className={styles.description}>
            With expertise in Python, REST APIs, networking, and data structures, I continuously seek to learn and grow while contributing to impactful projects. I believe that technology has the power to transform lives and drive progress.
          </p>
          <p className={styles.description}>
            When I'm not coding, you'll find me exploring the latest tech trends, engaging with the developer community, or working on open-source projects. Let’s connect and create something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
