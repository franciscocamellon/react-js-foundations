import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [personName,setPersonName] = React.useState('');

  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {personName}, edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type="text" onChange={(e) => setPersonName(e.target.value)}/>
      </header>
    </div>
  );
}

export default App;
