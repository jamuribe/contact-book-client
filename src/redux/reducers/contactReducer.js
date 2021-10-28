import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SET_CONTACTS, RANDOM_CONTACT } from '../actions/actionTypes.js';

const initialState = [];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      state = [...state, action.payload];
      return state;
    case RANDOM_CONTACT:
      state = [...state, action.payload];
      return state;
    case UPDATE_CONTACT:
      state = [...state];
      return state;
    case DELETE_CONTACT:
      const filteredContacts = state.filter((contact) => {
        return contact._id !== action.payload._id && contact;
      });
      state = filteredContacts;
      return state;
    case SET_CONTACTS:
      return [action.payload];
    default:
      return state;
  }
};

export default contactReducer;
