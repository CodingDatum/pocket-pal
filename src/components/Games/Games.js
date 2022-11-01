import React, { useState } from 'react';
import styles from './Games.module.css';
import GameButtons from './GameButtons';
import SoundGame from './SoundGame/SoundGame';
import InsultGenerator from './InsultGenerator/InsultGenerator';

const Games = props => {
    
    const [gameLocation, setGameLocation ] = useState("games");

    const activeGameHandler = (statement) => {
        setGameLocation(statement)
    }

    const goHomeHandler = () => {
        setGameLocation("games")
    }

    return(

        <div className={styles["games-container"]}>
            {gameLocation === "games" && <GameButtons setActiveGame={activeGameHandler} />}
            {gameLocation === "sound effects" && <SoundGame goHome={goHomeHandler} />}
            {gameLocation === "insult generator" && <InsultGenerator goHome={goHomeHandler} />}
        
        </div>
            
    )
}

export default Games;