import React, {useState} from 'react';
import ContactInput from './ContactInput';
import IconModal from './IconModal';
import styles from "./Contact.module.css"
import Backdrop from '../UI/Backdrop';

const webAddress = "https://codingdatum.github.io/pocket-pal/";

const ContactContent = props => {

    const [email, setEmail] = useState("");
    const[inputActive, setInputActive] = useState(false);
    const [iconModal, setIconModal] = useState(false);
    const [touchCount, setTouchCount] = useState(0);
    const [modalContent, setModalContent] = useState ("These Icons are currently disabled")

    const sendEmailHandler = () => {
        window.open('mailto:' + email +'?subject="PocketPal"&body=' + webAddress);
    }

    const activateInputHandler = () => {
        setInputActive(true)
    }

    const deactivateInputHandler = () => {
        setInputActive(false)
    }

    const updateEmail = (input) => {
        setEmail(input)
        deactivateInputHandler()
    }

    const openModalHandler = () => {
        if(touchCount > 2){
            setModalContent("Can you read!?")
        }
        setIconModal(true);
    }

    const closeModalHandler = () => {
        setIconModal(false);
        setTouchCount(touchCount + 1);
    }

    const whyIsThisNeeded = () => {
        return
    }

    return(
        <div className={styles.contact}>
            <button className={styles.close} onClick={props.contactCloseHandler}>x</button>
            <h2>Contact</h2>
            <p>Enter your email and I'll send you this app:</p>
            {!inputActive && <input type="text" className={styles["little-input"]} value={email} onChange={whyIsThisNeeded} onClick={activateInputHandler}></input>}
            {inputActive && <ContactInput updateEmail={updateEmail} />}
            <button className={styles.send} onClick={sendEmailHandler}>Send App</button>
            <p>Would you like a custom app of your own? Would you like to learn how to code? feel free to reach out to me at codingdatum@gmail.com</p>
            <div className={styles.social}>
                <img onClick={openModalHandler} src="https://png.pngtree.com/element_our/sm/20180509/sm_5af2ca6386091.jpg" alt="Facebook Logo"></img>
                <img onClick={openModalHandler} src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="instagram logo"></img>
                <img onClick={openModalHandler} src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="twitter logo"></img>
                <img onClick={openModalHandler} src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="youtube logo" />
                <img onClick={openModalHandler} src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="github logo" />
            </div>
            {iconModal && <IconModal phrase={modalContent} closeModal={closeModalHandler} />}
        </div>
    )
}

const Contact = props => {
    return (
        <Backdrop><ContactContent contactCloseHandler={props.contactCloseHandler} /></Backdrop>
    )
    
}

export default Contact