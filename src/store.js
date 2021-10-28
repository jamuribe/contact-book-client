import { createStore, applyMiddleware } from 'redux';
import contactReducer from './redux/reducers/contactReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(contactReducer, composedEnhancer);

export default store;
