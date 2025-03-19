import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import Myimage from '../assets/Myimage.png';
import github from '../assets/github.png';
import hackerrank from '../assets/hackerrank.png';
import leetcode from '../assets/leetcode.png';
import huggingface from '../assets/huggingface.png';
import Projects from '../assets/Projects.webp';

const Home = () => {
  // ==== HERO SECTION LOGIC ====
  const skills = [
    'Python Software Developer',
    'Full-Stack Developer',
    'Cloud Computing Enthusiast',
    'REST API',
    'Networking',
    'C',
    'Data Structures',
  ];

  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    const currentSkill = skills[currentSkillIndex];
    if (typing) {
      if (displayedText.length < currentSkill.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentSkill.slice(0, displayedText.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => {
          setTyping(false);
        }, 500);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentSkill.slice(0, displayedText.length - 1));
        }, 100);
      } else {
        setTyping(true);
        setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, typing, currentSkillIndex, skills]);

  // ==== GRID SECTION LOGIC ====
  const sliderCards = [
    {
      id: 1,
      image: github,
      name: 'GitHub',
      link: 'https://github.com/ganeshn523',
    },
    {
      id: 2,
      image: hackerrank,
      name: 'HackerRank',
      link: 'https://www.hackerrank.com/ganeshnalawade51',
    },
    {
      id: 3,
      image: leetcode,
      name: 'LeetCode',
      link: 'https://leetcode.com/Ganesh_523',
    },
    {
      id: 4,
      image: huggingface,
      name: 'HuggingFace',
      link: 'https://huggingface.co/ganeshn523',
    },
    {
      id: 5,
      image: Projects, // No image: fallback to black background with name.
      name: 'Projects',
      link: '/MyPortfolio/#/projects',
    },
  ];

  return (
    <div className={styles.home}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroImageContainer}>
            <img src={Myimage} alt="My Portrait" className={styles.heroImage} />
          </div>
          <div className={styles.heroInfoContainer}>
            <h1 className={styles.name}>Ganesh Nalawade</h1>
            <h2 className={styles.education}>B.Tech in E & TC</h2>
            <h2 className={styles.education}>IT Enthusiast</h2>
            <div className={styles.typingEffect}>
              {displayedText}
              <span className={styles.cursor}>|</span>
            </div>
          </div>
        </div>
        <div className={styles.heroButtons}>
          <a
            href="https://www.linkedin.com/in/ganesh-nalawade/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroButton}
          >
            LinkedIn
          </a>
          <a
            href="https://GaneshN523.github.io/resumes/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroButton}
          >
            Resume
          </a>
        </div>
      </section>

      {/* GRID SECTION */}
      <h2 className={styles.subtitle}>My Work</h2>
      <h3 className={styles.subtitle2}>
        Click on the cards below to open up the mentioned section.
      </h3>
      <section className={styles.sliderSection}>
        <div className={styles.sliderContainer}>
          <div className={styles.gridWrapper}>
            {sliderCards.map((card, index) => (
              <a
                key={index}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
                style={{
                  backgroundImage: card.image ? `url(${card.image})` : 'none',
                  backgroundColor: card.image ? 'transparent' : 'black',
                }}
              >
                <div className={styles.cardOverlay}>{card.name}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
