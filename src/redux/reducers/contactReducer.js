// BRING INITIAL STATE FROM SERVER

const initState = [{
  id: 1,
  name: 'Jose Antonio',
  number: 7875341694,
  email: 'j@j.com',
  edited: []
}]

const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      state = [...state, action.data];
      return state;
    case 'UPDATE_CONTACT':
      const updateState = state.map((contact) => contact.id === action.data.id ? action.data : contact)
      state = updateState;
      return state;
    case 'DELETE_CONTACT':
      const filteredContacts = state.filter((contact) => contact !== action.data && contact);
      state = filteredContacts;
      return state;
    default:
      return state;
  }
}

export default contactReducer;