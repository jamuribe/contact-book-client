import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllContacts } from '../../redux/actions/actions.js';
import ContactCard from '../contactCard/ContactCard.js';


const Dashboard = () => {
  // const [contactList, setContactList] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts());
  }, []);

  const contacts = useSelector(state => state);
  console.log('contacts', contacts[0]);

  return (
    <div className="container">
      <div className="col my-5 text-right">
        <Link to="/add" className="btn btn-outline-dark">Add new contact</Link>
      </div>
      <section class="row">
        {contacts[0] ? (

          contacts[0].map((contact, id) => (
            <ContactCard contact={contact} key={id} className="col-sm" />
          ))

        ) : (
          <h1>Add new contact</h1>
        )}
      </section>
    </div>
  )
}

export default Dashboard
