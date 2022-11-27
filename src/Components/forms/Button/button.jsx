import React from 'react';
import './styles.css';

const Button = ({ children, ...otherProps }) => {
  return (
    <button className="my-btn" {...otherProps}>
      {children}
    </button>
  );
}

export default Button