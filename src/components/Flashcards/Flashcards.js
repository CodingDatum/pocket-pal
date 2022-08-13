import React , { useState , useContext } from 'react';

import FlashcardsSidebar from './FlashcardsSidebar';
import FlashcardsMain from './FlashcardsMain';
import ChooseStack from './ChooseStack';
import FlashcardsContext from './FlashcardsContext';

import styles from './Flashcards.module.css';

const Flashcards = props => {

    const ctx = useContext(FlashcardsContext)
    const currentStack = ctx.workingStack;
    const cardIteration = ctx.cardIteration

    const workingStack = ctx.workingStack
    const stackIsEmpty=ctx.stackIsEmpty

    const [chooseStack, setChooseStack] = useState(false);
    const [refresh, setRefresh] = useState("1")

    const chooseStackHandler = () => {
        setChooseStack(true)
    }

    const closeChooseStack = () => {
        setChooseStack(false)
    }

    const deleteCardHandler = () => {
        let savedCardIteration = cardIteration
        ctx.changeCardIteration("start")
        ctx.deleteCard(currentStack.name, savedCardIteration)
    }

    const forceRefresh = () => {
        if(refresh === "1"){
            setRefresh("2")
            return
        }
        if(refresh === "2"){
            setRefresh("1")
        }
    }

    return (
        <React.Fragment>
            {refresh && <div className={styles.container}>
                {chooseStack && <ChooseStack closeChooseStack={closeChooseStack} />}
                {stackIsEmpty && <div className={styles.empty}>The current stack {workingStack.name} has no cards</div>}
                {!stackIsEmpty && <FlashcardsMain deleteCardHandler={deleteCardHandler} forceRefresh={forceRefresh}/>}
                <FlashcardsSidebar chooseStackHandler={chooseStackHandler} />
            </div>}
        </React.Fragment>
    )
}

export default Flashcards