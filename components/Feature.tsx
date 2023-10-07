import React, { ReactNode } from 'react';

export default function Feature({ icon, title, description } : { icon: ReactNode, title: string, description: string }) {
  return (
    <div className="flex mb-5">
      <div className="text-4xl mr-5 w-16 pt-2 pl-1"><i className={`fa fa-${icon}`} /></div>
      <div className="w-full">
        <div className="text-lg font-bold">{title}</div>
        <div className="text-lg">{description}</div>
      </div>
    </div>
  );
}
