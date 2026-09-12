(() => {
  "use strict";

  const STORAGE_KEY = "gw-lang";
  const SUPPORTED = ["tr", "en", "de", "es"];

  const FLAG_SVG = {
    tr: `<svg viewBox="0 0 36 36" aria-hidden="true"><rect width="36" height="36" fill="#E30A17"/><circle cx="14.5" cy="18" r="8.2" fill="#fff"/><circle cx="17.2" cy="18" r="6.5" fill="#E30A17"/><polygon fill="#fff" points="24.2,12.2 25.55,16.35 29.95,16.55 26.4,19.35 27.55,23.55 24.2,21.15 20.85,23.55 22,19.35 18.45,16.55 22.85,16.35"/></svg>`,
    en: `<svg viewBox="0 0 36 36" aria-hidden="true"><rect width="36" height="36" fill="#012169"/><path stroke="#fff" stroke-width="6" d="M0 0l36 36M36 0L0 36"/><path stroke="#C8102E" stroke-width="3.5" d="M0 0l36 36M36 0L0 36"/><path stroke="#fff" stroke-width="10" d="M18 0v36M0 18h36"/><path stroke="#C8102E" stroke-width="6" d="M18 0v36M0 18h36"/></svg>`,
    de: `<svg viewBox="0 0 36 36" aria-hidden="true"><rect width="36" height="12" y="0" fill="#000"/><rect width="36" height="12" y="12" fill="#D00"/><rect width="36" height="12" y="24" fill="#FFCE00"/></svg>`,
    es: `<svg viewBox="0 0 36 36" aria-hidden="true"><rect width="36" height="9" y="0" fill="#AA151B"/><rect width="36" height="18" y="9" fill="#F1BF00"/><rect width="36" height="9" y="27" fill="#AA151B"/><rect x="6" y="13" width="7" height="10" rx="1" fill="#AA151B" opacity=".85"/></svg>`,
  };

  const LANG_LABELS = {
    tr: "Türkçe",
    en: "English",
    de: "Deutsch",
    es: "Español",
  };

  const translations = {
    tr: {
      "meta.description": "G-Wolf Interactive — Mobil uygulama ve mobil oyun teknolojileri.",
      "meta.title": "G-Wolf Interactive | Mobil Uygulama & Oyun Teknolojileri",
      "nav.home": "Anasayfa",
      "nav.services": "Hizmetler",
      "nav.projects": "Projeler",
      "nav.contact": "İletişim",
      "nav.menuOpen": "Menüyü aç",
      "nav.menuClose": "Menüyü kapat",
      "nav.mainAria": "Ana menü",
      "nav.footerAria": "Footer menü",
      "nav.langAria": "Dil seçimi",
      "logo.aria": "G-Wolf Interactive Anasayfa",
      "hero.title": "Mobil Uygulama ve<br />Mobil Oyun Teknolojileri",
      "hero.subtitle": "Gray Wolf Interactive olarak mobil deneyimleri tasarlıyor, geliştiriyor ve ölçekliyoruz.",
      "hero.cta": "Projelerimizi İnceleyin",
      "services.title": "Hizmetler",
      "services.subtitle": "Ürün odaklı mühendislik: SaaS, mobil, oyun ve web — fikirden production’a.",
      "services.saas.title": "SaaS Uygulamaları",
      "services.saas.desc": "Abonelik tabanlı ürünler için ölçeklenebilir mimari, multi-tenant altyapı ve ölçülebilir büyüme.",
      "services.mobile.title": "Mobil Uygulama",
      "services.mobile.desc": "Native iOS/Android ve cross-platform ile App Store kalitesinde performans ve kullanıcı deneyimi.",
      "services.game.title": "Mobil Oyun Geliştirme",
      "services.game.desc": "Akıcı oynanış, canlı operasyon ve monetizasyon döngüleriyle sürdürülebilir mobil oyun ürünleri.",
      "services.web.title": "Web Geliştirme",
      "services.web.desc": "Hızlı, erişilebilir ve SEO’ya hazır web ürünleri — landing’den kompleks dashboard’lara.",
      "services.cta": "Detayı gör",
      "projects.title": "Projeler",
      "projects.subtitle": "Seçili ürün çalışmalarımızdan bir kesit.",
      "projects.diet.tag": "Native iOS",
      "projects.diet.title": "Diet Tracking App",
      "projects.diet.desc": "Kalori, makro ve öğün takibini sadeleştiren native iOS uygulaması — HealthKit entegrasyonu ve SwiftUI arayüzü.",
      "projects.diet.cta": "Projeyi incele",
      "projects.diet.imgAlt": "Diet Tracking App ekran görüntüsü",
      "contact.title": "İletişim",
      "contact.subtitle": "Projenizi konuşalım. Kısa bir not bırakın, ekibimiz size dönüş yapsın.",
      "contact.name": "Ad Soyad",
      "contact.namePh": "Adınız",
      "contact.email": "E-posta",
      "contact.emailPh": "ornek@email.com",
      "contact.message": "Mesaj",
      "contact.messagePh": "Projeniz veya talebiniz hakkında kısaca yazın...",
      "contact.submit": "Gönder",
      "contact.error": "Lütfen tüm alanları doğru doldurun.",
      "contact.success": "Mesajınız alındı. En kısa sürede dönüş yapacağız.",
      "footer.tagline": "Gray Wolf Interactive — mobil uygulama ve oyun teknolojileri.",
      "footer.copy": "G-Wolf Interactive. Tüm hakları saklıdır.",
      "common.backServices": "← Hizmetler",
      "common.backProjects": "← Projeler",
      "common.service": "Hizmet",
      "common.contactCta": "İletişime geçin",
      "common.whatWeBuild": "Ne inşa ediyoruz?",
      "common.techStack": "Teknoloji yığını",
      "common.outcomes": "Çıktılar",
      "saas.metaDesc": "SaaS uygulamaları — multi-tenant mimari, abonelik sistemleri ve ölçeklenebilir ürün mühendisliği. G-Wolf Interactive.",
      "saas.metaTitle": "SaaS Uygulamaları | G-Wolf Interactive",
      "saas.title": "SaaS Uygulamaları",
      "saas.lead": "Abonelik tabanlı ürünleri hızlı ship edip güvenle ölçeklendirmeniz için modern cloud mimarisi, ürün analitiği ve operasyonel hazırlık.",
      "saas.imgAlt": "SaaS dashboard ve bulut mimarisi görseli",
      "saas.body": "B2B ve B2C SaaS ürünlerinde çekirdek sorun aynı: kullanıcıyı değere hızlı ulaştırmak, veriyi güvenle tutmak ve büyüdükçe sistemi yeniden yazmamak. Multi-tenant veri modeli, rol tabanlı erişim, faturalandırma entegrasyonları ve olay tabanlı arka plan işleri ile ürününüzü production-ready bir platforma taşıyoruz.",
      "saas.out1": "MVP’den ölçeklenebilir SaaS’a net mimari yol haritası",
      "saas.out2": "Güvenli auth, tenant izolasyonu ve audit trail",
      "saas.out3": "Ölçülebilir ürün metrikleri (activation, retention, churn)",
      "saas.out4": "Deploy pipeline ve ortam yönetimi (dev / staging / prod)",
      "saas.cta": "SaaS fikrinizi production’a taşıyalım.",
      "mobile.metaDesc": "Native ve cross-platform mobil uygulama geliştirme. G-Wolf Interactive.",
      "mobile.metaTitle": "Mobil Uygulama | G-Wolf Interactive",
      "mobile.title": "Mobil Uygulama Geliştirme",
      "mobile.lead": "App Store ve Google Play standartlarında native performans — Swift / Kotlin veya Flutter ile ürününüzü cihazda gerçekten iyi hissettiriyoruz.",
      "mobile.imgAlt": "Mobil uygulama geliştirme görseli",
      "mobile.body": "Mobil ürünlerde fark, piksellerde değil: cold start süresi, offline senaryolar, push bildirim stratejisi ve store review sürecinde ortaya çıkar. Kullanıcı akışını netleştirip, native API’lerle (HealthKit, Camera, Location, Biometrics) entegre, test edilebilir ve sürdürülebilir bir uygulama katmanı kuruyoruz.",
      "mobile.out1": "Wireframe’den store yayınına uçtan uca teslim",
      "mobile.out2": "60fps’e yakın UI, düşük bellek ve pil kullanımı",
      "mobile.out3": "Crash-free rate ve analytics enstrümantasyonu",
      "mobile.out4": "Versiyonlama, OTA güncelleme stratejisi ve release checklist",
      "mobile.cta": "Mobil ürün fikrinizi native kalitede hayata geçirelim.",
      "game.metaDesc": "Mobil oyun geliştirme — Unity, canlı operasyon ve monetizasyon. G-Wolf Interactive.",
      "game.metaTitle": "Mobil Oyun Geliştirme | G-Wolf Interactive",
      "game.title": "Mobil Oyun Geliştirme",
      "game.lead": "Oynanış döngüsünden canlı operasyona — oyuncuyu tutan, ölçülebilir ve sürdürülebilir mobil oyun ürünleri geliştiriyoruz.",
      "game.imgAlt": "Mobil oyun geliştirme görseli",
      "game.body": "İyi bir mobil oyun yalnızca güzel grafik değildir. Core loop, difficulty curve, retention hook’ları ve ekonomi dengesi birlikte çalışır. Prototipten soft launch’a, telemetri ile karar alıp içeriği hızla iterate edebileceğiniz bir üretim hattı kuruyoruz — Unity tabanlı performans odaklı bir runtime ile.",
      "game.out1": "Playable prototype ve net game design dokümantasyonu",
      "game.out2": "Düşük cihazlarda stabil FPS hedefi",
      "game.out3": "Live-ops için içerik güncelleme altyapısı",
      "game.out4": "Monetizasyon ve retention metrik panelleri",
      "game.cta": "Oyun fikrinizi soft launch’a hazır hale getirelim.",
      "web.metaDesc": "Modern web geliştirme — performanslı frontend, güvenli backend. G-Wolf Interactive.",
      "web.metaTitle": "Web Geliştirme | G-Wolf Interactive",
      "web.title": "Web Geliştirme",
      "web.lead": "Marka sitelerinden kompleks admin panellerine — hızlı yüklenen, erişilebilir ve bakımı kolay modern web ürünleri.",
      "web.imgAlt": "Web geliştirme görseli",
      "web.body": "Web, ürününüzün vitrini ve operasyon merkezi. Core Web Vitals’a uyumlu frontend, tip güvenli API katmanı ve net bileşen sistemi ile hem kullanıcıya hem ekibe hız kazandırıyoruz. Marketing site, ürün dashboard’u veya müşteri portalı — tek bir tasarım dilinde, ölçeklenebilir kod tabanıyla.",
      "web.out1": "Lighthouse performans ve erişilebilirlik hedefleri",
      "web.out2": "Yeniden kullanılabilir UI sistemi ve dokümantasyon",
      "web.out3": "Güvenli auth ve role-based admin yüzeyleri",
      "web.out4": "CI ile preview deploy ve kalite kapıları",
      "web.cta": "Web ürününüzü modern stack ile yeniden tanımlayalım.",
      "diet.metaDesc": "Diet Tracking App — native iOS beslenme takip uygulaması. G-Wolf Interactive.",
      "diet.metaTitle": "Diet Tracking App | G-Wolf Interactive",
      "diet.eyebrow": "Proje · Native iOS",
      "diet.title": "Diet Tracking App",
      "diet.lead": "Kalori, makro ve öğün takibini sadeleştiren native iOS uygulaması. SwiftUI arayüzü, HealthKit entegrasyonu ve offline-first veri katmanı.",
      "diet.imgAlt": "Diet Tracking App iOS ekran görüntüsü",
      "diet.summaryTitle": "Özet",
      "diet.summary": "Diet Tracking App, günlük beslenme hedeflerini tek bakışta görünür kılmak için tasarlandı. Kullanıcı öğün ekler, makro dağılımını takip eder ve Apple Health ile aktivite verisini birleştirir. Ürün odaklı yaklaşımımız: minimum sürtünme, maksimum netlik — her ekran bir karar anına hizmet eder.",
      "diet.featuresTitle": "Öne çıkan özellikler",
      "diet.f1": "Günlük kalori halkası ve makro panelleri",
      "diet.f2": "Hızlı öğün ekleme ve özel besin kayıtları",
      "diet.f3": "HealthKit ile adım / aktif enerji senkronu",
      "diet.f4": "Offline kayıt, senkronizasyon kuyruğu",
      "diet.f5": "Dark mode ve Dynamic Type desteği",
      "diet.techTitle": "Teknoloji",
      "diet.processTitle": "Süreç",
      "diet.process": "Keşif ve kullanıcı akışları → SwiftUI prototip → HealthKit izin modeli → beta (TestFlight) → metrik odaklı iterasyon. Bu şablon, native iOS ürün teslimatımızın referans yapısıdır; benzer health & lifestyle uygulamalarına uyarlanabilir.",
      "diet.cta": "Benzer bir native iOS ürünü konuşmak ister misiniz?",
    },
    en: {
      "meta.description": "G-Wolf Interactive — Mobile app and mobile game technologies.",
      "meta.title": "G-Wolf Interactive | Mobile App & Game Technologies",
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "nav.menuOpen": "Open menu",
      "nav.menuClose": "Close menu",
      "nav.mainAria": "Main menu",
      "nav.footerAria": "Footer menu",
      "nav.langAria": "Language selection",
      "logo.aria": "G-Wolf Interactive Home",
      "hero.title": "Mobile App and<br />Mobile Game Technologies",
      "hero.subtitle": "As Gray Wolf Interactive, we design, build, and scale mobile experiences.",
      "hero.cta": "Explore Our Projects",
      "services.title": "Services",
      "services.subtitle": "Product-driven engineering: SaaS, mobile, games, and web — from idea to production.",
      "services.saas.title": "SaaS Applications",
      "services.saas.desc": "Scalable architecture, multi-tenant infrastructure, and measurable growth for subscription products.",
      "services.mobile.title": "Mobile Apps",
      "services.mobile.desc": "Native iOS/Android and cross-platform apps with App Store–grade performance and UX.",
      "services.game.title": "Mobile Game Development",
      "services.game.desc": "Sustainable mobile games with fluid gameplay, live ops, and monetization loops.",
      "services.web.title": "Web Development",
      "services.web.desc": "Fast, accessible, SEO-ready web products — from landing pages to complex dashboards.",
      "services.cta": "View details",
      "projects.title": "Projects",
      "projects.subtitle": "A snapshot of selected product work.",
      "projects.diet.tag": "Native iOS",
      "projects.diet.title": "Diet Tracking App",
      "projects.diet.desc": "A native iOS app that simplifies calorie, macro, and meal tracking — HealthKit integration and SwiftUI interface.",
      "projects.diet.cta": "View project",
      "projects.diet.imgAlt": "Diet Tracking App screenshot",
      "contact.title": "Contact",
      "contact.subtitle": "Let’s talk about your project. Leave a short note and our team will get back to you.",
      "contact.name": "Full name",
      "contact.namePh": "Your name",
      "contact.email": "Email",
      "contact.emailPh": "you@email.com",
      "contact.message": "Message",
      "contact.messagePh": "Tell us briefly about your project or request...",
      "contact.submit": "Send",
      "contact.error": "Please fill in all fields correctly.",
      "contact.success": "Message received. We’ll get back to you shortly.",
      "footer.tagline": "Gray Wolf Interactive — mobile app and game technologies.",
      "footer.copy": "G-Wolf Interactive. All rights reserved.",
      "common.backServices": "← Services",
      "common.backProjects": "← Projects",
      "common.service": "Service",
      "common.contactCta": "Get in touch",
      "common.whatWeBuild": "What we build",
      "common.techStack": "Tech stack",
      "common.outcomes": "Outcomes",
      "saas.metaDesc": "SaaS applications — multi-tenant architecture, subscriptions, and scalable product engineering. G-Wolf Interactive.",
      "saas.metaTitle": "SaaS Applications | G-Wolf Interactive",
      "saas.title": "SaaS Applications",
      "saas.lead": "Modern cloud architecture, product analytics, and operational readiness so you can ship subscription products fast and scale safely.",
      "saas.imgAlt": "SaaS dashboard and cloud architecture visual",
      "saas.body": "For B2B and B2C SaaS, the core challenge is the same: get users to value quickly, keep data secure, and avoid rewriting as you grow. We take your product to a production-ready platform with multi-tenant data models, role-based access, billing integrations, and event-driven background jobs.",
      "saas.out1": "Clear architecture roadmap from MVP to scalable SaaS",
      "saas.out2": "Secure auth, tenant isolation, and audit trail",
      "saas.out3": "Measurable product metrics (activation, retention, churn)",
      "saas.out4": "Deploy pipeline and environment management (dev / staging / prod)",
      "saas.cta": "Let’s take your SaaS idea to production.",
      "mobile.metaDesc": "Native and cross-platform mobile app development. G-Wolf Interactive.",
      "mobile.metaTitle": "Mobile Apps | G-Wolf Interactive",
      "mobile.title": "Mobile App Development",
      "mobile.lead": "Native performance to App Store and Google Play standards — Swift / Kotlin or Flutter that feels great on device.",
      "mobile.imgAlt": "Mobile app development visual",
      "mobile.body": "In mobile products, the difference isn’t just pixels: it shows up in cold start time, offline scenarios, push strategy, and store review. We clarify user flows and build a testable, maintainable app layer integrated with native APIs (HealthKit, Camera, Location, Biometrics).",
      "mobile.out1": "End-to-end delivery from wireframe to store release",
      "mobile.out2": "Near-60fps UI with low memory and battery use",
      "mobile.out3": "Crash-free rate and analytics instrumentation",
      "mobile.out4": "Versioning, OTA update strategy, and release checklist",
      "mobile.cta": "Let’s bring your mobile product to native quality.",
      "game.metaDesc": "Mobile game development — Unity, live ops, and monetization. G-Wolf Interactive.",
      "game.metaTitle": "Mobile Game Development | G-Wolf Interactive",
      "game.title": "Mobile Game Development",
      "game.lead": "From core loop to live ops — we build measurable, sustainable mobile games that keep players engaged.",
      "game.imgAlt": "Mobile game development visual",
      "game.body": "A great mobile game is more than pretty graphics. Core loop, difficulty curve, retention hooks, and economy balance work together. From prototype to soft launch, we build a production pipeline you can iterate with telemetry — on a performance-focused Unity runtime.",
      "game.out1": "Playable prototype and clear game design docs",
      "game.out2": "Stable FPS targets on lower-end devices",
      "game.out3": "Content update infrastructure for live ops",
      "game.out4": "Monetization and retention metric dashboards",
      "game.cta": "Let’s get your game idea soft-launch ready.",
      "web.metaDesc": "Modern web development — performant frontend, secure backend. G-Wolf Interactive.",
      "web.metaTitle": "Web Development | G-Wolf Interactive",
      "web.title": "Web Development",
      "web.lead": "From brand sites to complex admin panels — fast-loading, accessible, maintainable modern web products.",
      "web.imgAlt": "Web development visual",
      "web.body": "The web is your product’s storefront and operations hub. With Core Web Vitals–aligned frontends, type-safe APIs, and a clear component system, we speed up both users and teams. Marketing site, product dashboard, or customer portal — one design language, scalable codebase.",
      "web.out1": "Lighthouse performance and accessibility targets",
      "web.out2": "Reusable UI system and documentation",
      "web.out3": "Secure auth and role-based admin surfaces",
      "web.out4": "CI preview deploys and quality gates",
      "web.cta": "Let’s redefine your web product with a modern stack.",
      "diet.metaDesc": "Diet Tracking App — native iOS nutrition tracking. G-Wolf Interactive.",
      "diet.metaTitle": "Diet Tracking App | G-Wolf Interactive",
      "diet.eyebrow": "Project · Native iOS",
      "diet.title": "Diet Tracking App",
      "diet.lead": "A native iOS app that simplifies calorie, macro, and meal tracking. SwiftUI interface, HealthKit integration, and offline-first data layer.",
      "diet.imgAlt": "Diet Tracking App iOS screenshot",
      "diet.summaryTitle": "Overview",
      "diet.summary": "Diet Tracking App was designed to make daily nutrition goals visible at a glance. Users log meals, track macros, and sync activity with Apple Health. Our product approach: minimum friction, maximum clarity — every screen serves a decision moment.",
      "diet.featuresTitle": "Highlights",
      "diet.f1": "Daily calorie ring and macro panels",
      "diet.f2": "Quick meal logging and custom foods",
      "diet.f3": "HealthKit sync for steps / active energy",
      "diet.f4": "Offline logging with sync queue",
      "diet.f5": "Dark mode and Dynamic Type support",
      "diet.techTitle": "Technology",
      "diet.processTitle": "Process",
      "diet.process": "Discovery and user flows → SwiftUI prototype → HealthKit permission model → beta (TestFlight) → metric-driven iteration. This template is our reference for native iOS delivery and adapts to similar health & lifestyle apps.",
      "diet.cta": "Want to talk about a similar native iOS product?",
    },
    de: {
      "meta.description": "G-Wolf Interactive — Mobile Apps und Mobile-Game-Technologien.",
      "meta.title": "G-Wolf Interactive | Mobile Apps & Game-Technologien",
      "nav.home": "Startseite",
      "nav.services": "Leistungen",
      "nav.projects": "Projekte",
      "nav.contact": "Kontakt",
      "nav.menuOpen": "Menü öffnen",
      "nav.menuClose": "Menü schließen",
      "nav.mainAria": "Hauptmenü",
      "nav.footerAria": "Footermenü",
      "nav.langAria": "Sprachauswahl",
      "logo.aria": "G-Wolf Interactive Startseite",
      "hero.title": "Mobile Apps und<br />Mobile-Game-Technologien",
      "hero.subtitle": "Als Gray Wolf Interactive gestalten, entwickeln und skalieren wir mobile Erlebnisse.",
      "hero.cta": "Unsere Projekte ansehen",
      "services.title": "Leistungen",
      "services.subtitle": "Produktorientierte Engineering: SaaS, Mobile, Games und Web — von der Idee bis zur Production.",
      "services.saas.title": "SaaS-Anwendungen",
      "services.saas.desc": "Skalierbare Architektur, Multi-Tenant-Infrastruktur und messbares Wachstum für Abo-Produkte.",
      "services.mobile.title": "Mobile Apps",
      "services.mobile.desc": "Native iOS/Android und Cross-Platform mit App-Store-Qualität in Performance und UX.",
      "services.game.title": "Mobile-Game-Entwicklung",
      "services.game.desc": "Nachhaltige Mobile Games mit flüssigem Gameplay, Live Ops und Monetarisierungsloops.",
      "services.web.title": "Webentwicklung",
      "services.web.desc": "Schnelle, zugängliche, SEO-fähige Webprodukte — von Landingpages bis zu komplexen Dashboards.",
      "services.cta": "Details ansehen",
      "projects.title": "Projekte",
      "projects.subtitle": "Ein Ausschnitt ausgewählter Produktarbeit.",
      "projects.diet.tag": "Native iOS",
      "projects.diet.title": "Diet Tracking App",
      "projects.diet.desc": "Native iOS-App, die Kalorien-, Makro- und Mahlzeiten-Tracking vereinfacht — HealthKit und SwiftUI.",
      "projects.diet.cta": "Projekt ansehen",
      "projects.diet.imgAlt": "Diet Tracking App Screenshot",
      "contact.title": "Kontakt",
      "contact.subtitle": "Sprechen wir über Ihr Projekt. Hinterlassen Sie eine kurze Nachricht — wir melden uns.",
      "contact.name": "Name",
      "contact.namePh": "Ihr Name",
      "contact.email": "E-Mail",
      "contact.emailPh": "Sie@email.com",
      "contact.message": "Nachricht",
      "contact.messagePh": "Kurz zu Ihrem Projekt oder Anliegen...",
      "contact.submit": "Senden",
      "contact.error": "Bitte füllen Sie alle Felder korrekt aus.",
      "contact.success": "Nachricht erhalten. Wir melden uns in Kürze.",
      "footer.tagline": "Gray Wolf Interactive — Mobile Apps und Game-Technologien.",
      "footer.copy": "G-Wolf Interactive. Alle Rechte vorbehalten.",
      "common.backServices": "← Leistungen",
      "common.backProjects": "← Projekte",
      "common.service": "Leistung",
      "common.contactCta": "Kontakt aufnehmen",
      "common.whatWeBuild": "Was wir bauen",
      "common.techStack": "Tech-Stack",
      "common.outcomes": "Ergebnisse",
      "saas.metaDesc": "SaaS-Anwendungen — Multi-Tenant-Architektur, Abos und skalierbares Product Engineering. G-Wolf Interactive.",
      "saas.metaTitle": "SaaS-Anwendungen | G-Wolf Interactive",
      "saas.title": "SaaS-Anwendungen",
      "saas.lead": "Moderne Cloud-Architektur, Produktanalytik und operative Reife — damit Sie Abo-Produkte schnell shippen und sicher skalieren.",
      "saas.imgAlt": "SaaS-Dashboard und Cloud-Architektur",
      "saas.body": "Bei B2B- und B2C-SaaS ist die Kernfrage gleich: Nutzer schnell zum Mehrwert führen, Daten sicher halten und beim Wachstum nicht neu schreiben. Mit Multi-Tenant-Datenmodellen, rollenbasierter Rechteverwaltung, Billing-Integrationen und eventbasierten Hintergrundjobs bringen wir Ihr Produkt auf Production-Ready-Niveau.",
      "saas.out1": "Klarer Architektur-Fahrplan vom MVP zum skalierbaren SaaS",
      "saas.out2": "Sichere Auth, Tenant-Isolation und Audit Trail",
      "saas.out3": "Messbare Produktmetriken (Activation, Retention, Churn)",
      "saas.out4": "Deploy-Pipeline und Umgebungen (dev / staging / prod)",
      "saas.cta": "Bringen wir Ihre SaaS-Idee in die Production.",
      "mobile.metaDesc": "Native und Cross-Platform Mobile-App-Entwicklung. G-Wolf Interactive.",
      "mobile.metaTitle": "Mobile Apps | G-Wolf Interactive",
      "mobile.title": "Mobile-App-Entwicklung",
      "mobile.lead": "Native Performance nach App-Store- und Google-Play-Standards — Swift / Kotlin oder Flutter, das sich auf dem Gerät richtig anfühlt.",
      "mobile.imgAlt": "Mobile-App-Entwicklung Visual",
      "mobile.body": "Bei Mobile-Produkten entscheidet nicht nur das Pixel: Cold Start, Offline-Szenarien, Push-Strategie und Store-Review zählen. Wir schärfen User Flows und bauen eine testbare, wartbare App-Schicht mit nativen APIs (HealthKit, Kamera, Location, Biometrie).",
      "mobile.out1": "End-to-End-Lieferung vom Wireframe bis zum Store-Release",
      "mobile.out2": "Nahezu 60fps UI bei geringem Speicher- und Akkuverbrauch",
      "mobile.out3": "Crash-free Rate und Analytics-Instrumentierung",
      "mobile.out4": "Versionierung, OTA-Update-Strategie und Release-Checkliste",
      "mobile.cta": "Bringen wir Ihr Mobile-Produkt auf Native-Qualität.",
      "game.metaDesc": "Mobile-Game-Entwicklung — Unity, Live Ops und Monetarisierung. G-Wolf Interactive.",
      "game.metaTitle": "Mobile-Game-Entwicklung | G-Wolf Interactive",
      "game.title": "Mobile-Game-Entwicklung",
      "game.lead": "Vom Core Loop bis Live Ops — messbare, nachhaltige Mobile Games, die Spieler halten.",
      "game.imgAlt": "Mobile-Game-Entwicklung Visual",
      "game.body": "Ein gutes Mobile Game ist mehr als schöne Grafik. Core Loop, Difficulty Curve, Retention Hooks und Wirtschaft müssen zusammenspielen. Vom Prototyp bis Soft Launch bauen wir eine Produktionspipeline, die Sie mit Telemetrie iterieren können — auf performantem Unity-Runtime.",
      "game.out1": "Spielbarer Prototyp und klare Game-Design-Docs",
      "game.out2": "Stabile FPS-Ziele auf schwächeren Geräten",
      "game.out3": "Content-Update-Infrastruktur für Live Ops",
      "game.out4": "Monetarisierungs- und Retention-Dashboards",
      "game.cta": "Machen wir Ihre Game-Idee soft-launch-ready.",
      "web.metaDesc": "Moderne Webentwicklung — performantes Frontend, sicheres Backend. G-Wolf Interactive.",
      "web.metaTitle": "Webentwicklung | G-Wolf Interactive",
      "web.title": "Webentwicklung",
      "web.lead": "Von Markenseiten bis zu komplexen Admin-Panels — schnell ladende, zugängliche, wartbare Webprodukte.",
      "web.imgAlt": "Webentwicklung Visual",
      "web.body": "Das Web ist Schaufenster und Operations-Hub Ihres Produkts. Mit Core-Web-Vitals-konformem Frontend, typsicheren APIs und klarem Component-System beschleunigen wir Nutzer und Teams. Marketing-Site, Dashboard oder Kundenportal — eine Designsprache, skalierbare Codebasis.",
      "web.out1": "Lighthouse-Performance- und Accessibility-Ziele",
      "web.out2": "Wiederverwendbares UI-System und Dokumentation",
      "web.out3": "Sichere Auth und rollenbasierte Admin-Oberflächen",
      "web.out4": "CI-Preview-Deploys und Quality Gates",
      "web.cta": "Definieren wir Ihr Webprodukt mit modernem Stack neu.",
      "diet.metaDesc": "Diet Tracking App — native iOS Ernährungstracking. G-Wolf Interactive.",
      "diet.metaTitle": "Diet Tracking App | G-Wolf Interactive",
      "diet.eyebrow": "Projekt · Native iOS",
      "diet.title": "Diet Tracking App",
      "diet.lead": "Native iOS-App, die Kalorien-, Makro- und Mahlzeiten-Tracking vereinfacht. SwiftUI, HealthKit und Offline-first-Datenschicht.",
      "diet.imgAlt": "Diet Tracking App iOS Screenshot",
      "diet.summaryTitle": "Überblick",
      "diet.summary": "Diet Tracking App macht tägliche Ernährungsziele auf einen Blick sichtbar. Nutzer loggen Mahlzeiten, tracken Makros und synchronisieren Aktivität mit Apple Health. Unser Ansatz: minimale Reibung, maximale Klarheit — jeder Screen dient einem Entscheidungsmoment.",
      "diet.featuresTitle": "Highlights",
      "diet.f1": "Täglicher Kalorienring und Makro-Panels",
      "diet.f2": "Schnelles Mahlzeiten-Logging und eigene Lebensmittel",
      "diet.f3": "HealthKit-Sync für Schritte / aktive Energie",
      "diet.f4": "Offline-Logging mit Sync-Warteschlange",
      "diet.f5": "Dark Mode und Dynamic Type",
      "diet.techTitle": "Technologie",
      "diet.processTitle": "Prozess",
      "diet.process": "Discovery und User Flows → SwiftUI-Prototyp → HealthKit-Berechtigungsmodell → Beta (TestFlight) → metrikgesteuerte Iteration. Dieses Template ist unsere Referenz für native iOS-Lieferung und lässt sich auf ähnliche Health- & Lifestyle-Apps anpassen.",
      "diet.cta": "Möchten Sie über ein ähnliches native iOS-Produkt sprechen?",
    },
    es: {
      "meta.description": "G-Wolf Interactive — Tecnologías de apps y juegos móviles.",
      "meta.title": "G-Wolf Interactive | Apps y juegos móviles",
      "nav.home": "Inicio",
      "nav.services": "Servicios",
      "nav.projects": "Proyectos",
      "nav.contact": "Contacto",
      "nav.menuOpen": "Abrir menú",
      "nav.menuClose": "Cerrar menú",
      "nav.mainAria": "Menú principal",
      "nav.footerAria": "Menú del pie",
      "nav.langAria": "Selección de idioma",
      "logo.aria": "G-Wolf Interactive Inicio",
      "hero.title": "Tecnologías de apps<br />y juegos móviles",
      "hero.subtitle": "Como Gray Wolf Interactive, diseñamos, desarrollamos y escalamos experiencias móviles.",
      "hero.cta": "Ver nuestros proyectos",
      "services.title": "Servicios",
      "services.subtitle": "Ingeniería orientada al producto: SaaS, móvil, juegos y web — de la idea a producción.",
      "services.saas.title": "Aplicaciones SaaS",
      "services.saas.desc": "Arquitectura escalable, infraestructura multi-tenant y crecimiento medible para productos por suscripción.",
      "services.mobile.title": "Apps móviles",
      "services.mobile.desc": "iOS/Android nativo y multiplataforma con rendimiento y UX de nivel App Store.",
      "services.game.title": "Desarrollo de juegos móviles",
      "services.game.desc": "Juegos móviles sostenibles con jugabilidad fluida, live ops y bucles de monetización.",
      "services.web.title": "Desarrollo web",
      "services.web.desc": "Productos web rápidos, accesibles y listos para SEO — de landings a dashboards complejos.",
      "services.cta": "Ver detalles",
      "projects.title": "Proyectos",
      "projects.subtitle": "Una muestra de trabajos de producto seleccionados.",
      "projects.diet.tag": "Native iOS",
      "projects.diet.title": "Diet Tracking App",
      "projects.diet.desc": "App nativa iOS que simplifica el seguimiento de calorías, macros y comidas — HealthKit y SwiftUI.",
      "projects.diet.cta": "Ver proyecto",
      "projects.diet.imgAlt": "Captura de Diet Tracking App",
      "contact.title": "Contacto",
      "contact.subtitle": "Hablemos de tu proyecto. Deja una nota breve y nuestro equipo te responderá.",
      "contact.name": "Nombre completo",
      "contact.namePh": "Tu nombre",
      "contact.email": "Correo",
      "contact.emailPh": "tu@email.com",
      "contact.message": "Mensaje",
      "contact.messagePh": "Cuéntanos brevemente tu proyecto o solicitud...",
      "contact.submit": "Enviar",
      "contact.error": "Por favor, completa todos los campos correctamente.",
      "contact.success": "Mensaje recibido. Te responderemos pronto.",
      "footer.tagline": "Gray Wolf Interactive — tecnologías de apps y juegos móviles.",
      "footer.copy": "G-Wolf Interactive. Todos los derechos reservados.",
      "common.backServices": "← Servicios",
      "common.backProjects": "← Proyectos",
      "common.service": "Servicio",
      "common.contactCta": "Contactar",
      "common.whatWeBuild": "Qué construimos",
      "common.techStack": "Stack tecnológico",
      "common.outcomes": "Resultados",
      "saas.metaDesc": "Aplicaciones SaaS — arquitectura multi-tenant, suscripciones e ingeniería de producto escalable. G-Wolf Interactive.",
      "saas.metaTitle": "Aplicaciones SaaS | G-Wolf Interactive",
      "saas.title": "Aplicaciones SaaS",
      "saas.lead": "Arquitectura cloud moderna, analítica de producto y preparación operativa para lanzar suscripciones rápido y escalar con seguridad.",
      "saas.imgAlt": "Visual de dashboard SaaS y arquitectura cloud",
      "saas.body": "En SaaS B2B y B2C el reto central es el mismo: llevar al usuario al valor rápido, proteger los datos y no reescribir al crecer. Llevamos tu producto a una plataforma lista para producción con modelos multi-tenant, acceso por roles, integraciones de facturación y trabajos en segundo plano orientados a eventos.",
      "saas.out1": "Hoja de ruta clara del MVP al SaaS escalable",
      "saas.out2": "Auth seguro, aislamiento de tenants y audit trail",
      "saas.out3": "Métricas de producto medibles (activation, retention, churn)",
      "saas.out4": "Pipeline de deploy y entornos (dev / staging / prod)",
      "saas.cta": "Llevemos tu idea SaaS a producción.",
      "mobile.metaDesc": "Desarrollo de apps móviles nativas y multiplataforma. G-Wolf Interactive.",
      "mobile.metaTitle": "Apps móviles | G-Wolf Interactive",
      "mobile.title": "Desarrollo de apps móviles",
      "mobile.lead": "Rendimiento nativo a estándar App Store y Google Play — Swift / Kotlin o Flutter que se siente bien en el dispositivo.",
      "mobile.imgAlt": "Visual de desarrollo de apps móviles",
      "mobile.body": "En productos móviles la diferencia no es solo el píxel: aparece en el cold start, escenarios offline, estrategia de push y la review de la store. Clarificamos flujos e integramos APIs nativas (HealthKit, cámara, ubicación, biometría) en una capa testeable y mantenible.",
      "mobile.out1": "Entrega de extremo a extremo del wireframe a la store",
      "mobile.out2": "UI cerca de 60 fps con bajo uso de memoria y batería",
      "mobile.out3": "Crash-free rate e instrumentación de analytics",
      "mobile.out4": "Versionado, estrategia OTA y checklist de release",
      "mobile.cta": "Llevemos tu producto móvil a calidad nativa.",
      "game.metaDesc": "Desarrollo de juegos móviles — Unity, live ops y monetización. G-Wolf Interactive.",
      "game.metaTitle": "Desarrollo de juegos móviles | G-Wolf Interactive",
      "game.title": "Desarrollo de juegos móviles",
      "game.lead": "Del core loop al live ops — juegos móviles medibles y sostenibles que retienen jugadores.",
      "game.imgAlt": "Visual de desarrollo de juegos móviles",
      "game.body": "Un buen juego móvil es más que gráficos. Core loop, curva de dificultad, hooks de retención y economía deben trabajar juntos. Del prototipo al soft launch construimos un pipeline de producción iterable con telemetría — sobre un runtime Unity orientado al rendimiento.",
      "game.out1": "Prototipo jugable y documentación de game design",
      "game.out2": "Objetivos de FPS estables en dispositivos bajos",
      "game.out3": "Infraestructura de contenido para live ops",
      "game.out4": "Paneles de monetización y retención",
      "game.cta": "Dejamos tu idea de juego lista para soft launch.",
      "web.metaDesc": "Desarrollo web moderno — frontend rápido, backend seguro. G-Wolf Interactive.",
      "web.metaTitle": "Desarrollo web | G-Wolf Interactive",
      "web.title": "Desarrollo web",
      "web.lead": "De sitios de marca a paneles admin complejos — productos web rápidos, accesibles y mantenibles.",
      "web.imgAlt": "Visual de desarrollo web",
      "web.body": "La web es el escaparate y el hub operativo de tu producto. Con frontends alineados a Core Web Vitals, APIs tipadas y un sistema de componentes claro, aceleramos a usuarios y equipos. Sitio marketing, dashboard o portal de clientes — un lenguaje de diseño, código escalable.",
      "web.out1": "Objetivos de rendimiento y accesibilidad Lighthouse",
      "web.out2": "Sistema UI reutilizable y documentación",
      "web.out3": "Auth seguro y superficies admin por roles",
      "web.out4": "Preview deploys con CI y quality gates",
      "web.cta": "Redefinamos tu producto web con un stack moderno.",
      "diet.metaDesc": "Diet Tracking App — seguimiento nutricional nativo iOS. G-Wolf Interactive.",
      "diet.metaTitle": "Diet Tracking App | G-Wolf Interactive",
      "diet.eyebrow": "Proyecto · Native iOS",
      "diet.title": "Diet Tracking App",
      "diet.lead": "App nativa iOS que simplifica el seguimiento de calorías, macros y comidas. Interfaz SwiftUI, HealthKit y capa de datos offline-first.",
      "diet.imgAlt": "Captura iOS de Diet Tracking App",
      "diet.summaryTitle": "Resumen",
      "diet.summary": "Diet Tracking App hace visibles de un vistazo los objetivos diarios de nutrición. El usuario registra comidas, sigue macros y sincroniza actividad con Apple Health. Nuestro enfoque: mínima fricción, máxima claridad — cada pantalla sirve a un momento de decisión.",
      "diet.featuresTitle": "Destacados",
      "diet.f1": "Anillo diario de calorías y paneles de macros",
      "diet.f2": "Registro rápido de comidas y alimentos personalizados",
      "diet.f3": "Sincronización HealthKit de pasos / energía activa",
      "diet.f4": "Registro offline con cola de sincronización",
      "diet.f5": "Soporte de Dark Mode y Dynamic Type",
      "diet.techTitle": "Tecnología",
      "diet.processTitle": "Proceso",
      "diet.process": "Descubrimiento y flujos → prototipo SwiftUI → modelo de permisos HealthKit → beta (TestFlight) → iteración orientada a métricas. Esta plantilla es nuestra referencia de entrega nativa iOS y se adapta a apps similares de health & lifestyle.",
      "diet.cta": "¿Quieres hablar de un producto nativo iOS similar?",
    },
  };

  let currentLang = "tr";

  const t = (key) => {
    const pack = translations[currentLang] || translations.tr;
    return pack[key] ?? translations.tr[key] ?? key;
  };

  const getStoredLang = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (SUPPORTED.includes(saved)) return saved;
    } catch (_) {}
    const nav = (navigator.language || "tr").slice(0, 2).toLowerCase();
    return SUPPORTED.includes(nav) ? nav : "tr";
  };

  const applyLanguage = (lang) => {
    if (!SUPPORTED.includes(lang)) lang = "tr";
    currentLang = lang;

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) {}

    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      const value = t(key);
      if (el.hasAttribute("data-i18n-html")) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key) el.setAttribute("placeholder", t(key));
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key) el.setAttribute("aria-label", t(key));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (key) el.setAttribute("alt", t(key));
    });

    const titleKey = document.body.getAttribute("data-i18n-title");
    if (titleKey) document.title = t(titleKey);
    else if (translations[lang]["meta.title"]) document.title = t("meta.title");

    const metaDesc = document.querySelector('meta[name="description"]');
    const descKey = document.body.getAttribute("data-i18n-desc");
    if (metaDesc) {
      metaDesc.setAttribute("content", t(descKey || "meta.description"));
    }

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    document.querySelectorAll(".lang-switcher").forEach((el) => {
      el.setAttribute("aria-label", t("nav.langAria"));
    });

    document.dispatchEvent(
      new CustomEvent("gw:langchange", { detail: { lang } })
    );
  };

  const renderSwitcher = () => {
    const mounts = document.querySelectorAll("#langSwitcher, .lang-switcher[data-mount]");
    const targets = mounts.length
      ? mounts
      : (() => {
          const headerRight = document.querySelector(".header-right") || document.querySelector(".header-inner");
          if (!headerRight) return [];
          const el = document.createElement("div");
          el.id = "langSwitcher";
          el.className = "lang-switcher";
          headerRight.appendChild(el);
          return [el];
        })();

    targets.forEach((mount) => {
      mount.classList.add("lang-switcher");
      mount.setAttribute("role", "group");
      mount.setAttribute("aria-label", t("nav.langAria"));
      mount.innerHTML = SUPPORTED.map(
        (code) => `
        <button type="button" class="lang-btn" data-lang="${code}" aria-label="${LANG_LABELS[code]}" aria-pressed="false" title="${LANG_LABELS[code]}">
          <span class="lang-glass">${FLAG_SVG[code]}</span>
        </button>`
      ).join("");

      mount.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          applyLanguage(btn.getAttribute("data-lang"));
        });
      });
    });
  };

  const init = () => {
    renderSwitcher();
    applyLanguage(getStoredLang());
  };

  window.GWI18n = {
    t,
    setLang: applyLanguage,
    getLang: () => currentLang,
    init,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
