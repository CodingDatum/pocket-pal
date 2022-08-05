import React, { useState , useRef, useEffect } from 'react';
import styles from './ListInput.module.css';

const ListInput = props => {

    const [listTitle, setListTitle] = useState("");
    const textInput = useRef(null);

    const addListTitleHandler = (e) => {
        let inputValue = e.target.value;
        setListTitle(inputValue);
    }

    const addListHandler = () => {
        props.addNewListHandler(listTitle)
    }

    useEffect(() => {
        textInput.current.focus()
    }, [])

    return (
        <div className={styles.input}>
            <input type="text" onChange={addListTitleHandler} ref={textInput}></input>
            <button onClick={addListHandler}>{props.buttonName}</button>
        </div>
    )
}

export default ListInput;