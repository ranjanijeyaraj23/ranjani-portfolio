import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://ranjani.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ranjani Jeyaraj — Frontend Developer",
    template: "%s · Ranjani Jeyaraj",
  },
  description:
    "Frontend developer building fast, accessible production apps with React, Next.js, and TypeScript. 95+ Lighthouse performance, clean architecture, real impact.",
  keywords: [
    "Ranjani Jeyaraj",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Ranjani Jeyaraj" }],
  creator: "Ranjani Jeyaraj",
  openGraph: {
    type: "website",
    title: "Ranjani Jeyaraj — Frontend Developer",
    description:
      "Building fast, accessible web apps with React & Next.js. 95+ Lighthouse, clean architecture, real impact.",
    siteName: "Ranjani Jeyaraj",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranjani Jeyaraj — Frontend Developer",
    description:
      "Building fast, accessible web apps with React & Next.js.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light')document.documentElement.classList.add('dark');}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased bg-bg dark:bg-bg-dark text-zinc-900 dark:text-zinc-100 overflow-x-hidden selection:bg-indigo-500/25">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
