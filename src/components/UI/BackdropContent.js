import React from 'react'
import styles from './BackdropContent.module.css';

const BackdropContent = props => {
    return (
        <div className={styles.backdrop} onClick={props.onClick}>{props.children}</div>
    )
}

export default BackdropContent