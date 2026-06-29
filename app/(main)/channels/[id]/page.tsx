"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, MoreVertical, Heart, MessageCircle, Share2, VolumeX, AlertTriangle, Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ChannelDetailPage() {
  const router = useRouter();
  const params = useParams();
  const channelId = params.id as string;
  
  const [activeTab, setActiveTab] = useState("Posts");
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="max-w-[1280px] mx-auto w-full relative bg-[var(--background)] pb-24">
      {/* Hero Section */}
      <div className="relative h-[200px] sm:h-[250px] w-full">
        <Image
          src={`https://picsum.photos/seed/channel_cover${channelId}/800/300`}
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

        <div className="absolute bottom-4 left-4 sm:left-8 flex items-center gap-4">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[var(--background)] overflow-hidden relative shrink-0">
            <Image src={`https://picsum.photos/seed/channel${channelId}/150/150`} alt="Channel Logo" fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              Channel {channelId}
            </h1>
            <p className="text-sm font-bold text-[var(--primary)] mt-0.5">
              1.2M Subscribers
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-[var(--background)] border-b border-[var(--border-light)] sticky top-[72px] sm:top-20 z-40">
        <div className="flex gap-8 px-4 sm:px-8">
          {["Posts", "Media", "Announcements"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "py-4 text-sm font-bold border-b-2 transition-colors",
                activeTab === tab
                  ? "border-[var(--primary)] text-[var(--primary)]"
                  : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
        {activeTab === "Posts" && (
          <div className="space-y-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="bg-white rounded-2xl p-5 shadow-sm border border-[var(--border-light)]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full relative overflow-hidden">
                      <Image src={`https://picsum.photos/seed/channel${channelId}/100/100`} alt="Logo" fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--text-primary)] text-sm">Channel Updates</h4>
                      <span className="text-xs text-[var(--text-secondary)]">2 hours ago</span>
                    </div>
                  </div>
                  <button className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-[var(--text-primary)] text-sm mb-4 leading-relaxed">
                  Check out our latest content updates! We have completely revamped the design.
                </p>
                <div className="relative w-full h-[200px] sm:h-[300px] rounded-xl overflow-hidden mb-4">
                  <Image src={`https://picsum.photos/seed/post${index}${channelId}/600/400`} alt="Post Media" fill className="object-cover" />
                </div>
                <div className="flex items-center justify-between text-[var(--text-secondary)] pt-2">
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span className="text-xs font-bold">1.2K</span>
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-[var(--primary)] transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-xs font-bold">342</span>
                    </button>
                  </div>
                  <button className="hover:text-[var(--primary)] transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Media" && (
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="aspect-square relative rounded-lg overflow-hidden group cursor-pointer">
                <Image src={`https://picsum.photos/seed/media${index}${channelId}/300/300`} alt="Media" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        )}

        {activeTab === "Announcements" && (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-white rounded-2xl p-5 shadow-sm border border-[var(--primary-light)] flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center shrink-0">
                  <Megaphone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-primary)] text-base mb-1">Important Update</h4>
                  <p className="text-sm text-[var(--text-secondary)] mb-2 leading-relaxed">
                    Please note that the schedule for upcoming releases has been shifted by one week.
                  </p>
                  <span className="text-xs text-[var(--text-secondary)] font-medium">Oct 12, 2026</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Actions Bar */}
      <div className="fixed bottom-[80px] md:bottom-0 left-0 right-0 bg-white border-t border-[var(--border-light)] p-4 sm:p-6 z-40 md:pl-[240px]">
        <div className="max-w-[1280px] mx-auto w-full flex items-center gap-3">
          <button
            onClick={() => setIsSubscribed(!isSubscribed)}
            className={cn(
              "flex-1 py-3.5 rounded-xl font-bold text-sm transition-default active:scale-[0.98]",
              isSubscribed
                ? "bg-gray-100 text-[var(--text-primary)]"
                : "bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90"
            )}
          >
            {isSubscribed ? "Subscribed" : "Subscribe"}
          </button>
          
          <button className="w-12 h-12 rounded-xl border border-[var(--border-light)] flex items-center justify-center text-[var(--text-primary)] hover:bg-gray-50 transition-default">
            <VolumeX className="w-5 h-5" />
          </button>
          
          <button className="w-12 h-12 rounded-xl border border-[var(--border-light)] flex items-center justify-center text-red-500 hover:bg-red-50 transition-default">
            <AlertTriangle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
