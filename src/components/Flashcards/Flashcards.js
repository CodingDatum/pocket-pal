import React , { useState , useContext } from 'react';

import FlashcardsSidebar from './FlashcardsSidebar';
import FlashcardsMain from './FlashcardsMain';
import ChooseStack from './ChooseStack';
import FlashcardsContext from './FlashcardsContext';

import styles from './Flashcards.module.css';

const Flashcards = props => {

    const ctx = useContext(FlashcardsContext)

    const workingStack = ctx.workingStack
    const stackCardLength = workingStack.cards.length

    const [chooseStack, setChooseStack] = useState(false);
    const [refresh, setRefresh] = useState("1")

    const chooseStackHandler = () => {
        setChooseStack(true)
    }

    const closeChooseStack = () => {
        setChooseStack(false)
    }

    const deleteCardHandler = () => {
        ctx.deleteCard()
        forceRefresh()
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
                {stackCardLength === 0 && <div className={styles.empty}>Either there are no Stacks to choose from, or no cards in current stack</div>}
                {stackCardLength > 0 && <FlashcardsMain deleteCardHandler={deleteCardHandler} forceRefresh={forceRefresh}/>}
                <FlashcardsSidebar chooseStackHandler={chooseStackHandler} forceRefresh={forceRefresh} />
            </div>}
        </React.Fragment>
    )
}

export default Flashcards