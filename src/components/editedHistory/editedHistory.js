import React from 'react';

const EditedHistory = (contact) => {
  console.log(contact);
  return (
    <div className="list-group my-3">
      <div className="list-group-item list-group-item-action flex-column shadow ">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{contact.contact.name}</h5>
          <small>3 days ago {contact.contact.time}</small>
        </div>
        <p className="mb-1">{contact.contact.email}</p>
        <small className="text-muted">{contact.contact.number}</small>
      </div>
    </div>
  )
}

export default EditedHistory;
