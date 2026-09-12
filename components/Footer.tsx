"use client";

import Link from "next/link";
import { useI18n } from "@/components/providers/I18nProvider";

type FooterProps = {
  variant?: "home" | "detail";
};

export default function Footer({ variant = "home" }: FooterProps) {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  const home = variant === "home";
  const href = (id: string) => (home ? `#${id}` : `/#${id}`);
  const logoHref = home ? "#anasayfa" : "/";

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link
            href={logoHref}
            className="logo"
            data-i18n-aria="logo.aria"
            aria-label={t("logo.aria")}
          >
            <img
              src="/assets/logo.png"
              alt="G-Wolf Interactive"
              className="logo-img logo-img--footer"
              width={200}
              height={200}
            />
          </Link>
          <p data-i18n="footer.tagline">
            Gray Wolf Interactive — mobil uygulama ve oyun teknolojileri.
          </p>
        </div>
        <nav
          className="footer-nav"
          data-i18n-aria="nav.footerAria"
          aria-label={t("nav.footerAria")}
        >
          <a href={href("anasayfa")} data-i18n="nav.home">
            Anasayfa
          </a>
          <Link href="/biz-kimiz" data-i18n="nav.about">
            Biz Kimiz
          </Link>
          <Link href="/hizmetler" data-i18n="nav.services">
            Hizmetlerimiz
          </Link>
          <Link href="/projeler" data-i18n="nav.projects">
            Projeler
          </Link>
          <a href={href("iletisim")} data-i18n="nav.contact">
            İletişim
          </a>
        </nav>
        <p className="footer-copy">
          &copy; <span id="year">{year}</span>{" "}
          <span data-i18n="footer.copy">
            G-Wolf Interactive. Tüm hakları saklıdır.
          </span>
        </p>
      </div>
    </footer>
  );
}
