import React, { useContext, useState } from 'react';
import styles from './List.module.css'
import ListContext from './ListContext';

const List = props => {

    const [listIsActive, setListIsActive] = useState(false);
    const [workingListItem, setWorkingListItem] = useState("");
    const [refresh, setRefresh] = useState("1");

    const ctx = useContext(ListContext)

    const listItems = props.listItems.map(item => {
        return (
            <li key={Math.random()}>{item}</li>
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
        console.log("we are about to add this item to out list:" + listItemInput + "to list with name:" + props.name)
        setWorkingListItem(listItemInput)
    }

    const submitItemToList = () => {
        console.log(workingListItem)
        ctx.addItemToList(workingListItem, props.name)
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
        ctx.deleteItem(props.name)
        console.log("remove this list!");
    }

    return (
        <React.Fragment>
            {refresh && <div className={styles.container}>
            <div className={styles.heading}>
                <span onClick={removeListHandler}>X</span>
                <h4>{props.name}</h4>
                <span onClick={renderThisList}>⬇</span>
            </div>
            <div className={styles["list-container"]}>
                {listIsActive && <ul>{listItems}
                    <li><button className={styles["add-list-item-button"]} onClick={submitItemToList}>+</button><input className={styles["list-item-input"]} type="text" onChange={listItemHandler}></input></li></ul>}
            </div>
        </div>}
        </React.Fragment>
    )
}

export default List;