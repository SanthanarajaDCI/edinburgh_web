"use client";

import Link from "next/link";
import { Diamond, ArrowLeft } from "lucide-react";
import { useRef } from "react";

export default function VerifyPage() {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInput = (index: number, value: string) => {
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !inputRefs.current[index]?.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-[420px]">
          {/* Back link */}
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--primary)] transition-default mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Login
          </Link>

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Diamond className="w-12 h-12 text-[var(--primary)]" strokeWidth={1} />
          </div>

          <h1 className="text-playfair text-3xl font-bold text-center text-[var(--primary)]">
            Verify Your Account
          </h1>
          <p className="text-center text-sm text-[var(--text-secondary)] mt-2">
            We&apos;ve sent a 6-digit code to your email or phone number
          </p>

          {/* OTP Input */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <input
                key={i}
                ref={(el) => { inputRefs.current[i] = el; }}
                type="text"
                maxLength={1}
                className="w-12 h-14 text-center text-xl font-bold text-[var(--primary)] border-2 border-[var(--border-medium)] rounded-xl outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-default"
                onInput={(e) =>
                  handleInput(i, (e.target as HTMLInputElement).value)
                }
                onKeyDown={(e) => handleKeyDown(i, e)}
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            onClick={() => (window.location.href = "/home")}
            className="w-full py-3.5 mt-8 bg-[var(--primary)] text-white text-sm font-bold rounded-xl hover:bg-[var(--primary)]/90 transition-default active:scale-[0.98]"
          >
            Verify & Continue
          </button>

          {/* Resend */}
          <p className="text-center text-sm text-[var(--text-secondary)] mt-6">
            Didn&apos;t receive the code?{" "}
            <button className="font-bold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-default">
              Resend Code
            </button>
          </p>

          {/* Timer */}
          <p className="text-center text-xs text-[var(--text-secondary)] mt-2">
            Code expires in <span className="font-bold text-[var(--primary)]">04:59</span>
          </p>
        </div>
      </div>
    </div>
  );
}
