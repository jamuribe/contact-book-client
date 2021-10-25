import React from 'react';
import './App.css';

import NavBarComponent from './components/navBar/navBar';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello this will be the contact list dashboard</h1>
        < NavBarComponent />
      </header>
    </div>
  );
}

export default App;
