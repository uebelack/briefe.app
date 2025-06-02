import React from 'react';

export default function Feature({ icon, title, description }) {
  return (
    <div className="p-5 border rounded-lg shadow-sm bg-white text-center">
      <div className="text-blue text-3xl mb-3">
        <i className={`fa fa-${icon}`} />
      </div>
      <div className="text-lg font-bold mb-1">{title}</div>
      <div className="text-sm text-gray-dark">{description}</div>
    </div>
  );
}
