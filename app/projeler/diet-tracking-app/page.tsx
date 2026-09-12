import type { Metadata } from "next";
import DetailPage from "@/components/DetailPage";

export const metadata: Metadata = {
  title: "Diet Tracking App | G-Wolf Interactive",
  description:
    "Diet Tracking App — native iOS beslenme takip uygulaması. G-Wolf Interactive.",
};

export default function Page() {
  return (
    <DetailPage
      kind="project"
      titleKey="diet.metaTitle"
      descKey="diet.metaDesc"
      backHref="/#projeler"
      backKey="common.backProjects"
      eyebrowKey="diet.eyebrow"
      headingKey="diet.title"
      leadKey="diet.lead"
      coverSrc="/assets/project-diet-tracking.png"
      coverAltKey="diet.imgAlt"
      ctaKey="diet.cta"
      sections={[
        {
          type: "text",
          titleKey: "diet.summaryTitle",
          bodyKey: "diet.summary",
        },
        {
          type: "list",
          titleKey: "diet.featuresTitle",
          listClass: "check-list",
          itemKeys: ["diet.f1", "diet.f2", "diet.f3", "diet.f4", "diet.f5"],
        },
        {
          type: "static-list",
          titleKey: "diet.techTitle",
          listClass: "tech-list",
          items: [
            "Swift 5.9+, SwiftUI",
            "HealthKit, Combine",
            "Core Data / SwiftData",
            "MVVM mimarisi, unit & UI testleri",
            "App Store Connect, TestFlight pipeline",
          ],
        },
        {
          type: "text",
          titleKey: "diet.processTitle",
          bodyKey: "diet.process",
        },
      ]}
    />
  );
}
