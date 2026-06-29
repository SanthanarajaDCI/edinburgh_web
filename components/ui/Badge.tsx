import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface BadgeProps {
  variant?: "gold" | "count" | "status";
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  variant = "gold",
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-xs font-bold rounded-full px-2.5 py-1",
        variant === "gold" &&
          "bg-amber-50 text-amber-700 border border-amber-300",
        variant === "count" &&
          "bg-[var(--accent)] text-white min-w-[20px] justify-center",
        variant === "status" &&
          "bg-green-50 text-green-700 border border-green-300",
        className
      )}
    >
      {variant === "gold" && <Star className="w-3 h-3 fill-amber-400 text-amber-400" />}
      {children}
    </span>
  );
}
