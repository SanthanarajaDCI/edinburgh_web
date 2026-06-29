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
    <header className="bg-white/90 backdrop-blur-md border-b border-[var(--border-light)] sticky top-0 z-50 transition-default">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-2 shrink-0">
            <Diamond className="w-6 h-6 text-[var(--accent)]" strokeWidth={1.5} />
            <span className="text-xl font-bold text-[var(--primary)] hidden sm:block tracking-tight">
              Super Platform
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 relative">
            <Link
              href="/home"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-default",
                pathname === "/home" || pathname.startsWith("/home/")
                  ? "text-[var(--primary)] bg-[var(--primary-light)] font-bold"
                  : "text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)]"
              )}
            >
              Home
            </Link>
            <Link
              href="/discover"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-default",
                pathname === "/discover" || pathname.startsWith("/discover/")
                  ? "text-[var(--primary)] bg-[var(--primary-light)] font-bold"
                  : "text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)]"
              )}
            >
              Discover
            </Link>
            
            {/* Services Dropdown */}
            <div className="group relative">
              <button className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)] rounded-lg transition-default flex items-center gap-1">
                Services
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-[var(--border-light)] rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="py-2 flex flex-col">
                  <Link href="/marketplace" className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-gray-50 hover:text-[var(--primary)]">Marketplace</Link>
                  <Link href="/jobs" className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-gray-50 hover:text-[var(--primary)]">Jobs</Link>
                  <Link href="/business" className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-gray-50 hover:text-[var(--primary)]">Business</Link>
                  <Link href="/restaurants" className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-gray-50 hover:text-[var(--primary)]">Restaurants</Link>
                  <Link href="/ride-hailing" className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-gray-50 hover:text-[var(--primary)]">Ride Hailing</Link>
                  <Link href="/insurance" className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-gray-50 hover:text-[var(--primary)]">Insurance</Link>
                </div>
              </div>
            </div>

            {/* Lifestyle Dropdown */}
            <div className="group relative">
              <button className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)] rounded-lg transition-default flex items-center gap-1">
                Lifestyle
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-[var(--border-light)] rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="py-2 flex flex-col">
                  <Link href="/entertainment/video" className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-gray-50 hover:text-[var(--primary)]">Videos</Link>
                  <Link href="/entertainment/music" className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-gray-50 hover:text-[var(--primary)]">Music</Link>
                  <Link href="/entertainment/gaming" className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-gray-50 hover:text-[var(--primary)]">Gaming</Link>
                  <Link href="/education" className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-gray-50 hover:text-[var(--primary)]">Education</Link>
                  <Link href="/fitness" className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-gray-50 hover:text-[var(--primary)]">Fitness</Link>
                </div>
              </div>
            </div>

            {/* Ecosystem Dropdown */}
            <div className="group relative">
              <button className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)] rounded-lg transition-default flex items-center gap-1">
                Ecosystem
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-[var(--border-light)] rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <div className="py-2 flex flex-col">
                  <Link href="/ai/hub" className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-gray-50 hover:text-[var(--primary)]">AI Hub</Link>
                  <Link href="/mini-programs" className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-gray-50 hover:text-[var(--primary)]">Mini Programs</Link>
                  <Link href="/channels" className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-gray-50 hover:text-[var(--primary)]">Channels</Link>
                  <Link href="/create" className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-gray-50 hover:text-[var(--primary)]">Creator</Link>
                  <Link href="/wallet" className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-gray-50 hover:text-[var(--primary)]">Wallet</Link>
                </div>
              </div>
            </div>
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
            <nav className="flex flex-col gap-1 max-h-[70vh] overflow-y-auto hide-scrollbar">
              <Link href="/home" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-sm font-bold text-[var(--primary)] bg-[var(--primary-light)] rounded-lg">Home</Link>
              <Link href="/discover" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--primary-light)] rounded-lg">Discover</Link>
              
              <div className="mt-4 mb-2 px-4 text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">Services</div>
              <Link href="/marketplace" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-gray-50 rounded-lg">Marketplace</Link>
              <Link href="/jobs" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-gray-50 rounded-lg">Jobs</Link>
              <Link href="/business" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-gray-50 rounded-lg">Business</Link>
              <Link href="/restaurants" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-gray-50 rounded-lg">Restaurants</Link>
              <Link href="/ride-hailing" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-gray-50 rounded-lg">Ride Hailing</Link>
              <Link href="/insurance" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-gray-50 rounded-lg">Insurance</Link>
              
              <div className="mt-4 mb-2 px-4 text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">Lifestyle</div>
              <Link href="/entertainment/video" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-gray-50 rounded-lg">Videos</Link>
              <Link href="/entertainment/music" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-gray-50 rounded-lg">Music</Link>
              <Link href="/entertainment/gaming" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-gray-50 rounded-lg">Gaming</Link>
              <Link href="/education" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-gray-50 rounded-lg">Education</Link>
              <Link href="/fitness" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-gray-50 rounded-lg">Fitness</Link>

              <div className="mt-4 mb-2 px-4 text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">Ecosystem</div>
              <Link href="/ai/hub" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-gray-50 rounded-lg">AI Hub</Link>
              <Link href="/mini-programs" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-gray-50 rounded-lg">Mini Programs</Link>
              <Link href="/channels" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-gray-50 rounded-lg">Channels</Link>
              <Link href="/create" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-gray-50 rounded-lg">Creator</Link>
              <Link href="/wallet" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:bg-gray-50 rounded-lg">Wallet</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
