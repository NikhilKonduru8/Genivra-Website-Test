import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const secretKey = process.env.SUPABASE_SECRET_KEY;

/**
 * Browser-safe Supabase client. Uses only the publishable key.
 * Use this in Client Components and for public API access.
 */
export function createBrowserClient() {
  if (!supabaseUrl || !publishableKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY"
    );
  }
  return createClient(supabaseUrl, publishableKey);
}

/**
 * Server-only Supabase client with elevated access. Uses the secret key.
 * CRITICAL: Only use in Server Actions, API routes, or server components.
 * Throws if ever run in a browser (e.g. accidental import in a Client Component).
 */
export function createServerClient() {
  if (typeof window !== "undefined") {
    throw new Error(
      "SUPABASE_SECRET_KEY must only be used on the server. Never use createServerClient in a browser environment."
    );
  }
  if (!supabaseUrl || !secretKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SECRET_KEY (server env)"
    );
  }
  if (secretKey.startsWith("sb_publishable_")) {
    throw new Error(
      "SUPABASE_SECRET_KEY must be a secret key (sb_secret_...), not the publishable key."
    );
  }
  return createClient(supabaseUrl, secretKey);
}
