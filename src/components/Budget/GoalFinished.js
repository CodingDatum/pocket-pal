import React, { useState } from 'react';
import Backdrop from '../UI/Backdrop';

import styles from "./GoalFinished.module.css";

const DUMMY_PHRASES = ["Way to go you!" , "Great job!" , "YASS QUEEN" , "Slaying it!" , "You did well..."];

// MAKE A DELAY FOR THE POPUP SO THAT THEY CAN SEE THE THERMOMETER FILL ALL THE WAY

const GoalFinished = props => {

    const buttonHandler = () => {
        props.closePopup()
    }

    return(
        <Backdrop>
            <div className={styles.container}>
                <div className={styles.phrase}>Congratulations you finished youer goal!</div>
                <button onClick={buttonHandler}>OK</button>
            </div>
        </Backdrop>
    )
}

export default GoalFinished