import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>WYGINS+</h1>
            </header>
            <div className={styles.content}>
                <div className={styles.leftSection}>
                    <img src="path-to-your-image.jpg" alt="Team Updates" />
                    <p>Team Updates</p>
                </div>
                <div className={styles.rightSection}>
                    {['Employee Handbook', 'Project Reports', 'Hiring Hub', 'Annual Report', 'New Services', 'Company Culture'].map(title => (
                        <div className={styles.card} key={title}>
                            <span>+</span>
                            <p>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;

