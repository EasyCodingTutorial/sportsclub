import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// For Layout Components
import { Navbar } from "./layout/Navbar/Navbar";
import { Footer } from "./layout/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easy Sports Club",
  description: "Find Your Favorite Sport",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
