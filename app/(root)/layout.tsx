import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, GoogleOneTap } from "@clerk/nextjs";

import "../globals.css";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/providers/ToasterProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Buyzaar Store",
  description: "Buyzaar Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <GoogleOneTap/>
          <ToasterProvider/>
          <Navbar/>
          {children}
          <Footer/>
        </ClerkProvider>
      </body>
    </html>
  );
}
