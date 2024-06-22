import React from 'react';
import Image from 'next/image';

export default function CallToActionClient({ text }) {
  return (
    <div className="call-to-action bg-blue text-white mt-10 ml-3 mr-3 p-8">
      <a href="http://itunes.apple.com/app/letter/id498506154" className="text-xl grid place-items-center">
        {text}
        <Image src="/app_store_en.svg" alt="App Store" width={150} height={50} className="mt-5 content-center" />
      </a>
    </div>
  );
}
