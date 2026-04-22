"use client";

import { useActionState, useCallback, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { X } from "lucide-react";
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
      {pending ? "Submitting…" : "Join Waitlist"}
    </Button>
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

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, closeModal]);

  return (
    <>
      <div id="contact" className="hidden" aria-hidden />
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="waitlist-title"
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={closeModal}
          />
          <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/[0.1] bg-[var(--surface-elevated)] p-8 shadow-2xl">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-500/10 blur-[80px]" />
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-slate-500 transition-colors hover:bg-white/[0.06] hover:text-white"
              aria-label="Close"
            >
              <X className="size-4" />
            </button>

            <div className="relative">
              <p className="eyebrow mb-3">Request</p>
              <h2
                id="waitlist-title"
                className="display-xl text-2xl text-white sm:text-3xl"
              >
                {state?.ok ? "You\u2019re on the list" : "Join the Waitlist"}
              </h2>

              {state?.ok ? (
                <p className="mt-6 text-[14px] leading-relaxed text-emerald-400">
                  Thanks for your submission. We&apos;ll get back to you as soon as possible.
                </p>
              ) : (
                <>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-400">
                    Enter your company details and we&apos;ll be in touch.
                  </p>
                  <form action={formAction} className="mt-6 space-y-4">
                    <Field
                      id="waitlist-company-name"
                      name="company_name"
                      type="text"
                      label="Company name"
                      placeholder="Acme Pharma"
                    />
                    <Field
                      id="waitlist-company-email"
                      name="company_email"
                      type="email"
                      label="Company email"
                      placeholder="contact@company.com"
                    />
                    {state && !state.ok && (
                      <p className="text-sm text-red-400">{state.error}</p>
                    )}
                    <SubmitButton />
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Field({
  id,
  name,
  type,
  label,
  placeholder,
}: {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[12px] font-medium uppercase tracking-[0.14em] text-slate-500"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-full border border-white/[0.1] bg-white/[0.03] px-5 py-3 text-[14px] text-white placeholder-slate-600 transition-colors focus:border-sky-500/70 focus:bg-white/[0.05] focus:outline-none focus:ring-0"
      />
    </div>
  );
}
