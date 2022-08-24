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
import Flashcards from './Flashcards/Flashcards';
import FlashcardsProvider from './Flashcards/FlashcardsProvider';
import Events from './Events/Events';

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

    const renderFlashcards = () => {
        props.goAway();
        setLocation("flashcards");
        ctx.changeTitle("Flashcards")
    }

    const renderEvents = () => {
        props.goAway();
        setLocation("events")
        ctx.changeTitle("EventPal")
    }

    return(
        <div className={styles.home}>
            {location === "home" && <HomePageButtons renderEvents={renderEvents} renderBudgetPal={renderBudgetPal} renderTipCalc={renderTipCalc} renderListPal={renderListPal} renderMusicPal={renderMusicPal} renderGames={renderGames} renderFlashcards={renderFlashcards} />}
            {location === "budget" && <Budget />}
            {location === "tip" && <TipCalculator />}
            {location === "list" && <ListProvider><ListPal /></ListProvider>}
            {location === "music" && <MusicPal />}
            {location === "game" && <Games />}
            {location === "flashcards" && <FlashcardsProvider><Flashcards /></FlashcardsProvider>}
            {location === "events" && <Events />}
            
        </div>
    )
}

export default HomePage;