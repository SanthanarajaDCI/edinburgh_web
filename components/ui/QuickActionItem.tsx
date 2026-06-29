import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface QuickActionItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
  className?: string;
}

export default function QuickActionItem({
  icon: Icon,
  label,
  href,
  className,
}: QuickActionItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col items-center gap-2 group",
        className
      )}
    >
      <div className="w-16 h-16 rounded-3xl bg-white shadow-sm flex items-center justify-center group-hover:shadow-md group-hover:-translate-y-1 transition-default">
        <Icon className="w-6 h-6 text-[var(--accent)]" strokeWidth={1.5} />
      </div>
      <span className="text-xs font-medium text-[var(--text-primary)] text-center leading-tight">
        {label}
      </span>
    </Link>
  );
}
