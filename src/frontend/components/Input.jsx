import React, { useState } from 'react';

const Input = props => {
  return (
    <input type={props.type} name={props.name} required="required" 
    placeholder={props.text} className={props.class} />
  );
};

export default Input;