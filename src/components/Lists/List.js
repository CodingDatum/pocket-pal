import React, { useContext, useState } from 'react';
import styles from './List.module.css'

import ListContext from './ListContext';

import ListItem from './ListItem';

const List = props => {

    const [listIsActive, setListIsActive] = useState(false);
    const [workingListItem, setWorkingListItem] = useState("");
    const [refresh, setRefresh] = useState("1");

    const ctx = useContext(ListContext)

    const listItemDeleteHandler = (listItem, listName) => {
        ctx.deleteItemFromList(listItem, listName);
        refreshHandler()
    }

    const listItems = props.listItems.map(item => {
        return (
            <ListItem key={Math.random()} item={item} listName={props.name} listItemDeleteHandler={listItemDeleteHandler}/>
        )
    })

    const renderThisList = () => {
        if(listIsActive){
            setListIsActive(false)
        }else{
            setListIsActive(true)
        }
    }

    const listItemHandler = e => {
        let listItemInput = e.target.value;
        setWorkingListItem(listItemInput)
    }

    const submitItemToList = () => {
        ctx.addItemToList(workingListItem, props.name)
        setWorkingListItem("")
        refreshHandler()
    }

    const refreshHandler = () => {
        if(refresh === "1"){
            setRefresh("2")
        }else{
            setRefresh("1")
        }
    }

    const removeListHandler = () => {
        ctx.deleteList(props.name)
    }

    return (
        <React.Fragment>
            {refresh && <div className={styles.container}>
            <div className={styles.heading}>
                <span onClick={removeListHandler}>X</span>
                <h4>{props.name}</h4>
                {listIsActive && <span className={styles.flipped} onClick={renderThisList}>⬇</span>}
                {!listIsActive && <span onClick={renderThisList}>⬇</span>}
            </div>
            <div className={styles["list-container"]}>
                {listIsActive && <ul>{listItems}
                    <li><button onClick={submitItemToList}>+</button><input type="text" onChange={listItemHandler} value={workingListItem}></input></li></ul>}
            </div>
            </div>}
        </React.Fragment>
    )
}

export default List;