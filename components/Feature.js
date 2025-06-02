import React from 'react';

export default function Feature({ icon, title, description }) {
  return (
    <div className="flex mb-5 p-4 rounded-lg shadow-lg bg-gray-light">
      <div className="text-4xl mr-5 w-16 pt-2 pl-1 text-blue"><i className={`fa fa-${icon}`} /></div>
      <div className="w-full">
        <div className="text-lg font-bold mb-1">{title}</div>
        <div className="text-lg text-gray-dark">{description}</div>
      </div>
    </div>
  );
}
