import axios from 'axios';
import 'dotenv/config.js';
import { setContacts, addOne, randomContact, deleteContact, updateOne } from './actions';
// const url = process.env.URL;

const getAllContacts = () => async (dispatch) => {
  await axios.get('http://localhost:3001/').then(response =>
    dispatch(setContacts(response.data))
  ).catch(error => console.log('Error 1: ', error));
};

export const addContact = (contact) => async (dispatch) => {
  await axios.post('http://localhost:3001/add', contact).then(response => {
    dispatch(addOne(response.data));
  }).then(
    setTimeout(() => {
      dispatch(getAllContacts());
    }, 1000)
  ).catch(error => console.log('Error 2: ', error));
};

export const createRandomContact = () => async (dispatch) => {
  await axios.post('http://localhost:3001/random').then(response => {
    dispatch(randomContact());
  }).then(
    setTimeout(() => {
      dispatch(getAllContacts());
    }, 1000)
  ).catch(error => console.log('Error 3: ', error));
};

export const eraseContact = (contact) => async (dispatch) => {
  await axios.delete('http://localhost:3001/erase', { data: { contact } }).then(response => {
    dispatch(deleteContact(contact));
  }).then(
    dispatch(getAllContacts())
  ).catch(error => console.log('Error 4: ', error));
};
export const updateContact = (contact) => async (dispatch) => {
  await axios.put('http://localhost:3001/update', { data: { contact } }).then(response => {
    dispatch(updateOne(contact));
  }).then((contact) => dispatch(getAllContacts())
  ).catch(error => console.log('Error 2: ', error));
};

export default getAllContacts;
