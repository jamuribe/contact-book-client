import { createStore, applyMiddleware } from "redux";
import contactReducer from "./redux/reducers/contactReducer";
import thunk from "redux-thunk";

const store = createStore(contactReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))

export default store;