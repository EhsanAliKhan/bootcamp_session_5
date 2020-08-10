import React, { useState } from 'react';
import Parent from './Parent.js';
import ValueContext from './ValueContext';
import './App.css';

function App() {
  let value = useState(2);
  //let value = 33;
  return (
    <ValueContext.Provider value = {value}>
      <div className="App">
        <h1>Welcome to Fruitables </h1>
        <Parent></Parent>
      </div>
    </ValueContext.Provider>
  );
}

export default App;
