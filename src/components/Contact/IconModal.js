import React from 'react'
import styles from './IconModal.module.css';

const IconModal = props => {
    return (
        <div className={styles.backdrop} onClick={props.closeModal}>
            <div className={styles.modal}>
                <p className={styles.p}>{props.phrase}</p>
                <button onClick={props.closeModal}>OK</button>
            </div>
        </div>
    )
}

export default IconModal;