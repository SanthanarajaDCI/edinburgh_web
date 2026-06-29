"use client";

import { useRouter } from "next/navigation";
import { Lock, X, Mail, KeyRound } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";

export default function OtpWallPage() {
  const router = useRouter();
  const showToast = useUIStore((state) => state.showToast);

  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col relative max-w-md mx-auto">
      {/* App Bar */}
      <div className="flex items-center justify-between p-4 pt-safe-top shrink-0">
        <button onClick={() => router.push("/")} className="w-10 h-10 flex items-center justify-center text-[var(--text-primary)]">
          <X className="w-6 h-6" />
        </button>
        <h1 className="text-playfair font-bold text-lg text-[var(--text-primary)]">
          Edinburgh Cashmere
        </h1>
        <div className="w-10 h-10" />
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col items-center justify-center text-center">
        <Lock className="w-20 h-20 text-[var(--primary)] mb-6 stroke-1" />
        
        <h2 className="text-playfair text-3xl font-bold text-[var(--text-primary)] mb-4">
          View Full Review
        </h2>
        
        <p className="text-[var(--text-secondary)] text-base mb-12 max-w-[320px] leading-relaxed">
          Create a free account to read reviews, explore products, and connect with creators on Edinburgh Cashmere.
        </p>
        
        <div className="w-full flex flex-col gap-4 mb-8">
          {/* Email Input */}
          <div className="flex items-center gap-3 bg-white border border-[var(--border-light)] rounded-xl px-4 py-3 shadow-sm focus-within:border-[var(--primary)] focus-within:ring-1 focus-within:ring-[var(--primary)] transition-all">
            <Mail className="w-5 h-5 text-[var(--text-secondary)]" />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-1 bg-transparent border-none outline-none text-[var(--text-primary)]"
            />
          </div>

          {/* OTP Input */}
          <div className="flex items-center gap-3 bg-white border border-[var(--border-light)] rounded-xl pl-4 pr-1 py-1 shadow-sm focus-within:border-[var(--primary)] focus-within:ring-1 focus-within:ring-[var(--primary)] transition-all">
            <KeyRound className="w-5 h-5 text-[var(--text-secondary)]" />
            <input 
              type="text" 
              placeholder="6-digit OTP" 
              className="flex-1 bg-transparent border-none outline-none text-[var(--text-primary)]"
            />
            <button 
              className="text-sm font-bold text-[var(--primary)] px-4 py-2 hover:bg-[var(--primary-light)] rounded-lg transition-colors"
              onClick={() => showToast("OTP Sent!", "success")}
            >
              Send OTP
            </button>
          </div>
        </div>

        <button 
          onClick={() => router.push("/")}
          className="w-full bg-[var(--primary)] text-white py-4 rounded-xl font-bold text-base hover:bg-[var(--primary)]/90 transition-colors shadow-md active:scale-[0.98]"
        >
          Verify & Continue
        </button>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-1 text-sm text-[var(--text-secondary)]">
          <span>By continuing, you agree to our</span>
          <a href="/home" className="text-[var(--primary)] underline font-medium">Terms of Service</a>
        </div>
      </div>
    </div>
  );
}
