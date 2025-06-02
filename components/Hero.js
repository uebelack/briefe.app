import React from 'react';
import Image from 'next/image';
import Container from './Container';

export default function Hero({ locale, title, tagline }) {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white pt-20 pb-32">
      <Container className="flex flex-col-reverse md:flex-row items-center">
        <div className="flex-1 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl mb-8">{tagline}</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="http://itunes.apple.com/app/letter/id498506154">
              <Image src="/app_store_en.svg" alt="App Store" width={150} height={50} />
            </a>
            <a href="https://play.google.com/store/apps/details?id=dev.uebelacker.letter">
              <Image src="/play_store_en.svg" alt="Play Store" width={150} height={50} />
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src={`/devices_${locale?.startsWith('de') ? 'de' : 'en'}.png`}
            alt="Letter app"
            width={400}
            height={300}
            className="rounded-md shadow-2xl"
            unoptimized
          />
        </div>
      </Container>
    </section>
  );
}
