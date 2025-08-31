import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Praise Weds Jude",
  description: "Join Praise and Jude in celebrating their love and wedding day!",
  icons: {
    icon: "/invitesmallv-2.png",          // favicon for most browsers
    shortcut: "/invitesmallv-2.png",      // shortcut icon
    apple: "/invitesmallv-2.png",         // Apple touch icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Ensure favicon works in local development */}
        <link rel="icon" href="/invitesmallv-2.png" />
        <link rel="shortcut icon" href="/invitesmallv-2.png" />
        <link rel="apple-touch-icon" href="/invitesmallv-2.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
