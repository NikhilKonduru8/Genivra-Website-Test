"use server";

import { createServerClient } from "@/lib/supabase";

export type WaitlistState = { ok: true } | { ok: false; error: string };

export async function submitWaitlist(
  _prev: WaitlistState | null,
  formData: FormData
): Promise<WaitlistState> {
  const companyEmail = formData.get("company_email");
  const companyName = formData.get("company_name");

  if (!companyEmail || typeof companyEmail !== "string") {
    return { ok: false, error: "Company email is required." };
  }
  if (!companyName || typeof companyName !== "string") {
    return { ok: false, error: "Company name is required." };
  }

  const email = companyEmail.trim();
  const name = companyName.trim();

  if (!email) return { ok: false, error: "Company email is required." };
  if (!name) return { ok: false, error: "Company name is required." };

  try {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!url || url.includes("YOUR_PROJECT_REF")) {
      return {
        ok: false,
        error: "Waitlist is not configured yet. Please set NEXT_PUBLIC_SUPABASE_URL in .env to your Supabase project URL.",
      };
    }
    const supabase = createServerClient();
    const { error } = await supabase.from("waitlist").insert({
      company_email: email,
      company_name: name,
    });

    if (error) {
      console.error("Waitlist insert error:", error);
      return { ok: false, error: error.message || "Something went wrong. Please try again." };
    }
    return { ok: true };
  } catch (e) {
    console.error("Waitlist submit error:", e);
    const message = e instanceof Error ? e.message : "Something went wrong. Please try again.";
    return {
      ok: false,
      error: message.includes("fetch") || message.includes("Failed")
        ? "Could not reach the server. Check your Supabase URL in .env (NEXT_PUBLIC_SUPABASE_URL) and try again."
        : "Something went wrong. Please try again.",
    };
  }
}
