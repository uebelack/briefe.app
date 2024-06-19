'use client';

/* eslint-disable max-len */
import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon, GlobeAltIcon } from '@heroicons/react/20/solid';
import languages from '@/data/languages';

export default function LanguageSelect({ language, locale }) {
  const selectLanguage = (key) => {
    const newLocation = new URL(`/${key}`, window.location.origin);
    window.location.assign(newLocation.toString());
  };

  return (
    <Listbox value={locale} onChange={selectLanguage}>
      <div className="relative">
        <Listbox.Button className="relative w-full cursor-default pl-3 pr-8 text-left w-40">
          <span className="pointer-events-none absolute inset-y-0 left-1 flex items-center pr-2">
            <GlobeAltIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
          <span className="block truncate pl-4">{language}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-0">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg focus:outline-none">
            {Object.keys(languages).filter((key) => key !== locale).map((key) => (
              <Listbox.Option
                key={key}
                className="relative cursor-default select-none py-2 pl-4 pr-4"
                value={key}
              >
                <span className="block text-black truncate">
                  {languages[key]}
                </span>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
