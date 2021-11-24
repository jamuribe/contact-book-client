import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SET_CONTACTS, RANDOM_CONTACT } from '../actions/actionTypes.js';

const initialState = [];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return [...state, action.payload];
    case RANDOM_CONTACT:
      return [...state, action.payload];
    case UPDATE_CONTACT:
      return [...state];
    case DELETE_CONTACT:
      const filteredContacts = state.filter((contact) => {
        return contact._id !== action.payload._id && contact;
      });
      return filteredContacts;
    case SET_CONTACTS:
      return [action.payload];
    default:
      return state;
  }
};

export default contactReducer;
