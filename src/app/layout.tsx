import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";
import FloatingKeywords from "@/components/FloatingKeywords";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Genivra Insights | Neuro Trials Decoded by AI",
  description:
    "Analyze CNS clinical trials before they fail. Built for biotech investors, BD teams, and CNS research groups evaluating neurodegenerative pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${dmSans.variable} min-h-screen bg-[#05070a] font-sans text-slate-200 antialiased selection:bg-sky-500/30 overflow-x-hidden`}
      >
        <FloatingKeywords />
        <Header />
        <main className="relative pt-20">{children}</main>
        <Footer />
        <WaitlistModal />
      </body>
    </html>
  );
}
