import type { Metadata } from "next";
import WhatsAppButton from "@/components/Whatsappbutton";
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
  title: "Almendra Mia",
  description: "Reposteria saludable Cuernavaca",
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
        <WhatsAppButton
          phoneNumber="525512345678"
          message="Hola, me gustaría obtener más información."
          label="¿Necesitas ayuda?"
        />
      </body>
    </html>
  );
}
