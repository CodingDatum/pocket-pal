import React, {useState} from 'react';
import ReactDom from 'react-dom';
import ContactInput from './ContactInput';
import IconModal from './IconModal';
import styles from "./Contact.module.css"

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

    return(
        <div className={styles.contact}>
            <h2>Contact</h2>
            <p>Enter your email and I'll send you this app:</p>
            {!inputActive && <input type="text" className={styles["little-input"]} value={email} onClick={activateInputHandler}></input>}
            {inputActive && <ContactInput updateEmail={updateEmail} />}
            <button onClick={sendEmailHandler}>Send App</button>
            <p>Would you like a custom app of your own? Would you like to learn how to code? feel free to reach out to me at codingdatum@gmail.com</p>
            <button onClick={props.contactCloseHandler}>close</button>
            <div className={styles.social}>
                <img onClick={openModalHandler} src="https://cdn-icons.flaticon.com/png/512/4494/premium/4494479.png?token=exp=1658604331~hmac=aaa3e4689f22e8bcc0c41775b585758c" alt="Facebook Logo"></img>
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
        <React.Fragment>
        {ReactDom.createPortal(<ContactContent contactCloseHandler={props.contactCloseHandler} />, document.getElementById("contact-root"))}
        </React.Fragment>
    )
    
}

export default Contact