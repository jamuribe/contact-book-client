import React from 'react';
import './App.css';

import NavBarComponent from './components/navBar/NavBar';
import ContactCard from './components/contactCard/ContactCard';

const App = () => {
  return (
    <div >
      <header>
        < NavBarComponent />
        <ContactCard />
      </header>
    </div>
  );
}

export default App;
