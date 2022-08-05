import React from 'react'
import styles from './IconModal.module.css';

const IconModal = props => {
    return (
        <div className={styles.backdrop} onClick={props.closeModal}>
            <div className={styles.modal}>
                <button onClick={props.closeModal}>x</button>
                <p>{props.phrase}</p>
            </div>
        </div>
    )
}

export default IconModal;