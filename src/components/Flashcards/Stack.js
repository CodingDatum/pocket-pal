import React , { useContext } from 'react';
import FlashcardsContext from './FlashcardsContext';

import styles from './Stack.module.css';

const Stack = props => {

    const ctx = useContext(FlashcardsContext)

    const workingStack = props.isWorkingStack

    const changeStackHandler = () => {
        ctx.cardSideHandler("front");
        ctx.changeWorkingStack(props.stackName);
        ctx.changeCardIteration("start")
        props.closeChooseStack();
    }

    const deleteStackHandler = () => {
        props.deleteStackHandler(props.stackName)
    }

    return (
        <React.Fragment>
        {workingStack && <div className={styles["stack-container"]}>
            <div className={styles.working}>{props.stackName}</div>
            <button className={styles.button} onClick={deleteStackHandler}>x</button>    
        </div>}
        {!workingStack && <div className={styles["stack-container"]}>
            <div className={styles.stack} onClick={changeStackHandler}>{props.stackName}</div>
            <button className={styles.button} onClick={deleteStackHandler}>x</button>
        </div>}
        </React.Fragment>
    )
}

export default Stack