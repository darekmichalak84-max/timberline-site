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
    default: "Timberline | Fencing, Decking & Gates in Plymouth",
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
    <html lang="en-GB">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id=GTM-TFSGK7Q9'+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TFSGK7Q9');`,
          }}
        />
      </head>

      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TFSGK7Q9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}

        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-XDP3604HDN" />
      </body>
    </html>
  );
}