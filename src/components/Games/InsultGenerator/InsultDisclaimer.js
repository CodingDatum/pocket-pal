import React from 'react';
import Backdrop from '../../UI/Backdrop';
import styles from './InsultDisclaimer.module.css'


const InsultDisclaimer = props => {

    const closeModalHandler = () => {
        props.closeDisclaimer()
    }

    return(
        <Backdrop>
            <div className={styles.disclaimer}>
                <p>This section of the App uses vulgar and colorfully distasteful language. If you are too immature/mature, sensitive, or a potential employer, kindly avoid using this section of the app.</p>
                <button className={styles.button} onClick={closeModalHandler}>I Understand</button>
            </div>
        </Backdrop>
    )
}

export default InsultDisclaimer