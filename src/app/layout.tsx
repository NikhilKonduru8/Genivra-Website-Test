import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";
import GeometricBackground from "@/components/GeometricBackground";
import FloatingKeywords from "@/components/FloatingKeywords";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Genivra Insights | AI-Powered Clinical Intelligence",
  description:
    "Transform decades of CNS trial data into actionable insights. Predict outcomes, identify failure patterns, and discover biomarkers that drive success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} min-h-screen font-sans text-white antialiased`}>
        <GeometricBackground />
        <FloatingKeywords />
        <Header />
        <main className="relative pt-16">{children}</main>
        <Footer />
        <WaitlistModal />
      </body>
    </html>
  );
}
