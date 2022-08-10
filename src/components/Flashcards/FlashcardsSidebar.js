import React from 'react';

import styles from './FlashcardsSidebar.module.css';

const FlashcardsSidebar = props => {

    const viewStacksHandler = () => {
        props.chooseStackHandler()
    }
    return (
        <div className={styles.sidebar}>
            <button>add a stack</button>
            <button onClick={viewStacksHandler}>view stacks</button>
            <button>add a card</button>
        </div>
    )
}

export default FlashcardsSidebar