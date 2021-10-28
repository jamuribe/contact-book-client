import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { eraseContact } from '../../redux/actions/actions';

const EditContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const contactProp = location.state.contact.contact;

  const contacts = useSelector(state => state);
  const currentContact = contacts[0].find(contact => contact === contactProp); // fix this so that there are always contacts

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);


  const handleSubmit = (event) => {
    event.preventDefault();
    const checkEmail = contacts[0].find((contact) => contact.id !== contactProp.id && contact.email === email && contact);

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
      number,
      edited: [...contactProp.edited, { name: contactProp.name, email: contactProp.email, number: contactProp.number, time: timeStamp() }]
    }
    dispatch({ type: 'UPDATE_CONTACT', data });
    history.push('/');
  }


  const deleteContact = (event) => {
    console.log(currentContact)
    event.preventDefault();
    dispatch(eraseContact(currentContact));
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
                  <button type="button" onClick={deleteContact} className="btn btn-small btn-danger">Delete</button>
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

let timeStamp = () => {
  let current = new Date();
  let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
  let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
  let dateTime = cDate + ' ' + cTime;
  return dateTime;
}

export default EditContact
