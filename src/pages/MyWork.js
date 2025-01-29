import React from 'react';
import styles from './MyWork.module.css'; // Ensure you create a corresponding CSS module file

function MyWork() {
    const appLinkVE = "https://app.ayacontigo.org";
    const appLinkUS = "https://app.ayacontigo.com";

  return (
    <div className={styles.workContainer}>
      <h1 className={styles.title}>My Work</h1>
      <p className={styles.description}>
        As the Lead Software Engineer and Technology Officer at Vitala Global, my job is to develop and maintain our 
        digital abortion companion 'Aya Contigo', 
        an app designed to assist and empower individuals going through the process of an abortion. The app is available in most Latin American countries, the Carribean and in the US, where abortion is illegal.
      </p>
      <p className={styles.linkDescription}>Check out the app here:</p>
      <p className={styles.appLink}>
         <a href={appLinkVE} target="_blank" rel="noopener noreferrer">Aya Contigo LATAM</a>
      </p>
      <p className={styles.appLink}>
       <a href={appLinkUS} target="_blank" rel="noopener noreferrer">Aya Contigo US</a>
      </p>
      {/* Add more content about your role, technologies used, achievements, etc. */}
    </div>
  );
}

export default MyWork;
