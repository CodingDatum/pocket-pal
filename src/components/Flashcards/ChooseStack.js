import React , { useContext } from 'react';
import Backdrop from '../UI/Backdrop';
import FlashcardsContext from './FlashcardsContext';

import styles from './ChooseStack.module.css';

const ChooseStack = props => {

    const ctx = useContext(FlashcardsContext)

    const listOfStacks = ctx.arrayOfStacks;

    const stackTitles = listOfStacks.map(stack => {
        if(stack.name === ctx.workingStack.name){
            return (
                <div className={styles["working-stack"]}>{stack.name}</div>
            )
        }else{
            return (
                <div className={styles.stack}>{stack.name}</div>
            )
        }
        
    })

    const buttonHandler = () => {
        props.closeChooseStack();
    }

    return(
        <Backdrop>
            <div className={styles["choose-stack"]}>
                <button onClick={buttonHandler}>x</button>
                {stackTitles}
            </div>
        </Backdrop>
    )
}

export default ChooseStack