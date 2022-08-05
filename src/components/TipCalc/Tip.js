import React from 'react';

import styles from './Tip.module.css';

const Tip = props => {
    return (
        <div className={styles.tip}>${props.tipAmount}</div>
    )
}

export default Tip