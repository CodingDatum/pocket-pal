import React from 'react';
import Button from './UI/Button';
import styles from './HomePageButtons.module.css';

const HomePageButtons = props => {
    return(
        <ul className={styles["home-page"]}>
            <li><Button buttonName='Budget Pal' onClick={props.renderBudgetPal} /></li>
            <li><Button buttonName="Tip Calc" onClick={props.renderTipCalc} /></li>
            <li><Button buttonName="List Pal" onClick={props.renderListPal} /></li>
            <li><Button buttonName="Event Pal" onClick={props.renderEventPal} /></li>
            <li><Button buttonName="Games" onClick={props.renderGames} /></li>
        </ul>
    )
}

export default HomePageButtons;