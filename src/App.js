import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';

import NavBarComponent from './components/navBar/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import ContactCardDetail from './components/contactCardDetail/ContactCardDetail';

const App = () => {
  return (
    <div >
      <NavBarComponent />
      <Switch>
        <Route exact path="/" component={() => <Dashboard />}></Route>
        <Route path="/contact" component={() => <ContactCardDetail />}></Route>
      </Switch>

    </div>
  );
}

export default App;
