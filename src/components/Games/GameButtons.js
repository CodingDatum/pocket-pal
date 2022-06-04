import React from 'react';
import styles from './GameButtons.module.css';

const GameButtons = props => {

    const soundEffectsClickHandler = () => {
        props.setActiveSoundGame("sound effects")
    }

    return(
        <div className={styles.games}>
                <button onClick={soundEffectsClickHandler}>Sound Effects</button>
                <button>Insult Generator</button>
                <button>GAME</button>
                <button>GAME</button>
                <button>GAME</button>
                <button>GAME</button>
                <button>GAME</button>
                <button>GAME</button>
                <button>GAME</button>
            </div>
    )
};

export default GameButtons