import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import FontLoader from "@/components/FontLoader";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "MH & RK Wedding",
  description: "Join us in celebrating the wedding of MH and RK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} font-montserrat bg-cream`}>
        <FontLoader />
        {children}
      </body>
    </html>
  );
}
