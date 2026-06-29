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
        "group block bg-white rounded-3xl border border-[var(--border-light)] overflow-hidden shadow-sm hover:shadow-md transition-default mb-6",
        className
      )}
    >
      <div className="relative h-[200px] w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
        {badgeText && (
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-2xl shadow-sm">
            <span className="text-sm font-bold text-[var(--primary)]">
              {badgeText}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-playfair text-xl font-bold text-[var(--text-primary)] truncate">
            {title}
          </h3>
          <p className="text-sm text-[var(--text-secondary)] mt-1 truncate">
            {subtitle}
          </p>
        </div>
        
        <button className="px-6 py-3 bg-[var(--primary)] text-white text-sm font-bold rounded-xl hover:bg-[var(--primary)]/90 transition-default shrink-0 active:scale-95">
          {actionText}
        </button>
      </div>
    </Link>
  );
}
