import { ADD_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SET_CONTACTS, RANDOM_CONTACT } from "../actionTypes";

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
      const updateState = state.map((contact) => contact.id === action.payload.id ? action.payload : contact)
      state = updateState;
      return state;
    case DELETE_CONTACT:
      const filteredContacts = state.filter((contact) => contact !== action.payload && contact);
      state = filteredContacts;
      return state;
    case SET_CONTACTS:
      return [action.payload];
    default:
      return state;
  }
}


export default contactReducer;