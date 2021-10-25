import React from 'react';
import styles from './EventPal.module.css';

const EventPal = props => {
    return(
        <div className={styles["event-pal"]}>
            <button>Add Event</button>
            {/* Repeat this following several tiomes */}
            <div className={styles["event-tabs"]}>
                <div className={styles["event-tab"]}>
                    <h3>today/thisweek</h3>
                    <ul>
                        <li>Event Info</li>
                        <li>Event Info</li>
                        <li>Event Info</li>
                    </ul>
                </div>
                <div className={styles["event-tab"]}>
                    <h3>today/thisweek</h3>
                    <ul>
                        <li>Event Info</li>
                        <li>Event Info</li>
                        <li>Event Info</li>
                    </ul>
                </div>
                <div className={styles["event-tab"]}>
                    <h3>today/thisweek</h3>
                    <ul>
                        <li>Event Info</li>
                        <li>Event Info</li>
                        <li>Event Info</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default EventPal;