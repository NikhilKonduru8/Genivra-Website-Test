import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-[var(--background)]">
      <div className="mx-auto max-w-[1600px] px-6 py-16 sm:px-8 sm:py-20">
        {/* Massive sign-off */}
        <div className="mb-16 border-b border-white/[0.06] pb-14 sm:mb-20 sm:pb-20">
          <h2 className="display-xxl max-w-5xl text-[12vw] text-white sm:text-[9vw] lg:text-[7.5vw]">
            Let&apos;s de-risk CNS together.
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#join-waitlist"
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              Request Early Access
            </a>
            <a
              href="#join-waitlist"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Contact
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="mb-6 inline-flex items-center gap-2">
              <Image
                src="/genivra-logo.png"
                alt="Genivra"
                width={28}
                height={28}
                className="h-7 w-7 rounded-md object-contain"
              />
              <span className="text-[15px] font-semibold tracking-tight text-white">
                Genivra.ai
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">
              The world&apos;s most advanced neural intelligence platform for clinical trial management and biotech research.
            </p>
          </div>

          <FooterColumn
            title="Product"
            items={[
              { href: "/PlatformFeatures", label: "Platform Overview" },
              { href: "/Science", label: "Neural Engine" },
              { href: "/PlatformFeatures", label: "Compliance" },
            ]}
          />
          <FooterColumn
            title="Resources"
            items={[
              { href: "/HowItWorksGuide", label: "How It Works" },
              { href: "/Science", label: "Research" },
            ]}
          />
          <FooterColumn
            title="Company"
            items={[
              { href: "#join-waitlist", label: "Contact" },
              { href: "#join-waitlist", label: "Get Access" },
            ]}
          />
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row">
          <p className="text-[11px] uppercase tracking-[0.14em] text-slate-600">
            © {new Date().getFullYear()} Genivra Insights Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.14em] text-slate-600">
            <span>SOC 2 Certified</span>
            <span>HIPAA Compliant</span>
            <span>FDA Validated</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="eyebrow mb-5">{title}</h4>
      <ul className="space-y-3 text-[14px] text-slate-400">
        {items.map((item) => (
          <li key={`${item.href}-${item.label}`}>
            <Link
              href={item.href}
              className="transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
