import Link from "next/link";
import { Diamond } from "lucide-react";

const footerLinks = {
  collections: [
    { label: "Women's Cashmere", href: "#" },
    { label: "Men's Knitwear", href: "#" },
    { label: "Heritage Scarves", href: "#" },
    { label: "Home Accents", href: "#" },
  ],
  company: [
    { label: "Our History", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Retail Stores", href: "#" },
    { label: "Wholesale", href: "#" },
  ],
  support: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Contact Support", href: "#" },
    { label: "Shipping & Returns", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white mt-auto">
      {/* Main footer */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/home" className="flex items-center gap-2 mb-4">
              <Diamond className="w-5 h-5 text-[var(--accent)]" strokeWidth={1.5} />
              <span className="text-playfair text-xl font-bold italic text-white">
                Edinburgh Cashmere
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed mb-4">
              Pioneering luxury through tradition. Our cashmere is sourced from
              the finest materials and crafted with generations of Scottish
              expertise.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white/40 mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.collections.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[var(--accent)] transition-default"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white/40 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[var(--accent)] transition-default"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-white/40 mb-4">
              Newsletter
            </h4>
            <p className="text-sm text-white/60 mb-4">
              Join our inner circle for exclusive access.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-[var(--accent)] transition-default"
              />
              <button className="bg-[var(--accent)] text-[var(--primary)] px-4 py-2 rounded-lg text-sm font-bold hover:bg-[var(--accent-hover)] transition-default shrink-0">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              © 2024 Edinburgh Cashmere. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.support.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-white/40 hover:text-[var(--accent)] transition-default"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
