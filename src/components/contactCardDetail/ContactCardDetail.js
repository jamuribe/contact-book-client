import React from 'react';
import { useLocation, useHistory } from 'react-router';
import EditedHistory from '../editedHistory/editedHistory';

const ContactCardDetail = () => {
  const location = useLocation();
  const contact = location.state.contact;

  const history = useHistory();

  const handleButtonClick = (event) => {
    history.push('/edit', { contact })
  }

  return (
    <div className="container">
      <div className="row">
        <section className="col">
          <figure
            className="card shadow m-3"
            style={{ "width": "25rem" }}
          >
            <img className="card-img-top rounded mx-auto" src="https://thispersondoesnotexist.com/image" alt="User" />
            <figcaption className="card-body">
              <button className="col my-3 btn btn-outline-dark" onClick={handleButtonClick}> Edit contact
              </button>
              <h5 className="card-title">{contact.contact.name}</h5>
              <p className="card-text">{contact.contact.email}</p>
              <p className="card-text">{contact.contact.number}</p>
            </figcaption>
          </figure>
        </section>
        <section className="col">
          <h2 className="display-6 my-5">Last edits history</h2>
          {
            contact.contact.edited.map((contact) => < EditedHistory contact={contact} />)
          }
        </section>
      </div>
    </div>
  )
}

export default ContactCardDetail
