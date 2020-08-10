import React, { useState} from 'react';
import Parent from './Parent.js';
import './App.css';

function App() {
  let [number, setNumber] =useState(10)
  return (
    <div className="App">
      <h1>Welcome to App.JS </h1>
      <Parent num={number}></Parent>
      <button onClick = {()=>{setNumber(++number)}}>Update number</button>
    </div>
  );
}

export default App;
