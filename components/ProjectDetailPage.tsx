"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteEffects from "@/components/effects/SiteEffects";
import { useI18n } from "@/components/providers/I18nProvider";
import {
  pickList,
  pickText,
  storyParagraphs,
  type Project,
} from "@/lib/projectLocale";

export default function ProjectDetailPage({ project }: { project: Project }) {
  const { lang, t } = useI18n();
  const title = pickText(project.title, lang);
  const lead = pickText(project.lead, lang);
  const summary = pickText(project.summary, lang);
  const process = pickText(project.process, lang);
  const story = pickText(project.story, lang);
  const cta = pickText(project.cta, lang);
  const tag = pickText(project.tag, lang);
  const highlights = pickList(project.highlights, lang);
  const desc = pickText(project.metaDesc, lang);

  useEffect(() => {
    document.title = `${title} | G-Wolf Interactive`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && desc) meta.setAttribute("content", desc);
  }, [title, desc]);

  return (
    <div className="page-detail">
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-glow" aria-hidden="true" />

      <Header variant="detail" activeNav="projeler" />

      <main>
        <article className="detail detail--project">
          <div className="detail-hero">
            <div className="container">
              <Link
                href="/projeler"
                className="back-link reveal"
                data-i18n="common.backProjects"
              >
                ← Projeler
              </Link>
              <div className="project-meta reveal">
                <span
                  className={`project-status project-status--${project.status}`}
                  data-i18n={`projects.status.${project.status}`}
                >
                  {t(`projects.status.${project.status}`)}
                </span>
                {tag ? <span className="project-tag">{tag}</span> : null}
                {project.platform ? (
                  <span className="project-tag">{project.platform}</span>
                ) : null}
              </div>
              <h1 className="detail-title reveal">{title}</h1>
              {lead ? <p className="detail-lead reveal">{lead}</p> : null}
            </div>
            <div className="detail-cover reveal">
              <img src={project.cover} alt={title} width={1280} height={720} />
            </div>
          </div>

          <div className="container detail-body">
            {project.gallery.length > 0 ? (
              <div className="project-gallery reveal">
                {project.gallery.map((src) => (
                  <img key={src} src={src} alt="" width={800} height={450} />
                ))}
              </div>
            ) : null}

            {summary ? (
              <section className="detail-block reveal">
                <h2 data-i18n="projects.summaryTitle">Özet</h2>
                <p>{summary}</p>
              </section>
            ) : null}

            {highlights.length > 0 ? (
              <section className="detail-block reveal">
                <h2 data-i18n="projects.highlightsTitle">Öne çıkanlar</h2>
                <ul className="check-list">
                  {highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {project.tech.length > 0 ? (
              <section className="detail-block reveal">
                <h2 data-i18n="projects.techTitle">Teknoloji</h2>
                <ul className="tech-list">
                  {project.tech.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ) : null}

            {process ? (
              <section className="detail-block reveal">
                <h2 data-i18n="projects.processTitle">Süreç</h2>
                <p>{process}</p>
              </section>
            ) : null}

            {storyParagraphs(story).length > 0 ? (
              <section className="detail-block reveal">
                <h2 data-i18n="projects.storyTitle">Hikâye</h2>
                {storyParagraphs(story).map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </section>
            ) : null}

            <div className="detail-cta reveal">
              <p>
                {cta || t("projects.hub.cta")}
              </p>
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
