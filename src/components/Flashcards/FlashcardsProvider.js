import React , { useState , useEffect } from 'react';
import FlashcardsContext from './FlashcardsContext';

// I will use the term Stacks to refer to each stack of cards in the array

const DUMMY_OBJECTS = [{
    name: "Flashcards",
    cards: [{
        key:"click card to flip over",
        value: "this is the back of the card! click again to flip, or view next/prev stacks"
    },{
        key:"How do I add a card?",
        value:"Click add card button! It will add a card to the working stack"
    },{
        key: "How do I add a new stack?",
        value:"click Add Stack Button"
    }]
}]

const FlashcardsProvider = props => {

    const [arrayOfStacks, setArrayOfStacks] = useState(() => {
        const cardsSaved = localStorage.getItem("cards");
        const cardsValue = JSON.parse(cardsSaved);
        return cardsValue || DUMMY_OBJECTS;
    });
    const [workingStack, setWorkingStack] = useState(arrayOfStacks[0] || DUMMY_OBJECTS[0]);
    const [cardSide, setCardSide] = useState("front");
    const [cardIteration, setCardIteration] = useState(0);

    useEffect(() => {
        let cardsAsString = JSON.stringify(arrayOfStacks);
        localStorage.setItem("cards", cardsAsString)
    },[arrayOfStacks, setArrayOfStacks])

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
                setWorkingStack(arrayObject)
                setArrayOfStacks(rawArrayOfStacks)
                setCardSide("front");
            }
        }

        let cardsAsString = JSON.stringify(arrayOfStacks);
        localStorage.setItem("cards", cardsAsString)
        
        // Might have to move the above function call inside of the for loop... or get rid of for loop...
    }

    const addStackHandler = (name) => {
        let rawArrayOfStacks = arrayOfStacks;
        let newObject = {
            name: name,
            cards:[]
        }
        rawArrayOfStacks.push(newObject)
        setArrayOfStacks(rawArrayOfStacks)
        setCardIteration(0)
        changeWorkingStack(name)
        let cardsAsString = JSON.stringify(arrayOfStacks);
        localStorage.setItem("cards", cardsAsString)
    }

    const deleteCard = () => {

        let rawArrayOfStacks = arrayOfStacks;
        rawArrayOfStacks.forEach(stack => {
            if(stack.name === workingStack.name){
                stack.cards = stack.cards.filter(card => card.key !== workingStack.cards[cardIteration].key)
                setWorkingStack(stack)
                setCardIteration(0)
            }
        })
        setArrayOfStacks(rawArrayOfStacks)
    }

    const deleteStack = (name) => {
        let rawArrayOfStacks = arrayOfStacks;
        let newArrayOfStacks = rawArrayOfStacks.filter(stack => stack.name !== name);
        setArrayOfStacks(newArrayOfStacks)
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
        changeCardIteration: changeCardIteration,
        deleteCard: deleteCard,
        deleteStack: deleteStack
    }

    return (
        <FlashcardsContext.Provider value={flashcardsContext}>{props.children}</FlashcardsContext.Provider>
    )

}

export default FlashcardsProvider