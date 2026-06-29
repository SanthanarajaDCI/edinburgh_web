"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Bell, MoreHorizontal, Mail, PlayCircle } from "lucide-react";

export default function CreatorProfilePage() {
  const router = useRouter();
  const params = useParams();
  const profileId = params.id as string;

  return (
    <div className="max-w-[480px] mx-auto w-full min-h-screen bg-[var(--background)] pb-20">
      {/* App Bar */}
      <div className="px-4 py-4 flex items-center justify-between sticky top-0 bg-[var(--background)] z-50 border-b border-[var(--border-light)]">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()} className="text-[var(--text-primary)]">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="font-bold text-lg text-[var(--text-primary)]">
            @creator_{profileId}
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-[var(--text-primary)]">
            <Bell className="w-6 h-6" />
          </button>
          <button className="text-[var(--text-primary)]">
            <MoreHorizontal className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center pt-6 px-4">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full border-2 border-[var(--primary)] p-1 mb-3">
          <div className="w-full h-full rounded-full overflow-hidden relative">
            <Image src={`https://picsum.photos/seed/user${profileId}/200/200`} alt="Avatar" fill className="object-cover" />
          </div>
        </div>

        {/* Name */}
        <h2 className="text-xl font-bold text-[var(--text-primary)]">
          Creator Name {profileId}
        </h2>

        {/* Stats */}
        <div className="flex items-center gap-6 mt-4 mb-6">
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg text-[var(--text-primary)]">1.2M</span>
            <span className="text-xs text-[var(--text-secondary)]">Followers</span>
          </div>
          <div className="w-px h-8 bg-[var(--border-light)]" />
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg text-[var(--text-primary)]">245</span>
            <span className="text-xs text-[var(--text-secondary)]">Following</span>
          </div>
          <div className="w-px h-8 bg-[var(--border-light)]" />
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg text-[var(--text-primary)]">12M</span>
            <span className="text-xs text-[var(--text-secondary)]">Likes</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 w-full max-w-sm mb-6">
          <button className="flex-1 bg-[var(--primary)] text-white py-2.5 rounded-lg font-bold text-sm hover:bg-[var(--primary)]/90 transition-default">
            Follow
          </button>
          <button 
            onClick={() => router.push(`/inbox/chat/${profileId}`)}
            className="w-11 h-11 border border-[var(--border-light)] rounded-lg flex items-center justify-center text-[var(--text-primary)] hover:bg-gray-50 transition-default"
          >
            <Mail className="w-5 h-5" />
          </button>
        </div>

        {/* Bio */}
        <p className="text-sm text-[var(--text-primary)] text-center mb-6">
          Digital creator sharing tips on design, tech, and lifestyle. 🚀<br />
          Business: collab@creator{profileId}.com
        </p>

        {/* Story Highlights */}
        <div className="w-full flex gap-4 overflow-x-auto hide-scrollbar pb-6 border-b border-[var(--border-light)]">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-16 h-16 rounded-full border border-[var(--border-light)] p-0.5">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image src={`https://picsum.photos/seed/highlight${i}${profileId}/100/100`} alt="Highlight" fill className="object-cover" />
                </div>
              </div>
              <span className="text-xs text-[var(--text-primary)]">Vlogs {i}</span>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="w-full grid grid-cols-3 gap-0.5 mt-0.5">
          {Array.from({ length: 12 }).map((_, i) => (
            <button 
              key={i}
              onClick={() => router.push(`/creator/content/${i}`)}
              className="aspect-[9/16] relative bg-gray-100 group"
            >
              <Image src={`https://picsum.photos/seed/post${i}${profileId}/300/500`} alt="Post" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-2 left-2 flex items-center gap-1">
                <PlayCircle className="w-4 h-4 text-white drop-shadow-md" />
                <span className="text-white text-xs font-bold drop-shadow-md">
                  {(i + 1) * 12}K
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
