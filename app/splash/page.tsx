"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Gem } from "lucide-react";

export default function SplashPage() {
  const router = useRouter();
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Fade in
    const timer1 = setTimeout(() => {
      setOpacity(1);
    }, 100);

    // Navigate to onboarding
    const timer2 = setTimeout(() => {
      router.push("/onboarding");
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [router]);

  return (
    <div className="fixed inset-0 bg-[var(--primary)] flex flex-col items-center justify-center text-[var(--secondary)] z-50">
      <div 
        className="flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out"
        style={{ opacity }}
      >
        <Gem className="w-20 h-20 mb-6 stroke-1 text-[var(--secondary)]" />
        
        <h1 className="text-playfair text-3xl font-bold text-white tracking-[4px] text-center mb-4 leading-snug">
          EDINBURGH<br />CASHMERE
        </h1>
        
        <p className="text-sm font-light text-[var(--secondary)] tracking-[2px]">
          LUXURY & HERITAGE
        </p>
      </div>
    </div>
  );
}
