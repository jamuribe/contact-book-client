import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addContact, createRandomContact } from '../../redux/actions/actionCreators.js';

const AddContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [emailFlag, setEmailFlag] = useState(false);
  const [formFlag, setFormFlag] = useState(false);

  const history = useHistory();

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkEmail = contacts[0].find((contact) => {
      return contact.email === email && contact;
    });

    if (!name || !email || !number) {
      setFormFlag(true);
      setEmailFlag(false);
      return;
    }
    if (checkEmail) {
      setFormFlag(false);
      setEmailFlag(true);
      return;
    }

    const data = {
      id: contacts[0][contacts.length - 1].id + 1,
      name,
      email,
      number,
      picture: 'https://thispersondoesnotexist.com/image'
    };

    dispatch(addContact(data));
    history.push('/');
    setEmailFlag(false);
    setFormFlag(false);
  };

  const handleRandomContact = (event) => {
    event.preventDefault();
    dispatch(createRandomContact());
    history.push('/');
  };
  return (
    <section className='container'>
      <title>Add contact</title>
      <h1 className='display-3 text-center my-5'>Add new contact</h1>
      <div className='row'>
        <section className='col-md-6 shadow mx-auto p-5'>
          {formFlag && <h6 className='my-1 text-info'>Please fill in the form</h6>}
          {emailFlag && <h6 className='my-1 text-danger'>This user already exists</h6>}
          <form onSubmit={handleSubmit}>
            <div className='form-group my-2'>
              <input
                type='text'
                placeholder='Name'
                className='form-control'
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </div>
            <div className='form-group my-2'>

              <input
                type='email'
                placeholder='Email'
                className='form-control'
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div className='form-group my-2'>
              <input
                type='number'
                placeholder='Phone Number'
                className='form-control'
                value={number}
                onChange={event => setNumber(event.target.value)}
              />
            </div>
            <div className='form-group my-2'>
              <input
                type='submit' value='Add Contact'
                className='btn btn-block btn-dark form-control'
              />
            </div>
            <div className='form-group my-2'>
              <input
                type='submit' value='Add random contact' onClick={handleRandomContact}
                className='btn btn-block btn-success form-control'
              />
            </div>

          </form>
        </section>
      </div>
    </section>
  );
};

export default AddContact;
