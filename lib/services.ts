import type { ServiceIconName } from "@/components/ServiceIcon";

export type ServiceOfferDef = {
  id: string;
  icon: ServiceIconName;
  titleKey: string;
  bodyKey: string;
  itemKeys: [string, string, string];
};

export type ServicePageDef = {
  slug: string;
  topic: "web" | "saas" | "mobile" | "game";
  titleKey: string;
  descKey: string;
  headingKey: string;
  leadKey: string;
  bodyKey: string;
  body2Key: string;
  coverSrc: string;
  coverAltKey: string;
  ctaKey: string;
  offersTitleKey: string;
  offers: ServiceOfferDef[];
  howTitleKey: string;
  how: { titleKey: string; bodyKey: string }[];
  techItems: string[];
  outcomeKeys: string[];
};

function offers(
  prefix: string,
  items: Array<[id: string, icon: ServiceIconName]>,
): ServiceOfferDef[] {
  return items.map(([id, icon]) => ({
    id,
    icon,
    titleKey: `${prefix}.offer.${id}.title`,
    bodyKey: `${prefix}.offer.${id}.body`,
    itemKeys: [
      `${prefix}.offer.${id}.d1`,
      `${prefix}.offer.${id}.d2`,
      `${prefix}.offer.${id}.d3`,
    ],
  }));
}

function how(
  prefix: string,
): ServicePageDef["how"] {
  return [1, 2, 3].map((n) => ({
    titleKey: `${prefix}.how${n}t`,
    bodyKey: `${prefix}.how${n}`,
  }));
}

export const SERVICE_PAGES: Record<string, ServicePageDef> = {
  "web-gelistirme": {
    slug: "web-gelistirme",
    topic: "web",
    titleKey: "web.metaTitle",
    descKey: "web.metaDesc",
    headingKey: "web.title",
    leadKey: "web.lead",
    bodyKey: "web.body",
    body2Key: "web.body2",
    coverSrc: "/assets/service-web.png",
    coverAltKey: "web.imgAlt",
    ctaKey: "web.cta",
    offersTitleKey: "web.offersTitle",
    offers: offers("web", [
      ["portfolio", "portfolio"],
      ["commerce", "commerce"],
      ["blog", "blog"],
      ["corporate", "corporate"],
      ["webapp", "webapp"],
    ]),
    howTitleKey: "web.howTitle",
    how: how("web"),
    techItems: [
      "React / Next.js, TypeScript",
      "Node.js API, PostgreSQL",
      "Stripe / iyzico, CMS, design tokens",
      "Vercel / Cloudflare, edge caching",
      "SEO, accessibility (WCAG), analytics",
    ],
    outcomeKeys: ["web.out1", "web.out2", "web.out3", "web.out4"],
  },
  saas: {
    slug: "saas",
    topic: "saas",
    titleKey: "saas.metaTitle",
    descKey: "saas.metaDesc",
    headingKey: "saas.title",
    leadKey: "saas.lead",
    bodyKey: "saas.body",
    body2Key: "saas.body2",
    coverSrc: "/assets/service-saas.png",
    coverAltKey: "saas.imgAlt",
    ctaKey: "saas.cta",
    offersTitleKey: "saas.offersTitle",
    offers: offers("saas", [
      ["platform", "platform"],
      ["billing", "billing"],
      ["internal", "internal"],
      ["marketplace", "marketplace"],
      ["api", "api"],
    ]),
    howTitleKey: "saas.howTitle",
    how: how("saas"),
    techItems: [
      "Node.js / NestJS, Python (FastAPI)",
      "PostgreSQL, Redis, event queues",
      "Stripe / iyzico abonelik akışları",
      "AWS / GCP, Docker, CI/CD",
      "Observability: logging, metrics, alerting",
    ],
    outcomeKeys: ["saas.out1", "saas.out2", "saas.out3", "saas.out4"],
  },
  "mobil-uygulama": {
    slug: "mobil-uygulama",
    topic: "mobile",
    titleKey: "mobile.metaTitle",
    descKey: "mobile.metaDesc",
    headingKey: "mobile.title",
    leadKey: "mobile.lead",
    bodyKey: "mobile.body",
    body2Key: "mobile.body2",
    coverSrc: "/assets/service-mobile-app.png",
    coverAltKey: "mobile.imgAlt",
    ctaKey: "mobile.cta",
    offersTitleKey: "mobile.offersTitle",
    offers: offers("mobile", [
      ["consumer", "consumer"],
      ["ondemand", "ondemand"],
      ["health", "health"],
      ["field", "field"],
      ["superapp", "superapp"],
    ]),
    howTitleKey: "mobile.howTitle",
    how: how("mobile"),
    techItems: [
      "Swift / SwiftUI, Kotlin / Jetpack Compose",
      "Flutter (gerektiğinde tek kod tabanı)",
      "REST / GraphQL, Secure storage, Keychain",
      "Firebase, Crashlytics, App Store Connect / Play Console",
      "CI: Fastlane, GitHub Actions",
    ],
    outcomeKeys: ["mobile.out1", "mobile.out2", "mobile.out3", "mobile.out4"],
  },
  "mobil-oyun": {
    slug: "mobil-oyun",
    topic: "game",
    titleKey: "game.metaTitle",
    descKey: "game.metaDesc",
    headingKey: "game.title",
    leadKey: "game.lead",
    bodyKey: "game.body",
    body2Key: "game.body2",
    coverSrc: "/assets/service-mobile-game.png",
    coverAltKey: "game.imgAlt",
    ctaKey: "game.cta",
    offersTitleKey: "game.offersTitle",
    offers: offers("game", [
      ["casual", "casual"],
      ["midcore", "midcore"],
      ["multiplayer", "multiplayer"],
      ["idle", "idle"],
      ["prototype", "prototype"],
    ]),
    howTitleKey: "game.howTitle",
    how: how("game"),
    techItems: [
      "Unity (C#), URP / 2D Toolkit",
      "Addressables, asset pipeline, build automation",
      "Backend: PlayFab / custom services",
      "Analytics: Adjust, Firebase, custom events",
      "IAP, ads mediation, A/B testing",
    ],
    outcomeKeys: ["game.out1", "game.out2", "game.out3", "game.out4"],
  },
};

export function getServiceOffers(slug: string) {
  return SERVICE_PAGES[slug]?.offers ?? [];
}
