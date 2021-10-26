import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ContactCard from '../contactCard/ContactCard.js';


const Dashboard = () => {
  const contacts = useSelector(state => state);

  return (
    <div className="container">
      <div className="col my-5 text-right">
        <Link to="/add" className="btn btn-outline-dark">Add new contact</Link>
      </div>
      <section class="row">
        {
          contacts.map((contact, id) => (
            <ContactCard contact={contact} key={id} className="col-sm" />
          ))
        }
      </section>
    </div>
  )
}

export default Dashboard
