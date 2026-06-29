"use client";

import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { 
  ArrowLeft, Share2, Bookmark, Navigation, Phone, 
  Globe, MapPin, Star, ShoppingCart 
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function RestaurantDetailPage() {
  const router = useRouter();
  const params = useParams();
  const restaurantId = params.id as string;

  return (
    <div className="max-w-[1280px] mx-auto w-full relative bg-white pb-32">
      {/* Hero Image / Sliver AppBar */}
      <div className="relative h-[250px] sm:h-[350px] w-full">
        <Image
          src={`https://picsum.photos/seed/${restaurantId}_cover/800/600`}
          alt="Restaurant Cover"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
        
        {/* Top actions */}
        <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 lg:p-8 flex items-center justify-between z-10">
          <button 
            onClick={() => router.back()}
            className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-default"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-default">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-default">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto -mt-10 relative z-20">
        {/* Restaurant Info */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white bg-white shadow-md overflow-hidden shrink-0 relative">
            <Image
              src={`https://picsum.photos/seed/${restaurantId}_logo/150/150`}
              alt="Restaurant Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 pb-2">
            <h1 className="text-playfair text-2xl sm:text-3xl font-bold text-[var(--text-primary)] leading-tight">
              The Royal Dining
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-[var(--primary)] font-bold text-sm sm:text-base">
                Italian
              </p>
              <span className="text-[var(--text-secondary)]">•</span>
              <p className="text-green-600 font-bold text-sm sm:text-base">
                £££
              </p>
            </div>
            <div className="flex items-center gap-1.5 mt-2">
              <Star className="w-5 h-5 fill-[var(--accent)] text-[var(--accent)]" />
              <span className="font-bold text-[var(--text-primary)]">4.8</span>
              <span className="text-[var(--text-secondary)] text-sm">(240 reviews)</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-around py-8 border-b border-[var(--border-light)]">
          {[
            { icon: Navigation, label: "Directions" },
            { icon: Phone, label: "Call" },
            { icon: Globe, label: "Website" }
          ].map((action) => (
            <button key={action.label} className="flex flex-col items-center gap-2 group">
              <div className="w-14 h-14 rounded-full bg-[var(--primary-light)] flex items-center justify-center group-hover:bg-[var(--primary)] transition-default">
                <action.icon className="w-6 h-6 text-[var(--primary)] group-hover:text-white transition-default" />
              </div>
              <span className="text-xs font-bold text-[var(--primary)]">{action.label}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 border-b border-[var(--border-light)]">
          {/* Location */}
          <div>
            <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
              Location
            </h2>
            <div className="relative h-32 rounded-2xl overflow-hidden mb-4 bg-gray-100 group">
              <Image
                src="https://picsum.photos/seed/map_rest_placeholder/800/300"
                alt="Map View"
                fill
                className="object-cover brightness-75 group-hover:brightness-90 transition-default"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="w-10 h-10 text-red-500 drop-shadow-md" />
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[var(--text-secondary)] shrink-0 mt-0.5" />
              <p className="text-sm text-[var(--text-primary)] leading-relaxed">
                45 George St<br />
                Edinburgh, EH2 2HT
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
              Working Hours
            </h2>
            <div className="space-y-3">
              {[
                { day: "Monday - Friday", hours: "11:00 AM - 10:00 PM", closed: false },
                { day: "Saturday", hours: "10:00 AM - 11:00 PM", closed: false },
                { day: "Sunday", hours: "10:00 AM - 09:00 PM", closed: false },
              ].map((schedule) => (
                <div key={schedule.day} className="flex justify-between items-center text-sm">
                  <span className="text-[var(--text-secondary)]">{schedule.day}</span>
                  <span className={cn(
                    "font-bold",
                    schedule.closed ? "text-red-500" : "text-[var(--text-primary)]"
                  )}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="py-10 border-b border-[var(--border-light)]">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-6">
            Menu
          </h2>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="w-[140px] shrink-0 bg-white rounded-2xl shadow-sm border border-[var(--border-light)] overflow-hidden group hover:shadow-md transition-default">
                <div className="relative h-[100px] w-full overflow-hidden">
                  <Image
                    src={`https://picsum.photos/seed/menu_${restaurantId}_${item}/300/200`}
                    alt={`Menu Item ${item}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="140px"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-bold text-[var(--text-primary)] truncate">
                    Menu Item {item}
                  </h3>
                  <p className="text-[var(--primary)] font-bold mt-1 text-sm mb-2">
                    £15.00
                  </p>
                  <button className="w-full py-1.5 bg-[var(--accent)] text-[var(--primary)] text-xs font-bold rounded-lg hover:bg-[var(--accent-hover)] transition-default active:scale-95">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
              Reviews
            </h2>
            <button className="text-sm font-bold text-[var(--accent)] hover:text-[var(--accent-hover)] transition-default">
              See All
            </button>
          </div>
          
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 relative border border-[var(--border-light)]">
              <Image src="https://picsum.photos/seed/restuser/100/100" alt="John Doe" fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-[var(--text-primary)] text-sm">John Doe</h4>
              <div className="flex items-center gap-0.5 mt-1 mb-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[var(--accent)] text-[var(--accent)]" />
                ))}
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Amazing pasta and great wine selection. The service was top notch!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-[80px] md:bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] border border-[var(--border-light)] p-2 flex items-center gap-2 w-max">
          <button 
            onClick={() => router.push("/marketplace/cart")}
            className="flex items-center gap-2 bg-[var(--primary)] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[var(--primary)]/90 transition-default active:scale-95"
          >
            <ShoppingCart className="w-5 h-5" />
            Checkout Order
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--primary-light)] text-[var(--primary)] hover:bg-[var(--primary-medium)] transition-default active:scale-95">
            <Bookmark className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--primary-light)] text-[var(--primary)] hover:bg-[var(--primary-medium)] transition-default active:scale-95">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
