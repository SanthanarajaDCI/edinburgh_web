import Link from "next/link";
import { Star, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryIconCardProps {
  title: string;
  icon: LucideIcon;
  rating?: string;
  subtitle?: string;
  href: string;
  className?: string;
}

export default function CategoryIconCard({
  title,
  icon: Icon,
  rating,
  subtitle,
  href,
  className,
}: CategoryIconCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group w-[110px] shrink-0 p-3 bg-[var(--bg-surface)] rounded-[20px] shadow-sm hover:shadow-md transition-default flex flex-col items-center text-center border border-[var(--border-light)]",
        className
      )}
    >
      <div className="w-10 h-10 bg-[var(--text-primary)] rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-default">
        <Icon className="w-5 h-5 text-white" />
      </div>
      
      <div className="mt-auto w-full">
        <h4 className="text-[13px] font-bold text-[var(--text-primary)] truncate">
          {title}
        </h4>
        
        {(rating || subtitle) && (
          <div className="flex items-center justify-center gap-1 mt-1">
            {rating && (
              <div className="flex items-center gap-1 shrink-0">
                <Star className="w-3 h-3 fill-red-500 text-red-500" />
                <span className="text-xs font-bold text-[var(--text-primary)]">
                  {rating}
                </span>
              </div>
            )}
            
            {rating && subtitle && (
              <span className="text-xs text-[var(--text-secondary)] mx-0.5">•</span>
            )}
            
            {subtitle && (
              <span className="text-xs text-[var(--text-secondary)] truncate">
                {subtitle}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
