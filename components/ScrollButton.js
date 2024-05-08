'use client';

import React from 'react';
import { scroller } from 'react-scroll';

export default function ScrollButton({ label, target }) {
  return (
    <button
      className="scroll-button"
      type="button"
      aria-label={label}
      onClick={() => scroller.scrollTo(target, { duration: 200, smooth: true })}
    />
  );
}
