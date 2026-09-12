"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LangSwitcher from "@/components/LangSwitcher";
import { useI18n } from "@/components/providers/I18nProvider";

type HeaderProps = {
  variant?: "home" | "detail";
  activeNav?: "hizmetler" | "projeler" | null;
};

export default function Header({
  variant = "home",
  activeNav = null,
}: HeaderProps) {
  const { t } = useI18n();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(variant === "detail");
  const [activeSection, setActiveSection] = useState("anasayfa");
  const home = variant === "home";

  useEffect(() => {
    if (!home) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [home]);

  useEffect(() => {
    if (!home) return;
    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    const onScroll = () => {
      const scrollPos = window.scrollY + 120;
      let current = "anasayfa";
      sections.forEach((section) => {
        if (section.offsetTop <= scrollPos) current = section.id;
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [home]);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setNavOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const href = (hash: string) => (home ? hash : `/${hash}`);
  const logoHref = home ? "#anasayfa" : "/";

  const navClass = (id: string) => {
    if (!home) {
      if (activeNav === "hizmetler" && id === "hizmetler") return "nav-link active";
      if (activeNav === "projeler" && id === "projeler") return "nav-link active";
      return "nav-link";
    }
    return `nav-link${activeSection === id ? " active" : ""}`;
  };

  return (
    <header
      className={`site-header${scrolled || !home ? " scrolled" : ""}`}
      id="header"
    >
      <div className="container header-inner">
        <Link
          href={logoHref}
          className="logo"
          data-i18n-aria="logo.aria"
          aria-label={t("logo.aria")}
        >
          <img
            src="/assets/logo.png"
            alt="G-Wolf Interactive"
            className="logo-img"
            width={160}
            height={160}
          />
        </Link>

        <div className="header-right">
          <nav
            className={`main-nav${navOpen ? " open" : ""}`}
            id="mainNav"
            data-i18n-aria="nav.mainAria"
            aria-label={t("nav.mainAria")}
          >
            <a
              href={href("#anasayfa")}
              className={navClass("anasayfa")}
              data-i18n="nav.home"
              onClick={() => setNavOpen(false)}
            >
              Anasayfa
            </a>
            <a
              href={href("#hizmetler")}
              className={navClass("hizmetler")}
              data-i18n="nav.services"
              onClick={() => setNavOpen(false)}
            >
              Hizmetler
            </a>
            <a
              href={href("#projeler")}
              className={navClass("projeler")}
              data-i18n="nav.projects"
              onClick={() => setNavOpen(false)}
            >
              Projeler
            </a>
            <a
              href={href("#iletisim")}
              className={navClass("iletisim")}
              data-i18n="nav.contact"
              onClick={() => setNavOpen(false)}
            >
              İletişim
            </a>
          </nav>

          <LangSwitcher />

          <button
            className="nav-toggle"
            id="navToggle"
            data-i18n-aria="nav.menuOpen"
            aria-label={navOpen ? t("nav.menuClose") : t("nav.menuOpen")}
            aria-expanded={navOpen}
            aria-controls="mainNav"
            type="button"
            onClick={() => setNavOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
