import type { Metadata, Viewport } from "next";
import { Manrope, Oswald } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const title = "Ремонт двигателей и ГБЦ в Балашихе — Агрегат-Авто";
const description =
  "Агрегат-Авто в Балашихе: ремонт двигателей, ГБЦ, расточка блоков цилиндров, гильзовка, ремонт дизельных двигателей и коммерческого транспорта. Ориентировочные цены, предварительная запись, оплата картой и СБП.";

const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const oswald = Oswald({
  subsets: ["cyrillic", "latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Агрегат-Авто",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${oswald.variable}`}>
        <a className="skip-link" href="#main">
          Перейти к содержанию
        </a>
        {children}
      </body>
    </html>
  );
}
