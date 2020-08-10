import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child() {
  let value = useContext(ValueContext);
    
  return (
    <div>
      <h3>Child</h3>
      Child num = {value}
      <br/>
      <button className="btn" onClick = {()=>{value[1](++value[0])}}>Update button</button>
    </div>
  );
}

export default Child;
