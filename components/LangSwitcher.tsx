"use client";

import { FLAG_SVG, LANG_LABELS, SUPPORTED, useI18n } from "@/components/providers/I18nProvider";

export default function LangSwitcher() {
  const { lang, setLang, t } = useI18n();

  return (
    <div
      className="lang-switcher"
      id="langSwitcher"
      role="group"
      aria-label={t("nav.langAria")}
    >
      {SUPPORTED.map((code) => (
        <button
          key={code}
          type="button"
          className={`lang-btn${lang === code ? " is-active" : ""}`}
          data-lang={code}
          aria-label={LANG_LABELS[code]}
          aria-pressed={lang === code}
          title={LANG_LABELS[code]}
          onClick={() => setLang(code)}
        >
          <span
            className="lang-glass"
            dangerouslySetInnerHTML={{ __html: FLAG_SVG[code] }}
          />
        </button>
      ))}
    </div>
  );
}
