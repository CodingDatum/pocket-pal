import React from "react";
import styles from './NavBar.module.css';

const NavBar = props => {
    return(
        <nav className={styles["nav-bar"]}>
            <h1>PocketPal</h1>
        </nav>
    )
}

export default NavBar;