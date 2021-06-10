import React, { Fragment } from 'react';
import '../style/components/Input.scss';
function Input({ type, id, update }) {
  return (
    <Fragment>
      <label htmlFor={id}>{id}</label>
      <input
        type={type}
        id={id}
        onKeyUp={(e) => {
          update(e.target.value);
        }}></input>
    </Fragment>
  );
}

export default Input;
