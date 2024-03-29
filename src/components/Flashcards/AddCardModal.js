import React, { useState , useContext } from 'react';
import Backdrop from '../UI/Backdrop';
import styles from './AddCardModal.module.css';
import FlashcardsContext from './FlashcardsContext';

const AddCardModal = props => {

    const ctx = useContext(FlashcardsContext)
    const currentStackName = ctx.workingStack.name
    const listOfStacks = ctx.arrayOfStacks

    const [key, setKey] = useState("");
    const [value, setValue] = useState("");

    const updateKeyHandler = (e) => {
        e.preventDefault()
        let thisKey = e.target.value
        setKey(thisKey)
    }

    const updateValueHandler = (e) => {
        e.preventDefault()
        let thisValue = e.target.value
        setValue(thisValue)
    }

    const submitCardHandler = () => {
        ctx.addCard(key, value)
        props.removeAddCardModal()
        props.forceRefresh()
    }

    const closeModal = () => {
        props.removeAddCardModal()
    }

    return(
        <Backdrop>
            {listOfStacks.length > 0 && <div className={styles.container}>
                <h3>Add To: {currentStackName}</h3>
                <div>
                    <h4>Front side</h4>
                    <input type="text" onChange={updateKeyHandler} />
                </div>
                <div>
                    <h4>Back side</h4>
                    <input type="text" onChange={updateValueHandler} />
                </div>
                <button onClick={submitCardHandler}>Add Card</button>
            </div>}
            {listOfStacks.length === 0 && <div className={styles.empty}>
                <div>There are currently no stacks of cards</div> 
                <button onClick={closeModal}>OK</button>   
            </div>}
        </Backdrop>
    )
}

export default AddCardModal;