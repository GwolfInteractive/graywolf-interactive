(() => {
  "use strict";

  const header = document.getElementById("header");
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");
  const navLinks = document.querySelectorAll(".main-nav .nav-link");
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const yearEl = document.getElementById("year");
  const sections = document.querySelectorAll("main section[id]");
  const isDetailPage = document.body.classList.contains("page-detail");

  const t = (key) =>
    window.GWI18n && typeof window.GWI18n.t === "function"
      ? window.GWI18n.t(key)
      : key;

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const onScrollHeader = () => {
    if (!header || isDetailPage) return;
    header.classList.toggle("scrolled", window.scrollY > 24);
  };

  window.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  const setNavOpen = (open) => {
    if (!mainNav || !navToggle) return;
    mainNav.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? t("nav.menuClose") : t("nav.menuOpen"));
    document.body.style.overflow = open ? "hidden" : "";
  };

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      setNavOpen(!mainNav.classList.contains("open"));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setNavOpen(false));
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setNavOpen(false);
    });
  }

  const updateActiveNav = () => {
    if (isDetailPage || !sections.length) return;

    const scrollPos = window.scrollY + 120;
    let current = "";

    sections.forEach((section) => {
      if (section.offsetTop <= scrollPos) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      const hash = href.includes("#") ? `#${href.split("#").pop()}` : href;
      link.classList.toggle("active", hash === `#${current}`);
    });
  };

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();

  const revealEls = document.querySelectorAll(".reveal");

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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 4, 3) * 80}ms`;
      revealObserver.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.add("visible"));
  }

  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const setFieldError = (field, hasError) => {
    field.classList.toggle("error", hasError);
  };

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = contactForm.querySelector("#name");
      const email = contactForm.querySelector("#email");
      const message = contactForm.querySelector("#message");

      let valid = true;

      setFieldError(name, !name.value.trim());
      if (!name.value.trim()) valid = false;

      const emailOk = isValidEmail(email.value);
      setFieldError(email, !emailOk);
      if (!emailOk) valid = false;

      setFieldError(message, !message.value.trim());
      if (!message.value.trim()) valid = false;

      formStatus.classList.remove("success", "error");

      if (!valid) {
        formStatus.textContent = t("contact.error");
        formStatus.classList.add("error");
        return;
      }

      formStatus.textContent = t("contact.success");
      formStatus.classList.add("success");
      contactForm.reset();

      [name, email, message].forEach((field) => setFieldError(field, false));
    });

    contactForm.querySelectorAll("input, textarea").forEach((field) => {
      field.addEventListener("input", () => {
        if (field.classList.contains("error") && field.value.trim()) {
          if (field.type === "email" && !isValidEmail(field.value)) return;
          setFieldError(field, false);
        }
      });
    });
  }

  /* --- Scroll-driven 3D, phones, wolves, cinematic layers --- */
  const initScroll3D = () => {
    if (isDetailPage) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const PHONE_SCREENS = [
      "assets/phone-ui-nutrition.png",
      "assets/phone-ui-game.png",
      "assets/phone-ui-saas.png",
      "assets/phone-ui-map.png",
      "assets/service-mobile-app.png",
      "assets/project-diet-tracking.png",
      "assets/service-saas.png",
      "assets/service-mobile-game.png",
      "assets/service-web.png",
    ];

    const shuffle = (arr) => {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    const buildPhone = (phoneEl) => {
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
                </div>`
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
    const wolfLeft = document.querySelector(".wolf-sprite--left");
    const wolfCenter = document.querySelector(".wolf-sprite--center");
    const wolfRight = document.querySelector(".wolf-sprite--right");
    const cineStreaks = document.querySelector(".cine-streaks");
    const cineParticles = document.getElementById("cineParticles");
    const tiltCards = document.querySelectorAll("[data-tilt]");
    const banners = document.querySelectorAll(".section-banner-img");
    const faceCount = 5;
    let currentFace = 0;
    let ticking = false;

    const setFace = (index) => {
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

    const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
    const easeOut = (t) => 1 - (1 - t) ** 3;

    if (reduceMotion) {
      if (wolfLeft) wolfLeft.style.cssText = "opacity:0.85;transform:translate(-40%,-8%) scale(0.95)";
      if (wolfRight) wolfRight.style.cssText = "opacity:0.85;transform:translate(40%,-8%) scale(0.95)";
      if (wolfCenter) wolfCenter.style.cssText = "opacity:0.9;transform:translate(-50%,-35%) scale(1)";
      return;
    }

    const update = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docH > 0 ? clamp(window.scrollY / docH, 0, 1) : 0;
      const y = window.scrollY;
      const vh = window.innerHeight;

      /* Cinematic parallax layers */
      if (cineStreaks) {
        cineStreaks.style.transform = `translate3d(0, ${y * 0.12}px, 0) scale(${1 + progress * 0.08})`;
        cineStreaks.style.opacity = String(0.14 + progress * 0.16);
      }
      if (cineParticles) {
        cineParticles.style.transform = `translate3d(${progress * 40}px, ${y * -0.08}px, 0)`;
        cineParticles.style.opacity = String(0.12 + Math.sin(progress * Math.PI) * 0.14);
      }

      /* Logo wolves emerge + eyes intensify */
      if (logoStage) {
        const hero = document.getElementById("anasayfa");
        const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : vh;
        const emergeRaw = clamp(y / (heroBottom * 0.55), 0, 1);
        const emerge = easeOut(emergeRaw);
        /* Eyes keep intensifying a bit further into the page */
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
        const glow = logoStage.querySelector(".logo-emerge-glow");
        if (glow) {
          glow.style.opacity = String(emerge * 0.85);
          glow.style.transform = `scale(${0.8 + emerge * 1.4})`;
        }
      }

      /* Phones 3D + inner screen scroll */
      if (stage) {
        const stageY = y * 0.22;
        stage.style.transform = `translateY(calc(-50% + ${stageY}px)) rotateY(${(progress * 18 - 6) * 0.2}deg)`;
      }

      if (phones.center) {
        phones.center.style.transform = `rotateY(${-18 + progress * 48}deg) rotateX(${8 - progress * 18}deg) rotateZ(${Math.sin(progress * Math.PI * 2) * 5}deg) translateZ(${40 + progress * 50}px)`;
      }
      if (phones.left) {
        phones.left.style.transform = `rotateY(${-40 + progress * 32}deg) rotateX(${12 - progress * 12}deg) translateZ(${-20 + progress * 55}px) translateX(${-progress * 28}px)`;
      }
      if (phones.right) {
        phones.right.style.transform = `rotateY(${34 - progress * 40}deg) rotateX(${10 - progress * 16}deg) translateZ(${-10 + progress * 60}px)`;
      }

      const faceIndex = Math.min(faceCount - 1, Math.floor(progress * faceCount));
      setFace(faceIndex);

      /* Scroll content inside active phone screens */
      const screenScroll = progress * 55;
      document.querySelectorAll(".phone-face.is-active .phone-scroll-img").forEach((img, i) => {
        const offset = screenScroll + i * 8;
        img.style.transform = `translate3d(0, -${offset}%, 0)`;
      });

      /* Cards tilt */
      tiltCards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const offset = (mid - vh / 2) / vh;
        const rotY = clamp(-offset * 22, -16, 16);
        const rotX = clamp(offset * 12, -12, 12);
        const lift = clamp(1 - Math.abs(offset) * 1.15, 0, 1) * 16;
        const stagger = (i % 2 === 0 ? 1 : -1) * 4;
        card.style.transform = `perspective(1200px) rotateY(${rotY + stagger}deg) rotateX(${rotX}deg) translateY(${-lift}px) scale(${1 + lift * 0.002})`;

        const mediaImg = card.querySelector(".media-3d img");
        if (mediaImg) {
          const local = clamp((vh - rect.top) / (vh + rect.height), 0, 1);
          mediaImg.style.transform = `scale(1.12) translate3d(0, ${(0.5 - local) * 12}%, 0)`;
        }
      });

      /* Banner parallax */
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
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    update();
  };

  initScroll3D();
})();
