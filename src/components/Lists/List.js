import React, { useState } from 'react';
import styles from './List.module.css'

const List = props => {

    const [listIsActive, setListIsActive] = useState(false);

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

    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <span>➕</span>
                <h4>{props.name}</h4>
                <span onClick={renderThisList}>⬇</span>
            </div>
            <div className={styles["list-container"]}>
                {listIsActive && <ul>{listItems}</ul>}
            </div>
        </div>
    )
}

export default List;