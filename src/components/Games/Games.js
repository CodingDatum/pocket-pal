import React, { useState } from 'react';
import styles from './Games.module.css';
import GameButtons from './GameButtons';
import SoundGame from './SoundGame/SoundGame';

const Games = props => {
    
    const [gameLocation, setGameLocation ] = useState("games");

    const activateSoundGameHandler = (statement) => {
        setGameLocation("sound effects")
    }

    const goHomeHandler = () => {
        setGameLocation("games")
    }

    return(

        <div className={styles["games-container"]}>
            {gameLocation === "games" && <GameButtons setActiveSoundGame={activateSoundGameHandler} />}
            {gameLocation === "sound effects" && <SoundGame goHome={goHomeHandler} />}
        </div>
            
    )
}

export default Games;