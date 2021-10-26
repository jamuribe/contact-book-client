import React from 'react';

const ContactCard = (contact) => {
  return (
    <figure className="card shadow m-3" style={{ "width": "15rem" }} >
      <img className="card-img-top rounded mx-auto" src="https://thispersondoesnotexist.com/image" alt="User" />
      <figcaption className="card-body">
        <h5 className="card-title">{contact.contact.name}</h5>
        <p className="card-text">{contact.contact.email}</p>
        <p className="card-text">{contact.contact.number}</p>
      </figcaption>
    </figure>
  )
};

export default ContactCard;
