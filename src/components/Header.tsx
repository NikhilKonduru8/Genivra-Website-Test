"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const NAV = [
  { href: "/PlatformFeatures", label: "Platform" },
  { href: "/HowItWorksGuide", label: "Solutions" },
  { href: "/Science", label: "Research" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Genivra home">
          <Image
            src="/genivra-logo.png"
            alt="Genivra"
            width={28}
            height={28}
            className="h-7 w-7 rounded-md object-contain"
            priority
          />
          <span className="text-[15px] font-semibold tracking-tight text-white">
            Genivra.ai
          </span>
        </Link>

        <nav className="hidden items-center gap-10 text-[13px] font-medium text-slate-400 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#join-waitlist"
            className={buttonVariants({ variant: "ghost", size: "sm", className: "hidden sm:inline-flex" })}
          >
            Contact
          </a>
          <a
            href="#join-waitlist"
            className={buttonVariants({ variant: "default", size: "sm" })}
          >
            Get Access
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="ml-1 grid h-9 w-9 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-white/25 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-5 mb-4 rounded-2xl border border-white/10 bg-[var(--surface)]/95 p-2 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-[14px] font-medium text-slate-300 transition-colors hover:bg-white/[0.04] hover:text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
