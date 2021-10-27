import React, { useState } from 'react';
import styles from './NumPad.module.css';

const NumPad = props => {

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

    return(
        <div className={styles["modal-container"]}>
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
            <button onClick={props.updateGoalHandler(currentExpense)}>Add</button>
        </div>
    )
}

export default NumPad;