import React from 'react'
import { Link } from 'react-router-dom';

import ContactCard from '../contactCard/ContactCard.js';


const Dashboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-right">
          <Link to="/add" className="btn btn-outline-dark">Add new contact</Link>
        </div>
        <div className="col-md-6 mx-auto">

          <h1>Dashboard</h1>
          <ContactCard />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
