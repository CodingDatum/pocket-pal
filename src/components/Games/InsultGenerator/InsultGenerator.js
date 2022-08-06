import React, { useState , useEffect } from 'react';
import styles from './InsultGenerator.module.css';
import InsultDisclaimer from './InsultDisclaimer';

const listOne = ["Fuck-", "Cunt-", "Shit-", "Ass-", "Pussy-", "Bitch-", "Clit-", "Dick-", "Fart-", "Queef-", "Slut-"];
const listTwo = ["face", "stick", "head", "licker", "bag", "hole", "bandit", "pipe", "breath", "troll"];
const listThree = ["Slithering", "Ratchet", "Putrid", "Decrepid", "Scaggy", "Slimey", "Unrelenting", "Ruthless", "Insepid", "Festering"]

const InsultGenerator = props => {

    const [insult, setInsult] = useState("Click the button for a random insult");
    const [disclaimer, setDisclaimer] = useState(false);

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

    useEffect(()=>{
        setTimeout(()=>{
            setDisclaimer(true)
        }, 1000)
    }, [])

    const closeDisclaimer = () => {
        setDisclaimer(false)
    }

    return (
        <React.Fragment>
            {disclaimer && <InsultDisclaimer closeDisclaimer={closeDisclaimer} />}
            <button className={styles["back-button"]} onClick={backButtonHandler}>back</button>
            <div className={styles["insult-generator__container"]}>
                <span>{insult}</span>
                <button className={styles.button} onClick={insultGeneratorHandler}>Button</button>
            </div>
        </React.Fragment>
    )
}

export default InsultGenerator;