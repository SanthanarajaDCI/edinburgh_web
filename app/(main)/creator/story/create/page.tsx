"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { X, FlashlightOff, Settings, Type, Music, Smile, Sticker, PenTool, SwitchCamera } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function CreateStoryPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Story");

  return (
    <div className="max-w-[480px] mx-auto w-full h-[100dvh] bg-black relative overflow-hidden flex flex-col">
      {/* Camera Feed */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/story_cam/800/1200"
          alt="Camera"
          fill
          className="object-cover"
        />
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 pt-safe-top p-4 flex items-center justify-between z-50">
        <button onClick={() => router.back()} className="text-white drop-shadow-md">
          <X className="w-8 h-8" />
        </button>
        <button className="text-white drop-shadow-md">
          <FlashlightOff className="w-7 h-7" />
        </button>
        <button className="text-white drop-shadow-md">
          <Settings className="w-7 h-7" />
        </button>
      </div>

      {/* Right Tools */}
      <div className="absolute right-4 top-[100px] flex flex-col gap-6 z-20">
        <ToolButton icon={Type} label="Aa" />
        <ToolButton icon={Music} label="Music" />
        <ToolButton icon={Smile} label="Effects" />
        <ToolButton icon={Sticker} label="Sticker" />
        <ToolButton icon={PenTool} label="Draw" />
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 pt-10 pb-8 bg-gradient-to-t from-black/90 to-transparent z-20 flex flex-col items-center">
        {/* Action Row */}
        <div className="w-full px-8 flex items-center justify-between mb-8">
          {/* Gallery */}
          <div className="w-10 h-10 rounded-lg border-2 border-white overflow-hidden relative shadow-md cursor-pointer">
            <Image src="https://picsum.photos/seed/gallery/100/100" alt="Gallery" fill className="object-cover" />
          </div>
          
          {/* Capture Button */}
          <button className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center bg-transparent shrink-0 active:scale-95 transition-transform">
            <div className="w-[68px] h-[68px] bg-white rounded-full" />
          </button>
          
          {/* Flip */}
          <button className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white active:scale-95 transition-transform">
            <SwitchCamera className="w-6 h-6" />
          </button>
        </div>
        
        {/* Tabs */}
        <div className="flex items-center gap-6 overflow-x-auto hide-scrollbar px-6 w-full justify-center">
          {['Post', 'Story', 'Reel', 'Live'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm transition-colors shrink-0",
                activeTab === tab 
                  ? "bg-black/50 text-white font-bold" 
                  : "text-white/70 font-normal hover:text-white"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ToolButton({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <button className="flex flex-col items-center gap-0.5 group">
      <Icon className="w-7 h-7 text-white drop-shadow-md group-active:scale-90 transition-transform" />
      <span className="text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md">
        {label}
      </span>
    </button>
  );
}
