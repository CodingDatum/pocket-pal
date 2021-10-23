import React, { useState } from 'react';
import styles from './HomePage.module.css'
import HomePageButtons from './HomePageButtons';
import Budget from './Budget';

const HomePage = props => {

    const [weAreHome, setWeAreHome] = useState(true);
    const [weAreBudget, setWeAreBudget] = useState(false);

    const renderBudgetPal = () => {
        console.log("renderBudgetPal executed")
        setWeAreHome(false)
        setWeAreBudget(true)
    }

    return(
        <div className={styles["home-page"]}>
            {weAreHome && <HomePageButtons renderBudgetPal={renderBudgetPal} />}
            {weAreBudget && <Budget />}
        </div>
    )
}

export default HomePage;