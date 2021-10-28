import React, { useState, useEffect } from 'react';
import styles from './Budget.module.css';
import Button from '../UI/Button';
import NumPad from '../UI/NumPad';

const Budget = props => {

    const [goal, setGoal] = useState(() => {
        const goalSaved = localStorage.getItem("goal");
        const goalValue = JSON.parse(goalSaved);
        return goalValue || 100;
    });
    const [progress, setProgress] = useState(() => {
        const progressSaved = localStorage.getItem("goal-progress");
        const progressValue = JSON.parse(progressSaved);
        return progressValue || 0;
    });
    const [isAddingMoney, setIsAddingMoney] = useState(false);
    const [isAddingTotal, setIsAddingTotal] = useState(false);

    useEffect(()=>{
        localStorage.setItem("goal", JSON.stringify(goal));
    }, [goal]);

    useEffect(() => {
        localStorage.setItem("goal-progress", JSON.stringify(progress))
    }, [progress]);

    const addMoneyHandler = () => {
        setIsAddingMoney(true)
    }

    const updateGoalHandler = (currentExpense) => {
        let ourProgress = progress;
        let ourExpense = +currentExpense;
        setProgress(ourProgress+ourExpense);
        setIsAddingMoney(false)
    }

    const setGoalHandler = () => {
        setIsAddingTotal(true);
    }

    const trackerBar = () => {
        let bar = progress/goal;
        bar = bar * 100;
        bar = bar + "%";
        return bar
    }

    let newBar = trackerBar()

    const refreshGoalHandler = () => {
        setProgress(0);
    }

    const changeGoal = (newGoal) => {
        setGoal(newGoal)
        setIsAddingTotal(false)
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
            {isAddingMoney && <NumPad submitButton={updateGoalHandler} />}
            {isAddingTotal && <NumPad submitButton={changeGoal} />}
    </div>
    )
}

export default Budget;