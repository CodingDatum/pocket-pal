import React, { useState } from 'react';
import Contact from '../Contact/Contact';
import About from '../About/About';
import styles from './NavCol.module.css';

const NavCol = props => {

    const[contactIsOpen, setContactIsOpen] = useState(false);
    const[aboutIsOpen, setAboutIsOpen] = useState(false);

    const contactOpenHandler = () => {
        setContactIsOpen(true)
    }

    const contactCloseHandler = () => {
        setContactIsOpen(false)
    }

    const aboutOpenHandler = () => {
        setAboutIsOpen(true)
    }
    const aboutCloseHandler = () => {
        setAboutIsOpen(false)
    }

    return(
        <div className={styles["nav-col"]}>
            <ul>
                <li onClick={props.goHome}>Home</li>
                <li onClick={aboutOpenHandler}>About</li>
                <li onClick={contactOpenHandler}>Contact</li>
            </ul>
            <div>&#169;</div>
            {contactIsOpen && <Contact contactCloseHandler={contactCloseHandler} />}
            {aboutIsOpen && <About aboutCloseHandler={aboutCloseHandler} />}
            
        </div>
    )
}

export default NavCol;