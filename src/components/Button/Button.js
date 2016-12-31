import React from 'react';
import './Button.css';

const Button = (props) => (
  <button className="Button" onClick={props.onClick}>{props.text}</button>
);

export default Button;