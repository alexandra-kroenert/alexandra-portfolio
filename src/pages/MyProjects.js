// MyProjects.js

import React from 'react';
import styles from './MyProjects.module.css';

function MyProjects() {
  const projects = [
    {
      title: 'Endocare Endometriosis Tracker',
      description: 'A symptom tracker tailored for individuals managing endometriosis, providing tracking and insights to improve their daily lives.',
      /* imageUrl: '/path-to-endocare-screenshot.png', // Replace with your screenshot path */
      githubUrl: 'https://github.com/alexandra-kroenert/endocare-app', // Replace with your GitHub link
    },
    {
      title: 'IamHome Safety App',
      description: 'An app designed to enhance personal safety by allowing users to tag a friend who gets notified when they reach their destination safely.',
      /* imageUrl: 'https://github.com/Ben-Nyaoro/Im_Home', // Replace with your screenshot path */
      githubUrl: 'https://github.com/Ben-Nyaoro/Im_Home', // Replace with your GitHub link
    }
    // Add more projects as needed
  ];

  return (
    <div className={styles.projectsContainer}>
      {projects.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          <h2>{project.title}</h2>
         {/*  <img src={project.imageUrl} alt={project.title} className={styles.screenshot} /> */}
          <p>{project.description}</p>
          <a href={project.githubUrl} className={styles.githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      ))}
    </div>
  );
}

export default MyProjects;
