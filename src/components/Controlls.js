import React from 'react';

const Controlls = (props) => {
  const up = 'up';
  const down = 'down';

  return (
    <div>
      <button
        onClick = {props.clickUp}>
        +</button>
      <button
        onClick = {props.clickDown}>
        -</button>
    </div>

  );
}

export default Controlls;
