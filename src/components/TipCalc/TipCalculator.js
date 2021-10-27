import React, { useState } from 'react';
import styles from './TipCalculator.module.css';

// WHAT THIS JS FILE SHOULD HANDLE:
// USEsTATE FOR: 1) bill amount, 2)tip amount
//FUNCTIONAL ELEMENTS: buttons need to affect useStates and functinality, Calculated Tip auto update?

const TipCalculator = props => {

    const [activeBill, setActiveBill] = useState(false)
    const [billAmount, setBillAmount] = useState(0)
    const [tipAmount, setTipAmount] = useState(20)
    const [dontBeADick, setDontBeADick] = useState(false)
    const [calculatedTip, setCalculatedTip] = useState(false);

    const buttonHandlerNum = (e) => {
        e.preventDefault();
        setActiveBill(true);
        const eventTargetValue = e.target.value

        if(!activeBill){
            setBillAmount(eventTargetValue);
        }else{
            setBillAmount(billAmount + eventTargetValue)
        }
    }

    const clearButtonHandler = () => {
        setCalculatedTip(false)
        setActiveBill(false)
        setBillAmount(null)
    }

    const dotHandler = () => {

        let updatedBillAmount = billAmount + '';
        updatedBillAmount = updatedBillAmount + ".";
        setBillAmount(updatedBillAmount)
    }

    const increaseTipHandler = () => {
        if(activeBill){
            setTipAmount(tipAmount+1)
            setDontBeADick(false)
            calculateTipHandler()
        }
    }

    const decreaseTipHandler = () => {

        if(activeBill){
            if(tipAmount === 15){
                setDontBeADick(true)
            }else{
                setTipAmount(tipAmount-1)
                calculateTipHandler()
            }
        }
    }

    const calculateTipHandler = () => {
        let adjustedBill = +billAmount;
        let adjustedTip = tipAmount;
        adjustedTip = "." + adjustedTip;
        adjustedTip = +adjustedTip;
        console.log(adjustedBill)
        console.log(adjustedTip)
        let tip = adjustedBill * adjustedTip;
        setCalculatedTip(tip)
    }

    return (
        <div className={styles["tip-calculator"]}>
            {!activeBill && <span>Enter Amount</span>}
            {activeBill && <span>{billAmount}</span>}
            <div className={styles["tip-nums"]}>
                <button onClick={buttonHandlerNum} value="1">1</button>
                <button onClick={buttonHandlerNum} value="2">2</button>
                <button onClick={buttonHandlerNum} value="3">3</button>
                <button onClick={buttonHandlerNum} value="4">4</button>
                <button onClick={buttonHandlerNum} value="5">5</button>
                <button onClick={buttonHandlerNum} value="6">6</button>
                <button onClick={buttonHandlerNum} value="7">7</button>
                <button onClick={buttonHandlerNum} value="8">8</button>
                <button onClick={buttonHandlerNum} value="9">9</button>
                <button onClick={dotHandler}>.</button>
                <button onClick={buttonHandlerNum} value="0">0</button>
                <button onClick={clearButtonHandler}>cl</button>
            </div>
            <div className={styles["tip-amount"]}>
                <button className={styles.neg} onClick={decreaseTipHandler}>-</button>
                {!dontBeADick && <span>{tipAmount}%</span>}
                {dontBeADick && <div className={styles.dick}>Dont Be A Dick</div>}
                <button className={styles.pos} onClick={increaseTipHandler}>+</button>
            </div>
            {!calculatedTip && <div className={styles.tip}>Calculated Tip</div>}
            {calculatedTip && <div className={styles.tip}>{calculatedTip}</div>}
        </div>
    )
};

export default TipCalculator;