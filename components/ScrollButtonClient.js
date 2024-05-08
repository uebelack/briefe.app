'use client';

import React from 'react';
import { scroller } from 'react-scroll';

export default function ScrollButton({ target }) {
  return (
    <button
      className="scroll-button"
      type="button"
      // aria-label={t('common.scroll_down')}
      onClick={() => scroller.scrollTo(target, { duration: 200, smooth: true })}
    />
  );
}
