import React from "react";

const ListContext = React.createContext({
    lists: [],
    addToList: (item) => {},
    addItemToList: (obj1, obj2) => {},
    deleteItem: (name) => {}
})

export default ListContext