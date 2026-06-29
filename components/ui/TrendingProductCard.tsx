import Image from "next/image";
import Link from "next/link";
import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrendingProductCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  href: string;
  tag?: string;
  className?: string;
}

export default function TrendingProductCard({
  title,
  subtitle,
  imageUrl,
  href,
  className,
}: TrendingProductCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative w-[260px] h-[350px] shrink-0 rounded-3xl overflow-hidden block",
        "shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-default hover:scale-[0.98]",
        className
      )}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="260px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
      
      <div className="absolute inset-0 p-5 flex flex-col justify-between">
        <div>
          <div className="inline-flex items-center gap-1 bg-red-500 px-3 py-1.5 rounded-xl">
            <Flame className="w-3.5 h-3.5 text-white" />
            <span className="text-[10px] font-bold text-white tracking-widest uppercase">
              Trending
            </span>
          </div>
        </div>
        
        <div>
          <h3 className="text-playfair text-2xl font-bold text-white leading-tight line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-white/90 mt-1 truncate">
            {subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
}
