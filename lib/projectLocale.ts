import type { Lang } from "@/lib/i18n/translations";

export type ProjectStatus = "mvp" | "concept" | "live";

export type LocalizedText = {
  tr: string;
  en: string;
  de: string;
  es: string;
};

export type LocalizedList = {
  tr: string[];
  en: string[];
  de: string[];
  es: string[];
};

export type Project = {
  slug: string;
  href: string;
  status: ProjectStatus;
  published: boolean;
  order: number;
  year: string;
  platform: string;
  cover: string;
  gallery: string[];
  tech: string[];
  title: LocalizedText;
  tag: LocalizedText;
  lead: LocalizedText;
  summary: LocalizedText;
  process: LocalizedText;
  story: LocalizedText;
  cta: LocalizedText;
  metaDesc: LocalizedText;
  highlights: LocalizedList;
};

export function pickText(value: LocalizedText, lang: Lang) {
  return value[lang] || value.tr || "";
}

export function pickList(value: LocalizedList, lang: Lang) {
  const list = value[lang];
  return list.length ? list : value.tr;
}

export function storyParagraphs(text: string) {
  return text
    .split(/\n{2,}/)
    .map((part) => part.replace(/\n/g, " ").trim())
    .filter(Boolean);
}
