import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child() {
  let value = useContext(ValueContext);
    
  return (
    <div>
      <h3>Child</h3>
      <Child num = {value}></Child>
    </div>
  );
}

export default Child;
