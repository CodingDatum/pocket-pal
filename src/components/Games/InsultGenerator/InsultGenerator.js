import React, { useState } from 'react';
import styles from './InsultGenerator.module.css';

const listOne = ["Fuck-", "Cunt-", "Shit-", "Ass-", "Pussy-", "Bitch-", "Clit-", "Dick-", "Fart-", "Queef-", "Slut-"];
const listTwo = ["face", "stick", "head", "licker", "bag", "hole", "bandit", "pipe", "breath"];

const InsultGenerator = () => {

    const [insult, setInsult] = useState("Click the button for a random insult");

    const insultGeneratorHandler = () => {
        const randomNumberOne = Math.floor(Math.random() * listOne.length);
        const randomNumberTwo = Math.floor(Math.random() * listTwo.length);
        const firstWord = listOne[randomNumberOne];
        const secondWord = listTwo[randomNumberTwo];
        const finalInsult = firstWord + secondWord;
        setInsult(finalInsult);
    }

    return (
        <div className={styles["insult-generator__container"]}>
            <span>{insult}</span>
            <button onClick={insultGeneratorHandler}>Button</button>
        </div>
    )
}

export default InsultGenerator;