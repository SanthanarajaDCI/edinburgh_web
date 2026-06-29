import Link from "next/link";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  icon?: LucideIcon;
  seeAllHref?: string;
  seeAllText?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  icon: Icon,
  seeAllHref,
  seeAllText = "See All",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <div className="flex items-center gap-2">
        {Icon && (
          <div className="w-8 h-8 rounded-lg bg-[var(--primary-light)] flex items-center justify-center">
            <Icon className="w-4 h-4 text-[var(--primary)]" />
          </div>
        )}
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
          {title}
        </h2>
      </div>
      {seeAllHref && (
        <Link
          href={seeAllHref}
          className="text-sm font-bold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-default"
        >
          {seeAllText}
        </Link>
      )}
    </div>
  );
}
