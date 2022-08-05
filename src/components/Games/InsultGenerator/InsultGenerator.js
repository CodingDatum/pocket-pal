import React, { useState , useEffect } from 'react';
import styles from './InsultGenerator.module.css';
import InsultDisclaimer from './InsultDisclaimer';

const listOne = ["Fuck-", "Cunt-", "Shit-", "Ass-", "Pussy-", "Bitch-", "Clit-", "Dick-", "Fart-", "Queef-", "Slut-"];
const listTwo = ["face", "stick", "head", "licker", "bag", "hole", "bandit", "pipe", "breath", "troll"];
const listThree = ["Slithering", "Ratchet", "Putrid", "Decrepid", "Scaggy", "Slimey", "Unrelenting", "Ruthless", "Insepid", "Festering"];

let completedListOne = [];
let completedListTwo = [];
let completedListThree = [];

const updateListOne = listItem => {
    completedListOne.push(listItem)
    if(listOne.length === completedListOne.length){
        completedListOne = []
    }
}
const updateListTwo = listItem => {
    completedListTwo.push(listItem)
    if(listTwo.length === completedListTwo.length){
        completedListTwo = []
    }
}

const updateListThree = listItem => {
    completedListThree.push(listItem)
    if(listThree.length === completedListThree.length){
        completedListThree = []
    }
}

const createFirstWord = () => {
    const randomNumberOne = Math.floor(Math.random() * listOne.length);
    const wordToAdd = listOne[randomNumberOne];
    if(completedListOne.includes(wordToAdd)){
        createFirstWord()
    }
    if(!completedListOne.includes(wordToAdd)){
        updateListOne(wordToAdd);
    }

    return(wordToAdd);
}

const createSecondWord = () => {
    const randomNumberTwo = Math.floor(Math.random() * listTwo.length);
    const wordToAdd = listTwo[randomNumberTwo];
    if(completedListTwo.includes(wordToAdd)){
        createSecondWord()
    }
    if(!completedListTwo.includes(wordToAdd)){
        updateListTwo(wordToAdd);
    }

    return(wordToAdd);
}

const createThirdWord = () => {
    const randomNumberThree = Math.floor(Math.random() * listThree.length);
    const wordToAdd = listThree[randomNumberThree];
    if(completedListThree.includes(wordToAdd)){
        createThirdWord()
    }
    if(!completedListThree.includes(wordToAdd)){
        updateListThree(wordToAdd);
    }

    return(wordToAdd);
}

const InsultGenerator = props => {

    const [insult, setInsult] = useState("Click the button for a random insult");
    const [disclaimer, setDisclaimer] = useState(false);

    const insultGeneratorHandler = () => {
        const firstWord = createFirstWord();
        const secondWord = createSecondWord();
        const thirdWord = createThirdWord();
        const finalInsult = thirdWord + " " + firstWord + secondWord;
        setInsult(finalInsult);
        console.log(completedListOne)
        console.log(completedListTwo)
        console.log(completedListThree)
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