import React, { useState } from 'react';
import styles from './HomePage.module.css';
import HomePageButtons from './HomePageButtons';
import Budget from './Budget';

const HomePage = props => {

    const [location, setLocation] = useState("");

    if(location !== "home" && props.home){
        setLocation("home");
    }

    const renderBudgetPal = () => {
        props.goAway();
        setLocation("budget");
    }

    return(
        <div className={styles["home-page"]}>
            {location === "home" && <HomePageButtons renderBudgetPal={renderBudgetPal} />}
            {location === "budget" && <Budget />}
        </div>
    )
}

export default HomePage;