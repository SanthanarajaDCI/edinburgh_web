"use client";

import Link from "next/link";
import Image from "next/image";
import { Diamond, User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Panel — Hero */}
        <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center bg-[var(--background)] p-12">
          <div className="relative w-full max-w-[440px] aspect-[3/4] rounded-3xl overflow-hidden shadow-[var(--shadow-xl)]">
            <Image
              src="https://picsum.photos/seed/cashmere-register/800/1100"
              alt="Join Edinburgh Cashmere"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 0px, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-playfair text-3xl font-bold text-white leading-tight">
                Join Our Heritage
              </h2>
              <p className="text-white/80 text-sm mt-3 leading-relaxed">
                Create your account and explore the world of luxury Scottish
                cashmere.
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel — Register Form */}
        <div className="flex-1 flex items-center justify-center px-6 py-12 lg:px-12">
          <div className="w-full max-w-[420px]">
            <div className="flex justify-center mb-6">
              <Diamond className="w-12 h-12 text-[var(--primary)]" strokeWidth={1} />
            </div>

            <h1 className="text-playfair text-3xl font-bold text-center text-[var(--primary)]">
              Create Account
            </h1>
            <p className="text-center text-sm text-[var(--text-secondary)] mt-2">
              Join the Edinburgh Cashmere community
            </p>

            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "/verify";
              }}
            >
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-3 border border-[var(--border-medium)] rounded-xl text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-default"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full pl-10 pr-4 py-3 border border-[var(--border-medium)] rounded-xl text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-default"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    className="w-full pl-10 pr-10 py-3 border border-[var(--border-medium)] rounded-xl text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-default"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--primary)]"
                  >
                    {showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-1.5">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
                  <input
                    type={showConfirm ? "text" : "password"}
                    placeholder="Re-enter your password"
                    className="w-full pl-10 pr-10 py-3 border border-[var(--border-medium)] rounded-xl text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-default"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--primary)]"
                  >
                    {showConfirm ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 accent-[var(--primary)]"
                />
                <label htmlFor="terms" className="text-xs text-[var(--text-secondary)]">
                  I agree to the{" "}
                  <span className="text-[var(--primary)] font-medium cursor-pointer">
                    Terms of Service
                  </span>{" "}
                  and{" "}
                  <span className="text-[var(--primary)] font-medium cursor-pointer">
                    Privacy Policy
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[var(--primary)] text-white text-sm font-bold rounded-xl hover:bg-[var(--primary)]/90 transition-default active:scale-[0.98]"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-[var(--border-light)]" />
              <span className="text-xs text-[var(--text-secondary)] tracking-widest uppercase">OR</span>
              <div className="flex-1 h-px bg-[var(--border-light)]" />
            </div>

            {/* Social */}
            <div className="flex items-center justify-center gap-4">
              <button className="w-12 h-12 rounded-full border border-[var(--border-medium)] flex items-center justify-center hover:bg-[var(--primary-light)] transition-default">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </button>
              <button className="w-12 h-12 rounded-full border border-[var(--border-medium)] flex items-center justify-center hover:bg-[var(--primary-light)] transition-default">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </button>
            </div>

            <p className="text-center text-sm text-[var(--text-secondary)] mt-8">
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-[var(--primary)] hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[var(--primary)] py-6">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-playfair text-lg font-bold italic text-white">Edinburgh Cashmere</p>
            <p className="text-xs text-white/40 mt-1">© 2024 Edinburgh Cashmere. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/40">Privacy Policy</span>
            <span className="text-xs text-white/40">Terms of Service</span>
            <span className="text-xs text-white/40">Contact Support</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
