import React from "react";
import styles from './NavBar.module.css';

// class name dynamically requires us to handle the logic ahead of time, not in the html tag

const NavBar = props => {

    // here we check to see if the navColActive is truthy. if it is, send the correct className info to the html element being rendered

    const classNameLiteral = () => {
        if(props.navColIsOpen){
            return `${styles["hamburger-container--x"]}`
        }else{
            return `${styles["hamburger-container"]}`
        }
    }

    return(
        <nav className={styles["nav-bar"]}>
            <h1>PocketPal</h1>
            <div className={classNameLiteral()} onClick={props.hamburgerClickHandler}>
                <div className={styles.hamburger} />
            </div>
        </nav>
    )
}

export default NavBar;