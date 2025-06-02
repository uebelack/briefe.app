'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { scroller } from 'react-scroll';
import LanguageSelect from './LanguageSelect';
import languages from '@/data/languages';

export default function Navigation({
  showBlog,
  language,
  title,
  details,
  features,
  blog,
  contact,
  faq,
  help,
  helpLink,
  download,
  locale,
}) {
  const handleOnClick = (e, target) => {
    if (Object.keys(languages).indexOf(window.location.pathname.substring(1)) >= 0) {
      scroller.scrollTo(target, { duration: 200, smooth: true });
      e.preventDefault();
    }
  };

  return (
    <header className="fixed top-0 w-full bg-blue/90 backdrop-blur-md shadow-md text-white">
      <div className="md:container px-4 py-3 fade-in flex flex-col md:flex-row">
        <div className="flex flex-grow">
          <Link href="/" className="flex items-center transition ease-in-out delay-150 flex-grow">
            <Image src="/logo.svg" alt="Letter logo" width={50} height={35} />
            <div className="text-2xl ml-2 text-white">{title}</div>
          </Link>
          <div className="md:hidden mt-2"><LanguageSelect language={language} locale={locale} /></div>
        </div>
        <ul className="flex flex-wrap md:pl-1 pt-1 md:pt-1.5 ">
          <li className="mr-2"><a href={`/${locale}#details`} onClick={(e) => handleOnClick(e, 'details')}>{details}</a></li>
          <li className="mr-2"><a href={`/${locale}#features`} onClick={(e) => handleOnClick(e, 'features')}>{features}</a></li>
          { showBlog && (<li className="mr-2"><a href={`/${locale}#blog`} onClick={(e) => handleOnClick(e, 'blog')}>{blog}</a></li>) }
          <li className="mr-2"><a href={`/${locale}#contact`} onClick={(e) => handleOnClick(e, 'contact')}>{contact}</a></li>
          <li className="mr-2"><a href={`/${locale}/faq`}>{faq}</a></li>
          <li className="mr-2"><a href={`/${locale}/${helpLink}`}>{help}</a></li>
          <a className="mr-2" href="http://itunes.apple.com/app/letter/id498506154">{download}</a>
          <li className="hidden md:block">|</li>
          <li className="hidden md:block"><LanguageSelect language={language} locale={locale} /></li>
        </ul>
      </div>
    </header>
  );
}
