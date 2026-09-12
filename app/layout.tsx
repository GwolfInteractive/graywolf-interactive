import type { Metadata } from "next";
import { I18nProvider } from "@/components/providers/I18nProvider";
import "./globals.css";
import "./styles/site.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gwolfinteractive.com"),
  title: "G-Wolf Interactive | Mobil Uygulama & Oyun Teknolojileri",
  description:
    "G-Wolf Interactive — Mobil uygulama ve mobil oyun teknolojileri.",
  openGraph: {
    title: "G-Wolf Interactive",
    description:
      "Mobil uygulama ve mobil oyun teknolojileri — Gray Wolf Interactive.",
    url: "https://gwolfinteractive.com",
    siteName: "G-Wolf Interactive",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
