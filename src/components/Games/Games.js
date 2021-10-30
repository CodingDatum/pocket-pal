import React, { useState } from 'react';
import styles from './Games.module.css';
import GameButtons from './GameButtons';
import SoundGame from './SoundGame/SoundGame';

const Games = props => {
    
    const [gameHomeScreen, setGameHomeScreen] = useState(true);
    const [soundGame, setSoundGame] = useState(false)

    const activateSoundGameHandler = (statement) => {
        setSoundGame(true);
        setGameHomeScreen(false);
    }
    return(

        <div className={styles["games-container"]}>
            {gameHomeScreen && <GameButtons setActiveSoundGame={activateSoundGameHandler} />}
            {soundGame && <SoundGame />}
        </div>
            
    )
}

export default Games;