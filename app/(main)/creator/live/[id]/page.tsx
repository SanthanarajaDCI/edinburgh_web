"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { X, Eye, SwitchCamera, MicOff, Wand2, MoreHorizontal, Send } from "lucide-react";

export default function LiveStreamingPage() {
  const router = useRouter();

  return (
    <div className="max-w-[480px] mx-auto w-full h-[100dvh] bg-black relative overflow-hidden">
      {/* Background Feed */}
      <Image
        src="https://picsum.photos/seed/live_stream/800/1200"
        alt="Live Stream"
        fill
        className="object-cover"
        priority
      />

      {/* Top Info Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 pt-safe-top p-4 flex items-center gap-2">
        <div className="bg-red-500 rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-white text-xs font-bold">LIVE</span>
        </div>
        
        <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5">
          <Eye className="w-3.5 h-3.5 text-white" />
          <span className="text-white text-xs font-bold">4.2K</span>
        </div>
        
        <div className="flex-1" />
        
        <button 
          onClick={() => router.back()}
          className="w-8 h-8 flex items-center justify-center text-white"
        >
          <X className="w-6 h-6 drop-shadow-md" />
        </button>
      </div>

      {/* Right Controls */}
      <div className="absolute right-4 top-[100px] flex flex-col gap-4 z-20">
        <ControlButton icon={SwitchCamera} label="Flip" />
        <ControlButton icon={MicOff} label="Mute" />
        <ControlButton icon={Wand2} label="Effects" />
        <ControlButton icon={MoreHorizontal} label="More" />
      </div>

      {/* Bottom Chat Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black/90 to-transparent p-4 flex flex-col justify-end z-20">
        <div className="flex-1 overflow-y-auto hide-scrollbar flex flex-col justify-end gap-3 mb-4">
          <ChatBubble user="user123" message="Love this stream! ❤️" />
          <ChatBubble user="fan_boy" message="Can you show that again?" />
          <ChatBubble user="style_icon" message="Where did you get that shirt?" />
        </div>
        
        {/* Chat Input */}
        <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-3 flex items-center gap-2">
          <input 
            type="text" 
            placeholder="Add a comment..."
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/70 text-sm"
          />
          <button className="w-8 h-8 flex items-center justify-center text-white shrink-0">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function ControlButton({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <button className="flex flex-col items-center gap-1">
      <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <span className="text-[10px] text-white drop-shadow-md font-medium">{label}</span>
    </button>
  );
}

function ChatBubble({ user, message }: { user: string, message: string }) {
  return (
    <div className="flex items-start gap-2">
      <div className="w-6 h-6 rounded-full overflow-hidden shrink-0 relative mt-0.5 border border-white/20">
        <Image src={`https://picsum.photos/seed/${user}/50/50`} alt={user} fill className="object-cover" />
      </div>
      <div className="flex-1 min-w-0 leading-tight">
        <span className="text-white/80 font-bold text-sm mr-2 drop-shadow-md">{user}</span>
        <span className="text-white text-sm drop-shadow-md">{message}</span>
      </div>
    </div>
  );
}
