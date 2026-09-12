import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "Biz Kimiz | G-Wolf Interactive",
  description:
    "G-Wolf Interactive — mobil uygulama, SaaS, mobil oyun, web sitesi ve dijital çözümler üreten yazılım şirketi.",
};

export default function Page() {
  return <AboutPage />;
}
