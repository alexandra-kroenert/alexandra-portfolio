import React from 'react';
import styles from './Skills.module.css';
/* import expressLogo from '../Images/Express.svg' */

const Skills = () => {
    const skillsData = [
        { id: 1, icon: "devicon-html5-plain-wordmark", name: "HTML5" },
        { id: 2, icon: "devicon-css3-plain-wordmark", name: "CSS3" },
        { id: 3, icon: "devicon-javascript-plain", name: "JavaScript" },
        { id: 4, icon: "devicon-react-original-wordmark", name: "React" },
        { id: 5, icon: "devicon-nodejs-plain-wordmark", name: "Node.js" },
        { id: 6, icon: "devicon-express-original colored", name: "Express" },
        { id: 8, icon: "devicon-mongodb-plain-wordmark", name: "MongoDB" },
        { id: 9, icon: "devicon-ruby-plain-wordmark", name: "Ruby" },
        { id: 10, icon: "devicon-rails-plain-wordmark", name: "Ruby on Rails" },
        { id: 11, icon: "devicon-postgresql-plain-wordmark", name: "PostgreSQL" },
        { id: 12, icon: "path-to-icon", name: "AWS" },
        { id: 13, icon: "devicon-heroku-plain-wordmark", name: "Heroku" },
        { id: 14, icon: "path-to-icon", name: "Netlify" },
        { id: 15, icon: "devicon-firebase-plain-wordmark", name: "Firebase" },
        { id: 16, icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 4v16h18V4H3zm4 4h2v8H7V8zm4 0h2v8h-2V8zm4 0h2v8h-2V8z"/></svg>), name: "Contentful" },
        { id: 18, icon: "path-to-icon", name: "RESTful APIs" },
        { id: 19, icon: "devicon-google-plain", name: "Google Analytics" },
        { id: 20, icon: "devicon-git-plain-wordmark", name: "Git" },
        { id: 21, icon: "devicon-github-original-wordmark", name: "GitHub" },
        { id: 22, icon: "devicon-vscode-plain-wordmark", name: "VS Code" },
        { id: 23, icon: "devicon-figma-plain", name: "Figma" },
        { id: 24, icon: "devicon-xd-line", name: "Adobe Xd" },    
        { id: 25, icon: "devicon-sass-original", name: "SASS" }, 
        { id: 26, icon: "devicon-androidstudio-plain-wordmark", name: "Android Studio" }, 
        { id: 27, icon: "devicon-apple-original", name: "apple" }, 
        { id: 28, icon: "devicon-bootstrap-plain-wordmark", name: "bootstrap" }, 

    ];

    return (
        <div className={styles.skillsContainer}>
            <h1>The tools and technologies I'm proficient in:</h1>
            {/* <p>The tools and technologies I'm proficient in:</p> */}
            <div className={styles.skills}>
                {skillsData.map(skill => (
                     <div className={styles.skill} key={skill.id}>
                     {typeof skill.icon === 'string' ? <i className={skill.icon}></i> : skill.icon}
                     
                        {/* <p>{skill.name}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
