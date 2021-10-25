import React from 'react';

const AddContact = () => {
  return (
    <div className="container">
      <h1 className="display-3 text-center my-5">Add new contact</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form>
            <div className="form-group my-2">
              <input type="text" placeholder="Name" className="form-control" />
            </div>
            <div className="form-group my-2">
              <input type="email" placeholder="Email" className="form-control" />
            </div>
            <div className="form-group my-2">
              <input type="number" placeholder="Phone Number" className="form-control" />
            </div>
            <div className="form-group my-2">
              <input type="submit" value="Add Contact"
                className="btn btn-block btn-dark form-control" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddContact;
