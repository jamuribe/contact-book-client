import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from '../../components/contactCard/ContactCard.js';


const Dashboard = (props) => {
  let contacts = props.props.contacts;

  return (
    <section className="container">
      <title>Dashboard</title>
      <section className="col my-5 text-right">
        <Link
          to="/add"
          className="btn btn-outline-dark"
        >
          Add new contact
        </Link>
      </section>
      <section class="row">
        {contacts.length ? (
          contacts[0].map((contact, id) => (
            <ContactCard
              contact={contact}
              key={id}
              className="col-sm"
            />
          ))
        ) : (
          <h1>Add new contact</h1>
        )}
      </section>
    </section>
  )
}

export default Dashboard;