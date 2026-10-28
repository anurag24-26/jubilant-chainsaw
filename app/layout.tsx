import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
const deva = Noto_Sans_Devanagari({ subsets: ["devanagari", "latin"], weight: ["400", "500", "700"], display: "swap" });

const title = "बड़हलगंज (Barhalganj) – फूड डिलीवरी, दुकानें, अस्पताल | जल्द आ रहा है";
const description =
  "बड़हलगंज (गोरखपुर) की दुकानें, फूड डिलीवरी, डॉक्टर, बस टाइमिंग, कमरे और नौकरी, एक जगह। Barhalganj – coming soon.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title,
  description,
  applicationName: "बड़हलगंज",
  keywords: [
    "बड़हलगंज", "बरहलगंज", "Barhalganj", "Barahalganj", "बड़हलगंज गोरखपुर", "Barhalganj Gorakhpur",
    "बड़हलगंज फूड डिलीवरी", "Barhalganj food delivery", "बड़हलगंज दुकान", "बड़हलगंज अस्पताल",
    "बड़हलगंज बस स्टैंड", "मुक्तिपथ बड़हलगंज", "नेशनल पी.जी. कॉलेज बड़हलगंज",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "hi_IN", url: "/", siteName: "बड़हलगंज", title, description },
  twitter: { card: "summary", title, description },
  verification: process.env.NEXT_PUBLIC_GSC_TOKEN ? { google: process.env.NEXT_PUBLIC_GSC_TOKEN } : undefined,
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hi">
     <body className={deva.className}>
  {children}
  <Analytics />
</body>
</html>
  );
}
