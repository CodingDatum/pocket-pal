import React , { useState , useContext } from 'react';
import Backdrop from '../UI/Backdrop';
import FlashcardsContext from './FlashcardsContext';

import styles from './AddStackModal.module.css';

const AddStackModal = props => {

    const ctx = useContext(FlashcardsContext)

    const [stackName, setStackName] = useState("");

    const stackNameHandler = (e) => {
        e.preventDefault();
        const newStackName = e.target.value
        setStackName(newStackName)
    }

    const addNewStackHandler = () => {
        props.addStackHandler(stackName)
    }

    return(
        <Backdrop>
            <div className={styles.container}>
                <h4>Give a name to your new stack of flashcards:</h4>
                <input type="text" onChange={stackNameHandler}></input>
                <button onClick={addNewStackHandler}>Add New Stack</button>
            </div>
        </Backdrop>
    )
}

export default AddStackModal