import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Lang } from "@/lib/i18n/translations";
import type {
  LocalizedList,
  LocalizedText,
  Project,
  ProjectStatus,
} from "@/lib/projectLocale";

export type {
  LocalizedList,
  LocalizedText,
  Project,
  ProjectStatus,
} from "@/lib/projectLocale";

const ROOT = process.cwd();
const DIR = path.join(ROOT, "content/projeler");

function asBool(value: unknown, fallback = true) {
  return typeof value === "boolean" ? value : fallback;
}

function asString(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function asStringList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (typeof item === "string") return item.trim();
      if (item && typeof item === "object") {
        const row = item as Record<string, unknown>;
        return String(row.image || row.src || row.url || row.item || "").trim();
      }
      return "";
    })
    .filter(Boolean);
}

function localeBlock(data: Record<string, unknown>, lang: Lang) {
  const block = data[lang];
  return block && typeof block === "object"
    ? (block as Record<string, unknown>)
    : {};
}

function localizedText(
  data: Record<string, unknown>,
  key: string,
  fallback = "",
): LocalizedText {
  const tr = asString(data[key], fallback);
  return {
    tr,
    en: asString(localeBlock(data, "en")[key], tr),
    de: asString(localeBlock(data, "de")[key], tr),
    es: asString(localeBlock(data, "es")[key], tr),
  };
}

function localizedList(
  data: Record<string, unknown>,
  key: string,
): LocalizedList {
  const tr = asStringList(data[key]);
  const from = (lang: Lang) => {
    const list = asStringList(localeBlock(data, lang)[key]);
    return list.length ? list : tr;
  };
  return { tr, en: from("en"), de: from("de"), es: from("es") };
}

function asStatus(value: unknown): ProjectStatus {
  if (value === "mvp" || value === "concept" || value === "live") return value;
  return "concept";
}

function parseProject(file: string, raw: string): Project | null {
  let parsed: ReturnType<typeof matter>;
  try {
    parsed = matter(raw);
  } catch (error) {
    console.error(`[projects] YAML parse failed in ${file}`, error);
    return null;
  }
  const { data, content } = parsed;
  const front = data as Record<string, unknown>;
  const slug = asString(front.slug, file.replace(/\.md$/, ""));
  if (!slug || slug.startsWith("_")) return null;

  const storyTr = content.trim();
  const story = localizedText(front, "story", storyTr);
  if (storyTr) story.tr = storyTr;

  return {
    slug,
    href: `/projeler/${slug}`,
    status: asStatus(front.status),
    published: asBool(front.published, true),
    order: Number(front.order ?? 99),
    year: asString(front.year),
    platform: asString(front.platform),
    cover: asString(front.cover, "/assets/project-diet-tracking.png"),
    gallery: asStringList(front.gallery),
    tech: asStringList(front.tech),
    title: localizedText(front, "title", slug),
    tag: localizedText(front, "tag"),
    lead: localizedText(front, "lead", asString(front.summary)),
    summary: localizedText(front, "summary"),
    process: localizedText(front, "process"),
    story,
    cta: localizedText(front, "cta"),
    metaDesc: localizedText(front, "metaDesc", asString(front.summary)),
    highlights: localizedList(front, "highlights"),
  };
}

export function getProjects(): Project[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(DIR, file), "utf8");
      return parseProject(file, raw);
    })
    .filter((item): item is Project => Boolean(item && item.published))
    .sort((a, b) => a.order - b.order);
}

export function getProject(slug: string) {
  return getProjects().find((item) => item.slug === slug) ?? null;
}

export function getProjectSlugs() {
  return getProjects().map((item) => item.slug);
}
