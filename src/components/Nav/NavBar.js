import React , { useContext } from "react";
import styles from './NavBar.module.css';
import TitleContext from "../Systems/TitleContext";

const NavBar = props => {

    const ctx = useContext(TitleContext)

    const classNameLiteral = () => {
        if(props.navColIsOpen){
            return `${styles["hamburger-container--x"]}`
        }else{
            return `${styles["hamburger-container"]}`
        }
    }

    return(
        <nav className={styles["nav-bar"]}>
            <h1>{ctx.title}</h1>
            <div className={classNameLiteral()} onClick={props.hamburgerClickHandler}>
                <div className={styles.hamburger} />
            </div>
        </nav>
    )
}

export default NavBar;