import React, {useState} from 'react';
import ReactDom from 'react-dom';
import styles from "./Contact.module.css"

const webAddress = "https://codingdatum.github.io/pocket-pal/";

const ContactContent = props => {

    const [email, setEmail] = useState("");

    const inputHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const sendEmailHandler = () => {
        window.open('mailto:' + email +'?subject="PocketPal"&body=' + webAddress);
    }

    return(
        <div className={styles.contact}>
            <h2>Contact</h2>
            <p>Enter your email and I'll send you this app:</p>
            <input type="text" onChange={inputHandler}></input>
            <button onClick={sendEmailHandler}>Send App</button>
            <p>Would you like a custom app of your own? Would you like to learn how to code? feel free to reach out to me at codingdatum@gmail.com</p>
            <button onClick={props.contactCloseHandler}>close</button>
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