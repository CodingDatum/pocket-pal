import React , { useState } from 'react';
import FlashcardsContext from './FlashcardsContext';

// I will use the term Stacks to refer to each stack of cards in the array

const DUMMY_OBJECTS = [{
    name: "Addition",
    cards: [{
        key:"1+1",
        value: "2"
    },{
        key:"2+2",
        value:"4"
    },{
        key: "3+3",
        value:"6"
    }]
},{
    name:"Subtraction",
    cards: [{
        key:"10-5",
        value:"5"
    },{
        key:"20-10",
        value:"10"
    },{
        key:"30-5",
        value:"25"
    }]
}]

const FlashcardsProvider = props => {

    const [arrayOfStacks, setArrayOfStacks] = useState(DUMMY_OBJECTS);
    const [workingStack, setWorkingStack] = useState(DUMMY_OBJECTS[0]);

    const flashcardsContext = {
        arrayOfStacks: arrayOfStacks,
        workingStack: workingStack
    }

    return (
        <FlashcardsContext.Provider value={flashcardsContext}>{props.children}</FlashcardsContext.Provider>
    )

}

export default FlashcardsProvider