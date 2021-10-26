import React, { useContext } from 'react';
import styles from './ListPal.module.css';
import Button from '../UI/Button';
import ListContext from './ListContext';
import List from './List';

const ListPal = props => {

    const ctx = useContext(ListContext);

    const lists = ctx.lists;

    const list = lists.map(list => {
        return (
            <List name={list.listName} listItems={list.listItems} key={Math.random()} />
        );
    })

    const addEventHandler = () => {
        console.log("Make List Button Clicked")
    }

    return(
        
            <div className={styles["list-pal"]}>
                <Button buttonName="Add List" onClick={addEventHandler} />
                <h3>My Lists:</h3>
                <div>
                    {list}
                </div>
            </div>
    )
}

export default ListPal;