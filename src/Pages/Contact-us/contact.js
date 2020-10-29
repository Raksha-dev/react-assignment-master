import React, {useState} from 'react';
import firebase from './firebase';
import { Inputform } from "./Style";
import { Messagebox } from "./Style";
const Contact = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [subject, setsubject] = useState("")
    const [message, setmessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        var db  = firebase.firestore();
        db.collection('contacts').add({
            name: name,
            email: email,
            subject: subject,
            message: message
        })
        .then(() => {
            alert('form has been submitted');
        })
        .catch((error) => {
            alert(error.message);
        });
        setname('');
        setemail('');
        setsubject('');
        setmessage('');
    };
    return (
        <form className="form" onSubmit={handleSubmit}> 
            <h2>Contact form</h2>
            <Inputform>
            <input placeholder="name" required={true} value={name} onChange={(e) => setname(e.target.value)} />
            <input placeholder="email" required={true} value={email} onChange={(e) => setemail(e.target.value)} />
            </Inputform>
            <Inputform>
            <textarea placeholder="subject" required={true} value={subject} onChange={(e) => setsubject(e.target.value)} />
            </Inputform>
            <Inputform>
            <textarea placeholder="Message" required={true} value={message} onChange={(e) => setmessage(e.target.value)} />
            </Inputform>

            <button type="submit">Submit</button>
        </form>
    )
}
export default Contact;