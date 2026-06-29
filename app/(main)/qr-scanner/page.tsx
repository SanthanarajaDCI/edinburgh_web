"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { X, ZapOff, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const modes = [
  'Scan QR',
  'Scan Barcode',
  'OCR Documents',
  'Product Search',
  'Receipt Scanner'
];

export default function QrScannerPage() {
  const router = useRouter();
  const [selectedMode, setSelectedMode] = useState(0);

  return (
    <div className="fixed inset-0 bg-black flex flex-col z-[100]">
      {/* Background Camera feed (simulated) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://picsum.photos/seed/camera/800/1200" 
          alt="Camera Background" 
          fill 
          className="object-cover opacity-60 mix-blend-screen" 
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* App Bar Controls */}
      <div className="relative z-10 flex items-center justify-between p-4 pt-safe-top mt-2">
        <button onClick={() => router.back()} className="w-12 h-12 flex items-center justify-center text-white bg-black/20 rounded-full backdrop-blur-md">
          <X className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-4">
          <button className="w-12 h-12 flex items-center justify-center text-white bg-black/20 rounded-full backdrop-blur-md">
            <ZapOff className="w-6 h-6" />
          </button>
          <button className="w-12 h-12 flex items-center justify-center text-white bg-black/20 rounded-full backdrop-blur-md">
            <ImageIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Instruction */}
      <div className="relative z-10 mt-10 text-center px-6">
        <p className="text-white text-base font-medium drop-shadow-md">
          Align {modes[selectedMode]} within the frame
        </p>
      </div>

      {/* Scanner Cutout Frame */}
      <div className="relative flex-1 flex flex-col items-center justify-center z-10 pb-32">
        <div className="w-[250px] h-[250px] border-2 border-white/80 rounded-3xl relative flex overflow-hidden shadow-[0_0_0_4000px_rgba(0,0,0,0.5)] bg-transparent">
          {/* Scanning Line Animation */}
          <div className="w-full h-0.5 bg-[var(--primary)] absolute left-0 shadow-[0_0_20px_2px_var(--primary)] animate-[scan_2s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-safe-bottom bg-gradient-to-t from-black/80 to-transparent pt-20 flex flex-col items-center">
        {/* Modes */}
        <div className="w-full overflow-x-auto hide-scrollbar px-4 mb-8">
          <div className="flex gap-4 min-w-max mx-auto justify-center px-4">
            {modes.map((mode, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedMode(idx)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm transition-colors whitespace-nowrap",
                  selectedMode === idx 
                    ? "bg-[var(--primary)] text-white font-bold" 
                    : "bg-black/50 backdrop-blur-md text-white font-medium hover:bg-black/70"
                )}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Shutter Button */}
        <div className="mb-10 w-[72px] h-[72px] rounded-full border-4 border-white flex items-center justify-center bg-black/20 backdrop-blur-sm cursor-pointer active:scale-95 transition-transform">
          <div className="w-14 h-14 rounded-full bg-white" />
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}} />
    </div>
  );
}
