import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fermor — Understand Your Money. Know What Comes Next.",
  description:
    "Bring your investments, spending, savings and financial goals together with Fermor and turn your financial picture into clearer decisions.",
  keywords: [
    "wealth intelligence",
    "financial dashboard",
    "portfolio tracker",
    "SIP wealth calculator",
    "Indian personal finance",
    "money management",
    "financial clarity",
  ],
  authors: [{ name: "Fermor" }],
  creator: "Fermor",
  publisher: "Fermor Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fermor.app"),
  openGraph: {
    title: "Fermor — Understand Your Money. Know What Comes Next.",
    description:
      "Bring your investments, spending, savings and financial goals together with Fermor and turn your financial picture into clearer decisions.",
    url: "https://fermor.app",
    siteName: "Fermor",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fermor — Understand Your Money. Know What Comes Next.",
    description:
      "Financial clarity, finally connected. Know where your money is. Know what to do next.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F8F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#F7F8F5] text-[#111310] antialiased selection:bg-[#173F35] selection:text-white flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
