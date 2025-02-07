import React from 'react';

export default function Heading({ id, level = 1, children }) {
  switch (level) {
    case 1:
      return (<h1 id={id} className="text-2xl pt-5 mb-6">{children}</h1>);
    case 2:
      return (<h2 id={id} className="text-xl pt-1 mb-4">{children}</h2>);
    case 3:
      return (<h3 id={id} className="text-2xl pt-5 mb-6">{children}</h3>);
  };
}
