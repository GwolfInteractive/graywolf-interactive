"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import SiteEffects from "@/components/effects/SiteEffects";

export default function HomePage() {
  return (
    <div
      data-i18n-title="meta.title"
      data-i18n-desc="meta.description"
    >
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />
      <div className="cine-layer cine-streaks" aria-hidden="true" />
      <div
        className="cine-layer cine-particles"
        id="cineParticles"
        aria-hidden="true"
      />

      <Header variant="home" />

      <main>
        <section className="hero" id="anasayfa">
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-orb hero-orb--1" />
            <div className="hero-orb hero-orb--2" />
            <div className="phone-stage" id="phoneStage">
              <div className="phone phone--left" data-phone="left" />
              <div className="phone phone--center" data-phone="center" />
              <div className="phone phone--right" data-phone="right" />
            </div>
          </div>

          <div className="container hero-content">
            <div className="logo-stage reveal" id="logoStage">
              <img
                src="/assets/logo.png"
                alt="G-Wolf Interactive"
                className="hero-logo"
                width={420}
                height={420}
              />
              <span className="logo-eye logo-eye--cyan" aria-hidden="true" />
              <span className="logo-eye logo-eye--coral" aria-hidden="true" />
              <img
                src="/assets/wolf-left.png"
                alt=""
                className="wolf-sprite wolf-sprite--left"
              />
              <img
                src="/assets/wolf-center.png"
                alt=""
                className="wolf-sprite wolf-sprite--center"
              />
              <img
                src="/assets/wolf-right.png"
                alt=""
                className="wolf-sprite wolf-sprite--right"
              />
              <div className="logo-emerge-glow" />
            </div>
            <h1
              className="hero-title reveal"
              data-i18n="hero.title"
              data-i18n-html=""
            >
              Mobil Uygulama ve
              <br />
              Mobil Oyun Teknolojileri
            </h1>
            <p className="hero-subtitle reveal" data-i18n="hero.subtitle">
              Gray Wolf Interactive olarak mobil deneyimleri tasarlıyor,
              geliştiriyor ve ölçekliyoruz.
            </p>
            <a
              href="#projeler"
              className="btn btn-primary reveal"
              data-i18n="hero.cta"
            >
              Projelerimizi İnceleyin
            </a>
          </div>
        </section>

        <div className="section-banner reveal" aria-hidden="true">
          <img
            src="/assets/wolves-emerge.png"
            alt=""
            className="section-banner-img"
            loading="lazy"
          />
        </div>

        <section className="services" id="hizmetler">
          <div className="container">
            <div className="section-head reveal">
              <h2 data-i18n="services.title">Hizmetler</h2>
              <p data-i18n="services.subtitle">
                Ürün odaklı mühendislik: SaaS, mobil, oyun ve web — fikirden
                production’a.
              </p>
            </div>

            <div className="services-grid">
              <a
                href="/hizmetler/saas"
                className="service-card service-card--link reveal"
                data-tilt=""
              >
                <div className="service-card-media media-3d">
                  <img
                    src="/assets/service-saas.png"
                    alt=""
                    width={640}
                    height={360}
                    loading="lazy"
                  />
                </div>
                <div className="service-card-body">
                  <h3 data-i18n="services.saas.title">SaaS Uygulamaları</h3>
                  <p data-i18n="services.saas.desc">
                    Abonelik tabanlı ürünler için ölçeklenebilir mimari,
                    multi-tenant altyapı ve ölçülebilir büyüme.
                  </p>
                  <span className="card-cta">
                    <span data-i18n="services.cta">Detayı gör</span>{" "}
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>

              <a
                href="/hizmetler/mobil-uygulama"
                className="service-card service-card--link reveal"
                data-tilt=""
              >
                <div className="service-card-media media-3d">
                  <img
                    src="/assets/service-mobile-app.png"
                    alt=""
                    width={640}
                    height={360}
                    loading="lazy"
                  />
                </div>
                <div className="service-card-body">
                  <h3 data-i18n="services.mobile.title">Mobil Uygulama</h3>
                  <p data-i18n="services.mobile.desc">
                    Native iOS/Android ve cross-platform ile App Store
                    kalitesinde performans ve kullanıcı deneyimi.
                  </p>
                  <span className="card-cta">
                    <span data-i18n="services.cta">Detayı gör</span>{" "}
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>

              <a
                href="/hizmetler/mobil-oyun"
                className="service-card service-card--link reveal"
                data-tilt=""
              >
                <div className="service-card-media media-3d">
                  <img
                    src="/assets/service-mobile-game.png"
                    alt=""
                    width={640}
                    height={360}
                    loading="lazy"
                  />
                </div>
                <div className="service-card-body">
                  <h3 data-i18n="services.game.title">Mobil Oyun Geliştirme</h3>
                  <p data-i18n="services.game.desc">
                    Akıcı oynanış, canlı operasyon ve monetizasyon
                    döngüleriyle sürdürülebilir mobil oyun ürünleri.
                  </p>
                  <span className="card-cta">
                    <span data-i18n="services.cta">Detayı gör</span>{" "}
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>

              <a
                href="/hizmetler/web-gelistirme"
                className="service-card service-card--link reveal"
                data-tilt=""
              >
                <div className="service-card-media media-3d">
                  <img
                    src="/assets/service-web.png"
                    alt=""
                    width={640}
                    height={360}
                    loading="lazy"
                  />
                </div>
                <div className="service-card-body">
                  <h3 data-i18n="services.web.title">Web Geliştirme</h3>
                  <p data-i18n="services.web.desc">
                    Hızlı, erişilebilir ve SEO’ya hazır web ürünleri —
                    landing’den kompleks dashboard’lara.
                  </p>
                  <span className="card-cta">
                    <span data-i18n="services.cta">Detayı gör</span>{" "}
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        <div
          className="section-banner section-banner--glow reveal"
          aria-hidden="true"
        >
          <img
            src="/assets/section-glow.png"
            alt=""
            className="section-banner-img"
            loading="lazy"
          />
        </div>

        <section className="projects" id="projeler">
          <div className="container">
            <div className="section-head reveal">
              <h2 data-i18n="projects.title">Projeler</h2>
              <p data-i18n="projects.subtitle">
                Seçili ürün çalışmalarımızdan bir kesit.
              </p>
            </div>

            <div className="projects-grid">
              <a
                href="/projeler/diet-tracking-app"
                className="project-card reveal"
                data-tilt=""
              >
                <div className="project-card-media media-3d">
                  <img
                    src="/assets/project-diet-tracking.png"
                    data-i18n-alt="projects.diet.imgAlt"
                    alt="Diet Tracking App ekran görüntüsü"
                    width={800}
                    height={450}
                    loading="lazy"
                  />
                </div>
                <div className="project-card-body">
                  <span className="project-tag" data-i18n="projects.diet.tag">
                    Native iOS
                  </span>
                  <h3 data-i18n="projects.diet.title">Diet Tracking App</h3>
                  <p data-i18n="projects.diet.desc">
                    Kalori, makro ve öğün takibini sadeleştiren native iOS
                    uygulaması — HealthKit entegrasyonu ve SwiftUI arayüzü.
                  </p>
                  <span className="card-cta">
                    <span data-i18n="projects.diet.cta">Projeyi incele</span>{" "}
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="contact" id="iletisim">
          <div className="container contact-inner">
            <div className="section-head reveal">
              <h2 data-i18n="contact.title">İletişim</h2>
              <p data-i18n="contact.subtitle">
                Projenizi konuşalım. Kısa bir not bırakın, ekibimiz size dönüş
                yapsın.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer variant="home" />
      <SiteEffects isDetailPage={false} />
    </div>
  );
}
