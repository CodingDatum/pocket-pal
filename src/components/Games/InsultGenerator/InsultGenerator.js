import React, { useState } from 'react';
import styles from './InsultGenerator.module.css';

const listOne = ["Fuck-", "Cunt-", "Shit-", "Ass-", "Pussy-", "Bitch-", "Clit-", "Dick-", "Fart-", "Queef-", "Slut-"];
const listTwo = ["face", "stick", "head", "licker", "bag", "hole", "bandit", "pipe", "breath", "troll"];
const listThree = ["Slithering", "Ratchet", "Putrid", "Decrepid", "Scaggy", "Slimey", "Unrelenting", "Ruthless", "Insepid", "Festering"]

const InsultGenerator = props => {

    const [insult, setInsult] = useState("Click the button for a random insult");

    const insultGeneratorHandler = () => {
        const randomNumberOne = Math.floor(Math.random() * listOne.length);
        const randomNumberTwo = Math.floor(Math.random() * listTwo.length);
        const randomNumberThree = Math.floor(Math.random() * listThree.length);
        const firstWord = listOne[randomNumberOne];
        const secondWord = listTwo[randomNumberTwo];
        const thirdWord = listThree[randomNumberThree];
        const finalInsult = thirdWord + " " + firstWord + secondWord;
        setInsult(finalInsult);
    }

    const backButtonHandler = () => {
        props.goHome();
    }

    return (
        <React.Fragment>
            <button className={styles["back-button"]} onClick={backButtonHandler}>back</button>
            <div className={styles["insult-generator__container"]}>
                <span>{insult}</span>
                <button className={styles.button} onClick={insultGeneratorHandler}>Button</button>
            </div>
        </React.Fragment>
    )
}

export default InsultGenerator;