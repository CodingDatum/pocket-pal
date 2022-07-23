import React, {useState, useRef, useEffect} from 'react';
import styles from './ContactInput.module.css';

const ContactInput = props => {

    const [email, setEmail] = useState("");
    const textInput = useRef(null);

    const inputHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const submitEmail = () => {
        props.updateEmail(email)
    }

    useEffect(() => {
        textInput.current.focus()
    }, [])

    return (
        <div className={styles.container}>
            <input type="text" ref={textInput} onChange={inputHandler} value={email}></input>
            <button onClick={submitEmail}>submit</button>
        </div>
    )
}

export default ContactInput