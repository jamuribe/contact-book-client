import React from 'react';

const EditedHistory = (contact) => {
  return (
    <section className="list-group my-3">
      <title>Contact history</title>
      <section className="list-group-item list-group-item-action flex-column shadow ">
        <section className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            {contact.contact.name}
          </h5>
          <small>
            Edited on: {contact.contact.time}
          </small>
        </section>
        <p className="mb-1">
          {contact.contact.email}
        </p>
        <small className="text-muted">
          {contact.contact.number}
        </small>
      </section>
    </section>
  )
}

export default EditedHistory;
