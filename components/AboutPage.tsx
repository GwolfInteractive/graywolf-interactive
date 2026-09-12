"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/effects/SiteEffects";

const FOCUS = [
  {
    key: "about.focus.mobile",
    href: "/hizmetler/mobil-uygulama",
    label: "Mobil uygulama",
  },
  { key: "about.focus.saas", href: "/hizmetler/saas", label: "SaaS" },
  {
    key: "about.focus.game",
    href: "/hizmetler/mobil-oyun",
    label: "Mobil oyun",
  },
  {
    key: "about.focus.web",
    href: "/hizmetler/web-gelistirme",
    label: "Web sitesi",
  },
  {
    key: "about.focus.digital",
    href: "/#iletisim",
    label: "Dijital çözümler",
  },
] as const;

export default function AboutPage() {
  return (
    <div
      className="page-detail"
      data-i18n-title="about.metaTitle"
      data-i18n-desc="about.metaDesc"
    >
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />

      <Header variant="detail" activeNav="about" />

      <main>
        <article className="about">
          <div className="container">
            <p className="detail-eyebrow reveal" data-i18n="about.eyebrow">
              Şirket
            </p>
            <h1 className="detail-title reveal" data-i18n="about.title">
              Biz Kimiz
            </h1>
            <p className="detail-lead reveal" data-i18n="about.lead">
              G-Wolf Interactive (Gray Wolf Interactive), mobil uygulama, SaaS,
              mobil oyun, web sitesi ve dijital çözümler üreten bir yazılım
              şirketidir.
            </p>
            <p className="about-body reveal" data-i18n="about.body">
              Fikirden yayına kadar ürün odaklı mühendislik yapıyoruz. Kullanıcıya
              değer taşıyan, ölçülebilir ve bakımı kolay yazılımlar tasarlıyor,
              geliştiriyor ve ölçekliyoruz — native mobil deneyimlerden abonelik
              platformlarına, oyunlardan marka ve operasyon sitelerine.
            </p>

            <div className="about-split">
              <section className="about-card reveal">
                <h2 data-i18n="about.missionTitle">Misyonumuz</h2>
                <p data-i18n="about.mission">
                  İşletmelerin ve ekiplerin gerçek ihtiyaçlarını netleştirip,
                  mobil uygulama, SaaS, oyun, web ve dijital çözümleri production
                  kalitesinde hayata geçirmek. Her teslimatta hız, güvenlik ve
                  sürdürülebilir kodu aynı anda gözetmek.
                </p>
              </section>
              <section className="about-card reveal">
                <h2 data-i18n="about.visionTitle">Vizyonumuz</h2>
                <p data-i18n="about.vision">
                  Dijital ürün geliştirmede güvenilen bir yazılım ortağı olmak:
                  net iletişim, sağlam mimari ve kullanıcıyı merkeze alan
                  deneyimlerle uzun ömürlü ürünler üretmek.
                </p>
              </section>
            </div>

            <section className="about-focus reveal">
              <h2 data-i18n="about.focusTitle">Ne üretiyoruz?</h2>
              <ul className="about-chips">
                {FOCUS.map((item) => (
                  <li key={item.key}>
                    <a href={item.href} className="about-chip" data-i18n={item.key}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <div className="detail-cta reveal">
              <p data-i18n="about.cta">Birlikte bir ürün konuşalım.</p>
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
