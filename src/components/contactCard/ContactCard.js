import React from 'react';

const ContactCard = () => {
  return (
    <div>
      <h2>Contact Card</h2>
      <div className="card" style={{ "width": "18rem" }} >
        <img className="card-img-top" src="https://thispersondoesnotexist.com/image" alt="Lets see the face" />
        <div className="card-body">
          <h5 className="card-title">Name</h5>
          <p className="card-text">Email</p>
          <p className="card-text">Phone Number</p>
        </div>
      </div>
    </div>
  )
};

export default ContactCard;
