import React, { useState } from 'react';
import styles from './HomePage.module.css'
import HomePageButtons from './HomePageButtons';

const HomePage = props => {

    const [weAreHome, setWeAreHome] = useState(true);

    const renderBudgetPal = () => {
        console.log("renderBudgetPal executed")
        setWeAreHome(false)
    }

    return(
        <div className={styles["home-page"]}>
            {weAreHome && <HomePageButtons renderBudgetPal={renderBudgetPal} />}
        </div>
    )
}

export default HomePage;