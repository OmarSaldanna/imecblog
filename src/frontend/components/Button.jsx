import React from 'react';
import '../assets/styles/components/Button.scss';

const Button = props => (
  <button onClick={props.action} className={`card-text-button ${props.class}`}>
    <p>
      {props.content}
    </p>
  </button>
);

export default Button;
