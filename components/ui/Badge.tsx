import { cn } from "@/lib/utils";
import { Star, Sparkles, Zap } from "lucide-react";

interface BadgeProps {
  variant?: "primary" | "accent" | "exclusive" | "trending" | "count" | "status";
  children: React.ReactNode;
  className?: string;
  icon?: boolean;
}

export default function Badge({
  variant = "primary",
  children,
  className,
  icon = false,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold rounded-full px-3 py-1 uppercase tracking-wider",
        variant === "primary" && "bg-[var(--primary)] text-white",
        variant === "accent" && "bg-[var(--accent)] text-white",
        variant === "exclusive" && "bg-red-500 text-white",
        variant === "trending" && "bg-purple-500 text-white",
        variant === "count" && "bg-[var(--accent)] text-white min-w-[20px] justify-center px-1.5",
        variant === "status" && "bg-green-100 text-green-700",
        className
      )}
    >
      {icon && variant === "primary" && <Star className="w-3 h-3" />}
      {icon && variant === "trending" && <Sparkles className="w-3 h-3" />}
      {icon && variant === "exclusive" && <Zap className="w-3 h-3" />}
      {children}
    </span>
  );
}
