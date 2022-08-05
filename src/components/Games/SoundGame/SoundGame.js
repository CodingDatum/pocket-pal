import React from 'react';
import useSound from 'use-sound';
import styles from './SoundGame.module.css';
import Button from '../../UI/Button';

// import sounds
import spookyMP3 from './sounds/spooky.mp3';
import wooshMP3 from './sounds/Woosh.mp3';
import homiesMP3 from './sounds/Homies.mp3';
import dropletMP3 from './sounds/Droplet.mp3';

// assign sounds:

const SoundGame = props =>{

    const [playSpooky] = useSound(spookyMP3);
    const [playWoosh] = useSound(wooshMP3);
    const [playHomies] = useSound(homiesMP3);
    const [playDroplet] = useSound(dropletMP3);

    const backButtonHandler = () => {
        props.goHome();
    }

    return (
        <React.Fragment>
            <button className={styles["back-button"]} onClick={backButtonHandler}>back</button>
            <div className={styles["sound-game"]}> 
                <Button onClick={playSpooky} buttonName="Spooky" buttonTwo={true} />
                <Button onClick={playWoosh} buttonName="Woosh" buttonTwo={true} />
                <Button onClick={playHomies} buttonName="Homies" buttonTwo={true} />
                <Button onClick={playDroplet} buttonName="Droplet" buttonTwo={true} />
            </div>
        </React.Fragment>
    )
}

export default SoundGame;