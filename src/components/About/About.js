import React from 'react';
import styles from './About.module.css';
import Backdrop from '../UI/Backdrop';

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
        <Backdrop><AboutContent aboutCloseHandler={props.aboutCloseHandler} /></Backdrop>
    )
}
export default About