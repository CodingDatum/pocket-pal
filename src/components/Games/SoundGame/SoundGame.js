import React from 'react';
import useSound from 'use-sound';
import styles from './SoundGame.module.css';
import Button from '../../UI/Button';

// import sounds
import spookyMP3 from './sounds/spooky.mp3';

// assign sounds:


const SoundGame = props =>{

    const [playSpooky] = useSound(spookyMP3)

    return (
        <div className={styles["sound-game"]}> 
            <Button onClick={playSpooky} buttonName="Spooky" />
            <Button buttonName="pending" />
            <Button buttonName="I Forgot" />
            <Button buttonName="Woosh?" />
        </div>
    )
}

export default SoundGame;