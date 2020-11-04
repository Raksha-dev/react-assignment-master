import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import { Inputform } from "./Style";
import { Messagebox, SubmitButton, ShowMessage } from "./Style";
import { ThemeContext } from "../../Common-Components/context/Theme";

const Contact = (props) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");
  const [showMessage, setshowMessage] = useState("");

  // useEffect(() => {
  //     window.scrollTo(0, 0)
  //   }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    var db = firebase.firestore();
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        subject: subject,
        message: message,
        showMessage: showMessage,
      })
      .then(() => {
        setshowMessage(name);
      })
      .catch((error) => {
        alert(error.message);
      });
    setname("");
    setemail("");
    setsubject("");
    setmessage("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Contact Form</h2>
      {showMessage && (
        <ShowMessage color={props.darkColor}>
          Thank You <strong> {showMessage} </strong>, your message has been
          submitted to us.
        </ShowMessage>
      )}

      <Inputform>
        <input
          placeholder="Name"
          value={name}
          required={true}
          onChange={(e) => setname(e.target.value)}
          style={{ marginRight: "45px" }}
        />
        <input
          placeholder="Email"
          value={email}
          required={true}
          onChange={(e) => setemail(e.target.value)}
        />
      </Inputform>

      <Inputform>
        <input
          placeholder="Subject"
          value={subject}
          required={true}
          onChange={(e) => setsubject(e.target.value)}
        />
      </Inputform>
      <Inputform>
        <input
          placeholder="Message"
          value={message}
          required={true}
          onChange={(e) => setmessage(e.target.value)}
        />
      </Inputform>
      <SubmitButton color={props.darkColor}>Submit</SubmitButton>
    </form>
  );
};
export default Contact;
