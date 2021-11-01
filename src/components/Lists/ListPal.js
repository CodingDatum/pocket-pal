import React, { useContext , useState } from 'react';
import styles from './ListPal.module.css';
import Button from '../UI/Button';
import ListContext from './ListContext';
import List from './List';

const ListPal = props => {

    const [listTitle, setListTitle] = useState("")

    const ctx = useContext(ListContext);

    const lists = ctx.lists;

    const listsRenderable = lists.map(list => {
        return (
            <List name={list.listName} listItems={list.listItems} key={Math.random()} />
        );
    })

    // THESE HANDLE ADDING A NEW LIST BASED ON THE TITLE

    const addListTitleHandler = (e) => {
        let inputValue = e.target.value;
        setListTitle(inputValue);
    }

    const addNewListHandler = () => {
        ctx.addToList(listTitle)
    }

    return(
        
            <div className={styles["list-pal"]}>

                <div className={styles["add-list-container"]}>
                    <Button buttonName="Add List" onClick={addNewListHandler} />
                    <input type="text" placeholder="click here" onChange={addListTitleHandler}></input>
                </div>
                
                <h3>My Lists:</h3>
                <div>
                    {listsRenderable}
                </div>
            </div>
    )
}

export default ListPal;