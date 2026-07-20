"use client";

import React from "react";
import { GlobeAltIcon } from "@heroicons/react/20/solid";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import languages from "@/data/languages";

export default function LanguageSelect({ language, locale }) {
  const selectLanguage = (key) => {
    if (key === locale) {
      return;
    }
    const newLocation = new URL(`/${key}`, window.location.origin);
    window.location.assign(newLocation.toString());
  };

  return (
    <Select value={locale} onValueChange={selectLanguage}>
      <SelectTrigger className="h-auto! w-auto gap-1 border-0 bg-transparent p-0! nav-lang shadow-none hover:bg-transparent focus-visible:ring-0">
        <GlobeAltIcon className="h-5 w-5" aria-hidden="true" />
        <SelectValue placeholder={language} />
      </SelectTrigger>
      <SelectContent position="popper" sideOffset={10} className="z-[200] min-w-40 p-1.5">
        {Object.keys(languages).map((key) => (
          <SelectItem key={key} value={key} className="rounded-lg py-2 pr-8 pl-3 text-[0.95rem]">
            {languages[key]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
