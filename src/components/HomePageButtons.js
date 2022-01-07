import React from 'react';
import Button from './UI/Button';
import styles from './HomePageButtons.module.css';

const HomePageButtons = props => {
    return(
        <div className={styles["home-page"]}>

            <Button buttonImage="💵" buttonName='Budget' onClick={props.renderBudgetPal} />
            <Button buttonImage="🧮" buttonName="Tip Calc" onClick={props.renderTipCalc} />
            <Button buttonImage="📄" buttonName="List Pal" onClick={props.renderListPal} />
            <Button buttonImage="🎹" buttonName="Music" onClick={props.renderMusicPal} />
            <Button buttonImage="🎭" buttonName="Games" onClick={props.renderGames} />

        </div>
    )
}

export default HomePageButtons;