import React from 'react';
import styles from './TipCalculator.module.css';

// WHAT THIS JS FILE SHOULD HANDLE:
// USEsTATE FOR: 1) bill amount, 2)tip amount
//FUNCTIONAL ELEMENTS: buttons need to affect useStates and functinality, Calculated Tip auto update?

const TipCalculator = props => {
    return (
        <div className={styles["tip-calculator"]}>
            <span>Enter Amount</span>
            <div className={styles["tip-nums"]}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>del</button>
                <button>0</button>
                <button>cl</button>
            </div>
            <div className={styles["tip-amount"]}>
                <button className={styles.neg}>-</button>
                <span>20%</span>
                <button className={styles.pos}>+</button>
            </div>
            <div className={styles["tip-calculated"]}>Calculated Tip</div>
        </div>
    )
};

export default TipCalculator;