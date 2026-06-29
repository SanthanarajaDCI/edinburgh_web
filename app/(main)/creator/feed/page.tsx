"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Plus, Heart, MessageCircle, Share2, MoreHorizontal, Music } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FeedPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"following" | "explore">("following");

  return (
    <div className="max-w-[480px] mx-auto w-full h-[100dvh] bg-black relative overflow-hidden flex flex-col">
      {/* Top Overlay: Stories & Tabs */}
      <div className="absolute top-0 left-0 right-0 z-50 pt-safe-top bg-gradient-to-b from-black/80 to-transparent pb-10">
        <div className="flex items-center px-4 py-2">
          <button 
            onClick={() => router.back()}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white"
          >
            <ArrowLeft className="w-6 h-6 drop-shadow-md" />
          </button>
        </div>

        {/* Stories Bar */}
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 pb-2">
          {/* My Story */}
          <button 
            onClick={() => router.push('/creator/story/create')}
            className="flex flex-col items-center gap-1 shrink-0"
          >
            <div className="relative w-14 h-14 rounded-full border-2 border-transparent">
              <Image src="https://picsum.photos/seed/mystory/100/100" alt="My Story" fill className="rounded-full object-cover" />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center border-2 border-black">
                <Plus className="w-3 h-3 text-white" />
              </div>
            </div>
            <span className="text-[10px] text-white drop-shadow-md">Your Story</span>
          </button>

          {/* Other Stories */}
          {Array.from({ length: 8 }).map((_, i) => (
            <button 
              key={i}
              onClick={() => i === 0 ? router.push('/creator/live/1') : null}
              className="flex flex-col items-center gap-1 shrink-0"
            >
              <div className={cn(
                "relative w-14 h-14 rounded-full border-2",
                i === 0 ? "border-red-500" : "border-[var(--primary)]"
              )}>
                <Image src={`https://picsum.photos/seed/story${i}/100/100`} alt="Story" fill className="rounded-full object-cover p-0.5" />
                {i === 0 && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[8px] font-bold px-1 rounded uppercase">
                    LIVE
                  </div>
                )}
              </div>
              <span className="text-[10px] text-white drop-shadow-md">User {i}</span>
            </button>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center mt-2">
          <div className="flex gap-6">
            <button 
              onClick={() => setActiveTab("following")}
              className={cn(
                "text-lg font-bold drop-shadow-md transition-colors",
                activeTab === "following" ? "text-white" : "text-white/60"
              )}
            >
              Following
            </button>
            <button 
              onClick={() => setActiveTab("explore")}
              className={cn(
                "text-lg font-bold drop-shadow-md transition-colors",
                activeTab === "explore" ? "text-white" : "text-white/60"
              )}
            >
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Video Feed */}
      <div className="flex-1 overflow-y-auto snap-y snap-mandatory hide-scrollbar">
        {Array.from({ length: 5 }).map((_, index) => (
          <VideoFeedItem key={index} index={index} seedPhrase={activeTab} />
        ))}
      </div>
    </div>
  );
}

function VideoFeedItem({ index, seedPhrase }: { index: number, seedPhrase: string }) {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="w-full h-full snap-start relative bg-black">
      <Image
        src={`https://picsum.photos/seed/${seedPhrase}_${index}/800/1200`}
        alt="Video"
        fill
        className="object-cover"
      />
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      {/* Right Side Actions */}
      <div className="absolute right-4 bottom-24 flex flex-col items-center gap-5 z-20">
        <button 
          onClick={() => router.push(`/creator/profile/${index}`)}
          className="w-12 h-12 rounded-full border-2 border-white relative overflow-hidden"
        >
          <Image src={`https://picsum.photos/seed/user${index}/100/100`} alt="Creator" fill className="object-cover" />
        </button>
        
        <button className="flex flex-col items-center gap-1 group" onClick={() => setIsLiked(!isLiked)}>
          <Heart className={cn("w-8 h-8 transition-transform", isLiked ? "fill-red-500 text-red-500 scale-110" : "text-white group-active:scale-90")} />
          <span className="text-white text-xs font-bold drop-shadow-md">{isLiked ? '1.2K' : '1.2K'}</span>
        </button>

        <button className="flex flex-col items-center gap-1 group">
          <MessageCircle className="w-8 h-8 text-white group-active:scale-90" />
          <span className="text-white text-xs font-bold drop-shadow-md">345</span>
        </button>

        <button className="flex flex-col items-center gap-1 group">
          <Share2 className="w-8 h-8 text-white group-active:scale-90" />
          <span className="text-white text-xs font-bold drop-shadow-md">Share</span>
        </button>

        <button className="flex flex-col items-center gap-1 group">
          <MoreHorizontal className="w-8 h-8 text-white group-active:scale-90" />
        </button>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-6 left-4 right-20 z-20">
        <button 
          onClick={() => router.push(`/creator/profile/${index}`)}
          className="text-white font-bold text-base drop-shadow-md mb-2"
        >
          @creator_{index}
        </button>
        <button 
          onClick={() => router.push(`/creator/content/${index}`)}
          className="text-white text-sm line-clamp-2 drop-shadow-md mb-3 text-left"
        >
          This is an amazing video description! Tap to see details and products. #trending #explore
        </button>
        <div className="flex items-center gap-2 text-white drop-shadow-md">
          <Music className="w-4 h-4" />
          <span className="text-xs truncate">Original Audio - Creator {index}</span>
        </div>
      </div>
    </div>
  );
}
