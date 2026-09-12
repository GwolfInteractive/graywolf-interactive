import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { SERVICE_PAGES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Mobil Uygulama | G-Wolf Interactive",
  description:
    "Tüketici, rezervasyon, sağlık, saha ve marketplace uygulamaları. Native iOS/Android — G-Wolf Interactive.",
};

export default function Page() {
  return <ServiceDetailPage service={SERVICE_PAGES["mobil-uygulama"]} />;
}
