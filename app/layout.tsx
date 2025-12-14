import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "EverPark | 100 horas menos buscando parking",
  description: "La app todo-en-uno para aparcar. Intercambia plazas en la calle, alquila garajes privados, y deja que nuestra IA elija por ti.",
  keywords: ["parking", "aparcamiento", "garaje", "Valencia", "EverPark", "mobility", "app"],
  authors: [{ name: "EverPark" }],
  openGraph: {
    title: "EverPark | 100 horas menos buscando parking",
    description: "La app todo-en-uno para aparcar. Intercambia plazas en la calle, alquila garajes privados, y deja que nuestra IA elija por ti.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
