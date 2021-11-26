import React from 'react';

import styles from './Piano.module.css';

const Piano = props => {
    return (
        <div className={styles.piano}>
            <div className={styles["key-container"]}>
                <div className={styles["white-keys"]}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles["black-keys"]}>
                    <span></span>
                    <span></span>
                    <span className={styles.hidden}></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default Piano