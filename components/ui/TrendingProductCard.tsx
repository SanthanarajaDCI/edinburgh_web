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
  priority?: boolean;
}

export default function TrendingProductCard({
  title,
  subtitle,
  imageUrl,
  href,
  className,
  priority = false,
}: TrendingProductCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative w-[200px] h-[280px] shrink-0 rounded-[20px] overflow-hidden block",
        "shadow-sm hover:shadow-md transition-default hover:scale-[0.98]",
        className
      )}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        priority={priority}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="200px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
      
      <div className="absolute inset-0 p-4 flex flex-col justify-between">
        <div>
          <div className="inline-flex items-center gap-1 bg-red-500 px-2.5 py-1 rounded-lg">
            <Flame className="w-3 h-3 text-white" />
            <span className="text-[9px] font-bold text-white tracking-widest uppercase">
              Trending
            </span>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-bold text-white leading-tight line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-white/90 mt-1 truncate">
            {subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
}
