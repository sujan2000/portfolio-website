"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm mx-auto text-center space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome
          </h1>
          <p className="text-[15px] text-[hsl(var(--muted))]">
            Sign in with GitHub to view the portfolio.
          </p>
        </div>

        <button
          type="button"
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="btn-login w-full py-3 text-base"
        >
          Sign in with GitHub
        </button>

        <p className="text-[13px] text-[hsl(var(--muted))]">
          You’ll be redirected to GitHub to sign in securely.
        </p>
      </div>
    </div>
  );
}
