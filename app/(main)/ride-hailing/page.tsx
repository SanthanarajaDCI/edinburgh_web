"use client";

import { useState } from "react";
import { ArrowLeft, Clock, Receipt, Bike, Car, CarFront, Bus } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function RideHailingPage() {
  const router = useRouter();
  const [selectedRide, setSelectedRide] = useState("Bike");
  const isBusinessMode = true;

  return (
    <div className="max-w-[1280px] mx-auto w-full relative bg-[var(--background)] h-[100dvh] overflow-hidden flex flex-col">
      {/* App Bar */}
      <div className="absolute top-0 left-0 right-0 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between z-50 bg-gradient-to-b from-black/50 to-transparent pt-safe-top">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[var(--text-primary)] shadow-sm -ml-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-playfair text-xl font-bold text-white absolute left-1/2 -translate-x-1/2 drop-shadow-md">
          Ride Hailing
        </h1>
      </div>

      {/* Map Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/map/800/1200"
          alt="Map"
          fill
          className="object-cover opacity-80 mix-blend-darken grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col pt-24 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto w-full">
        {/* Where to Card */}
        <div className="bg-white rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex items-center gap-4 mb-4">
          <div className="w-3 h-3 rounded-full bg-[var(--primary)] shrink-0" />
          <span className="flex-1 text-lg font-bold text-[var(--text-primary)]">
            Where to?
          </span>
          <div className="w-10 h-10 rounded-xl bg-[var(--primary-light)] flex items-center justify-center">
            <Clock className="w-5 h-5 text-[var(--primary)]" />
          </div>
        </div>
      </div>

      {/* Bottom Panel */}
      <div className="relative z-20 w-full max-w-2xl mx-auto">
        {/* Business Mode Banner */}
        {isBusinessMode && (
          <div className="mx-4 sm:mx-6 lg:mx-8 mb-4 bg-slate-800 rounded-xl p-3 sm:p-4 shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Receipt className="w-5 h-5 text-white" />
              <span className="font-bold text-white text-sm sm:text-base">Business Mode Active</span>
            </div>
            <button className="bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-white/30 transition-default">
              Export Invoice
            </button>
          </div>
        )}

        <div className="bg-white rounded-t-[32px] pt-6 pb-8 px-4 sm:px-6 lg:px-8 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
          <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-6" />
          
          <h2 className="text-playfair text-2xl font-bold text-[var(--text-primary)] mb-6">
            Choose a Ride
          </h2>

          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {[
              { id: 'Bike', icon: Bike, price: '$5', time: '2 min' },
              { id: 'Economy', icon: CarFront, price: '$12', time: '4 min' },
              { id: 'Premium', icon: Car, price: '$24', time: '6 min' },
              { id: 'XL', icon: Bus, price: '$30', time: '10 min' },
            ].map(ride => (
              <button
                key={ride.id}
                onClick={() => setSelectedRide(ride.id)}
                className={cn(
                  "w-[110px] shrink-0 p-4 rounded-2xl border text-left transition-default",
                  selectedRide === ride.id
                    ? "bg-[var(--primary)] border-[var(--primary)] shadow-[0_6px_12px_rgba(212,175,55,0.3)]"
                    : "bg-white border-gray-100"
                )}
              >
                <ride.icon className={cn(
                  "w-9 h-9 mb-4",
                  selectedRide === ride.id ? "text-white" : "text-[var(--primary)]"
                )} />
                <h3 className={cn(
                  "font-bold text-sm mb-1",
                  selectedRide === ride.id ? "text-white" : "text-[var(--text-primary)]"
                )}>
                  {ride.id}
                </h3>
                <div className="flex justify-between items-end mt-1">
                  <span className={cn(
                    "font-black text-sm",
                    selectedRide === ride.id ? "text-white" : "text-[var(--text-primary)]"
                  )}>
                    {ride.price}
                  </span>
                  <span className={cn(
                    "text-[11px]",
                    selectedRide === ride.id ? "text-white/80" : "text-[var(--text-secondary)]"
                  )}>
                    {ride.time}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <button className="w-full bg-[var(--primary)] text-white py-4 rounded-2xl font-bold text-lg mt-6 hover:bg-[var(--primary)]/90 transition-default active:scale-[0.98]">
            Confirm {selectedRide}
          </button>
        </div>
      </div>
    </div>
  );
}
