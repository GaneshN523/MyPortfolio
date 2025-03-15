import React from 'react';
import styles from './Projects.module.css';
import intelligentsensebot from '../assets/Projects/intelligentsensebot.jfif'

// Sample projects data
// Sample projects data
const projectsData = [
    {
      id: 1,
      name: 'IntelligentSense Bot',
      image: intelligentsensebot,
      visitUrl: 'https://ganeshshubh.github.io/CollegeAssist/',
      codeUrl: 'https://huggingface.co/spaces/GaneshN523/Institute/tree/main',
    },
    {
      id: 2,
      name: 'Project 2',
      image: 'https://via.placeholder.com/400',
      visitUrl: 'https://GaneshN523.github.io/FirmManagement/',
      codeUrl: 'https://github.com/GaneshN523/FirmManagement/',
    },
    {
      id: 3,
      name: 'Project 3',
      image: 'https://via.placeholder.com/400',
      visitUrl: 'https://GaneshN523.github.io/prog-vi/',
      codeUrl: 'https://github.com/GaneshN523/prog-vi/',
    },
    {
      id: 4,
      name: 'Project 4',
      image: 'https://via.placeholder.com/400',
      visitUrl: 'https://GaneshN523.github.io/sql-vi/',
      codeUrl: 'https://github.com/GaneshN523/sql-vi/',
    },
    // Add more projects as needed...
  ];
  
  const Projects = () => {
    return (
      <div className={styles.projectsGrid}>
        {projectsData.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <img
                src={project.image}
                alt={project.name}
                className={styles.projectImage}
              />
              <div className={styles.overlay}>
                <div className={styles.buttonsContainer}>
                  <a
                    href={project.visitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button}
                  >
                    Visit
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button}
                  >
                    Code
                  </a>
                </div>
                <div className={styles.projectName}>{project.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Projects;