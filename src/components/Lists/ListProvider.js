import React from 'react';
import ListContext from './ListContext';

const ListProvider = props => {

    const listContext = {
        lists: ["test", "test2"]
    }

    return <ListContext.Provider value={listContext}>{props.children}</ListContext.Provider>
}

export default ListProvider;