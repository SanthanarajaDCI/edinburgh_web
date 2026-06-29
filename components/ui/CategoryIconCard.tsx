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
        "group w-[140px] shrink-0 p-4 bg-white rounded-3xl border border-[var(--border-light)] shadow-sm hover:shadow-md transition-default flex flex-col",
        className
      )}
    >
      <div className="w-12 h-12 bg-[var(--text-primary)] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-default">
        <Icon className="w-6 h-6 text-white" />
      </div>
      
      <div className="mt-auto">
        <h4 className="text-[15px] font-bold text-[var(--text-primary)] truncate">
          {title}
        </h4>
        
        {(rating || subtitle) && (
          <div className="flex items-center gap-1 mt-1">
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
