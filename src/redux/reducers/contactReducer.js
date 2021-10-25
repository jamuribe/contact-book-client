const initState = [{
  id: 1,
  name: 'Jose Antonio',
  number: 7875341694,
  email: 'j@j.com'
}]

const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      state = [...state, action.data];
      return state;
    default:
      return state;
  }
}

export default contactReducer;