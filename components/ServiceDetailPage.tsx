"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/effects/SiteEffects";
import HashScroll from "@/components/HashScroll";
import ServiceIcon from "@/components/ServiceIcon";
import type { ServicePageDef } from "@/lib/services";

export default function ServiceDetailPage({
  service,
}: {
  service: ServicePageDef;
}) {
  return (
    <div
      className="page-detail"
      data-i18n-title={service.titleKey}
      data-i18n-desc={service.descKey}
    >
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />

      <Header variant="detail" activeNav="hizmetler" />

      <main>
        <article className="detail detail--service">
          <div className="detail-hero">
            <div className="container">
              <Link
                href="/hizmetler"
                className="back-link reveal"
                data-i18n="common.backServices"
              >
                ← Hizmetlerimiz
              </Link>
              <p className="detail-eyebrow reveal" data-i18n="common.service">
                Hizmet
              </p>
              <h1 className="detail-title reveal" data-i18n={service.headingKey} />
              <p className="detail-lead reveal" data-i18n={service.leadKey} />
            </div>
            <div className="detail-cover reveal">
              <img
                src={service.coverSrc}
                data-i18n-alt={service.coverAltKey}
                alt=""
                width={1280}
                height={720}
              />
            </div>
          </div>

          <div className="container detail-body">
            <div className="detail-prose">
              <section className="detail-block reveal">
                <h2 data-i18n="common.whatWeBuild">Ne inşa ediyoruz?</h2>
                <p data-i18n={service.bodyKey} />
                <p data-i18n={service.body2Key} />
              </section>
            </div>

            <section className="offer-section">
              <header className="offer-section-head reveal">
                <p className="detail-eyebrow" data-i18n="common.offersKicker">
                  Kapsam
                </p>
                <h2 data-i18n={service.offersTitleKey} />
              </header>
              <div className="offer-grid">
                {service.offers.map((offer, index) => (
                  <article
                    className="offer-card reveal"
                    id={offer.id}
                    key={offer.id}
                  >
                    <div className="offer-card-top">
                      <ServiceIcon name={offer.icon} />
                      <span className="offer-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 data-i18n={offer.titleKey} />
                    <p data-i18n={offer.bodyKey} />
                    <p className="offer-get" data-i18n="common.youGet">
                      Pakette ne var
                    </p>
                    <ul className="check-list">
                      {offer.itemKeys.map((key) => (
                        <li key={key} data-i18n={key} />
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="how-section reveal">
              <h2 data-i18n={service.howTitleKey} />
              <ol className="how-grid">
                {service.how.map((step, index) => (
                  <li className="how-card" key={step.titleKey}>
                    <span className="how-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 data-i18n={step.titleKey} />
                    <p data-i18n={step.bodyKey} />
                  </li>
                ))}
              </ol>
            </section>

            <div className="detail-prose">
              <section className="detail-block reveal">
                <h2 data-i18n="common.techStack">Teknoloji yığını</h2>
                <ul className="tech-list">
                  {service.techItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section className="detail-block reveal">
                <h2 data-i18n="common.outcomes">Çıktılar</h2>
                <ul className="check-list">
                  {service.outcomeKeys.map((key) => (
                    <li key={key} data-i18n={key} />
                  ))}
                </ul>
              </section>
            </div>

            <div className="detail-cta reveal">
              <p data-i18n={service.ctaKey} />
              <a
                href={`/?topic=${service.topic}#iletisim`}
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
      <HashScroll />
    </div>
  );
}
