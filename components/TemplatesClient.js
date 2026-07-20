"use client";

import React, { useState } from "react";
import {
  Newspaper,
  MapPin,
  Briefcase,
  Smartphone,
  KeyRound,
  Shield,
  BookOpen,
  CalendarCheck,
  IdCard,
  Ticket,
  PackageOpen,
  HandHeart,
  Cake,
  GraduationCap,
  Heart,
  BriefcaseBusiness,
  Sunset,
  Baby,
  PartyPopper,
  Flower2,
  Award,
  Gift,
  School,
  PlaneTakeoff,
  Search,
  HeartHandshake,
  Handshake,
  House,
  UserCheck,
  CalendarX,
  Building2,
  CalendarClock,
  FileText,
} from "lucide-react";

const ICONS = {
  Newspaper,
  MapPin,
  Briefcase,
  Smartphone,
  KeyRound,
  Shield,
  BookOpen,
  CalendarCheck,
  IdCard,
  Ticket,
  PackageOpen,
  HandHeart,
  Cake,
  GraduationCap,
  Heart,
  BriefcaseBusiness,
  Sunset,
  Baby,
  PartyPopper,
  Flower2,
  Award,
  Gift,
  School,
  PlaneTakeoff,
  Search,
  HeartHandshake,
  Handshake,
  House,
  UserCheck,
  CalendarX,
  Building2,
  CalendarClock,
};

export default function TemplatesClient({ templates, locale, searchPlaceholder, noResults }) {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const filtered = q
    ? templates.filter((tpl) =>
        `${tpl.title ?? ""} ${tpl.description ?? ""} ${tpl.subject ?? ""}`
          .toLowerCase()
          .includes(q),
      )
    : templates;

  return (
    <>
      <div className="templates-search">
        <Search className="templates-search-icon" strokeWidth={1.75} aria-hidden />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={searchPlaceholder}
          aria-label={searchPlaceholder}
        />
      </div>

      {filtered.length > 0 ? (
        <div className="templates-grid">
          {filtered.map((tpl) => {
            const Icon = ICONS[tpl.icon] ?? FileText;
            return (
              <a className="template-card" href={`/${locale}/templates/${tpl.slug}`} key={tpl.slug}>
                <span className="template-card-icon" aria-hidden>
                  <Icon strokeWidth={1.75} />
                </span>
                <span className="template-card-title">{tpl.title ?? tpl.subject}</span>
                <span className="template-card-teaser">{tpl.description ?? tpl.teaser}</span>
              </a>
            );
          })}
        </div>
      ) : (
        <p className="templates-empty">{noResults}</p>
      )}
    </>
  );
}
