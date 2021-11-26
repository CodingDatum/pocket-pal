import React, { useState } from 'react';
import styles from './HomePage.module.css';
import HomePageButtons from './HomePageButtons';
import Budget from './Budget/Budget';
import TipCalculator from './TipCalc/TipCalculator';
import ListPal from './Lists/ListPal';
import Games from './Games/Games';
import ListProvider from './Lists/ListProvider';
import MusicPal from './MusicPal/MusicPal';

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

    const renderMusicPal = () => {
        props.goAway();
        setLocation("music");
    }

    const renderGames = () => {
        props.goAway();
        setLocation("game");
    }

    return(
        <div className={styles.home}>
            {location === "home" && <HomePageButtons renderBudgetPal={renderBudgetPal} renderTipCalc={renderTipCalc} renderListPal={renderListPal} renderMusicPal={renderMusicPal} renderGames={renderGames} />}
            {location === "budget" && <Budget />}
            {location === "tip" && <TipCalculator />}
            {location === "list" && <ListProvider><ListPal /></ListProvider>}
            {location === "music" && <MusicPal />}
            {location === "game" && <Games />}
            
        </div>
    )
}

export default HomePage;