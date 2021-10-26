import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';

import NavBarComponent from './components/navBar/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import ContactCardDetail from './components/contactCardDetail/ContactCardDetail';
import AddContact from './components/addContact/AddContact';
import EditContact from './components/editContat/EditContact';

const App = () => {
  return (
    <div className="App">
      <NavBarComponent />
      <Switch>
        <Route exact path="/" component={() => <Dashboard />}></Route>
        <Route path="/contact" component={() => <ContactCardDetail />}></Route>
        <Route path="/add" component={() => <AddContact />}></Route>
        <Route path="/edit" component={() => <EditContact />}></Route>
      </Switch>

    </div>
  );
}

export default App;
