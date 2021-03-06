import React from 'react';
import { useLocation, useHistory } from 'react-router';
import EditedHistory from '../editContactDetail/editContactDetail';

const ContactCardDetail = () => {
  const location = useLocation();
  const contact = location.state.contact;
  const history = useHistory();

  const handleButtonClick = (event) => {
    history.push('/edit', { contact });
  };

  return (
    <section className='container'>
      <title>Contact detail</title>
      <div className='row'>
        <section className='col'>
          <figure
            className='card shadow m-3'
            style={{ width: '25rem' }}
          >
            <img
              className='card-img-top rounded mx-auto'
              src={contact.contact.picture}
              alt='User'
            />
            <figcaption className='card-body'>
              <button
                className='col my-3 btn btn-outline-dark'
                onClick={handleButtonClick}
              >
                Edit contact
              </button>
              <h5 className='card-title'>{contact.contact.name}</h5>
              <p className='card-text'>{contact.contact.email}</p>
              <p className='card-text'>{contact.contact.number}</p>
            </figcaption>
          </figure>
        </section>
        <section className='col'>
          <h2 className='display-6 my-5'>Editing history</h2>
          {
            contact.contact.edited.map((contact, id) => <EditedHistory contact={contact} key={id} />)
          }
        </section>
      </div>
    </section>
  );
};

export default ContactCardDetail;
