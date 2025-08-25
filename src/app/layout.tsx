//! Metadata
import type { Metadata } from "next";

//! Font
import { DM_Sans } from "next/font/google";

//! CSS
import "./globals.css";

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roozbeh Portfolio",
  description: "Portfolio Website Roozbeh Badali Sarcheshme",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
