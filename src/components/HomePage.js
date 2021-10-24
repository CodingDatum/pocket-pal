import React, { useState } from 'react';
import styles from './HomePage.module.css';
import HomePageButtons from './HomePageButtons';
import Budget from './Budget/Budget';
import TipCalculator from './TipCalc/TipCalculator';
import ListPal from './Lists/ListPal';
import EventPal from './EventPal/EventPal';
import Games from './Games/Games';

const HomePage = props => {

    const [location, setLocation] = useState("");

    if(location !== "home" && props.home){
        setLocation("home");
    }

    const renderBudgetPal = () => {
        props.goAway();
        setLocation("budget");
    }

    const renderTipCalc = () => {
        props.goAway();
        setLocation("tip");
    }

    const renderListPal = () => {
        props.goAway();
        setLocation("list");
    }

    const renderEventPal = () => {
        props.goAway();
        setLocation("event");
    }

    const renderGames = () => {
        props.goAway();
        setLocation("game");
    }

    return(
        <div className={styles.home}>
            {location === "home" && <HomePageButtons renderBudgetPal={renderBudgetPal} renderTipCalc={renderTipCalc} renderListPal={renderListPal} renderEventPal={renderEventPal} renderGames={renderGames} />}
            {location === "budget" && <Budget />}
            {location === "tip" && <TipCalculator />}
            {location === "list" && <ListPal />}
            {location === "event" && <EventPal />}
            {location === "game" && <Games />}
            
        </div>
    )
}

export default HomePage;