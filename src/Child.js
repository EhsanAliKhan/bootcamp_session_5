import React from 'react';

function Child(props) {
  return (
    <div>
      <h3>Child</h3>
      <Child num = {props.num}></Child>
    </div>
  );
}

export default Child;
