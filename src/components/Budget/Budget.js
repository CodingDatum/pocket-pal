import React, { useState } from 'react';
import styles from './Budget.module.css';
import Button from '../UI/Button';

const Budget = props => {

    const [goal, setGoal] = useState(100);
    const [progress, setProgress] = useState(20);
    const [isAddingMoney, setIsAddingMoney] = useState(false);
    const [currentExpense, setCurrentExpense] = useState(null);

    const calculatorHandler = (event) => {
        event.preventDefault()
        let digit = event.target.value;
        if(!currentExpense){
            setCurrentExpense(digit)
        }else{
            digit = digit + ''
            let expense = currentExpense + '';
            let outgoing = expense + digit;
            setCurrentExpense(outgoing);
        }
    }

    const clearHandler = () => {
        setCurrentExpense(null);
    }
    

    const addMoneyHandler = () => {
        setCurrentExpense(null)
        setIsAddingMoney(true)
    }

    const updateGoalHandler = () => {
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
            {isAddingMoney && <div className={styles["modal-container"]}>
            <h4>How much?</h4>
            <div className={styles["button-container"]}>
                <button onClick={calculatorHandler} value="1">1</button>
                <button onClick={calculatorHandler} value="2">2</button>
                <button onClick={calculatorHandler} value="3">3</button>
                <button onClick={calculatorHandler} value="4">4</button>
                <button onClick={calculatorHandler} value="5">5</button>
                <button onClick={calculatorHandler} value="6">6</button>
                <button onClick={calculatorHandler} value="7">7</button>
                <button onClick={calculatorHandler} value="8">8</button>
                <button onClick={calculatorHandler} value="9">9</button>
                <button onClick={calculatorHandler} value=".">.</button>
                <button onClick={calculatorHandler} value="0">0</button>
                <button onClick={clearHandler} >cl</button>
            </div>
            <div className={styles["current-expense"]}>
                {currentExpense || "expense"}
            </div>
            <button onClick={updateGoalHandler}>Add</button>
        </div>}
    </div>
    )
}

export default Budget;