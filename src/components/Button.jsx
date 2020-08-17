import React from 'react';
import '../styles/button.scss';

/**
 * Reusable button component
 */
const Button = ({ children }) => (
  <a href="/" className="button" type="button">
    <span>{children}</span>
  </a>
);

export default Button;
