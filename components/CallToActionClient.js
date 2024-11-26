import React from 'react';
import Image from 'next/image';

export default function CallToActionClient({ text }) {
  return (
    <div className="call-to-action bg-blue text-white mt-10 ml-3 mr-3 p-8">
      <div className="text-xl grid place-items-center">
        {text}
      </div>
      <div className="grid place-items-center">
        <div className="grid grid-cols-2 gap-10">
          <a href="http://itunes.apple.com/app/letter/id498506154">
            <Image src="/app_store_en.svg" alt="App Store" width={150} height={50} className="mt-5" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=dev.uebelacker.letter" style={{marginTop: '2px'}}>
            <Image src="/play_store_en.svg" alt="App Store" width={150} height={50} className="mt-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
