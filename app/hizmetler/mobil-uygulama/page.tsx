import type { Metadata } from "next";
import DetailPage from "@/components/DetailPage";

export const metadata: Metadata = {
  title: "Mobil Uygulama | G-Wolf Interactive",
  description:
    "Native ve cross-platform mobil uygulama geliştirme. G-Wolf Interactive.",
};

export default function Page() {
  return (
    <DetailPage
      kind="service"
      titleKey="mobile.metaTitle"
      descKey="mobile.metaDesc"
      backHref="/#hizmetler"
      backKey="common.backServices"
      eyebrowKey="common.service"
      headingKey="mobile.title"
      leadKey="mobile.lead"
      coverSrc="/assets/service-mobile-app.png"
      coverAltKey="mobile.imgAlt"
      ctaKey="mobile.cta"
      sections={[
        {
          type: "text",
          titleKey: "common.whatWeBuild",
          bodyKey: "mobile.body",
        },
        {
          type: "static-list",
          titleKey: "common.techStack",
          listClass: "tech-list",
          items: [
            "Swift / SwiftUI, Kotlin / Jetpack Compose",
            "Flutter (gerektiğinde tek kod tabanı)",
            "REST / GraphQL, Secure storage, Keychain",
            "Firebase, Crashlytics, App Store Connect / Play Console",
            "CI: Fastlane, GitHub Actions",
          ],
        },
        {
          type: "list",
          titleKey: "common.outcomes",
          listClass: "check-list",
          itemKeys: [
            "mobile.out1",
            "mobile.out2",
            "mobile.out3",
            "mobile.out4",
          ],
        },
      ]}
    />
  );
}
