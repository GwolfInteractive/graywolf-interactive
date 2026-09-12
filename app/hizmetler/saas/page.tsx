import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { SERVICE_PAGES } from "@/lib/services";

export const metadata: Metadata = {
  title: "SaaS Uygulamaları | G-Wolf Interactive",
  description:
    "Multi-tenant platform, abonelik, iç araç, pazaryeri ve API. Ölçeklenince yeniden yazılmayan SaaS — G-Wolf Interactive.",
};

export default function Page() {
  return <ServiceDetailPage service={SERVICE_PAGES.saas} />;
}
