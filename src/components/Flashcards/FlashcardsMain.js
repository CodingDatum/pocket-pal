import React , { useContext , useEffect, useState  } from 'react';
import FlashcardsContext from './FlashcardsContext';

import styles from './FlashcardsMain.module.css';

const FlashcardsMain = props => {

    const ctx = useContext(FlashcardsContext);

    const [frontSideCardStyle, setFrontSideCardStyle] = useState("front-side");
    const [backSideCardStyle, setBackSideCardStyle] = useState("back-side");

    const currentStack = ctx.workingStack;
    const stackCards = ctx.workingStack.cards;
    const cardIteration = ctx.cardIteration
    const cardSide = ctx.cardSide

    useEffect(()=>{
        if(cardSide==="front"){
            setFrontSideCardStyle("front-side")
        }
    }, [cardSide])


    const nextCardClickHandler = () => {
        if(cardIteration === stackCards.length-1){
            ctx.changeCardIteration("start")
        }else{
            ctx.changeCardIteration("up")
        }
        setFrontSideCardStyle("front-side")
        ctx.cardSideHandler("front")
    }

    const prevCardClickHandler = () => {
        if(cardIteration === 0){
            ctx.changeCardIteration("end")
        }else{
            ctx.changeCardIteration("down")
        }
        setFrontSideCardStyle("front-side")
        ctx.cardSideHandler("front")
    }

    const flipToBack = () => {
        setFrontSideCardStyle("front-flip-down")
        setTimeout(() => {
            ctx.cardSideHandler("back")
            setBackSideCardStyle("back-side")
        }, 400)
    }

    const flipToFront = () => {
        setBackSideCardStyle("back-flip-up")
        setFrontSideCardStyle("front-side")
        setTimeout(() => {
            ctx.cardSideHandler("front")
        }, 400)
    }

    const deleteCardHandler = () => {
        props.deleteCardHandler()
    }


    return(
        <div className={styles.main}>
            <h3>{currentStack.name}</h3>
            <div className={styles["card-container"]}>
                <button onClick={prevCardClickHandler}>prev card</button>
                <button onClick={deleteCardHandler}>delete card</button>
                {cardSide === "front" && <div className={styles[frontSideCardStyle]} onClick={flipToBack}>{stackCards[cardIteration].key}</div>}
                {cardSide === "back" && <div className={styles[backSideCardStyle]} onClick={flipToFront}>{stackCards[cardIteration].value}</div>}
                <button onClick={nextCardClickHandler}>next card</button>
            </div>
        </div>
    )
}

export default FlashcardsMain