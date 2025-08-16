import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hossam Shaban - Portfolio",
  description: "Computer & Electronics Engineer | Power Electronics | Embedded Systems",
  keywords: ["Hossam Shaban", "Electronics Engineer", "Power Electronics", "Embedded Systems", "Portfolio"],
  authors: [{ name: "Hossam Shaban" }],
  creator: "Hossam Shaban",
  openGraph: {
    title: "Hossam Shaban - Portfolio",
    description: "Computer & Electronics Engineer | Power Electronics | Embedded Systems",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
