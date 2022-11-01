import React from 'react';
import Backdrop from '../UI/Backdrop';

import styles from "./GoalFinished.module.css";

const DUMMY_PHRASES = ["Way to go you!" , "Great job!" , "YASS QUEEN!" , "Slaying it!" , "You did well..." , "Look at you go you sexy fuck!"];

// MAKE A DELAY FOR THE POPUP SO THAT THEY CAN SEE THE THERMOMETER FILL ALL THE WAY

const GoalFinished = props => {

    const findRandomPhrase = () => {
        let randomNum = Math.floor(Math.random() * DUMMY_PHRASES.length)
        let phraseToUse = DUMMY_PHRASES[randomNum]
        return phraseToUse
    }

    const buttonHandler = () => {
        props.closePopup()
    }

    return(
        <Backdrop>
            <div className={styles.container}>
                <div className={styles.phrase}>{findRandomPhrase()}</div>
                <button onClick={buttonHandler}>confirm</button>
            </div>
        </Backdrop>
    )
}

export default GoalFinished