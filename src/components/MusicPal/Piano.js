import React, { useState } from 'react';

import Dot from './Dot';

import styles from './Piano.module.css';

const Piano = props => {

    const [currentChord, setCurrentChord] = useState(null);

    const showA = () => {
        setCurrentChord("A")
    }

    const showAm = () => {
        setCurrentChord("Am")
    }

    const showB = () => {
        setCurrentChord("B")
    }

    const showBb = () => {
        setCurrentChord("Bb")
    }

    const showBm = () => {
        setCurrentChord("Bm")
    }

    const showC = () => {
        setCurrentChord("C")
    }

    const showCm = () => {
        setCurrentChord("Cm")
    }

    const showD = () => {
        setCurrentChord("D")
    }

    const showDm = () => {
        setCurrentChord("Dm")
    }

    const showE = () => {
        setCurrentChord("E")
    }

    const showEm = () => {
        setCurrentChord("Em")
    }

    const showF = () => {
        setCurrentChord("F")
    }

    const showFs = () => {
        setCurrentChord("Fs")
    }

    const showFsm = () => {
        setCurrentChord("Fsm")
    }

    const showG = () => {
        setCurrentChord("G")
    }

    return (
        <React.Fragment>
            <div className={styles.piano}>
            <div className={styles["key-container"]}>
                <div className={styles["white-keys"]}>
                    <span>{(currentChord === "C" || currentChord === "Cm" || currentChord === "F" || currentChord === "Am") && <Dot />}</span>
                    <span>{(currentChord === "D" || currentChord === "Dm" || currentChord === "G" || currentChord === "Bb" || currentChord === "Bm") && <Dot />}</span>
                    <span>{(currentChord === "E" || currentChord === "Em" || currentChord === "A" || currentChord === "Am" || currentChord === "C") && <Dot />}</span>
                    <span>{(currentChord === "F" || currentChord === "Bb" || currentChord === "Dm") && <Dot />}</span>
                    <span>{(currentChord === "G" || currentChord === "C" || currentChord === "Cm" || currentChord === "Em") && <Dot />}</span>
                    <span>{(currentChord === "A" || currentChord === "Am" || currentChord === "D" || currentChord === "Dm" || currentChord === "F" || currentChord === "Fsm") && <Dot />}</span>
                    <span>{(currentChord === "B" || currentChord === "Bm" || currentChord === "G" || currentChord === "E" || currentChord === "Em") && <Dot />}</span>
                </div>
                <div className={styles["black-keys"]}>
                    <span>{(currentChord === "A" || currentChord === "Fs" || currentChord === "Fsm") && <Dot />}</span>
                    <span>{(currentChord === "B" || currentChord === "Cm") && <Dot />}</span>
                    <span className={styles.hidden}></span>
                    <span>{(currentChord === "Fs" || currentChord === "Fsm" || currentChord === "D" || currentChord === "B" || currentChord === "Bm") && <Dot />}</span>
                    <span>{(currentChord === "E") && <Dot />}</span>
                    <span>{(currentChord === "Bb" || currentChord === "Fs") && <Dot />}</span>
                </div>
            </div>
        </div>
        <div className={styles["chord-buttons"]}>

            <button onClick={showA}>A</button>
            <button onClick={showAm}>Am</button>
            <button onClick={showB}>B</button>
            <button onClick={showBb}>Bb</button>
            <button onClick={showBm}>Bm</button>
            <button onClick={showC}>C</button>
            <button onClick={showCm}>Cm</button>
            <button onClick={showD}>D</button>
            <button onClick={showDm}>Dm</button>
            <button onClick={showE}>E</button>
            <button onClick={showEm}>Em</button>
            <button onClick={showF}>F</button>
            <button onClick={showFs}>F#</button>
            <button onClick={showFsm}>F#m</button>
            <button onClick={showG}>G</button>
            
        </div>
        </React.Fragment>
    )
}

export default Piano