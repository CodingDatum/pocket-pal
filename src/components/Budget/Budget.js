import React from 'react';
import styles from './Budget.module.css';
import Button from '../UI/Button';

const Budget = props => {
    return (
        <div className={styles.budget}>
            <h2>Budget Pal</h2>
            <div className={styles["budget-container"]}>
                <div className={styles["budget-buttons"]}>
                    <Button buttonName="Set Goal"/>
                    <Button buttonName="Add $" />
                    <Button buttonName="Refresh"/>
                </div>
                <div className={styles["budget-tracker"]}>
                    <div className={styles.tracker} />
                </div>
            </div>
            <div className={styles["budget-footer"]}></div>
        </div>
    )
}

export default Budget;