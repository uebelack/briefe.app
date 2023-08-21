import React, { ReactNode } from 'react';

export default function Feature({ icon, title, description } : { icon: ReactNode, title: string, description: string }) {
  return (
    <div className="flex mb-5">
      <div className="text-4xl mr-5">{icon}</div>
      <div>
        <div className="text-lg font-bold">{title}</div>
        <div className="text-lg">{description}</div>
      </div>
    </div>
  );
}
