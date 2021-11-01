import React, { useEffect, useState } from 'react';
import ListContext from './ListContext';

const ListProvider = props => {

    // Insert instructions with the first two list items on how to work the app.

    const originalList = [{
            listName: "Welcome to List Pal!",
            listItems: ["Make a List!", "Make A List of Lists!!!"]
        },{
            listName: "press arrow to view list -->",
            listItems: ["Press it again to close the tab", "Press the + Button on the left of the list Title to add a List Item"]
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

    const addToList = listObject => {
        let newList = {
            listName: listObject,
            listItems: ["test new list"]
        }
        setLists( prevList => [
            ...prevList, newList]
        )
    }

    const addItemToList = (listItem, listName) => {
        console.log("now in the listProvider.js file we need to add item: " + listItem + "to List: " + listName + "using an advanced array method??")
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

    const deleteItem = (listName) => {
        let newList = lists.filter(listObject => listObject.name !== listName);
        setLists(newList);
        localStorage.setItem("lists", JSON.stringify(newList))
        console.log(lists)
    }

    const listContext = {
        lists: lists,
        addToList: addToList,
        addItemToList: addItemToList,
        deleteItem: deleteItem
    }

    return <ListContext.Provider value={listContext}>{props.children}</ListContext.Provider>
}

export default ListProvider;