"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, PlayCircle, Heart, MessageCircle, Bookmark, Share2, ShoppingBag, Music, Eye } from "lucide-react";

export default function ContentDetailPage() {
  const router = useRouter();
  const params = useParams();
  const contentId = params.id as string;

  return (
    <div className="max-w-[480px] mx-auto w-full h-[100dvh] bg-black relative overflow-hidden flex flex-col">
      {/* Video Background */}
      <Image
        src={`https://picsum.photos/seed/content${contentId}/800/1200`}
        alt="Content"
        fill
        className="object-cover"
        priority
      />

      {/* Play Icon Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <PlayCircle className="w-20 h-20 text-white/80" />
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />

      {/* Top Back Button */}
      <div className="absolute top-0 left-0 right-0 z-50 pt-safe-top">
        <button 
          onClick={() => router.back()}
          className="w-12 h-12 flex items-center justify-center text-white"
        >
          <ArrowLeft className="w-6 h-6 drop-shadow-md" />
        </button>
      </div>

      {/* Right Actions */}
      <div className="absolute right-4 bottom-24 flex flex-col items-center gap-6 z-20">
        <button 
          onClick={() => router.push(`/creator/profile/${contentId}`)}
          className="w-12 h-12 rounded-full border-2 border-white relative overflow-hidden"
        >
          <Image src={`https://picsum.photos/seed/user${contentId}/100/100`} alt="Creator" fill className="object-cover" />
        </button>
        
        <button className="flex flex-col items-center gap-1 group">
          <Heart className="w-8 h-8 text-white group-active:scale-90 transition-transform" />
          <span className="text-white text-xs font-bold drop-shadow-md">45K</span>
        </button>

        <button className="flex flex-col items-center gap-1 group">
          <MessageCircle className="w-8 h-8 text-white group-active:scale-90 transition-transform" />
          <span className="text-white text-xs font-bold drop-shadow-md">1,234</span>
        </button>

        <button className="flex flex-col items-center gap-1 group">
          <Bookmark className="w-8 h-8 text-white group-active:scale-90 transition-transform" />
          <span className="text-white text-xs font-bold drop-shadow-md">Save</span>
        </button>

        <button className="flex flex-col items-center gap-1 group">
          <Share2 className="w-8 h-8 text-white group-active:scale-90 transition-transform" />
          <span className="text-white text-xs font-bold drop-shadow-md">Share</span>
        </button>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-6 left-4 right-20 z-20 flex flex-col gap-3">
        {/* Product Tags */}
        <div className="flex flex-wrap gap-2">
          <div className="bg-white px-3 py-2 rounded-full flex items-center gap-1.5 cursor-pointer hover:bg-gray-100 transition-colors">
            <ShoppingBag className="w-3.5 h-3.5 text-[var(--primary)]" />
            <span className="text-xs font-bold text-black">Cashmere Scarf</span>
            <span className="text-xs text-black/60">£120</span>
          </div>
          <div className="bg-white px-3 py-2 rounded-full flex items-center gap-1.5 cursor-pointer hover:bg-gray-100 transition-colors">
            <ShoppingBag className="w-3.5 h-3.5 text-[var(--primary)]" />
            <span className="text-xs font-bold text-black">Winter Coat</span>
            <span className="text-xs text-black/60">£250</span>
          </div>
        </div>

        <button 
          onClick={() => router.push(`/creator/profile/${contentId}`)}
          className="text-white font-bold text-base drop-shadow-md text-left w-max"
        >
          @creator_{contentId}
        </button>
        
        <p className="text-white text-sm drop-shadow-md">
          Check out these amazing winter styles! Perfect for the cold weather. #fashion #winter
        </p>
        
        <div className="flex items-center justify-between text-white drop-shadow-md mt-1">
          <div className="flex items-center gap-1.5 min-w-0 flex-1">
            <Music className="w-4 h-4 shrink-0" />
            <span className="text-xs truncate">Trending Song - Artist Name</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 ml-4">
            <Eye className="w-4 h-4 shrink-0" />
            <span className="text-xs">1.2M Views</span>
          </div>
        </div>
      </div>
    </div>
  );
}
