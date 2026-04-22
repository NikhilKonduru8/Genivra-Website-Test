"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitWaitlist, type WaitlistState } from "@/app/actions/waitlist";
import { Button } from "@/components/ui/button";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant="default"
      size="lg"
      disabled={pending}
      className="w-full"
    >
      {pending ? "Submitting…" : "Join Now"}
    </Button>
  );
}

export default function HeroWaitlistForm({ compact }: { compact?: boolean }) {
  const [state, formAction] = useActionState<WaitlistState | null, FormData>(
    submitWaitlist,
    null
  );

  return (
    <div className="mx-auto w-full max-w-md">
      {!compact && (
        <>
          <p className="eyebrow mb-3">Waitlist</p>
          <h3 className="text-xl font-semibold tracking-tight text-white">
            Join the Waitlist
          </h3>
          <p className="mt-2 text-sm text-slate-400">
            Be among the first to de-risk your CNS trials with AI
          </p>
        </>
      )}
      <form action={formAction} className="mt-5 space-y-3">
        <input
          id="hero-company-name"
          name="company_name"
          type="text"
          required
          placeholder="Company name"
          aria-label="Company name"
          className="w-full rounded-full border border-white/[0.1] bg-white/[0.03] px-5 py-3 text-[14px] text-white placeholder-slate-600 transition-colors focus:border-sky-500/70 focus:outline-none"
        />
        <input
          id="hero-company-email"
          name="company_email"
          type="email"
          required
          placeholder="Email address"
          aria-label="Company email"
          className="w-full rounded-full border border-white/[0.1] bg-white/[0.03] px-5 py-3 text-[14px] text-white placeholder-slate-600 transition-colors focus:border-sky-500/70 focus:outline-none"
        />
        {state && !state.ok && (
          <p className="text-sm text-red-400">{state.error}</p>
        )}
        {state?.ok && (
          <p className="text-sm text-emerald-400">
            Thanks for your submission. We&apos;ll get back to you as soon as possible.
          </p>
        )}
        <SubmitButton />
      </form>
    </div>
  );
}
