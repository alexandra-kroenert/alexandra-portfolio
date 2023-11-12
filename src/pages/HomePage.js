import React from 'react';
import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';

import AboutMe from '../Images/AboutMe.svg';
import  MyWork  from '../Images/MyWork.svg';
import  TechStack  from '../Images/TechStack.svg'; 
import  Blog  from '../Images/Blog.svg';
import  MyProjects  from '../Images/MyProjects.svg';
import  News  from '../Images/News.svg';
import  Contact  from '../Images/Contact.svg';


const HomePage = () => {
  return (
    <div className={styles.gridContainer}>
      <Link to="/about">
        <img
            src={AboutMe}
            alt="About Me"
            className={styles.largeImage}
        />
      </Link>
      <div className={styles.smallImages}>
        <Link to="/my-work">
        <img
            src={MyWork}
            alt="My Work"
            className={styles.smallImage}
        />
        </Link>
        {/* Repeat for each of the remaining images */}
        <Link to="/skills">
        <img
            src={TechStack}
            alt="Tech Stack"
            className={styles.smallImage}
        />
        </Link>
        <Link to="/blog">
          <img
            src={Blog}
            alt="Blog"
            className={styles.smallImage}
          />
        </Link>
        <Link to="/projects">
          <img
            src={MyProjects}
            alt="My Projects"
            className={styles.smallImage}
          />
        </Link>
        <Link to="/news">
          <img
            src={News}
            alt="News"
            className={styles.smallImage}
          />
        </Link>
        <Link to="/contact">
          <img
            src={Contact}
            alt="Contact"
            className={styles.smallImage}
          />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
