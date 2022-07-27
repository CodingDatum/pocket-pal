import React from 'react';
import ReactDom from 'react-dom';
import styles from './About.module.css';

const AboutContent = props => {
    return (
        <div className={styles.about}>
            <button className={styles.close} onClick={props.aboutCloseHandler}>x</button>
            <h2>About</h2>
            <p>Hi, I'm Matt, and I like to make web apps! What I lack in professional experience and formal schooling, I make up for in curiosity, creativity, and passion.</p>
            <p>I enjoy making stuff for myself, family, and friends, but would love to collaborate with any interested parties.</p>
            <p>For any fellow developers, this app is where I practice my React.js skills. I would love a study-buddy, a project partner, or even someone that wants to get into coding and needs help.</p>
        </div>
    )
}

const About = props => {
    return (
        <React.Fragment>
            {ReactDom.createPortal(<AboutContent aboutCloseHandler={props.aboutCloseHandler} />, document.getElementById("about-root"))}
        </React.Fragment>
    )
}
export default About