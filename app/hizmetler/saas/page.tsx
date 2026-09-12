import type { Metadata } from "next";
import DetailPage from "@/components/DetailPage";

export const metadata: Metadata = {
  title: "SaaS Uygulamaları | G-Wolf Interactive",
  description:
    "SaaS uygulamaları — multi-tenant mimari, abonelik sistemleri ve ölçeklenebilir ürün mühendisliği. G-Wolf Interactive.",
};

export default function Page() {
  return (
    <DetailPage
      kind="service"
      titleKey="saas.metaTitle"
      descKey="saas.metaDesc"
      backHref="/#hizmetler"
      backKey="common.backServices"
      eyebrowKey="common.service"
      headingKey="saas.title"
      leadKey="saas.lead"
      coverSrc="/assets/service-saas.png"
      coverAltKey="saas.imgAlt"
      ctaKey="saas.cta"
      sections={[
        {
          type: "text",
          titleKey: "common.whatWeBuild",
          bodyKey: "saas.body",
        },
        {
          type: "static-list",
          titleKey: "common.techStack",
          listClass: "tech-list",
          items: [
            "Node.js / NestJS, Python (FastAPI)",
            "PostgreSQL, Redis, event queues",
            "Stripe / iyzico abonelik akışları",
            "AWS / GCP, Docker, CI/CD",
            "Observability: logging, metrics, alerting",
          ],
        },
        {
          type: "list",
          titleKey: "common.outcomes",
          listClass: "check-list",
          itemKeys: ["saas.out1", "saas.out2", "saas.out3", "saas.out4"],
        },
      ]}
    />
  );
}
