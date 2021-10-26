import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';

const EditContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();


  const location = useLocation();
  const contactProp = location.state.contact.contact;

  const contacts = useSelector(state => state);
  const currentContact = contacts.find(contact => contact === contactProp);
  console.log(currentContact)

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);


  const handleSubmit = (event) => {
    event.preventDefault();
    const checkEmail = contacts.find((contact) => contact.id !== contactProp.id && contact.email === email && contact);

    if (!name || !email || !number) {
      return 'Please fill in the form'; // FIX THIS
    }
    if (checkEmail) {
      console.log('this email already exist');
      return; // FIX THIS
    }
    // MAKE API CALL TO STORE NEW CONTACT
    const data = {
      id: contactProp.id,
      name,
      email,
      number
    }
    dispatch({ type: 'UPDATE_CONTACT', data });
    history.push('/');
  }

  const deleteContact = (contact) => {
    dispatch({ type: 'DELETE_CONTACT', data: contact });
    history.push('/');
  }

  return (
    <div className="container">
      {currentContact ? (
        <>
          <h1 className="display-3 text-center my-5">Edit contact {contactProp.name}</h1>
          <div className="row">
            <div className="col-md-6 shadow mx-auto p-5">
              <form onSubmit={handleSubmit}>
                <div className="form-group my-2">
                  <input
                    type="text"
                    placeholder={contactProp.name} className="form-control"
                    value={name}
                    onChange={event => setName(event.target.value)}
                  />
                </div>
                <div className="form-group my-2">
                  <input
                    type="email"
                    placeholder={contactProp.email}
                    className="form-control"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                  />
                </div>
                <div className="form-group my-2">
                  <input
                    type="number"
                    placeholder={contactProp.number}
                    className="form-control"
                    value={number}
                    onChange={event => setNumber(event.target.value)}
                  />
                </div>
                <div className="">
                  <input type="submit" value="Update Contact"
                    className="btn btn-dark m-2" />
                  <Link to="/" className="btn m-2 btn-danger">
                    Cancel
                  </Link>
                  <button type="button" onClick={() => deleteContact(currentContact)} className="btn btn-small btn-danger">Delete</button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">Not a current contact</h1>
      )}

    </div>
  )
}

export default EditContact
