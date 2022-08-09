import React from 'react';

import FlashcardsSidebar from './FlashcardsSidebar';
import FlashcardsMain from './FlashcardsMain';

import styles from './Flashcards.module.css';

const Flashcards = props => {
    return (
        <div className={styles.container}>
            <FlashcardsMain />
            <FlashcardsSidebar />
        </div>
    )
}

export default Flashcards