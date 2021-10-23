import React from 'react';
import Button from './UI/Button';
import styles from './HomePageButtons.module.css';

const HomePageButtons = props => {
    return(
        <ul className={styles["home-page"]}>
            <li><Button buttonName='Budget Pal' onClick={props.renderBudgetPal}></Button></li>
            <li><Button buttonName="Tip Calculator" ></Button></li>
            <li><Button buttonName="Lists Pal" ></Button></li>
            <li><Button buttonName="Events Pal" ></Button></li>
        </ul>
    )
}

export default HomePageButtons;