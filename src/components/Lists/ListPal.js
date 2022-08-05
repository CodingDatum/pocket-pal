import React, { useContext , useState } from 'react';
import styles from './ListPal.module.css';
import ListContext from './ListContext';
import List from './List';
import ListInput from './ListInput';

const ListPal = props => {

    const [addListInputActive, setAddListInputActive] = useState(false);

    const ctx = useContext(ListContext);

    const lists = ctx.lists;

    const listsRenderable = lists.map(list => {
        return (
            <List name={list.listName} listItems={list.listItems} key={Math.random()} />
        );
    })

    const addNewListHandler = (input) => {
        ctx.addList(input);
        setAddListInputActive(false)
    }

    const openInputHandler = () => {
        setAddListInputActive(true)
    }

    return(
        
            <div className={styles["list-pal"]}>
            {addListInputActive && <ListInput buttonName="Add New List" addNewListHandler={addNewListHandler} />}
            {addListInputActive && <ListInput buttonName="Add New List" addNewListHandler={addNewListHandler} />}

                <div className={styles["add-list-container"]}>
                    <button className={styles.button} onClick={openInputHandler}>Add List</button>
                </div>
                
                <h3>My Lists:</h3>
                <div>
                    {listsRenderable}
                </div>
            </div>
    )
}

export default ListPal;