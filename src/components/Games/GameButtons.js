import React from 'react';
import styles from './GameButtons.module.css';

const GameButtons = props => {

    const soundEffectsClickHandler = () => {
        props.setActiveGame("sound effects")
    }

    const insultGeneratorClickHandler = () => {
        props.setActiveGame("insult generator")
    }

    return(
        <div className={styles.games}>
                <button onClick={soundEffectsClickHandler}>Sound Effects</button>
                <button onClick={insultGeneratorClickHandler}>Insult Generator</button>
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