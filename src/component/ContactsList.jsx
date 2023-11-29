import React from "react";
import styles from "./contactList.module.css";
function ContactsList({ contacts, deleteHandler }) {
  return (
    <div className={styles.container}>
      <h3>Contact List</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <p>
                {contact.name} {contact.lastname}
              </p>
              <p>
                <span>📬</span>
                {contact.email}
              </p>
              <p>
                <span>📞</span>
                {contact.phone}
              </p>
              <button onClick={() => deleteHandler(contact.id)}>🗑️</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.massage}>no contacts yet! </p>
      )}
    </div>
  );
}

export default ContactsList;
