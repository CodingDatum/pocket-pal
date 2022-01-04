import React, { useState } from 'react';

import styles from './ListItem.module.css';

const ListItem = props => {

    const [isChecked, setIsChecked] = useState(false)

    const listItemClickHandler = () => {
        if(!isChecked){
            setIsChecked(true)
        }else{
            setIsChecked(false)
        }
    }

    return (
        <React.Fragment>
            {isChecked && <li className={styles.checked} onClick={listItemClickHandler}>{props.item}</li>}
            {!isChecked && <li onClick={listItemClickHandler}>{props.item}</li>}
        </React.Fragment>
    )

}

export default ListItem