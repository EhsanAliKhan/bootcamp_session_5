import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child() {
  let value = useContext(ValueContext);
    
  return (
    <div>
      <h2>The initial number is {value}.</h2>
      <br />
      Want to upgrade?
      <button className="btn" onClick = {()=>{value[1](++value[0])}}>Update button</button>
    </div>
  );
}

export default Child;
