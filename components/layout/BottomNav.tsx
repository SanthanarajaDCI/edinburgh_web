"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Plus, MessageSquare, User } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Home", href: "/home", icon: Home },
  { label: "Discover", href: "/discover", icon: Search },
  { label: "Create", href: "/create", icon: Plus, isCenter: true },
  { label: "Inbox", href: "/inbox", icon: MessageSquare },
  { label: "Profile", href: "/profile", icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--primary)] safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2 relative">
        {items.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");
          const Icon = item.icon;

          if (item.isCenter) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--accent)] text-[var(--primary)] shadow-lg -mt-6 hover:scale-105 transition-default"
              >
                <Icon className="w-7 h-7" strokeWidth={2.5} />
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-1 py-2 px-3"
            >
              <Icon
                className={cn(
                  "w-5 h-5 transition-default",
                  isActive ? "text-white" : "text-[var(--accent)]/50"
                )}
                strokeWidth={isActive ? 2.5 : 1.5}
              />
              <span
                className={cn(
                  "text-[10px] transition-default",
                  isActive
                    ? "text-white font-bold"
                    : "text-[var(--accent)]/50"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
