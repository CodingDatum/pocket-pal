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
    const [cardIteration, setCardIteration] = useState(0);

    const changeCardIteration = (phrase) => {
        if(phrase === "up"){
            setCardIteration(cardIteration+1)
        }
        if(phrase === "down"){
            setCardIteration(cardIteration-1)
        }
        if(phrase === "start"){
            setCardIteration(0)
        }
        if(phrase === "end"){
            setCardIteration(workingStack.cards.length-1)
        }
    }

    const cardSideHandler = (direction) => {
        setCardSide(direction)
    }

    const changeWorkingStack = name => {
        const stack = arrayOfStacks.find(stack => stack.name === name);
        setWorkingStack(stack);
        setCardSide("front");
    }

    const addCard = ( key, value) => {

        let rawArrayOfStacks = arrayOfStacks;
        let rawCardObject = {
            key: key,
            value: value
        }
        for(let i = 0 ; i < rawArrayOfStacks.length ; i++){
            let arrayObject = rawArrayOfStacks[i];
            if(workingStack.name === arrayObject.name){
                arrayObject.cards.push(rawCardObject)
            }
        }

        setArrayOfStacks(rawArrayOfStacks)

    }

    const addStackHandler = (name) => {
        let rawArrayOfStacks = arrayOfStacks;
        let newObject = {
            name: name,
            cards:[{
                key: "first card question",
                value: "first Card Answer"
            }]
        }
        rawArrayOfStacks.push(newObject)
        setArrayOfStacks(rawArrayOfStacks)
        setCardIteration(0)
        changeWorkingStack(name)
    }

    const flashcardsContext = {
        arrayOfStacks: arrayOfStacks,
        workingStack: workingStack,
        cardSide: cardSide,
        cardIteration: cardIteration,
        changeWorkingStack: changeWorkingStack,
        cardSideHandler: cardSideHandler,
        addCard: addCard,
        addStackHandler: addStackHandler,
        changeCardIteration: changeCardIteration
    }

    return (
        <FlashcardsContext.Provider value={flashcardsContext}>{props.children}</FlashcardsContext.Provider>
    )

}

export default FlashcardsProvider