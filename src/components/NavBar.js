import React from "react";
import styles from './NavBar.module.css';

const NavBar = props => {
    return(
        <nav className={styles["nav-bar"]}>
            <h1>PocketPal</h1>
            <div className={styles["hamburger-container"]} onClick={props.hamburgerClickHandler}>
                <div className={styles.hamburger} />
            </div>
        </nav>
    )
}

export default NavBar;