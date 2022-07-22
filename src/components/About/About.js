import React from 'react';
import ReactDom from 'react-dom';
import styles from './About.module.css';

const AboutContent = props => {
    return (
        <div className={styles.about}>TESTING ABOUT SECTION</div>
    )
}

const About = props => {
    return (
        <React.Fragment>
            {ReactDom.createPortal(<AboutContent />, document.getElementById("about-root"))}
        </React.Fragment>
    )
}
export default About