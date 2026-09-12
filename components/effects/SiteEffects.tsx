"use client";

import { useEffect } from "react";
import { useI18n } from "@/components/providers/I18nProvider";

type SiteEffectsProps = {
  isDetailPage?: boolean;
};

/**
 * Ports legacy script.js behaviour: reveal-on-scroll + homepage 3D scroll scene.
 */
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
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
      );

      revealEls.forEach((el, i) => {
        el.style.transitionDelay = `${Math.min(i % 4, 3) * 80}ms`;
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

    const PHONE_SCREENS = [
      "/assets/phone-ui-nutrition.png",
      "/assets/phone-ui-game.png",
      "/assets/phone-ui-saas.png",
      "/assets/phone-ui-map.png",
      "/assets/service-mobile-app.png",
      "/assets/project-diet-tracking.png",
      "/assets/service-saas.png",
      "/assets/service-mobile-game.png",
      "/assets/service-web.png",
    ];

    const shuffle = <T,>(arr: T[]) => {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    const buildPhone = (phoneEl: Element | null) => {
      if (!phoneEl) return;
      const screens = shuffle(PHONE_SCREENS).slice(0, 5);
      phoneEl.innerHTML = `
        <div class="phone-shell">
          <div class="phone-bezel">
            <div class="phone-screen-stack">
              ${screens
                .map(
                  (src, i) => `
                <div class="phone-face${i === 0 ? " is-active" : ""}" data-face="${i}">
                  <div class="phone-scroll">
                    <img class="phone-scroll-img" src="${src}" alt="" draggable="false" />
                  </div>
                </div>`,
                )
                .join("")}
            </div>
          </div>
        </div>`;
    };

    const phones = {
      left: document.querySelector('[data-phone="left"]'),
      center: document.querySelector('[data-phone="center"]'),
      right: document.querySelector('[data-phone="right"]'),
    };

    Object.values(phones).forEach(buildPhone);

    const stage = document.getElementById("phoneStage");
    const logoStage = document.getElementById("logoStage");
    const wolfLeft = document.querySelector<HTMLElement>(".wolf-sprite--left");
    const wolfCenter = document.querySelector<HTMLElement>(
      ".wolf-sprite--center",
    );
    const wolfRight = document.querySelector<HTMLElement>(".wolf-sprite--right");
    const cineStreaks = document.querySelector<HTMLElement>(".cine-streaks");
    const cineParticles = document.getElementById("cineParticles");
    const tiltCards = document.querySelectorAll<HTMLElement>("[data-tilt]");
    const banners = document.querySelectorAll<HTMLElement>(".section-banner-img");
    const faceCount = 5;
    let currentFace = 0;
    let ticking = false;
    let raf = 0;

    const setFace = (index: number) => {
      if (index === currentFace) return;
      currentFace = index;

      Object.values(phones).forEach((phone) => {
        if (!phone) return;
        phone.querySelectorAll(".phone-face").forEach((face) => {
          const i = Number(face.getAttribute("data-face"));
          const wasActive = face.classList.contains("is-active");
          face.classList.remove("is-active", "is-exit");
          if (i === index) face.classList.add("is-active");
          else if (wasActive) {
            face.classList.add("is-exit");
            window.setTimeout(() => face.classList.remove("is-exit"), 550);
          }
        });
      });
    };

    const clamp = (v: number, min: number, max: number) =>
      Math.min(max, Math.max(min, v));
    const easeOut = (n: number) => 1 - (1 - n) ** 3;

    if (reduceMotion) {
      if (wolfLeft)
        wolfLeft.style.cssText =
          "opacity:0.85;transform:translate(-40%,-8%) scale(0.95)";
      if (wolfRight)
        wolfRight.style.cssText =
          "opacity:0.85;transform:translate(40%,-8%) scale(0.95)";
      if (wolfCenter)
        wolfCenter.style.cssText =
          "opacity:0.9;transform:translate(-50%,-35%) scale(1)";
      return;
    }

    const update = () => {
      const docH =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docH > 0 ? clamp(window.scrollY / docH, 0, 1) : 0;
      const y = window.scrollY;
      const vh = window.innerHeight;

      if (cineStreaks) {
        cineStreaks.style.transform = `translate3d(0, ${y * 0.12}px, 0) scale(${1 + progress * 0.08})`;
        cineStreaks.style.opacity = String(0.14 + progress * 0.16);
      }
      if (cineParticles) {
        cineParticles.style.transform = `translate3d(${progress * 40}px, ${y * -0.08}px, 0)`;
        cineParticles.style.opacity = String(
          0.12 + Math.sin(progress * Math.PI) * 0.14,
        );
      }

      if (logoStage) {
        const hero = document.getElementById("anasayfa");
        const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : vh;
        const emergeRaw = clamp(y / (heroBottom * 0.55), 0, 1);
        const emerge = easeOut(emergeRaw);
        const eyeRaw = clamp(y / (heroBottom * 0.85), 0, 1);
        const eyeIntensity = easeOut(eyeRaw);
        logoStage.style.setProperty("--eye-intensity", eyeIntensity.toFixed(3));
        logoStage.classList.toggle("is-emerging", emerge > 0.08);

        if (wolfCenter) {
          wolfCenter.style.opacity = String(emerge * 0.95);
          wolfCenter.style.transform = `translate(-50%, ${20 - emerge * 58}%) scale(${0.45 + emerge * 0.62})`;
        }
        if (wolfLeft) {
          wolfLeft.style.opacity = String(emerge * 0.9);
          wolfLeft.style.transform = `translate(${30 - emerge * 78}%, ${10 - emerge * 28}%) scale(${0.4 + emerge * 0.55}) rotate(${-emerge * 8}deg)`;
        }
        if (wolfRight) {
          wolfRight.style.opacity = String(emerge * 0.9);
          wolfRight.style.transform = `translate(${-30 + emerge * 78}%, ${10 - emerge * 28}%) scale(${0.4 + emerge * 0.55}) rotate(${emerge * 8}deg)`;
        }
        const glow = logoStage.querySelector<HTMLElement>(".logo-emerge-glow");
        if (glow) {
          glow.style.opacity = String(emerge * 0.85);
          glow.style.transform = `scale(${0.8 + emerge * 1.4})`;
        }
      }

      if (stage) {
        const stageY = y * 0.22;
        stage.style.transform = `translateY(calc(-50% + ${stageY}px)) rotateY(${(progress * 18 - 6) * 0.2}deg)`;
      }

      if (phones.center instanceof HTMLElement) {
        phones.center.style.transform = `rotateY(${-18 + progress * 48}deg) rotateX(${8 - progress * 18}deg) rotateZ(${Math.sin(progress * Math.PI * 2) * 5}deg) translateZ(${40 + progress * 50}px)`;
      }
      if (phones.left instanceof HTMLElement) {
        phones.left.style.transform = `rotateY(${-40 + progress * 32}deg) rotateX(${12 - progress * 12}deg) translateZ(${-20 + progress * 55}px) translateX(${-progress * 28}px)`;
      }
      if (phones.right instanceof HTMLElement) {
        phones.right.style.transform = `rotateY(${34 - progress * 40}deg) rotateX(${10 - progress * 16}deg) translateZ(${-10 + progress * 60}px)`;
      }

      const faceIndex = Math.min(
        faceCount - 1,
        Math.floor(progress * faceCount),
      );
      setFace(faceIndex);

      const screenScroll = progress * 55;
      document
        .querySelectorAll<HTMLElement>(".phone-face.is-active .phone-scroll-img")
        .forEach((img, i) => {
          const offset = screenScroll + i * 8;
          img.style.transform = `translate3d(0, -${offset}%, 0)`;
        });

      tiltCards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const offset = (mid - vh / 2) / vh;
        const rotY = clamp(-offset * 22, -16, 16);
        const rotX = clamp(offset * 12, -12, 12);
        const lift = clamp(1 - Math.abs(offset) * 1.15, 0, 1) * 16;
        const stagger = (i % 2 === 0 ? 1 : -1) * 4;
        card.style.transform = `perspective(1200px) rotateY(${rotY + stagger}deg) rotateX(${rotX}deg) translateY(${-lift}px) scale(${1 + lift * 0.002})`;

        const mediaImg = card.querySelector<HTMLElement>(".media-3d img");
        if (mediaImg) {
          const local = clamp((vh - rect.top) / (vh + rect.height), 0, 1);
          mediaImg.style.transform = `scale(1.12) translate3d(0, ${(0.5 - local) * 12}%, 0)`;
        }
      });

      banners.forEach((img) => {
        const parent = img.parentElement;
        if (!parent) return;
        const rect = parent.getBoundingClientRect();
        const local = (vh / 2 - (rect.top + rect.height / 2)) / vh;
        img.style.transform = `translate3d(0, ${local * 40}px, 0) scale(1.08)`;
      });

      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [isDetailPage]);

  return null;
}
