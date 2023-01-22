import React from 'react';
import logo from './logo.png';
import './App.css';
import SetUp from './components/SetUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}  alt="logo" />
        <SetUp />
      </header>
    </div>
  );
}

export default App;
