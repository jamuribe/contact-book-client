import axios from "axios";
import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SET_CONTACTS, RANDOM_CONTACT } from '../actionTypes.js';

export const addOne = (contact) => ({
  type: ADD_CONTACT,
  payload: contact
})

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact
})

export const deleteContact = (contact) => ({
  type: DELETE_CONTACT,
  payload: contact
});

export const setContacts = (contacts) => ({
  type: SET_CONTACTS,
  payload: contacts
})

export const randomContact = (contact) => ({
  type: RANDOM_CONTACT,
  payload: contact
})

export const getAllContacts = () => async (dispatch, getState) => {
  await axios.get('http://localhost:3001/').then(response =>
    dispatch(setContacts(response.data))
  )
    .catch(error => console.log('Error 1: ', error))

}

export const addContact = (contact) => async (dispatch, getState) => {
  console.log(contact)
  await axios.post('http://localhost:3001/add', contact).then(response => {
    dispatch(addOne(response.data))
  })
    .catch(error => console.log('Error 2: ', error))

}

export const createRandomContact = (id) => async (dispatch, getState) => {
  await axios.post(`http://localhost:3001/random`, id).then(response => {
    dispatch(randomContact(response.data))
  })
    .catch(error => console.log('Error 3: ', error))
}

export const eraseContact = (contact) => async (dispatch, getState) => {
  await axios.delete(`http://localhost:3001/delete`, contact).then(response => {
    dispatch(deleteContact(response.data))
  })
    .catch(error => console.log('Error 4: ', error))
}
