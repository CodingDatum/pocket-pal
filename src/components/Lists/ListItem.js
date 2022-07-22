import React, { useState } from 'react';

import styles from './ListItem.module.css';

const ListItem = props => {

    const [isChecked, setIsChecked] = useState(false);

    const listItemClickHandler = () => {
        if(!isChecked){
            setIsChecked(true)
        }else{
            setIsChecked(false)
        }
    }

    const listItemDeleteHandler = () => {
        props.listItemDeleteHandler(props.item, props.listName)
    }

    return (
        <React.Fragment>
            {isChecked && <li className={styles.checked}><span onClick={listItemClickHandler}>{props.item}</span><button onClick={listItemDeleteHandler}><span>x</span></button></li> }
            {!isChecked && <li className={styles.normal} onClick={listItemClickHandler}>{props.item}</li>}
        </React.Fragment>
    )

}

export default ListItem