import React , { useContext } from 'react';
import Backdrop from '../UI/Backdrop';
import FlashcardsContext from './FlashcardsContext';
import Stack from './Stack';

import styles from './ChooseStack.module.css';

const ChooseStack = props => {

    const ctx = useContext(FlashcardsContext)

    const listOfStacks = ctx.arrayOfStacks;

    const closeChooseStack = () => {
        props.closeChooseStack()
    }

    const deleteStackHandler = (name) => {
        ctx.deleteStack(name)
    }

    const stackTitles = listOfStacks.map(stack => {
        if(stack.name === ctx.workingStack.name){
            return (
                <Stack isWorkingStack={true} key={Math.random()*Math.random()} stackName={stack.name} deleteStackHandler={deleteStackHandler} />
            )
        }else{
            return (
                <Stack isWorkingStack={false} key={Math.random()*Math.random()} stackName={stack.name} closeChooseStack={closeChooseStack} deleteStackHandler={deleteStackHandler}/>
            )
        }
        
    })

    return(
        <Backdrop>
            <div className={styles["choose-stack"]}>
                <button className={styles.button} onClick={closeChooseStack}>x</button>
                {stackTitles}
            </div>
        </Backdrop>
    )
}

export default ChooseStack