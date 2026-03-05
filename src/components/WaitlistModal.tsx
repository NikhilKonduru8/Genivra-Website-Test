"use client";

import { useActionState, useCallback, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitWaitlist, type WaitlistState } from "@/app/actions/waitlist";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-full bg-sky-500 py-3 font-semibold text-white transition hover:bg-sky-400 disabled:opacity-60"
    >
      {pending ? "Submitting…" : "Join Waitlist"}
    </button>
  );
}

export default function WaitlistModal() {
  const [open, setOpen] = useState(false);
  const [state, formAction] = useActionState<WaitlistState | null, FormData>(
    submitWaitlist,
    null
  );

  const closeModal = useCallback(() => {
    setOpen(false);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      if (typeof window !== "undefined" && window.location.hash === "#join-waitlist") {
        setOpen(true);
      }
    };
    if (typeof window !== "undefined" && window.location.hash === "#join-waitlist") {
      setOpen(true);
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <>
      <div id="contact" className="hidden" aria-hidden />
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="waitlist-title">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeModal} onKeyDown={(e) => e.key === "Escape" && closeModal()} />
          <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0a0e17] p-8 shadow-xl">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 rounded p-1 text-slate-400 hover:text-white"
              aria-label="Close"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 id="waitlist-title" className="mb-2 text-xl font-bold text-white">
              {state?.ok ? "You\u2019re on the list" : "Join the Waitlist"}
            </h2>
            {state?.ok ? (
              <div className="py-4">
                <p className="text-emerald-400">
                  Thanks for your submission. We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <>
                <p className="mb-6 text-sm text-slate-400">Enter your company details and we&apos;ll be in touch.</p>
                <form action={formAction} className="space-y-4">
                  <div>
                    <label htmlFor="waitlist-company-name" className="mb-1 block text-sm font-medium text-slate-300">Company name</label>
                    <input id="waitlist-company-name" name="company_name" type="text" required placeholder="Acme Pharma" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" />
                  </div>
                  <div>
                    <label htmlFor="waitlist-company-email" className="mb-1 block text-sm font-medium text-slate-300">Company email</label>
                    <input id="waitlist-company-email" name="company_email" type="email" required placeholder="contact@company.com" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500" />
                  </div>
                  {state && !state.ok && <p className="text-sm text-red-400">{state.error}</p>}
                  <SubmitButton />
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
