import React from 'react';
import styles from './Button.module.css';

const Button = props => {
    return(
        <button className={styles.btn} key={Math.random()} onClick={props.onClick}>{props.buttonName}</button>
    )
}

export default Button;