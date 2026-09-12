import type { Metadata } from "next";
import ServicesHub from "@/components/ServicesHub";
import { getServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Hizmetlerimiz | G-Wolf Interactive",
  description:
    "G-Wolf Interactive hizmetleri: mobil uygulama, SaaS, mobil oyun ve web geliştirme.",
};

export default function Page() {
  return <ServicesHub services={getServices()} />;
}
