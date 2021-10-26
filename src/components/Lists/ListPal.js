import React, { useContext } from 'react';
import styles from './ListPal.module.css';
import Button from '../UI/Button';
import ListContext from './ListContext';

const ListPal = props => {

    const ctx = useContext(ListContext);

    console.log(ctx.lists)

    const addEventHandler = () => {
        console.log("Make List Button Clicked")
    }

    return(
        
            <div className={styles["list-pal"]}>
                <Button buttonName="Add List" onClick={addEventHandler} />
                <h3>My Lists:</h3>
                <div>
                    Lists as dropdown menu
                </div>
            </div>
    )
}

export default ListPal;