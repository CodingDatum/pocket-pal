import React, { useState } from 'react';
import styles from './InsultGenerator.module.css';

const InsultGenerator = () => {

    const insult = useState("Click the button for a random insult");

    return (
        <div className={styles["insult-generator__container"]}>
            <span>{insult}</span>
            <button>Button</button>
        </div>
    )
}

export default InsultGenerator;