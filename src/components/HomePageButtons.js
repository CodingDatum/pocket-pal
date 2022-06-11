import React from 'react';
import Button from './UI/Button';
import styles from './HomePageButtons.module.css';

const HomePageButtons = props => {
    return(
        <div className={styles["home-page"]}>

            <div className={styles.container}>

                <div className={styles["container-1"]}>
                    <Button buttonImage="💵" buttonName='Budget' onClick={props.renderBudgetPal} />
                    <Button buttonImage="🧮" buttonName="Tip Calc" onClick={props.renderTipCalc} />
                    <Button buttonImage="📄" buttonName="List Pal" onClick={props.renderListPal} />
                </div>

                <div className={styles["container-1"]}>
                    <Button buttonImage="🎹" buttonName="Music" onClick={props.renderMusicPal} />
                    <Button buttonImage="🎭" buttonName="Games" onClick={props.renderGames} />
                </div>

                <div className={styles["container-1"]}></div>
                

            </div>

        </div>
    )
}

export default HomePageButtons;