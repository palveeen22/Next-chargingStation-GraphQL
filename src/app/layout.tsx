import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "../config/ApolloWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://voltron.id/'),
  title: "Voltron - EVCuzz Charging Network is now Voltron!",
  description: "EVCuzz Charging Network is now Voltron!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloWrapper>
          <Navbar />
          {children}
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  );
}
