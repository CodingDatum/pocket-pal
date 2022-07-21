import React, { useEffect, useState } from 'react';
import ListContext from './ListContext';

const ListProvider = props => {

    // Insert instructions with the first two list items on how to work the app.

    const originalList = [{
            listName: "Welcome to List Pal!",
            listItems: ["Make a grocery List!", "Make A To-do List!"]
        },{
            listName: "Press here to view list -->",
            listItems: ["Press it again to close the tab", "Press the X Button on the left of the list Title to remove this list", "Click the list Item to cross it out, or uncross it"]
        }]

    const [lists, setLists] = useState(() => {
        const listSaved = localStorage.getItem("lists");
        const listValue = JSON.parse(listSaved);
        return listValue || originalList;
    });

    useEffect(() => {
        let listAsString = JSON.stringify(lists);
        localStorage.setItem("lists", listAsString)
    },[lists])

    const addList = listObject => {
        let newList = {
            listName: listObject,
            listItems: []
        }
        setLists( prevList => [
            ...prevList, newList]
        )
    }

    const addItemToList = (listItem, listName) => {
        let subLists = lists;
        
        subLists.forEach((listObject) => {
            if(listObject.listName === listName){
                listObject.listItems.push(listItem);
            }
        })

        // These 2 lines of code shouldnt be necessary because of my useEffect hook, why is this???
        setLists(subLists);
        localStorage.setItem("lists", JSON.stringify(lists))
    }

    const deleteList = (listName) => {
        let newList = lists.filter(listObject => listObject.listName !== listName);
        setLists(newList);
        localStorage.setItem("lists", JSON.stringify(newList))
        console.log(lists)
    }

    const listContext = {
        lists: lists,
        addList: addList,
        addItemToList: addItemToList,
        deleteList: deleteList
    }

    return <ListContext.Provider value={listContext}>{props.children}</ListContext.Provider>
}

export default ListProvider;