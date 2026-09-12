"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/effects/SiteEffects";
import { useI18n } from "@/components/providers/I18nProvider";
import { pickText, type Project } from "@/lib/projectLocale";

export default function ProjectsHub({ projects }: { projects: Project[] }) {
  const { lang, t } = useI18n();

  return (
    <div
      className="page-detail"
      data-i18n-title="projects.hub.metaTitle"
      data-i18n-desc="projects.hub.metaDesc"
    >
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />

      <Header variant="detail" activeNav="projeler" />

      <main>
        <article className="hub">
          <div className="container">
            <p className="detail-eyebrow reveal" data-i18n="projects.hub.eyebrow">
              Ürünler
            </p>
            <h1 className="detail-title reveal" data-i18n="projects.hub.title">
              Projeler
            </h1>
            <p className="detail-lead reveal" data-i18n="projects.hub.lead">
              Yaptığımız ve yapmakta olduğumuz işler.
            </p>
            <p className="hub-body reveal" data-i18n="projects.hub.body">
              Her kart bir ürün sayfası.
            </p>

            <div className="projects-grid hub-grid">
              {projects.map((project) => {
                const title = pickText(project.title, lang);
                return (
                  <a
                    key={project.slug}
                    href={project.href}
                    className="project-card reveal"
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
                      <h2>{title}</h2>
                      <p>{pickText(project.summary, lang) || pickText(project.lead, lang)}</p>
                      <span className="card-cta">
                        <span data-i18n="projects.view">Projeyi incele</span>{" "}
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="detail-cta reveal">
              <p data-i18n="projects.hub.cta">Bir ürün fikrini konuşalım.</p>
              <a
                href="/?topic=product#iletisim"
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
