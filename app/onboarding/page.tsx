"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Gem, LayoutGrid, ShoppingBag, MessageCircle, Brush, Wallet, Sparkles, Puzzle } from "lucide-react";
import { cn } from "@/lib/utils";

const onboardingData = [
  {
    title: 'Welcome to Edinburgh Cashmere',
    description: 'Discover a world where luxury meets heritage, crafted specifically for the modern lifestyle.',
    icon: Gem,
  },
  {
    title: 'Key Features Overview',
    description: 'Explore our multifunctional platform designed to provide a seamless and premium experience.',
    icon: LayoutGrid,
  },
  {
    title: 'Marketplace Highlights',
    description: 'Browse and purchase exclusive collections with unparalleled craftsmanship and quality.',
    icon: ShoppingBag,
  },
  {
    title: 'Messaging & Calls',
    description: 'Stay connected with personalized customer service and direct interactions.',
    icon: MessageCircle,
  },
  {
    title: 'Creator Platform',
    description: 'Join a community of artisans and creators sharing their unique stories and designs.',
    icon: Brush,
  },
  {
    title: 'Wallet & Payments',
    description: 'Secure, fast, and seamless transactions to make your shopping experience effortless.',
    icon: Wallet,
  },
  {
    title: 'AI Assistant',
    description: 'Receive personalized recommendations and support with our intelligent AI companion.',
    icon: Sparkles,
  },
  {
    title: 'Mini Programs',
    description: 'Access a suite of integrated tools and features tailored to your needs.',
    icon: Puzzle,
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const isLastPage = currentPage === onboardingData.length - 1;

  const handleNext = () => {
    if (isLastPage) {
      router.push("/login");
    } else {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handleSkip = () => {
    router.push("/login");
  };

  const data = onboardingData[currentPage];
  const Icon = data.icon;

  return (
    <div className="fixed inset-0 bg-[var(--primary)] flex flex-col text-white z-50">
      <div className="flex-1 flex flex-col pt-safe-top pb-safe-bottom max-w-md mx-auto w-full relative">
        
        {/* Skip */}
        <div className="flex justify-end p-4 h-16 shrink-0">
          <button 
            onClick={handleSkip}
            className="text-[var(--secondary)] text-sm font-bold tracking-wide hover:opacity-80 transition-opacity"
          >
            Skip
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 transition-opacity duration-300">
          <Icon className="w-24 h-24 text-[var(--secondary)] mb-14 stroke-1" />
          
          <h2 className="text-playfair text-3xl font-bold text-center mb-6 leading-tight">
            {data.title}
          </h2>
          
          <p className="text-center text-white/80 leading-relaxed max-w-[280px]">
            {data.description}
          </p>
        </div>

        {/* Controls */}
        <div className="p-8 flex items-center justify-between shrink-0 h-32">
          {/* Indicators */}
          <div className="flex items-center gap-2">
            {onboardingData.map((_, idx) => (
              <div 
                key={idx}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  currentPage === idx 
                    ? "w-6 bg-[var(--secondary)]" 
                    : "w-2 bg-[var(--secondary)]/30"
                )}
              />
            ))}
          </div>
          
          {/* Next Button */}
          <button 
            onClick={handleNext}
            className="bg-[var(--secondary)] text-[var(--primary)] px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-[var(--secondary)]/90 transition-colors active:scale-95"
          >
            {isLastPage ? "Get Started" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
