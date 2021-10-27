import React from 'react';
import { useHistory } from 'react-router';

const ContactCard = (contact) => {
  const history = useHistory();

  const handleClick = (event) => {
    history.push('/contact', { contact })
  }

  return (
    <figure
      className="card shadow m-3"
      style={{ "width": "15rem" }}
      onClick={handleClick}
    >
      <img className="card-img-top rounded mx-auto" src={contact.contact.picture} alt="User" />
      <figcaption className="card-body">
        <h5 className="card-title">{contact.contact.name}</h5>
        <p className="card-text">{contact.contact.email}</p>
        <p className="card-text">{contact.contact.number}</p>
      </figcaption>
    </figure>
  )
};

export default ContactCard;
