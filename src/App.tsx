import React from 'react';
import logo from './logo.png';
import './App.css';
import {Weather} from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}  alt="logo" />
        <Weather/>
      </header>
    </div>
  );
}

export default App;
