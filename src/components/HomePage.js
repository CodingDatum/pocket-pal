import React, { useState , useContext } from 'react';
import styles from './HomePage.module.css';
import HomePageButtons from './HomePageButtons';
import Budget from './Budget/Budget';
import TipCalculator from './TipCalc/TipCalculator';
import ListPal from './Lists/ListPal';
import Games from './Games/Games';
import ListProvider from './Lists/ListProvider';
import MusicPal from './MusicPal/MusicPal';
import TitleContext from './Systems/TitleContext';

const HomePage = props => {

    const [location, setLocation] = useState("");

    const ctx = useContext(TitleContext)

    if(location !== "home" && props.home){
        setLocation("home");
        ctx.changeTitle("PocketPal")
    }

    const renderBudgetPal = () => {
        props.goAway();
        setLocation("budget");
        ctx.changeTitle("BudgetPal")
    }

    const renderTipCalc = () => {
        props.goAway();
        setLocation("tip");
        ctx.changeTitle("TipPal")
    }

    const renderListPal = () => {
        props.goAway();
        setLocation("list");
        ctx.changeTitle("ListPal")
    }

    const renderMusicPal = () => {
        props.goAway();
        setLocation("music");
        ctx.changeTitle("MusicPal")
    }

    const renderGames = () => {
        props.goAway();
        setLocation("game");
        ctx.changeTitle("GamePal")
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