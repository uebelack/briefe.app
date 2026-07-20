import React from "react";

export default function Heading({ id, level = 1, children }) {
  switch (level) {
    case 1:
      return (
        <h1 id={id} className="text-3xl md:text-4xl font-light tracking-tight mb-5">
          {children}
        </h1>
      );
    case 2:
      return (
        <h2 id={id} className="text-2xl md:text-3xl font-light tracking-tight mt-10 mb-4">
          {children}
        </h2>
      );
    case 3:
      return (
        <h3 id={id} className="text-xl font-light mt-6 mb-3">
          {children}
        </h3>
      );
    default:
      return (
        <h1 id={id} className="text-3xl md:text-4xl font-light tracking-tight mb-5">
          {children}
        </h1>
      );
  }
}
