import { cn } from "@/lib/utils";

interface StatItemProps {
  label: string;
  value: string;
  className?: string;
}

export default function StatItem({ label, value, className }: StatItemProps) {
  return (
    <div className={cn("text-center", className)}>
      <p className="text-playfair text-xl font-bold text-[var(--text-primary)]">
        {value}
      </p>
      <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider mt-1">
        {label}
      </p>
    </div>
  );
}
