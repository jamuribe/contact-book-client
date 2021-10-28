import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SET_CONTACTS, RANDOM_CONTACT } from './actionTypes.js';

export const addOne = (contact) => ({
  type: ADD_CONTACT,
  payload: contact
})

export const updateOne = (contact) => ({
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

export const randomContact = (contacts) => ({
  type: RANDOM_CONTACT,
  payload: contacts
})