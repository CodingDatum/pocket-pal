import React, { useState , useEffect } from 'react';
import styles from './InsultGenerator.module.css';
import InsultDisclaimer from './InsultDisclaimer';

const listOne = ["Fuck-", "Cunt-", "Shit-", "Ass-", "Pussy-", "Bitch-", "Clit-", "Dick-", "Fart-", "Queef-", "Slut-"];
const listTwo = ["face", "stick", "head", "licker", "bag", "hole", "bandit", "pipe", "breath", "troll", "mule"];
const listThree = ["Slithering", "Ratchet", "Putrid", "Decrepid", "Scaggy", "Slimey", "Unrelenting", "Ruthless", "Insepid", "Festering"];

let listOneUsedWords = [];
let listTwoUsedWords = [];
let listThreeUsedWords = [];

const generateFirstWord = () => {

    let randomNumberOne = Math.floor(Math.random() * listOne.length-1);
    let word = listOne[randomNumberOne];

    if(listOneUsedWords.includes(word)){
        word = generateFirstWord()
    }

    updateListOneUsedWords(word)
    return word
}

const updateListOneUsedWords = word => {
    listOneUsedWords.push(word);
    if(listOneUsedWords.length === listOne.length){
        listOneUsedWords = []
    }
}

const generateSecondWord = () => {

    let randomNumberTwo = Math.floor(Math.random() * listTwo.length-1);
    let word = listTwo[randomNumberTwo];

    if(listTwoUsedWords.includes(word)){
        word = generateSecondWord()
    }

    updateListTwoUsedWords(word)
    return word
}

const updateListTwoUsedWords = word => {
    listTwoUsedWords.push(word);
    if(listTwoUsedWords.length === listTwo.length){
        listTwoUsedWords = []
    }
}

const generateThirdWord = () => {

    let randomNumberThree = Math.floor(Math.random() * listThree.length-1);
    let word = listThree[randomNumberThree];

    if(listThreeUsedWords.includes(word)){
        word = generateThirdWord()
    }

    updateListThreeUsedWords(word)
    return word
}

const updateListThreeUsedWords = word => {
    listThreeUsedWords.push(word);
    if(listThreeUsedWords.length === listThree.length){
        listThreeUsedWords = []
    }
}

const InsultGenerator = props => {

    const [insult, setInsult] = useState("Click the button for a random insult");
    const [disclaimer, setDisclaimer] = useState(false);

    const insultGeneratorHandler = () => {
        const firstWord = generateFirstWord();
        const secondWord = generateSecondWord();
        const thirdWord = generateThirdWord();
        const finalInsult = thirdWord + " " + firstWord + secondWord;
        setInsult(finalInsult);
    }

    const backButtonHandler = () => {
        props.goHome();
    }

    useEffect(()=>{
        setTimeout(()=>{
            setDisclaimer(true)
        }, 500)
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