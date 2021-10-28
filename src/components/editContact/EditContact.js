import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import getAllContacts, { eraseContact, updateContact } from '../../redux/actions/actionCreators.js';

const EditContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const contactProp = location.state.contact.contact;
  const contacts = useSelector(state => state);

  const handleSubmit = (event) => {
    event.preventDefault();

    const checkEmail = contacts[0].find((contact) => {
      return contact._id !== contactProp._id && contact.email === email && contact;
    });

    if (!name || !email || !number) {
      return 'Please fill in the form'; // FIX THIS
    }
    if (checkEmail) {
      console.log('this email already exist');
      return; // FIX THIS
    }
    const data = {
      _id: contactProp._id,
      name,
      email,
      number,
      edited: [...contactProp.edited, { name: contactProp.name, email: contactProp.email, number: contactProp.number, time: timeStamp() }],
      picture: contactProp.picture
    };

    dispatch(updateContact(data));
    history.push('/');
  };

  const deleteContact = (event) => {
    event.preventDefault();
    dispatch(eraseContact(contactProp));
    dispatch(getAllContacts);
    history.push('/');
  };

  return (
    <section className='container'>
      <title>Edit Contact</title>
      {contactProp
        ? (
          <>
            <h1 className='display-3 text-center my-5'>Edit contact {contactProp.name}</h1>
            <div className='row'>
              <section className='col-md-6 shadow mx-auto p-5'>
                <form onSubmit={handleSubmit}>
                  <div className='form-group my-2'>
                    <input
                      type='text'
                      placeholder={contactProp.name} className='form-control'
                      value={name}
                      onChange={event => setName(event.target.value)}
                    />
                  </div>
                  <div className='form-group my-2'>
                    <input
                      type='email'
                      placeholder={contactProp.email}
                      className='form-control'
                      value={email}
                      onChange={event => setEmail(event.target.value)}
                    />
                  </div>
                  <div className='form-group my-2'>
                    <input
                      type='number'
                      placeholder={contactProp.number}
                      className='form-control'
                      value={number}
                      onChange={event => setNumber(event.target.value)}
                    />
                  </div>
                  <div className=''>
                    <input
                      type='submit' value='Update Contact'
                      className='btn btn-dark m-2'
                    />
                    <Link to='/' className='btn m-2 btn-danger'>
                      Cancel
                    </Link>
                    <button type='button' onClick={deleteContact} className='btn btn-small btn-danger'>Delete</button>
                  </div>
                </form>
              </section>
            </div>
          </>
          )
        : (
          <h1 className='display-3 my-5 text-center'>Not a current contact</h1>
          )}

    </section>
  );
};

const timeStamp = () => {
  const current = new Date();
  const cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
  const cTime = current.getHours() + ':' + current.getMinutes() + ':' + current.getSeconds();
  const dateTime = cDate + ' ' + cTime;
  return dateTime;
};

export default EditContact;
