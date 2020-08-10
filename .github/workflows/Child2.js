import React, { useContext, useReducer } from 'react';
import numberReducer from './numberReducer';

function Child2() {
  let value = useContext(ValueContext);
  let [state, dispatch] = useReducer(numberReducer,0);
    
  return (
    <div>
      <h3>Child 2 number {state}</h3>
      <br/>
      <button onClick = {()=>{dispatch({type:"Increment"})}} >Increment</button>
      <button onClick = {()=>{dispatch({type:"Decrement"})}} >Decrement</button>
    </div>
  );
}

export default Child2;