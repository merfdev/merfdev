import React, { useState } from "react";
import ContactsList from "./ContactsList";
import { v4 } from "uuid";

function Contact() {
  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };
  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastname ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please enter valid data!");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      name: "",
      lastname: "",
      email: "",
      phone: "",
    });
  };
  return (
    <div>
      <input
        placeholder="name"
        name="name"
        type="text"
        value={contact.name}
        onChange={changeHandler}
      />
      <input
        placeholder="last name"
        name="lastname"
        type="lastname"
        value={contact.lastname}
        onChange={changeHandler}
      />
      <input
        placeholder="email"
        name="email"
        type="email"
        value={contact.email}
        onChange={changeHandler}
      />
      <input
        placeholder="phone"
        name="phone"
        type="number"
        value={contact.phone}
        onChange={changeHandler}
      />
      <button onClick={addHandler}>Add Contact</button>
      <div>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default Contact;
