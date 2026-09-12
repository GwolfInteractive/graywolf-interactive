import type { Metadata } from "next";
import DetailPage from "@/components/DetailPage";

export const metadata: Metadata = {
  title: "Mobil Oyun Geliştirme | G-Wolf Interactive",
  description:
    "Mobil oyun geliştirme — Unity, canlı operasyon ve monetizasyon. G-Wolf Interactive.",
};

export default function Page() {
  return (
    <DetailPage
      kind="service"
      titleKey="game.metaTitle"
      descKey="game.metaDesc"
      backHref="/#hizmetler"
      backKey="common.backServices"
      eyebrowKey="common.service"
      headingKey="game.title"
      leadKey="game.lead"
      coverSrc="/assets/service-mobile-game.png"
      coverAltKey="game.imgAlt"
      ctaKey="game.cta"
      sections={[
        {
          type: "text",
          titleKey: "common.whatWeBuild",
          bodyKey: "game.body",
        },
        {
          type: "static-list",
          titleKey: "common.techStack",
          listClass: "tech-list",
          items: [
            "Unity (C#), URP / 2D Toolkit",
            "Addressables, asset pipeline, build automation",
            "Backend: PlayFab / custom services",
            "Analytics: Adjust, Firebase, custom events",
            "IAP, ads mediation, A/B testing",
          ],
        },
        {
          type: "list",
          titleKey: "common.outcomes",
          listClass: "check-list",
          itemKeys: ["game.out1", "game.out2", "game.out3", "game.out4"],
        },
      ]}
    />
  );
}
