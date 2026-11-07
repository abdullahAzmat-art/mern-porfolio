import localFont from "next/font/local";
import "./globals.css";

const bricolage = localFont({
  src: "../public/assets/fonts/subset/bricolage-grotesque-subset.woff2",
  weight: "200 800",
  style: "normal",
  display: "swap",
  variable: "--font-bricolage",
});

const instrumentSerif = localFont({
  src: "../public/assets/fonts/subset/instrument-serif-italic-subset.woff2",
  weight: "400",
  style: "italic",
  display: "swap",
  variable: "--font-instrument",
  preload: false,
});

const interTight = localFont({
  src: "../public/assets/fonts/subset/inter-tight-subset.woff2",
  weight: "400 600",
  style: "normal",
  display: "swap",
  variable: "--font-inter-tight",
});

const jetbrainsMono = localFont({
  src: "../public/assets/fonts/subset/jetbrains-mono-subset.woff2",
  weight: "400 500",
  style: "normal",
  display: "swap",
  variable: "--font-jetbrains",
});

const SITE_URL = "https://abdullah-azmat-rho.vercel.app";
const DESCRIPTION =
  "AI engineer and full-stack developer in Pakistan building AI agents, RAG systems, and high-performance web apps with Python, LangChain, React, and Node.js.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Abdullah Azmat — AI Engineer & Full-Stack Developer",
  description: DESCRIPTION,
  authors: [{ name: "Abdullah Azmat" }],
  applicationName: "Abdullah Azmat",
  creator: "Abdullah Azmat",
  publisher: "Abdullah Azmat",
  alternates: {
    canonical: `${SITE_URL}/`,
    types: {
      "text/markdown": "/index.md",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Abdullah Azmat",
    title: "Abdullah Azmat — AI Engineer & Full-Stack Developer",
    description:
      "AI agents, RAG systems, and full-stack products built with intent. Explore selected work, capabilities, and the stack behind it.",
    url: `${SITE_URL}/`,
    locale: "en_US",
    images: [
      {
        url: "/assets/img/og-cover.png",
        type: "image/png",
        width: 1200,
        height: 630,
        alt: "Abdullah Azmat — AI engineer and full-stack developer. The words Intelligence, engineered. in large cream type on a black background.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Azmat — AI Engineer & Full-Stack Developer",
    description: "AI agents, RAG systems, and full-stack products built with intent.",
    images: [
      {
        url: "/assets/img/og-cover.png",
        alt: "Abdullah Azmat — AI engineer and full-stack developer.",
      },
    ],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/assets/img/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090A",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${instrumentSerif.variable} ${interTight.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        <link rel="me" href="https://github.com/abdullahAzmat-art" />
        <link rel="me" href="https://www.linkedin.com/in/abdullah-azmat-art/" />
        <link rel="me" href="https://instagram.com/brav_eabdullah" />

        {children}
      </body>
    </html>
  );
}
