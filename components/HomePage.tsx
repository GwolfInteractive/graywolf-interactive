"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import SiteEffects from "@/components/effects/SiteEffects";
import HashScroll from "@/components/HashScroll";
import ServiceOfferChips from "@/components/ServiceOfferChips";
import { useI18n } from "@/components/providers/I18nProvider";
import {
  HOME_CLIENTS,
  HOME_METRICS,
  HOME_PROCESS,
  SHOW_HOME_PROOF,
} from "@/lib/home";
import type {
  Announcement,
  ProjectCard,
  ServiceCard,
} from "@/lib/content";
import { pickText } from "@/lib/projectLocale";

type HomePageProps = {
  services: ServiceCard[];
  projects: ProjectCard[];
  announcements: Announcement[];
};

export default function HomePage({
  services,
  projects,
  announcements,
}: HomePageProps) {
  const { lang, t } = useI18n();

  const formatDate = (value: string) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleDateString(lang, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div data-i18n-title="meta.title" data-i18n-desc="meta.description">
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />
      <div className="cine-layer cine-streaks" aria-hidden="true" />
      <div
        className="cine-layer cine-particles"
        id="cineParticles"
        aria-hidden="true"
      />

      <Header variant="home" />
      <HashScroll />

      <main>
        <section className="hero" id="anasayfa">
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-orb hero-orb--1" />
            <div className="hero-orb hero-orb--2" />
          </div>

          <div className="container hero-layout">
            <div className="hero-content">
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
              </div>
              <p className="hero-eyebrow reveal" data-i18n="hero.eyebrow">
                Yazılım stüdyosu
              </p>
              <h1
                className="hero-title reveal"
                data-i18n="hero.title"
                data-i18n-html=""
              >
                Mobil uygulama, SaaS
                <br />
                ve dijital ürünler
              </h1>
              <p className="hero-subtitle reveal" data-i18n="hero.subtitle">
                Gray Wolf Interactive — mobil uygulama, SaaS, oyun, web ve dijital
                çözümler tasarlıyor, geliştiriyor ve ölçekliyoruz.
              </p>
              <div className="hero-actions reveal">
                <a href="#projeler" className="btn btn-primary" data-i18n="hero.cta">
                  İşlerimizi inceleyin
                </a>
                <a
                  href="#iletisim"
                  className="btn btn-ghost"
                  data-i18n="hero.ctaContact"
                >
                  İletişime geçin
                </a>
              </div>
            </div>
            <div className="phone-stage" id="phoneStage" aria-hidden="true">
              <div className="phone" data-phone="center" />
            </div>
          </div>
        </section>

        {SHOW_HOME_PROOF ? (
          <section className="proof" id="kanit" aria-label="Social proof">
            <div className="container">
              <p className="proof-kicker reveal" data-i18n="proof.kicker">
                Sayılarla
              </p>
              <div className="proof-metrics">
                {HOME_METRICS.map((item) => (
                  <article className="proof-metric reveal" key={item.valueKey}>
                    <strong data-i18n={item.valueKey}>{item.value}</strong>
                    <span data-i18n={item.labelKey}>{item.label}</span>
                  </article>
                ))}
              </div>
              <p className="proof-clients-label reveal" data-i18n="proof.clients">
                Birlikte çalıştığımız ekipler
              </p>
              <ul className="proof-clients">
                {HOME_CLIENTS.map((client) => (
                  <li key={client.key} data-i18n={client.key}>
                    {client.name}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <div className="section-banner" data-parallax="true" aria-hidden="true">
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
              <h2 data-i18n="services.title">Hizmetlerimiz</h2>
              <p data-i18n="services.subtitle">
                Ürün odaklı mühendislik: SaaS, mobil, oyun ve web — fikirden
                production’a.
              </p>
            </div>

            <div className="services-grid">
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
                    <h3>
                      <a
                        href={service.href}
                        {...(service.titleKey
                          ? { "data-i18n": service.titleKey }
                          : {})}
                      >
                        {service.titleFallback}
                      </a>
                    </h3>
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
            <div className="section-more reveal">
              <a href="/hizmetler" className="btn btn-ghost" data-i18n="services.hub.more">
                Tüm hizmetlerimiz
              </a>
            </div>
          </div>
        </section>

        <section className="process" id="surec">
          <div className="container">
            <div className="section-head reveal">
              <h2 data-i18n="process.title">Nasıl çalışırız</h2>
              <p data-i18n="process.subtitle">
                Keşiften yayına — net adımlar, ölçülebilir teslimat.
              </p>
            </div>
            <ol className="process-grid">
              {HOME_PROCESS.map((item) => (
                <li className="process-card reveal" key={item.step}>
                  <span className="process-step">{item.step}</span>
                  <h3 data-i18n={item.titleKey}>{item.title}</h3>
                  <p data-i18n={item.bodyKey}>{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="projects" id="projeler">
          <div className="container">
            <div className="section-head reveal">
              <h2 data-i18n="projects.title">Projeler</h2>
              <p data-i18n="projects.subtitle">
                Seçili ürün çalışmalarımızdan bir kesit.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((project, index) => {
                const title = pickText(project.title, lang);
                return (
                  <a
                    key={project.slug}
                    href={project.href}
                    className={`project-card reveal${index === 0 ? " project-card--featured" : ""}`}
                  >
                    <div className="project-card-media">
                      <img
                        src={project.cover}
                        alt={title}
                        width={800}
                        height={450}
                        loading="lazy"
                      />
                    </div>
                    <div className="project-card-body">
                      <div className="project-meta">
                        <span
                          className={`project-status project-status--${project.status}`}
                        >
                          {t(`projects.status.${project.status}`)}
                        </span>
                        {pickText(project.tag, lang) ? (
                          <span className="project-tag">
                            {pickText(project.tag, lang)}
                          </span>
                        ) : null}
                      </div>
                      <h3>{title}</h3>
                      <p>
                        {pickText(project.summary, lang) ||
                          pickText(project.lead, lang)}
                      </p>
                      <span className="card-cta">
                        <span data-i18n="projects.view">Projeyi incele</span>{" "}
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
            <div className="section-more reveal">
              <a href="/projeler" className="btn btn-ghost" data-i18n="projects.more">
                Tüm projeler
              </a>
            </div>
          </div>
        </section>

        <section className="home-about" id="studio">
          <div className="container home-about-inner">
            <div className="reveal">
              <h2 data-i18n="homeAbout.title">Stüdyonun arkasında</h2>
              <p data-i18n="homeAbout.body">
                Ürün odaklı bir yazılım şirketiyiz. Misyonumuz ve vizyonumuz için
                Biz Kimiz sayfasına bakın.
              </p>
            </div>
            <a href="/biz-kimiz" className="btn btn-ghost reveal" data-i18n="homeAbout.cta">
              Biz Kimiz
            </a>
          </div>
        </section>

        {announcements.length > 0 ? (
          <section className="news" id="duyurular">
            <div className="container">
              <div className="section-head reveal">
                <h2 data-i18n="news.title">Duyurular</h2>
                <p data-i18n="news.subtitle">
                  Güncellemeler ve yayın notları.
                </p>
              </div>
              <div className="news-list">
                {announcements.map((item) => (
                  <article className="news-card reveal" key={`${item.title}-${item.date}`}>
                    {item.date ? (
                      <time dateTime={item.date}>{formatDate(item.date)}</time>
                    ) : null}
                    <h3>{item.title}</h3>
                    {item.summary ? <p>{item.summary}</p> : null}
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

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
