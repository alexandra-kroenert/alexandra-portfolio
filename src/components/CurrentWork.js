import React from 'react';
import styles from './CurrentWork.module.css';

const CurrentWork = () => {
    return (
        <div className={styles.currentWork}>
            <h2>Currently working on:</h2>
            <p>Improving my skills in, and understanding of vanilla JavaScript and React. Also, having fun with #100DaysOfCode building & animating things via CSS.</p>
            <a href="path-to-journey">Follow My Journey Here.</a>
        </div>
    );
}

export default CurrentWork;
