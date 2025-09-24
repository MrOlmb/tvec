import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar04 from "@/components/navbar-04/navbar-04";
import { Footer } from "@/components/footer";
import { ScrollRevealProvider } from "@/components/ui/scroll-reveal-provider";
import { FloatingActionButtons } from "@/components/ui/floating-action-buttons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TVEC - Transport Vert d'Électricité au Congo",
  description: "Fournisseurs de solutions réseaux électriques. Technologie de pointe pour le transport d'électricité au Congo.",
  keywords: "TVEC, électricité, Congo, transport électrique, réseaux électriques, CTC Global",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollRevealProvider>
          <Navbar04 />
          <main className="pt-24">
            {children}
          </main>
          <Footer />
          <FloatingActionButtons />
        </ScrollRevealProvider>
      </body>
    </html>
  );
}
