import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050a12]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link href="/" className="text-lg font-bold text-white">
              Genivra <span className="text-emerald-400">Insights</span>
            </Link>
            <p className="mt-2 text-sm text-zinc-400">
              AI-Powered Clinical Intelligence
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="/PlatformFeatures" className="text-sm text-zinc-400 hover:text-white">
              Platform Features
            </Link>
            <Link href="/HowItWorksGuide" className="text-sm text-zinc-400 hover:text-white">
              How It Works
            </Link>
            <Link href="/Science" className="text-sm text-zinc-400 hover:text-white">
              Science
            </Link>
            <a href="#join-waitlist" className="text-sm text-zinc-400 hover:text-white">
              Join Waitlist
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-8">
          <span className="flex items-center gap-2 text-xs text-zinc-500">
            <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-emerald-400">SOC 2</span>
            Certified
          </span>
          <span className="flex items-center gap-2 text-xs text-zinc-500">
            <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-emerald-400">HIPAA</span>
            Compliant
          </span>
          <span className="flex items-center gap-2 text-xs text-zinc-500">
            <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-emerald-400">FDA</span>
            Validated Methods
          </span>
        </div>
        <p className="mt-6 text-xs text-zinc-600">© {new Date().getFullYear()} Genivra AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
