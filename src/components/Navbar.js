import React from 'react';
import styles from './Navbar.module.css';

const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <a href="/">home</a>
            <a href="/about">about</a>
            <a href="/skills">skills & tools</a>
            <a href="/work">work</a>
            <a href="/testimonials">testimonials</a>
            <a href="/contact">contact</a>
            <a href="/blog">blog</a>
            <a href="/updates">updates</a>
        </div>
    );
}

export default NavBar;
