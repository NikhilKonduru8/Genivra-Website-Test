"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0f1a]/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-white">
          Genivra <span className="text-emerald-400">Insights</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/PlatformFeatures"
            className="text-sm font-medium text-zinc-300 transition hover:text-white"
          >
            Platform
          </Link>
          <Link
            href="/HowItWorksGuide"
            className="text-sm font-medium text-zinc-300 transition hover:text-white"
          >
            How It Works
          </Link>
          <Link
            href="/Science"
            className="text-sm font-medium text-zinc-300 transition hover:text-white"
          >
            Science
          </Link>
            <a
              href="#join-waitlist"
              className="rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              Join Waitlist
            </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden rounded-lg p-2 text-white hover:bg-white/10"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#0a0f1a] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/PlatformFeatures"
              className="text-zinc-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Platform
            </Link>
            <Link
              href="/HowItWorksGuide"
              className="text-zinc-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/Science"
              className="text-zinc-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Science
            </Link>
            <a
              href="#join-waitlist"
              className="rounded-full bg-emerald-500 px-6 py-2.5 text-center font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
