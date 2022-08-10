import React , { useState } from 'react';

import FlashcardsSidebar from './FlashcardsSidebar';
import FlashcardsMain from './FlashcardsMain';
import ChooseStack from './ChooseStack';

import styles from './Flashcards.module.css';

const Flashcards = props => {

    const [chooseStack, setChooseStack] = useState(false);

    const chooseStackHandler = () => {
        setChooseStack(true)
    }

    const closeChooseStack = () => {
        setChooseStack(false)
    }

    return (
        <div className={styles.container}>
            {chooseStack && <ChooseStack closeChooseStack={closeChooseStack} />}
            <FlashcardsMain />
            <FlashcardsSidebar chooseStackHandler={chooseStackHandler} />
        </div>
    )
}

export default Flashcards