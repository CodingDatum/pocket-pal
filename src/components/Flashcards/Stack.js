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

    return (
        <React.Fragment>
        {workingStack && <div className={styles.working}>{props.stackName}</div>}
        {!workingStack && <div className={styles.stack} onClick={changeStackHandler}>{props.stackName}</div>}
        </React.Fragment>
    )
}

export default Stack