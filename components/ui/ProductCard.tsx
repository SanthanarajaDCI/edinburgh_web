import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  href: string;
  className?: string;
}

export default function ProductCard({
  title,
  subtitle,
  imageUrl,
  href,
  className,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group bg-[var(--bg-surface)] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-default shrink-0 border border-[var(--border-light)]",
        "w-[140px] sm:w-[160px]",
        className
      )}
    >
      <div className="relative h-[100px] w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="160px"
        />
      </div>
      <div className="p-3">
        <h4 className="text-sm font-bold text-[var(--text-primary)] truncate">
          {title}
        </h4>
        <p className="text-xs text-[var(--text-secondary)] mt-0.5 truncate">
          {subtitle}
        </p>
      </div>
    </Link>
  );
}
