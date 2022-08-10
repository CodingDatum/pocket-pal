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
},{
    name:"Multiplication",
    cards: [{
        key:"10x5",
        value:"50"
    },{
        key:"20x10",
        value:"200"
    },{
        key:"30x5",
        value:"150"
    }]
}]

const FlashcardsProvider = props => {

    const [arrayOfStacks, setArrayOfStacks] = useState(DUMMY_OBJECTS);
    const [workingStack, setWorkingStack] = useState(DUMMY_OBJECTS[0]);
    const [cardSide, setCardSide] = useState("front");

    const cardsideHandler = (direction) => {
        setCardSide(direction)
    }

    const changeWorkingStack = name => {
        const stack = arrayOfStacks.find(stack => stack.name === name);
        setWorkingStack(stack);
        setCardSide("front");
    }

    const flashcardsContext = {
        arrayOfStacks: arrayOfStacks,
        workingStack: workingStack,
        cardSide: cardSide,
        changeWorkingStack: changeWorkingStack,
        cardSideHandler: cardsideHandler,
    }

    return (
        <FlashcardsContext.Provider value={flashcardsContext}>{props.children}</FlashcardsContext.Provider>
    )

}

export default FlashcardsProvider