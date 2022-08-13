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

    return (
        <div className={styles.container}>
            {chooseStack && <ChooseStack closeChooseStack={closeChooseStack} />}
            {stackIsEmpty && <div className={styles.empty}>The current stack {workingStack.name} has no cards</div>}
            {!stackIsEmpty && <FlashcardsMain deleteCardHandler={deleteCardHandler} />}
            <FlashcardsSidebar chooseStackHandler={chooseStackHandler} />
        </div>
    )
}

export default Flashcards