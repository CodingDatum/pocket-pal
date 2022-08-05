import React from 'react';
import styles from './Button.module.css';

const Button = props => {

    const buttonImage = props.buttonImage;
    const buttonTwo = props.buttonTwo;

    return(
        <React.Fragment>
            {!buttonTwo && <div className={styles.btn} key={Math.random()} onClick={props.onClick}>
                {buttonImage && <div className={styles["button-image"]}>{buttonImage}</div>}
                <div>{props.buttonName}</div>
            </div>}
            {buttonTwo && <div className={styles.btntwo} key={Math.random()} onClick={props.onClick}>
                {buttonImage && <div className={styles["button-image"]}>{buttonImage}</div>}
                <div className={styles["btntwo-text"]}>{props.buttonName}</div>
            </div>}
        </React.Fragment>
    )
}

export default Button;