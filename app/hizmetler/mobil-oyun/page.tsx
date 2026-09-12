import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import { SERVICE_PAGES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Mobil Oyun Geliştirme | G-Wolf Interactive",
  description:
    "Casual, mid-core, multiplayer, idle ve playable prototype. Unity, live-ops — G-Wolf Interactive.",
};

export default function Page() {
  return <ServiceDetailPage service={SERVICE_PAGES["mobil-oyun"]} />;
}
