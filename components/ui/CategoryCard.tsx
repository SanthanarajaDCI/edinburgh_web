import Link from "next/link";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  href: string;
  className?: string;
}

export default function CategoryCard({
  title,
  subtitle,
  imageUrl,
  href,
  className,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative rounded-2xl overflow-hidden aspect-[3/4] block",
        "shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)] transition-default",
        "hover:scale-[0.98] active:scale-95",
        className
      )}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-[var(--primary)]/60 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 p-4 flex flex-col justify-between">
        {/* Icon placeholder */}
        <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white rounded" />
        </div>

        {/* Texts */}
        <div>
          <h3 className="text-playfair text-lg font-bold text-white leading-tight">
            {title}
          </h3>
          <p className="text-xs text-white/80 mt-1">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}
