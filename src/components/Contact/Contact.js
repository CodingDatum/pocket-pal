import React, {useState} from 'react';
import ReactDom from 'react-dom';
import ContactInput from './ContactInput';
import styles from "./Contact.module.css"

const webAddress = "https://codingdatum.github.io/pocket-pal/";

const ContactContent = props => {

    const [email, setEmail] = useState("");
    const[inputActive, setInputActive] = useState(false)

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
                <span>FB</span>
                <span>TW</span>
                <span>IG</span>
                <span>GH</span>
                <span>WS</span>
            </div>
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