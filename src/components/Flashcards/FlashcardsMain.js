import React , { useContext , useState  } from 'react';
import FlashcardsContext from './FlashcardsContext';

import styles from './FlashcardsMain.module.css';

const FlashcardsMain = props => {

    const [cardIteration, setCardIteration] = useState(0);
    const [cardSide, setCardSide] = useState("front");

    const ctx = useContext(FlashcardsContext);

    const currentStack = ctx.workingStack;
    const stackCards = ctx.workingStack.cards; //this is another list of objects, so be careful!

    const nextCardClickHandler = () => {
        if(cardIteration === stackCards.length-1){
            setCardIteration(0)
        }else{
            setCardIteration(cardIteration+1)
        }
    }

    const prevCardClickHandler = () => {
        if(cardIteration === 0){
            setCardIteration(stackCards.length-1)
        }else{
            setCardIteration(cardIteration-1)
        }
    }

    const flipToBack = () => {
        setCardSide("back")
    }

    const flipToFront = () => {
        setCardSide("front")
    }


    return(
        <div className={styles.main}>
            <h3>{currentStack.name}</h3>
            <div className={styles["card-container"]}>
                <button onClick={prevCardClickHandler}>prev card</button>
                {cardSide === "front" && <div className={styles.front} onClick={flipToBack}>{stackCards[cardIteration].key}</div>}
                {cardSide === "back" && <div className={styles.back} onClick={flipToFront}>{stackCards[cardIteration].value}</div>}
                <button onClick={nextCardClickHandler}>next card</button>
            </div>
        </div>
    )
}

export default FlashcardsMain