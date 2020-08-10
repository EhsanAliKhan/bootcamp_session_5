import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child() {
  let value = useContext(ValueContext);
    
  return (
    <div>
      <h3>Mamoon istaa kuwanan</h3>
      <h2>Mamoon is {value} number.</h2>
      <h2>Want to upgrade mamoon???? If yes than upgrade him by clicking the button</h2>
      
      <br/>
      <button className="btn" onClick = {()=>{value[1](++value[0])}}>Update button</button>
    </div>
  );
}

export default Child;
