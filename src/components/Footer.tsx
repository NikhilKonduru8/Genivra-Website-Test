import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#05070a] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/genivra-logo.png"
                alt="Genivra"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg object-contain"
              />
              <span className="font-semibold text-xl tracking-tight text-white">Genivra.ai</span>
            </Link>
            <p className="text-slate-400 max-w-xs mb-6">
              The world&apos;s most advanced neural intelligence platform for clinical trial management and biotech research.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/PlatformFeatures" className="hover:text-sky-400 transition-colors">Platform Overview</Link></li>
              <li><Link href="/Science" className="hover:text-sky-400 transition-colors">Neural Engine</Link></li>
              <li><Link href="/PlatformFeatures" className="hover:text-sky-400 transition-colors">Compliance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="/HowItWorksGuide" className="hover:text-sky-400 transition-colors">How It Works</Link></li>
              <li><Link href="/Science" className="hover:text-sky-400 transition-colors">Research</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#join-waitlist" className="hover:text-sky-400 transition-colors">Contact</a></li>
              <li><a href="#join-waitlist" className="hover:text-sky-400 transition-colors">Get Access</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Genivra Insights Inc. All rights reserved.</p>
          <div className="flex gap-8 text-xs text-slate-500">
            <span>SOC 2 Certified</span>
            <span>HIPAA Compliant</span>
            <span>FDA Validated</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
