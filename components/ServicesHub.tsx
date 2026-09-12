"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/effects/SiteEffects";
import ServiceOfferChips from "@/components/ServiceOfferChips";
import type { ServiceCard } from "@/lib/content";

type ServicesHubProps = {
  services: ServiceCard[];
};

export default function ServicesHub({ services }: ServicesHubProps) {
  return (
    <div
      className="page-detail"
      data-i18n-title="services.hub.metaTitle"
      data-i18n-desc="services.hub.metaDesc"
    >
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />

      <Header variant="detail" activeNav="hizmetler" />

      <main>
        <article className="hub">
          <div className="container">
            <p className="detail-eyebrow reveal" data-i18n="services.hub.eyebrow">
              Stüdyo
            </p>
            <h1 className="detail-title reveal" data-i18n="services.hub.title">
              Hizmetlerimiz
            </h1>
            <p className="detail-lead reveal" data-i18n="services.hub.lead">
              Mobil uygulama, SaaS, mobil oyun ve web — fikirden yayına ürün
              odaklı yazılım.
            </p>
            <p className="hub-body reveal" data-i18n="services.hub.body">
              İhtiyacı netleştirir, ölçülebilir bir ürün çıkarırız. Aşağıdaki
              alanların her biri ayrı bir teslimat hattı; detay için karta
              tıklayın.
            </p>

            <div className="services-grid hub-grid">
              {services.map((service) => (
                <article
                  key={service.slug}
                  className="service-card service-card--link reveal"
                >
                  <a href={service.href} className="service-card-media">
                    <img
                      src={service.cover}
                      alt=""
                      width={640}
                      height={360}
                      loading="lazy"
                    />
                  </a>
                  <div className="service-card-body">
                    <h2>
                      <a
                        href={service.href}
                        {...(service.titleKey
                          ? { "data-i18n": service.titleKey }
                          : {})}
                      >
                        {service.titleFallback}
                      </a>
                    </h2>
                    <p
                      {...(service.descKey
                        ? { "data-i18n": service.descKey }
                        : {})}
                    >
                      {service.descFallback}
                    </p>
                    <ServiceOfferChips
                      href={service.href}
                      offers={service.offers}
                      linked
                    />
                    <a href={service.href} className="card-cta">
                      <span data-i18n="services.cta">Detayı gör</span>{" "}
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="detail-cta reveal">
              <p data-i18n="services.hub.cta">Projenizi konuşalım.</p>
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
