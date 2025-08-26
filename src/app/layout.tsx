import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";


const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Warlot Drive",
  description: "Your personal Web3 drive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.className} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
