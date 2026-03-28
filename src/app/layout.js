import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** @type {import("next").Metadata} */
export const metadata = {
  metadataBase: new URL("https://timberlinepl.co.uk"),
  title: {
    default: "Timberline | Fencing & Decking in Plymouth",
    template: "%s | Timberline",
  },
  description:
  "Fencing, decking and gate installation in Plymouth. Timberline provides quality garden fencing, composite decking and timber gates across Plymouth, Saltash, Ivybridge and surrounding areas. Free quotes available.",
  keywords: [
    "fencing Plymouth",
    "decking Plymouth",
    "gates Plymouth",
    "fencing contractor Plymouth",
    "decking installer Plymouth",
    "Timberline Plymouth",
  ],
  openGraph: {
    title: "Timberline | Fencing & Decking in Plymouth",
    description:
      "Fencing, decking, gates, and outdoor timber work across Plymouth and surrounding areas.",
    url: "https://timberlinepl.co.uk",
    siteName: "Timberline",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Timberline fencing and decking services in Plymouth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timberline | Fencing & Decking in Plymouth",
    description:
      "Fencing, decking, gates, and outdoor timber work across Plymouth and surrounding areas.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>

      <GoogleAnalytics gaId="G-XDP3604HDN" />
    </html>
  );
}