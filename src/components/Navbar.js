import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

// Import your SVG files
import HomeIcon from '../Images/Home.svg';
import AboutIcon from '../Images/About.svg';
import TechStackIcon from '../Images/TechStack.svg';
import WorkIcon from '../Images/MyWork.svg';
import ContactIcon from '../Images/Contact.svg';
import NewsIcon from '../Images/News.svg';
import ProjectsIcon from '../Images/MyProjects.svg';
import BlogIcon from '../Images/Blog.svg';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to="/"><img src={HomeIcon} alt="Home" className={styles.navIcon} /></Link>
            <Link to="/about"><img src={AboutIcon} alt="About" className={styles.navIcon} /></Link>
            <Link to="/skills"><img src={TechStackIcon} alt="Tech Stack" className={styles.navIcon} /></Link>
            <Link to="/work"><img src={WorkIcon} alt="Work" className={styles.navIcon} /></Link>
            <Link to="/contact"><img src={ContactIcon} alt="Contact" className={styles.navIcon} /></Link>
            <Link to="/news"><img src={NewsIcon} alt="Updates" className={styles.navIcon} /></Link>
            <Link to="/projects"><img src={ProjectsIcon} alt="Projects" className={styles.navIcon} /></Link>
            <Link to="/blog"><img src={BlogIcon} alt="Blog" className={styles.navIcon} /></Link>

        </nav>
    );
};

export default NavBar;
