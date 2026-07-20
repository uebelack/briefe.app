import React from "react";
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
import getTranslations from "@/functions/getTranslations";

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

export default function Templates({ templates, locale }) {
  const t = getTranslations(locale);

  return (
    <div className="templates-index">
      <h1 className="templates-title">{t("templates.title")}</h1>
      <div className="templates-grid">
        {templates.map((tpl) => {
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
    </div>
  );
}
