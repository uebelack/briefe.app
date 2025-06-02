/* eslint-disable react/button-has-type */
import React from 'react';

function Button({
  id, type, disabled, children,
}) {
  return (
    <button
      id={id}
      type={type}
      disabled={disabled}
      className="
      py-2
      px-4
      rounded-md
      text-white
      bg-gradient-to-r from-blue to-blue-dark
      hover:from-blue-dark hover:to-blue
      disabled:bg-gray-light
      disabled:text-gray"
    >
      {children}
    </button>
  );
}

export default Button;
