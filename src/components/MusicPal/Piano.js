import React, { useState } from 'react';

import Dot from './Dot';

import styles from './Piano.module.css';

const Piano = props => {

    const [currentChord, setCurrentChord] = useState(null);

    const showA = () => {
        setCurrentChord("A")
    }

    const showB = () => {
        setCurrentChord("B")
    }

    const showC = () => {
        setCurrentChord("C")
    }

    const showD = () => {
        setCurrentChord("D")
    }

    const showE = () => {
        setCurrentChord("E")
    }

    const showF = () => {
        setCurrentChord("F")
    }

    const showG = () => {
        setCurrentChord("G")
    }

    return (
        <React.Fragment>
            <div className={styles.piano}>
            <div className={styles["key-container"]}>
                <div className={styles["white-keys"]}>
                    <span>{(currentChord === "C" || currentChord === "F") && <Dot />}</span>
                    <span>{(currentChord === "D" || currentChord === "G") && <Dot />}</span>
                    <span>{(currentChord === "E" || currentChord === "A" || currentChord === "C") && <Dot />}</span>
                    <span>{(currentChord === "F") && <Dot />}</span>
                    <span>{(currentChord === "G" || currentChord === "C") && <Dot />}</span>
                    <span>{(currentChord === "A" || currentChord === "D" || currentChord === "F") && <Dot />}</span>
                    <span>{(currentChord === "B" || currentChord === "G" || currentChord === "E") && <Dot />}</span>
                </div>
                <div className={styles["black-keys"]}>
                    <span>{(currentChord === "A") && <Dot />}</span>
                    <span>{(currentChord === "B") && <Dot />}</span>
                    <span className={styles.hidden}></span>
                    <span>{(currentChord === "D" || currentChord === "B") && <Dot />}</span>
                    <span>{(currentChord === "E") && <Dot />}</span>
                    <span></span>
                </div>
            </div>
        </div>
        <div className={styles["chord-buttons"]}>

            <button onClick={showA}>A</button>
            <button onClick={showB}>B</button>
            <button onClick={showC}>C</button>
            <button onClick={showD}>D</button>
            <button onClick={showE}>E</button>
            <button onClick={showF}>F</button>
            <button onClick={showG}>G</button>
            
        </div>
        </React.Fragment>
    )
}

export default Piano