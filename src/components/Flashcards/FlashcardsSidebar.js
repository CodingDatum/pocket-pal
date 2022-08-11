import React , { useState , useContext } from 'react';

import AddCardModal from './AddCardModal';
import AddStackModal from './AddStackModal';
import FlashcardsContext from './FlashcardsContext';

import styles from './FlashcardsSidebar.module.css';

const FlashcardsSidebar = props => {

    const ctx = useContext(FlashcardsContext)

    const [addCardModal, setAddCardModal] = useState(false);
    const [addStackModal, setAddStackModal] = useState(false);

    const viewStacksHandler = () => {
        props.chooseStackHandler()
    }

    const renderAddCardModal = () => {
        setAddCardModal(true)
    }

    const removeAddCardModal = () => {
        setAddCardModal(false)
    }

    const renderAddStackModal = () => {
        setAddStackModal(true)
    }

    const addStackHandler = (stackName) => {
        setAddStackModal(false)
        setAddCardModal(true)
        ctx.addStackHandler(stackName)
    }

    return (
        <div className={styles.sidebar}>
            {addCardModal && <AddCardModal removeAddCardModal={removeAddCardModal} />}
            {addStackModal && <AddStackModal addStackHandler={addStackHandler} />}
            <button onClick={renderAddStackModal}>add a stack</button>
            <button onClick={viewStacksHandler}>view stacks</button>
            <button onClick={renderAddCardModal}>add a card</button>
        </div>
    )
}

export default FlashcardsSidebar