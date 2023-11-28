import React from "react";

function ContactsList({ contacts, deleteHandler }) {
  return (
    <div>
      <h3>Contact List</h3>
      {contacts.length ? (
        <ul>
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
        <p>no contacts yet! </p>
      )}
    </div>
  );
}

export default ContactsList;
