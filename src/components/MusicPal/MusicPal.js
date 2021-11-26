import React from 'react';

import Piano from './Piano';

import styles from './MusicPal.module.css';

const MusicPal = props => {
    return (
        <div className={styles.music}>
            <Piano />
        </div>
    )
}

export default MusicPal;