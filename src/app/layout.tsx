import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";
import AmbientBackdrop from "@/components/AmbientBackdrop";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
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
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${dmSans.variable} min-h-screen bg-[var(--background)] font-sans text-foreground antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        <AmbientBackdrop />
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        <WaitlistModal />
      </body>
    </html>
  );
}
