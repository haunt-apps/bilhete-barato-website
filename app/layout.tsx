import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bilhete Barato - Viajar nunca foi tão fácil — e tão barato.",
  description:
    "Bilhete Barato é um serviço de alertas que envia em tempo real as melhores ofertas de passagens aéreas nacionais e internacionais diretamente para o seu WhatsApp. Focamos em oportunidades reais, testadas e com grandes descontos — muitas vezes por tempo super limitado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
