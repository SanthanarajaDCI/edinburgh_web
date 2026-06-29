"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Bell,
  User,
  Menu,
  X,
  Diamond,
  ShoppingCart,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { topNavItems } from "@/constants/navigation";
import { useCartStore } from "@/store/useCartStore";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <header className="bg-white border-b border-[var(--border-light)] sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-2 shrink-0">
            <Diamond className="w-6 h-6 text-[var(--primary)]" strokeWidth={1.5} />
            <span className="text-playfair text-lg font-bold text-[var(--primary)] hidden sm:block">
              Edinburgh Cashmere
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {topNavItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-default",
                    isActive
                      ? "text-[var(--primary)] bg-[var(--primary-light)] font-bold"
                      : "text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-1">
            {/* Search Bar (desktop) */}
            <div className="hidden lg:flex items-center bg-[var(--background)] rounded-full px-4 py-2 mr-2 w-[240px]">
              <Search className="w-4 h-4 text-[var(--text-secondary)] mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Search heritage..."
                className="bg-transparent text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none w-full"
              />
            </div>

            <button className="p-2 rounded-lg hover:bg-[var(--primary-light)] transition-default lg:hidden">
              <Search className="w-5 h-5 text-[var(--primary)]" />
            </button>
            <Link
              href="/marketplace/cart"
              className="p-2 rounded-lg hover:bg-[var(--primary-light)] transition-default relative"
            >
              <ShoppingCart className="w-5 h-5 text-[var(--primary)]" />
              {totalItems > 0 && (
                <span className="absolute top-1 right-1 min-w-[16px] h-[16px] flex items-center justify-center bg-[var(--accent)] text-white text-[10px] font-bold rounded-full px-1">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Link>
            <Link
              href="/inbox"
              className="p-2 rounded-lg hover:bg-[var(--primary-light)] transition-default relative hidden sm:block"
            >
              <MessageSquare className="w-5 h-5 text-[var(--primary)]" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--accent)] rounded-full" />
            </Link>
            <Link
              href="/notifications"
              className="p-2 rounded-lg hover:bg-[var(--primary-light)] transition-default relative"
            >
              <Bell className="w-5 h-5 text-[var(--primary)]" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[var(--accent)] rounded-full" />
            </Link>
            <Link
              href="/profile"
              className="p-2 rounded-lg hover:bg-[var(--primary-light)] transition-default hidden sm:block"
            >
              <User className="w-5 h-5 text-[var(--primary)]" />
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="p-2 rounded-lg hover:bg-[var(--primary-light)] transition-default md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[var(--primary)]" />
              ) : (
                <Menu className="w-5 h-5 text-[var(--primary)]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-[var(--border-light)] mt-2 pt-4">
            <nav className="flex flex-col gap-1">
              {topNavItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 text-sm font-medium rounded-lg transition-default",
                      isActive
                        ? "text-[var(--primary)] bg-[var(--primary-light)] font-bold"
                        : "text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)]"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
