import React, { useState } from 'react';
import styles from './Budget.module.css';
import Button from '../UI/Button';
import NumPad from '../UI/NumPad';

const Budget = props => {

    const [goal, setGoal] = useState(100);
    const [progress, setProgress] = useState(20);
    const [isAddingMoney, setIsAddingMoney] = useState(false);

    const addMoneyHandler = () => {
        setIsAddingMoney(true)
    }

    const updateGoalHandler = (currentExpense) => {
        let ourProgress = +progress;
        let ourExpense = +currentExpense;
        setProgress(ourProgress+ourExpense);
        setIsAddingMoney(false)
    }

    const setGoalHandler = () => {
        console.log("set goal handler")
        setGoal(null)
    }

    const trackerBar = () => {
        let bar = progress/goal;
        bar = bar * 100;
        bar = bar + "%";
        return bar
    }

    let newBar = trackerBar()

    const refreshGoalHandler = () => {
        setGoal(0);
        setProgress(0);
    }

    return (
        <div className={styles.budget}>
            <h2>Budget Pal</h2>
            <div className={styles["budget-container"]}>
                <div className={styles["budget-buttons"]}>
                    <Button onClick={setGoalHandler} buttonName="Set Goal"/>
                    <Button onClick={addMoneyHandler} buttonName="Add $" />
                    <Button onClick={refreshGoalHandler} buttonName="Refresh"/>
                </div>
                <div className={styles["budget-tracker"]}>
                    <div className={styles.tracker}>
                        <div className={styles["tracker-inside"]} style={{height: newBar}}></div>
                    </div>
                </div>
            </div>
            <div className={styles["budget-footer"]}>
                ${progress}/${goal}
            </div>
            {isAddingMoney && <NumPad updateGoalHandler={updateGoalHandler} />}
    </div>
    )
}

export default Budget;