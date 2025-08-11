import type { Metadata } from "next";
import "./globals.css";
import FontLoader from "@/components/FontLoader";

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
      <body className="font-art-nouveau bg-cream">
        <FontLoader />
        {children}
      </body>
    </html>
  );
}
