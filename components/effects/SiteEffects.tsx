"use client";

import { useEffect } from "react";
import { useI18n } from "@/components/providers/I18nProvider";

type SiteEffectsProps = {
  isDetailPage?: boolean;
};

const PHONE_SCREENS = [
  "/assets/screen-nutrition.png",
  "/assets/phone-ui-map.png",
  "/assets/phone-ui-game.png",
];

export default function SiteEffects({ isDetailPage = false }: SiteEffectsProps) {
  const { t } = useI18n();

  useEffect(() => {
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");

    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -32px 0px" },
      );

      revealEls.forEach((el, i) => {
        el.style.transitionDelay = `${Math.min(i % 3, 2) * 70}ms`;
        revealObserver.observe(el);
      });

      return () => revealObserver.disconnect();
    }

    revealEls.forEach((el) => el.classList.add("visible"));
    return undefined;
  }, [t]);

  useEffect(() => {
    if (isDetailPage) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const phoneEl = document.querySelector("[data-phone='center']");
    if (phoneEl) {
      phoneEl.innerHTML = `
        <div class="phone-shell">
          <div class="phone-bezel">
            <div class="phone-film">
              ${PHONE_SCREENS.map(
                (src) => `<img src="${src}" alt="" draggable="false" />`,
              ).join("")}
            </div>
          </div>
        </div>`;
    }

    const logoStage = document.getElementById("logoStage");
    const film = phoneEl?.querySelector<HTMLElement>(".phone-film");
    const cineStreaks = document.querySelector<HTMLElement>(".cine-streaks");
    const cineParticles = document.getElementById("cineParticles");
    const banner = document.querySelector<HTMLElement>(
      "[data-parallax] .section-banner-img",
    );

    let stingTimer = 0;
    let raf = 0;
    let filmRaf = 0;
    const slideCount = PHONE_SCREENS.length;
    let filmTarget = 0;
    let filmCurrent = 0;

    if (logoStage) {
      if (reduceMotion) {
        logoStage.classList.add("is-settled");
      } else {
        const kick = window.requestAnimationFrame(() => {
          logoStage.classList.add("is-sting");
        });
        stingTimer = window.setTimeout(() => {
          logoStage.classList.remove("is-sting");
          logoStage.classList.add("is-settled");
        }, 1250);
        void kick;
      }
    }

    const clamp = (v: number, min: number, max: number) =>
      Math.min(max, Math.max(min, v));

    const renderFilm = () => {
      if (!film) return;
      filmCurrent += (filmTarget - filmCurrent) * 0.16;
      if (Math.abs(filmTarget - filmCurrent) < 0.04) {
        filmCurrent = filmTarget;
        filmRaf = 0;
      } else {
        filmRaf = requestAnimationFrame(renderFilm);
      }
      film.style.transform = `translate3d(0, -${filmCurrent}%, 0)`;
    };

    const update = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docH > 0 ? clamp(y / docH, 0, 1) : 0;

      if (!reduceMotion && film && slideCount > 1) {
        const span = Math.max(vh * 0.55, 320);
        const t = clamp(y / span, 0, 1);
        filmTarget = t * (slideCount - 1) * 100;
        if (!filmRaf) filmRaf = requestAnimationFrame(renderFilm);
      }

      if (!reduceMotion) {
        if (cineStreaks) {
          cineStreaks.style.transform = `translate3d(0, ${y * 0.04}px, 0)`;
          cineStreaks.style.opacity = String(0.1 + progress * 0.06);
        }
        if (cineParticles) {
          cineParticles.style.transform = `translate3d(${progress * 12}px, ${y * -0.03}px, 0)`;
          cineParticles.style.opacity = String(0.08 + progress * 0.06);
        }
        if (banner) {
          const parent = banner.parentElement;
          if (parent) {
            const rect = parent.getBoundingClientRect();
            const local = (vh / 2 - (rect.top + rect.height / 2)) / vh;
            banner.style.transform = `translate3d(0, ${local * 18}px, 0) scale(1.03)`;
          }
        }
      }

      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.clearTimeout(stingTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
      cancelAnimationFrame(filmRaf);
    };
  }, [isDetailPage]);

  return null;
}
