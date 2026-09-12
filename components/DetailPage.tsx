"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/effects/SiteEffects";

export type DetailPageProps = {
  kind: "service" | "project";
  titleKey: string;
  descKey: string;
  backHref: string;
  backKey: string;
  eyebrowKey: string;
  headingKey: string;
  leadKey: string;
  coverSrc: string;
  coverAltKey: string;
  sections: Array<
    | { type: "text"; titleKey: string; bodyKey: string }
    | { type: "list"; titleKey: string; itemKeys: string[]; listClass?: "tech-list" | "check-list" }
    | { type: "static-list"; titleKey: string; items: string[]; listClass?: "tech-list" | "check-list" }
  >;
  ctaKey: string;
};

export default function DetailPage({
  kind,
  titleKey,
  descKey,
  backHref,
  backKey,
  eyebrowKey,
  headingKey,
  leadKey,
  coverSrc,
  coverAltKey,
  sections,
  ctaKey,
}: DetailPageProps) {
  const activeNav = kind === "service" ? "hizmetler" : "projeler";

  return (
    <div
      className="page-detail"
      data-i18n-title={titleKey}
      data-i18n-desc={descKey}
    >
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />

      <Header variant="detail" activeNav={activeNav} />

      <main>
        <article className="detail">
          <div className="detail-hero">
            <div className="container">
              <Link href={backHref} className="back-link reveal" data-i18n={backKey}>
                {kind === "service" ? "← Hizmetlerimiz" : "← Projeler"}
              </Link>
              <p className="detail-eyebrow reveal" data-i18n={eyebrowKey}>
                {kind === "service" ? "Hizmet" : "Proje"}
              </p>
              <h1 className="detail-title reveal" data-i18n={headingKey} />
              <p className="detail-lead reveal" data-i18n={leadKey} />
            </div>
            <div className="detail-cover reveal">
              <img
                src={coverSrc}
                data-i18n-alt={coverAltKey}
                alt=""
                width={1280}
                height={720}
              />
            </div>
          </div>

          <div className="container detail-body">
            {sections.map((section, idx) => {
              if (section.type === "text") {
                return (
                  <section className="detail-block reveal" key={idx}>
                    <h2 data-i18n={section.titleKey} />
                    <p data-i18n={section.bodyKey} />
                  </section>
                );
              }
              if (section.type === "static-list") {
                return (
                  <section className="detail-block reveal" key={idx}>
                    <h2 data-i18n={section.titleKey} />
                    <ul className={section.listClass || "tech-list"}>
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                );
              }
              return (
                <section className="detail-block reveal" key={idx}>
                  <h2 data-i18n={section.titleKey} />
                  <ul className={section.listClass || "check-list"}>
                    {section.itemKeys.map((key) => (
                      <li key={key} data-i18n={key} />
                    ))}
                  </ul>
                </section>
              );
            })}

            <div className="detail-cta reveal">
              <p data-i18n={ctaKey} />
              <a
                href="/#iletisim"
                className="btn btn-primary"
                data-i18n="common.contactCta"
              >
                İletişime geçin
              </a>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="detail" />
      <SiteEffects isDetailPage />
    </div>
  );
}
