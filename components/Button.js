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
      border
      rounded-md
      hover:bg-black
      hover:text-white
      disabled:bg-gray-light
      disabled:text-gray"
    >
      {children}
    </button>
  );
}

export default Button;
