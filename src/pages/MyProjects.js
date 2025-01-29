// MyProjects.js

import React from 'react';
import styles from './MyProjects.module.css';

function MyProjects() {
  const projects = [
    {
      title: 'Endocare Endometriosis Tracker',
      description: 'A symptom tracker tailored for individuals managing endometriosis, providing tracking and insights to improve their daily lives.',
      projecctType: 'Personal Project - Very much WIP but close to my heart',
      /* imageUrl: '/path-to-endocare-screenshot.png', // Replace with your screenshot path */
      githubUrl: 'https://github.com/alexandra-kroenert/endo-care-app', // Replace with your GitHub link
      projectUrl: 'https://endocare-app.netlify.app/'
    },
    {
      title: 'ImHome App',
      description: 'An app designed to enhance personal safety by allowing users to tag a friend who gets notified when they reach their destination safely.',
      projecctType: 'Group Project - Not currently hosted but you can check out our repo',
      /* imageUrl: 'https://github.com/Ben-Nyaoro/Im_Home', // Replace with your screenshot path */
      githubUrl: 'https://github.com/Ben-Nyaoro/Im_Home', // Replace with your GitHub link
    },
    {
      title: 'Everbody Collective',
      description: 'A website for teenagers and adults to find resources for diverse and inclusive sexual education',
      projecctType: 'Personal Project - currently building this resource and very excited about it',
      /* imageUrl: 'https://github.com/Ben-Nyaoro/Im_Home', // Replace with your screenshot path */
      /* githubUrl: 'https://github.com/Ben-Nyaoro/Im_Home', */ // Replace with your GitHub link
    }

    // Add more projects as needed
  ];

  return (
    <div className={styles.projectsContainer}>
      {projects.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          <h2>{project.title}</h2>
          <p className={styles.projectType}>{project.projecctType}</p>
         {/*  <img src={project.imageUrl} alt={project.title} className={styles.screenshot} /> */}
          <p>{project.description}</p>
          {project.projectUrl && (
            <a href={project.projectUrl} className={styles.projectLink} target="_blank" rel="noopener noreferrer">View Project Website</a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} className={styles.githubLink} target="_blank" rel="noopener noreferrer">View Code on GitHub</a>
          )}
        </div>
      ))}
    </div>
  );
}

export default MyProjects;
