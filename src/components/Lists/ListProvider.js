import React from 'react';
import ListContext from './ListContext';

const ListProvider = props => {

    const listContext = {
        lists: [{
            listName: "Name 1",
            listItems: ["test1", "test1again"]
        },{
            listName: "Name 2",
            listItems: ["test2", "testing22"]
        }]
    }

    return <ListContext.Provider value={listContext}>{props.children}</ListContext.Provider>
}

export default ListProvider;