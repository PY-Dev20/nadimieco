//Next.js
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Barlow } from "next/font/google";

//Global CSS
import "./globals.css";
import { ThemeProvider } from "next-themes";

// import { Inter } from "next/font/google";
const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata: Metadata = {
  title: "Nadimi",
  description: "Welcome to Nadimi's Ecommerce site , your one-stop shop for all your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${barlow.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
