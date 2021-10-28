import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addContact, createRandomContact } from '../../redux/actions/actionCreators.js';

const AddContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const history = useHistory();

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkEmail = contacts.find((contact) => contact.email === email && contact);

    if (!name || !email || !number) {
      return 'Please fill in the form'; // FIX THIS
    }
    if (checkEmail) {
      console.log('this email already exist');
      return; // FIX THIS
    }
    const data = {
      id: contacts[0][contacts.length - 1].id + 1,
      name,
      email,
      number,
      picture: 'soon'
    }

    dispatch(addContact(data));
    history.push('/');
  }

  const handleRandomContact = (event) => {
    event.preventDefault();
    dispatch(createRandomContact());
    history.push('/');
  }

  return (
    <section className="container">
      <title>Add contact</title>
      <h1 className="display-3 text-center my-5">Add new contact</h1>
      <div className="row">
        <section className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group my-2">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </div>
            <div className="form-group my-2">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group my-2">
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control"
                value={number}
                onChange={event => setNumber(event.target.value)}
              />
            </div>
            <div className="form-group my-2">
              <input type="submit" value="Add Contact"
                className="btn btn-block btn-dark form-control" />
            </div>
            <div className="form-group my-2">
              <input type="submit" value="Add random contact" onClick={handleRandomContact}
                className="btn btn-block btn-success form-control" />
            </div>

          </form>
        </section>
      </div>
    </section>
  )
}

export default AddContact;
