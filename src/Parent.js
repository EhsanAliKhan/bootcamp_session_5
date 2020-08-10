import React from 'react';
import Child from './Child.js';

function Parent(props) {
  return (
    <div>
      <h2>Old Parent </h2>
      <Child num = {props.num}></Child>
    </div>
  );
}

export default Parent;
