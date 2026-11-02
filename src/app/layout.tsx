import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Švara Kaune – namų valymo paslaugos Kaune",
  description:
    "Reguliarus ir generalinis namų valymas Kaune. Sąžiningos kainos nuo 35 €, atsinešu savo valymo priemones. Skambinkite: +370 600 00 000.",
  keywords: [
    "valymas Kaune",
    "namų valymas",
    "valytoja Kaune",
    "generalinis valymas",
    "reguliarus valymas",
    "Švara Kaune",
  ],
  authors: [{ name: "Švara Kaune" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Švara Kaune – namų valymo paslaugos Kaune",
    description:
      "Reguliarus ir generalinis namų valymas Kaune. Skambinkite: +370 600 00 000.",
    siteName: "Švara Kaune",
    type: "website",
    locale: "lt_LT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
