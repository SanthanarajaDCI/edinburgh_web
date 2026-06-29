"use client";

import { useState } from "react";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Mic, MicOff, Volume2, VolumeX, SwitchCamera, MonitorUp, PhoneOff } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CallingPage() {
  const router = useRouter();
  const params = useParams();
  const callId = params.id as string;
  const searchParams = useSearchParams();
  const isVideo = searchParams.get('video') === 'true';

  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaker, setIsSpeaker] = useState(false);

  return (
    <div className="max-w-[480px] mx-auto w-full h-[100dvh] bg-black flex flex-col relative overflow-hidden">
      {/* Background */}
      {isVideo ? (
        <Image src={`https://picsum.photos/seed/video${callId}/800/1200`} alt="Video" fill className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full overflow-hidden relative">
            <Image src={`https://picsum.photos/seed/call${callId}/400/400`} alt="Avatar" fill className="object-cover" />
          </div>
        </div>
      )}

      {/* Top Info */}
      <div className="absolute top-16 left-0 right-0 flex flex-col items-center z-10">
        <h1 className="text-2xl font-bold text-white drop-shadow-md">Alex Smith</h1>
        <span className="text-lg text-white drop-shadow-md mt-2">02:15</span>
      </div>

      {/* Self View */}
      {isVideo && (
        <div className="absolute top-16 right-4 w-24 h-36 rounded-xl border-2 border-white overflow-hidden z-20">
          <Image src="https://picsum.photos/seed/self/200/300" alt="Self" fill className="object-cover" />
        </div>
      )}

      {/* Controls */}
      <div className="absolute bottom-10 left-0 right-0 bg-black/60 backdrop-blur-md rounded-t-[32px] px-6 py-8 flex justify-center gap-6 z-20">
        <ControlButton 
          icon={isMuted ? MicOff : Mic} 
          label="Mute" 
          isActive={isMuted} 
          onClick={() => setIsMuted(!isMuted)} 
        />
        <ControlButton 
          icon={isSpeaker ? Volume2 : VolumeX} 
          label="Speaker" 
          isActive={isSpeaker} 
          onClick={() => setIsSpeaker(!isSpeaker)} 
        />
        {isVideo && (
          <ControlButton 
            icon={SwitchCamera} 
            label="Switch" 
            isActive={false} 
            onClick={() => {}} 
          />
        )}
        <ControlButton 
          icon={MonitorUp} 
          label="Share" 
          isActive={false} 
          onClick={() => {}} 
        />
        
        {/* End Call */}
        <button 
          onClick={() => router.back()}
          className="flex flex-col items-center gap-2 group ml-2"
        >
          <div className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center group-active:scale-95 transition-transform">
            <PhoneOff className="w-7 h-7 text-white" />
          </div>
          <span className="text-xs font-medium text-white opacity-0 group-hover:opacity-100">End</span>
        </button>
      </div>
    </div>
  );
}

function ControlButton({ icon: Icon, label, isActive, onClick }: { icon: any, label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button onClick={onClick} className="flex flex-col items-center gap-2 group">
      <div className={cn(
        "w-14 h-14 rounded-full flex items-center justify-center group-active:scale-95 transition-all",
        isActive ? "bg-white" : "bg-white/20"
      )}>
        <Icon className={cn("w-7 h-7", isActive ? "text-black" : "text-white")} />
      </div>
      <span className="text-xs font-medium text-white">{label}</span>
    </button>
  );
}
