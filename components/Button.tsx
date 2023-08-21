/* eslint-disable react/button-has-type */
import React, { ReactNode } from 'react';

interface Props {
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: ReactNode;
}

function Button({
  id, type, disabled, children,
} : Props) {
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
