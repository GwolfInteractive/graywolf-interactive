import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getServiceOffers } from "@/lib/services";
import { getProjects as readProjects } from "@/lib/projects";
import type { Project } from "@/lib/projectLocale";

export type { Project };

const ROOT = process.cwd();

export type ServiceCard = {
  slug: string;
  href: string;
  cover: string;
  titleKey: string;
  descKey: string;
  titleFallback: string;
  descFallback: string;
  offers: { id: string; titleKey: string }[];
};

export type ProjectCard = Project;

export type Announcement = {
  title: string;
  date: string;
  summary: string;
};

const SERVICE_I18N: Record<string, { titleKey: string; descKey: string }> = {
  saas: { titleKey: "services.saas.title", descKey: "services.saas.desc" },
  "mobil-uygulama": {
    titleKey: "services.mobile.title",
    descKey: "services.mobile.desc",
  },
  "mobil-oyun": { titleKey: "services.game.title", descKey: "services.game.desc" },
  "web-gelistirme": { titleKey: "services.web.title", descKey: "services.web.desc" },
};

function readMarkdownDir(rel: string) {
  const dir = path.join(ROOT, rel);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(raw);
      return { file, data: data as Record<string, unknown> };
    });
}

function asBool(value: unknown, fallback = true) {
  return typeof value === "boolean" ? value : fallback;
}

function asDate(value: unknown) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString();
  }
  return String(value || "");
}

export function getServices(): ServiceCard[] {
  return readMarkdownDir("content/hizmetler")
    .filter(({ data }) => asBool(data.published, true))
    .sort((a, b) => Number(a.data.order ?? 99) - Number(b.data.order ?? 99))
    .map(({ file, data }) => {
      const slug = String(data.slug || file.replace(/\.md$/, ""));
      const i18n = SERVICE_I18N[slug];
      return {
        slug,
        href: `/hizmetler/${slug}`,
        cover: String(data.cover || "/assets/service-saas.png"),
        titleKey: i18n?.titleKey ?? "",
        descKey: i18n?.descKey ?? "",
        titleFallback: String(data.title || slug),
        descFallback: String(data.summary || ""),
        offers: getServiceOffers(slug).map(({ id, titleKey }) => ({
          id,
          titleKey,
        })),
      };
    });
}

export function getProjects(): ProjectCard[] {
  return readProjects();
}

export function getAnnouncements(): Announcement[] {
  return readMarkdownDir("content/duyurular")
    .filter(({ data }) => asBool(data.published, true))
    .map(({ data }) => ({
      title: String(data.title || ""),
      date: asDate(data.date),
      summary: String(data.summary || ""),
    }))
    .filter((item) => item.title)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}
