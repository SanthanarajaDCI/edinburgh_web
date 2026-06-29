import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductListCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  badgeText?: string;
  actionText: string;
  href: string;
  className?: string;
}

export default function ProductListCard({
  title,
  subtitle,
  imageUrl,
  badgeText,
  actionText,
  href,
  className,
}: ProductListCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block bg-[var(--bg-surface)] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-default border border-[var(--border-light)]",
        className
      )}
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        {badgeText && (
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
            <span className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-wider">
              {badgeText}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-[var(--text-primary)] truncate">
            {title}
          </h3>
          <p className="text-xs text-[var(--text-secondary)] mt-1 truncate">
            {subtitle}
          </p>
        </div>
        
        <button className="w-full py-2 bg-[var(--primary)] text-white text-xs font-bold rounded-full hover:bg-[var(--primary)]/90 transition-default active:scale-95">
          {actionText}
        </button>
      </div>
    </Link>
  );
}
