import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { SERVICE_PAGES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Web Geliştirme | G-Wolf Interactive",
  description:
    "Portfolyo, e-ticaret, blog, kurumsal site ve web uygulaması. Performanslı, SEO’ya hazır web ürünleri — G-Wolf Interactive.",
};

export default function Page() {
  return <ServiceDetailPage service={SERVICE_PAGES["web-gelistirme"]} />;
}
