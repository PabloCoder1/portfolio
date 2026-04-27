// 📄 app/layout.tsx
import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

// Configuração das fontes com variáveis CSS
const syne = Syne({ 
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pablo Lima | Desenvolvedor Full-Stack & RPA",
  description: "Portfólio profissional focado em criação de sites de alta conversão, design premium e otimização de Google Meu Negócio (GMN).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${syne.variable} ${inter.variable} bg-ink text-bone font-inter antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}