"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
      <nav className="glass-capsule rounded-full px-4 py-2 flex items-center gap-8 max-w-7xl w-full justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 ml-2">
            <Image
              src="/genivra-logo.png"
              alt="Genivra"
              width={32}
              height={32}
              className="w-8 h-8 rounded-lg object-contain"
            />
            <span className="font-semibold text-lg tracking-tight text-white">Genivra.ai</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link href="/PlatformFeatures" className="hover:text-sky-400 transition-colors">Platform</Link>
            <Link href="/HowItWorksGuide" className="hover:text-sky-400 transition-colors">Solutions</Link>
            <Link href="/Science" className="hover:text-sky-400 transition-colors">Research</Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#join-waitlist"
            className="bg-sky-500 hover:bg-sky-400 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-sky-500/20"
          >
            Get Access
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden rounded-lg p-2 text-white hover:bg-white/10"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="absolute left-6 right-6 top-full mt-2 glass-capsule rounded-2xl px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/PlatformFeatures" className="text-slate-300 hover:text-sky-400" onClick={() => setMenuOpen(false)}>Platform</Link>
            <Link href="/HowItWorksGuide" className="text-slate-300 hover:text-sky-400" onClick={() => setMenuOpen(false)}>Solutions</Link>
            <Link href="/Science" className="text-slate-300 hover:text-sky-400" onClick={() => setMenuOpen(false)}>Research</Link>
            <a href="#join-waitlist" className="bg-sky-500 text-white px-6 py-2.5 rounded-full text-center text-sm font-medium" onClick={() => setMenuOpen(false)}>Get Access</a>
          </div>
        </div>
      )}
    </div>
  );
}
