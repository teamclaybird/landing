import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Claybird | LAUNCH HARDER",
  description: "The Award-Winning AI Ad Company. We write and produce AI brand ads - then intelligently generate tailored retargeting videos for every audience segment.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Claybird | LAUNCH HARDER",
    description: "The Award-Winning AI Ad Company. We write and produce AI brand ads - then intelligently generate tailored retargeting videos for every audience segment.",
    url: "https://claybird.com",
    siteName: "Claybird",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/testimonials/claybird-case-study-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Claybird - LAUNCH HARDER",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claybird | LAUNCH HARDER",
    description: "The Award-Winning AI Ad Company. We write and produce AI brand ads - then intelligently generate tailored retargeting videos for every audience segment.",
    images: ["/testimonials/claybird-case-study-thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.cdnfonts.com/css/libre-caslon-condensed" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/charter" rel="stylesheet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
