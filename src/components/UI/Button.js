import React from 'react';
import styles from './Button.module.css';

const Button = props => {

    const buttonImage = props.buttonImage;

    return(
        <div className={styles.btn} key={Math.random()} onClick={props.onClick}>
            {buttonImage && <div className={styles["button-image"]}>{buttonImage}</div>}
            <div>{props.buttonName}</div>
        </div>
    )
}

export default Button;