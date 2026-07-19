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
      <SelectTrigger className="h-auto! w-auto gap-1 rounded-full border-0 bg-transparent px-2! py-1.5! text-[0.9375rem] font-normal text-foreground/80 shadow-none transition-colors hover:bg-black/5 hover:text-foreground focus-visible:ring-0 [&_svg]:text-foreground/70">
        <GlobeAltIcon className="h-[18px] w-[18px]" aria-hidden="true" />
        <SelectValue placeholder={language} />
      </SelectTrigger>
      <SelectContent position="popper" sideOffset={8} className="z-[200]">
        {Object.keys(languages).map((key) => (
          <SelectItem key={key} value={key}>
            {languages[key]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
