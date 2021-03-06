import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';

import NavBarComponent from './components/navBar/NavBar';
import Dashboard from './containers/dashboard/Dashboard';
import ContactCardDetail from './components/contactCardDetail/ContactCardDetail';
import AddContact from './components/addContact/AddContact';
import EditContact from './components/editContact/EditContact';

const App = (props) => {
  return (
    <div className='App'>
      <NavBarComponent />
      <Switch>
        <Route exact path='/' component={() => <Dashboard props={props} />} />
        <Route path='/contact' component={() => <ContactCardDetail />} />
        <Route path='/add' component={() => <AddContact />} />
        <Route path='/edit' component={() => <EditContact />} />
      </Switch>

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state
  };
};

export default connect(mapStateToProps)(App);
