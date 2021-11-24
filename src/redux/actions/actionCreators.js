import { setContacts, addOne, randomContact, deleteContact, updateOne } from './actions';
import * as api from '../../apiService/apiService.js';


const getAllContacts = () => (dispatch) => {
  api.getContactsAPI().then(response =>
    dispatch(setContacts(response.data))
  ).catch(error => console.log('Error 1.1: ', error));
};

export const addContact = (contact) => (dispatch) => {
  api.addContactAPI(contact).then(response => {
    dispatch(addOne(response.data));
  }).then(
    setTimeout(() => {
      dispatch(getAllContacts());
    }, 1000)
  ).catch(error => console.log('Error 4.1: ', error));
};

export const createRandomContact = () => (dispatch) => {
  api.createRandomContactAPI().then(response => {
    dispatch(randomContact());
  }).then(
    setTimeout(() => {
      dispatch(getAllContacts());
    }, 1000)
  ).catch(error => console.log('Error 5.1: ', error));
};

export const eraseContact = (contact) => (dispatch) => {
  api.deleteContactAPI(contact).then(response => {
    dispatch(deleteContact(contact));
  }).then(
    dispatch(getAllContacts())
  ).catch(error => console.log('Error 3.1: ', error));
};
export const updateContact = (contact) => (dispatch) => {
  api.updateContactAPI(contact).then(response => {
    dispatch(updateOne(contact));
  }).then((contact) => dispatch(getAllContacts())
  ).catch(error => console.log('Error 2.1: ', error));
};

export default getAllContacts;
