import React from 'react';
import { useSelector, connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ContactCard from '../contactCard/ContactCard.js';


const Dashboard = (props) => {
  // const contacts = useSelector(state => state);
  console.log('props', props.contacts);
  const contacts = props.contacts;

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

const mapStateToProps = (state) => {
  return {
    contacts: state
  }
}

export default connect(mapStateToProps)(Dashboard)
