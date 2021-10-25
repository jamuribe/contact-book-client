import React from 'react'
import { Link } from 'react-router-dom'

const EditContact = () => {
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
            <div className="">
              <input type="submit" value="Update Contact"
                className="btn btn-dark m-2" />
              <Link to="/" className="btn m-2 btn-danger">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditContact
