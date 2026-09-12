"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  FLAG_SVG,
  LANG_LABELS,
  STORAGE_KEY,
  SUPPORTED,
  translations,
  type Lang,
} from "@/lib/i18n/translations";

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function detectLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && (SUPPORTED as readonly string[]).includes(saved)) {
      return saved as Lang;
    }
  } catch {
    /* ignore */
  }
  const nav = (typeof navigator !== "undefined" ? navigator.language : "tr")
    .slice(0, 2)
    .toLowerCase();
  return (SUPPORTED as readonly string[]).includes(nav) ? (nav as Lang) : "tr";
}

function applyDomI18n(t: (key: string) => string, lang: Lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const value = t(key);
    if (el.hasAttribute("data-i18n-html")) {
      el.innerHTML = value;
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key) el.setAttribute("placeholder", t(key));
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (key) el.setAttribute("aria-label", t(key));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (key) el.setAttribute("alt", t(key));
  });

  const titleHost = document.querySelector("[data-i18n-title]");
  const titleKey = titleHost?.getAttribute("data-i18n-title");
  if (titleKey) document.title = t(titleKey);

  const metaDesc = document.querySelector('meta[name="description"]');
  const descHost = document.querySelector("[data-i18n-desc]");
  const descKey = descHost?.getAttribute("data-i18n-desc");
  if (metaDesc) {
    metaDesc.setAttribute("content", t(descKey || "meta.description"));
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  document.querySelectorAll(".lang-switcher").forEach((el) => {
    el.setAttribute("aria-label", t("nav.langAria"));
  });

  document.dispatchEvent(
    new CustomEvent("gw:langchange", { detail: { lang } }),
  );
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");
  const [ready, setReady] = useState(false);

  const t = useCallback(
    (key: string) => {
      const pack = translations[lang] || translations.tr;
      return pack[key] ?? translations.tr[key] ?? key;
    },
    [lang],
  );

  const setLang = useCallback((next: Lang) => {
    if (!(SUPPORTED as readonly string[]).includes(next)) return;
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    setLangState(detectLang());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    applyDomI18n(t, lang);
  }, [lang, t, ready, children]);

  const value = useMemo(
    () => ({ lang, setLang, t }),
    [lang, setLang, t],
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export { FLAG_SVG, LANG_LABELS, SUPPORTED };
export type { Lang };
