import type { Metadata } from "next";
import "./globals.css";
import FontLoader from "@/components/FontLoader";

export const metadata: Metadata = {
  title: "MH & RK Wedding",
  description: "Join us in celebrating the wedding of MH and RK",
  icons: {
    icon: [
      {
        url: '/images/circle background v3.png',
        type: 'image/png',
        sizes: '16x16',
      },
      {
        url: '/images/circle background v3.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/images/circle background v3.png',
        type: 'image/png',
        sizes: '48x48',
      },
      {
        url: '/images/circle background v3.png',
        type: 'image/png',
        sizes: '64x64',
      },
      {
        url: '/images/circle background v3.png',
        type: 'image/png',
        sizes: '96x96',
      },
      {
        url: '/images/circle background v3.png',
        type: 'image/png',
        sizes: '128x128',
      },
      {
        url: '/images/circle background v3.png',
        type: 'image/png',
        sizes: '256x256',
      },
    ],
    shortcut: '/images/circle background v3.png',
    apple: [
      {
        url: '/images/circle background v3.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
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
