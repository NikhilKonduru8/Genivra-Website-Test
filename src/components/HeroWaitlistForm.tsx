"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitWaitlist, type WaitlistState } from "@/app/actions/waitlist";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-emerald-500 py-3.5 font-semibold text-white transition hover:bg-emerald-600 disabled:opacity-60"
    >
      {pending ? "Submitting…" : "Join Now"}
    </button>
  );
}

export default function HeroWaitlistForm({ compact }: { compact?: boolean }) {
  const [state, formAction] = useActionState<WaitlistState | null, FormData>(
    submitWaitlist,
    null
  );

  return (
    <div className="mx-auto max-w-md">
      {!compact && (
        <>
          <h3 className="mb-2 text-lg font-semibold">Join the Waitlist</h3>
          <p className="mb-6 text-sm text-zinc-400">
            Be among the first to de-risk your CNS trials with AI
          </p>
        </>
      )}
      <form action={formAction} className="space-y-4">
        <div>
          <label htmlFor="hero-company-name" className="sr-only">
            Company name
          </label>
          <input
            id="hero-company-name"
            name="company_name"
            type="text"
            required
            placeholder="Company name"
            className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>
        <div>
          <label htmlFor="hero-company-email" className="sr-only">
            Company email
          </label>
          <input
            id="hero-company-email"
            name="company_email"
            type="email"
            required
            placeholder="Email address"
            className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>
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
