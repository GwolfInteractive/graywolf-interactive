import type { Metadata } from "next";
import DetailPage from "@/components/DetailPage";

export const metadata: Metadata = {
  title: "Web Geliştirme | G-Wolf Interactive",
  description:
    "Modern web geliştirme — performanslı frontend, güvenli backend. G-Wolf Interactive.",
};

export default function Page() {
  return (
    <DetailPage
      kind="service"
      titleKey="web.metaTitle"
      descKey="web.metaDesc"
      backHref="/#hizmetler"
      backKey="common.backServices"
      eyebrowKey="common.service"
      headingKey="web.title"
      leadKey="web.lead"
      coverSrc="/assets/service-web.png"
      coverAltKey="web.imgAlt"
      ctaKey="web.cta"
      sections={[
        {
          type: "text",
          titleKey: "common.whatWeBuild",
          bodyKey: "web.body",
        },
        {
          type: "static-list",
          titleKey: "common.techStack",
          listClass: "tech-list",
          items: [
            "React / Next.js, TypeScript",
            "Node.js API, PostgreSQL",
            "Tailwind / design tokens, component libraries",
            "Vercel / Cloudflare, edge caching",
            "SEO, accessibility (WCAG), analytics",
          ],
        },
        {
          type: "list",
          titleKey: "common.outcomes",
          listClass: "check-list",
          itemKeys: ["web.out1", "web.out2", "web.out3", "web.out4"],
        },
      ]}
    />
  );
}
