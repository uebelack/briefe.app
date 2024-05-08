'use client';

import React from 'react';
import Typist from 'react-typist-component';

export default function Teaser({ text }) {
  return (
    <Typist typingDelay={30}>
      <div className="text-xl md:text-3xl mb-4">
        {text}
      </div>
    </Typist>
  );
}
