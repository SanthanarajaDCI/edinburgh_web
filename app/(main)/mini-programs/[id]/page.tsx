"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Star, Heart, Share2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useUIStore } from "@/store/useUIStore";

export default function MiniProgramDetailPage() {
  const router = useRouter();
  const params = useParams();
  const programId = params.id as string;
  const showToast = useUIStore((state) => state.showToast);
  
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  const handleLaunch = () => {
    setIsLaunching(true);
    setTimeout(() => {
      setIsLaunching(false);
      showToast(`Welcome to Awesome App ${programId}!`, "success");
    }, 2000);
  };

  return (
    <div className="max-w-[1280px] mx-auto w-full relative bg-[var(--background)] pb-24 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[200px] sm:h-[250px] w-full">
        <Image
          src={`https://picsum.photos/seed/mpcover${programId}/800/300`}
          alt="Cover"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent" />
        
        <button 
          onClick={() => router.back()}
          className="absolute top-4 sm:top-6 left-4 sm:left-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-default"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto -mt-10 relative z-10">
        {/* Header Info */}
        <div className="flex gap-5 items-center mb-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white shadow-md overflow-hidden relative shrink-0">
            <Image src={`https://picsum.photos/seed/miniapp${programId}/150/150`} alt="App Logo" fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              Awesome App {programId}
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm font-bold text-[var(--primary)]">Utilities</span>
              <span className="text-[var(--text-secondary)] text-xs">•</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-bold text-[var(--text-secondary)]">4.8</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-10">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
            Description
          </h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
            This is an incredibly useful mini program that helps you manage your daily tasks directly within Edinburgh Cashmere. With lightning fast performance and seamless integration, it provides the best experience without having to download a separate app.
          </p>
        </div>

        {/* Screenshots */}
        <div className="mb-10">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
            Screenshots
          </h2>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="w-[140px] sm:w-[180px] h-[250px] sm:h-[320px] rounded-xl overflow-hidden shrink-0 relative border border-[var(--border-light)]">
                <Image src={`https://picsum.photos/seed/mpscreenshot${index}${programId}/300/600`} alt={`Screenshot ${index}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Actions Bar */}
      <div className="fixed bottom-[80px] md:bottom-0 left-0 right-0 bg-white border-t border-[var(--border-light)] p-4 sm:p-6 z-40 md:pl-[240px]">
        <div className="max-w-[1280px] mx-auto w-full flex items-center gap-3">
          <button
            onClick={handleLaunch}
            disabled={isLaunching}
            className="flex-1 py-3.5 rounded-xl font-bold text-sm bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 transition-default active:scale-[0.98] flex justify-center items-center h-12"
          >
            {isLaunching ? <Loader2 className="w-5 h-5 animate-spin" /> : "Launch Program"}
          </button>
          
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="w-12 h-12 rounded-xl bg-[var(--primary-light)] flex items-center justify-center transition-default"
          >
            <Heart className={cn("w-5 h-5 transition-colors", isFavorite ? "fill-red-500 text-red-500" : "text-[var(--primary)]")} />
          </button>
          
          <button className="w-12 h-12 rounded-xl bg-[var(--primary-light)] flex items-center justify-center text-[var(--primary)] transition-default hover:bg-[var(--primary-medium)]">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
