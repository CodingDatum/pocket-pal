import React from 'react';
import Backdrop from '../UI/Backdrop';

import styles from "./GoalFinished.module.css";

const GoalFinished = props => {
    return(
        <Backdrop>
            <div className={styles.container}>Congratulations you finished youer goal!</div>
        </Backdrop>
    )
}

export default GoalFinished