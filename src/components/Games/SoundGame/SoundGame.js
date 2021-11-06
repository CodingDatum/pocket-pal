import React from 'react';
import UIfx from 'uifx';
import styles from './SoundGame.module.css'

// import sounds
import spookyMP3 from './sounds/spooky.mp3';

// assign sounds:
const spooky = new UIfx({asset: spookyMP3})

const SoundGame = props =>{

    const spookyHandler = () => {

        spooky.play()

    }
    return (
        <div className={styles.testing}> 
            <button onClick={spookyHandler}>Spooky</button>
            <button>Droplet</button> 
            <button>Woosh</button> 
            <button>Homies</button> 
        </div>
    )
}

export default SoundGame;