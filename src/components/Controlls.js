import React from 'react';

const Controlls = (props) => {
  return (
    <button
      onClick = {props.clickUp(up)}>
      + </button>
    <button
      onClick = {props.clickDown(down)}>
      - </button>
  );
}

export default Controlls;
