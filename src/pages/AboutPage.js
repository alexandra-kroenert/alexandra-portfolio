import React from "react";
import styles from './AboutPage.module.css';


function AboutPage() {
  const linkedInUrl = "https://www.linkedin.com/in/alexandrakroenert/";
  const gitHubUrl = "https://github.com/alexandra-kroenert";

    return (
    <div className={styles.pageText}>
    <h2>About</h2>
    <div className={styles.pageTextBox}>
    <p style={{whiteSpace: 'pre-wrap'}}>
    Hello, I'm Alex, a Fullstack Software Developer with a strong focus on creating web solutions that are as impactful as they are intuitive. 
    My background in international development and human rights is woven into the fabric of my work, 
    where I use technologies like JavaScript, React.js, Ruby, and AWS to build applications that aren't just about meeting requirements but also about making a difference.
    
    Based in Berlin, I work remotely for Vitala Global, combining technical expertise with a dedication to social change. 
    My approach to development is holistic – I believe in crafting digital experiences that are not only efficient and reliable but also socially conscious and community-oriented.
    I’m a devoted problem-solver and continually immerse myself in new technologies to elevate the quality and impact of my work. 
    When I'm not coding, I spent my time hanging out with my orange cat Louie, draw and paint analog and digital art, embroider, watch documentaries about space, aliens and dinosaurs and the age of dinosaurs - I'm also a feminist activist for human rights, reproductive justice and animal rights.
    Professionally, I'm all about using my technical skills to empower and connect people. I see every project as a new journey and every challenge as an opportunity to learn and contribute positively to the world.
    If you're looking for a developer with a commitment to excellence and a heart for meaningful projects, I'd love to chat about how we can work together to bring your vision to life.
    </p>
    <div className={styles.socialsContainer}>
        <p>Find me on:</p>
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <i className="fab fa-linkedin"></i>
        </a>
        <a href={gitHubUrl} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className={styles.bottomSpace}></div>
    </div>
    
    </div>)
  }

export default AboutPage;