import React from 'react';
import styles from './NavCol.module.css';

const NavCol = props => {

    return(
        <div className={styles["nav-col"]}>
            <ul>
                <li onClick={props.goHome}>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div>&#169;</div>
        </div>
    )
}

export default NavCol;