import React , { useState } from 'react';
import TitleContext from './TitleContext';

const TitleProvider = props => {

    const [title, setTitle] = useState("PocketPal");

    const changeTitle = (newTitle) => {
        setTitle(newTitle)
    }

    const titleContext = {
        title: title,
        changeTitle: changeTitle
    }

    return <TitleContext.Provider value={titleContext}>{props.children}</TitleContext.Provider>
}

export default TitleProvider