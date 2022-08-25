import React from 'react';

import styles from './Events.module.css'


const DUMMY_EVENTS = [{
    name: "Brad's Birthday Party",
    time:"1:00pm",
    date:"January 22, 2022",
    details:"You are supposed to bring the cake",
    location:"27 Hardvard Drive, Gloucester MA"
},
{
    name: "Ganine's Wedding",
    time:"3:30pm",
    date:"April 14, 2023",
    details:"Underwater theme",
    location:"Seaport, Gloucester MA"
}]

console.log(DUMMY_EVENTS)


const Events = props => {
    return(
        <div className={styles["events-container"]}>
            <div className={styles.top}>
                <button>Filter</button>
                <h4>All Events</h4>
                <button>Add</button>
            </div>
            <div className={styles.main}>

            </div>
        </div>
    )
}

export default Events