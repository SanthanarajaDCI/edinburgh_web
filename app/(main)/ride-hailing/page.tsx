"use client";

import { useState } from "react";
import { ArrowLeft, Clock, Receipt, MapPin, Navigation, CarFront, Car, Bus, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

const rideOptions = [
  { id: 'Economy', name: 'Atelier Economy', icon: CarFront, price: '£12.50', time: '4 min away', passengers: 4 },
  { id: 'Premium', name: 'Heritage Premium', icon: Car, price: '£24.00', time: '6 min away', passengers: 4, tag: 'Popular' },
  { id: 'Executive', name: 'Signature Exec', icon: ShieldCheck, price: '£35.00', time: '8 min away', passengers: 3 },
  { id: 'XL', name: 'Group Van', icon: Bus, price: '£42.00', time: '10 min away', passengers: 6 },
];

export default function RideHailingPage() {
  const router = useRouter();
  const [selectedRide, setSelectedRide] = useState("Premium");
  const isBusinessMode = true;

  return (
    <div className="max-w-[1280px] mx-auto w-full relative bg-[#0D1B2A] h-[100dvh] overflow-hidden flex flex-col font-sans">
      {/* App Bar */}
      <div className="absolute top-0 left-0 right-0 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between z-50 bg-gradient-to-b from-[#0D1B2A]/80 to-transparent pt-safe-top">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/10"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-bold text-white tracking-wide">
          Atelier Rides
        </h1>
        <div className="w-10 h-10" /> {/* Spacer for centering */}
      </div>

      {/* Map Background */}
      <div className="absolute inset-0 z-0 bg-[#0A1520]">
        <Image
          src="https://picsum.photos/seed/lux_map_dark/800/1200"
          alt="Map"
          fill
          className="object-cover opacity-60 mix-blend-luminosity"
          priority
        />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0D1B2A]/40 to-[#0D1B2A]/90" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-between pt-24 max-w-xl mx-auto w-full pb-6">
        
        {/* Search Locations */}
        <div className="px-4 sm:px-6 w-full">
          <div className="bg-[#1B263B]/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/10">
            <div className="flex items-center gap-4 mb-4 relative">
              <div className="w-2 h-2 rounded-full bg-[#D4AF37] shrink-0 z-10" />
              <div className="absolute left-[3px] top-[14px] bottom-[-18px] w-[2px] bg-white/10" />
              <div className="flex-1 bg-[#0D1B2A]/50 rounded-xl px-4 py-3 flex items-center text-white/90">
                <span className="text-sm font-medium">The Balmoral, 1 Princes St</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-sm bg-white shrink-0 z-10" />
              <div className="flex-1 bg-[#0D1B2A] rounded-xl px-4 py-3 flex items-center gap-3 text-white">
                <Navigation className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm font-bold flex-1">Where to?</span>
                <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center">
                  <Clock className="w-3.5 h-3.5 text-white/70" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Panel */}
        <div className="w-full flex flex-col gap-3 px-4 sm:px-6">
          
          {/* Business Mode Banner */}
          {isBusinessMode && (
            <div className="bg-[#1B263B]/90 backdrop-blur-xl rounded-xl p-3.5 flex items-center justify-between border border-[#D4AF37]/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <Receipt className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Business Account</h3>
                  <p className="text-white/50 text-[11px]">Expensing to Edinburgh Global</p>
                </div>
              </div>
              <button className="text-[#D4AF37] text-xs font-bold hover:text-white transition-colors">
                Change
              </button>
            </div>
          )}

          {/* Ride Options Sheet */}
          <div className="bg-[#1B263B]/95 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl border border-white/10">
            <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-5" />
            
            <div className="flex flex-col gap-3 max-h-[35vh] overflow-y-auto hide-scrollbar -mx-2 px-2">
              {rideOptions.map(ride => (
                <button
                  key={ride.id}
                  onClick={() => setSelectedRide(ride.id)}
                  className={cn(
                    "w-full flex items-center justify-between p-3.5 rounded-2xl border transition-all text-left",
                    selectedRide === ride.id
                      ? "bg-[#D4AF37]/10 border-[#D4AF37]"
                      : "bg-transparent border-transparent hover:bg-white/5"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                      selectedRide === ride.id ? "bg-[#D4AF37]" : "bg-[#0D1B2A]"
                    )}>
                      <ride.icon className={cn(
                        "w-6 h-6",
                        selectedRide === ride.id ? "text-[#0D1B2A]" : "text-white"
                      )} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="font-bold text-white text-sm">
                          {ride.name}
                        </h3>
                        {ride.tag && (
                          <span className="bg-[#D4AF37] text-[#0D1B2A] text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">
                            {ride.tag}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-white/50">
                        <span>{ride.time}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span>{ride.passengers} seats</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-white block">{ride.price}</span>
                  </div>
                </button>
              ))}
            </div>

            <button className="w-full bg-[#D4AF37] text-[#0D1B2A] py-4 rounded-2xl font-bold text-[15px] mt-4 hover:bg-[#C19A5B] transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              Confirm {selectedRide}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
