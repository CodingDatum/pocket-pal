import React, { useState } from 'react';
import Contact from '../Contact/Contact';
import styles from './NavCol.module.css';

const NavCol = props => {

    const[contactIsOpen, setContactIsOpen] = useState(false);

    const contactOpenHandler = () => {
        setContactIsOpen(true)
    }

    const contactCloseHandler = () => {
        setContactIsOpen(false)
    }

    return(
        <div className={styles["nav-col"]}>
            <ul>
                <li onClick={props.goHome}>Home</li>
                <li>About</li>
                <li onClick={contactOpenHandler}>Contact</li>
            </ul>
            <div>&#169;</div>
            {contactIsOpen && <Contact contactCloseHandler={contactCloseHandler} />}
            
        </div>
    )
}

export default NavCol;