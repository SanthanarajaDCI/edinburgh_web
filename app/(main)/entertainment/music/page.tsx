"use client";

import { useState } from "react";
import { Search, Library, Music, Zap, Mic, Music4, Headphones, SkipBack, SkipForward, Play } from "lucide-react";
import Image from "next/image";
import FilterChips from "@/components/ui/FilterChips";
import TrendingProductCard from "@/components/ui/TrendingProductCard";
import CategoryIconCard from "@/components/ui/CategoryIconCard";
import ProductListCard from "@/components/ui/ProductListCard";

const trendingMusic = [
  {
    title: 'Global Top 50',
    subtitle: 'Playlist • 50 tracks',
    image: 'https://picsum.photos/seed/chart1/400/300',
  },
  {
    title: 'Viral Hits',
    subtitle: 'Playlist • 100 tracks',
    image: 'https://picsum.photos/seed/chart2/400/300',
  },
  {
    title: 'New Releases',
    subtitle: 'Album • Updated Today',
    image: 'https://picsum.photos/seed/chart3/400/300',
  },
];

const categories = [
  { name: 'Pop', icon: Music },
  { name: 'Rock', icon: Zap },
  { name: 'Hip Hop', icon: Mic },
  { name: 'Classical', icon: Music4 },
  { name: 'Electronic', icon: Headphones },
];

const podcasts = [
  {
    title: 'Tech Today',
    subtitle: 'Technology • Ep 42',
    image: 'https://picsum.photos/seed/pod1/400/300',
    tag: 'New',
  },
  {
    title: 'Mindfulness Daily',
    subtitle: 'Health & Wellness',
    image: 'https://picsum.photos/seed/pod2/400/300',
    tag: 'Popular',
  },
  {
    title: 'Comedy Hour',
    subtitle: 'Standup Comedy',
    image: 'https://picsum.photos/seed/pod3/400/300',
    tag: 'Live',
  },
];

export default function MusicPage() {
  const [selectedFilter, setSelectedFilter] = useState("Trending");

  return (
    <div className="max-w-[1280px] mx-auto w-full pb-32 min-h-screen bg-[var(--background)]">
      {/* App Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-playfair text-2xl font-bold text-[var(--text-primary)]">
          Music Stream
        </h1>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default">
            <Search className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
          <button className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default">
            <Library className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="mt-2 mb-8">
        <FilterChips
          filters={['Trending', 'Playlists', 'Podcasts', 'Albums']}
          selectedFilter={selectedFilter}
          onSelect={setSelectedFilter}
        />
      </div>

      {/* Trending Playlists */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Trending Playlists
          </h2>
          <button className="text-sm font-bold text-[var(--primary)] hover:text-[var(--accent)] transition-default">
            See all
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {trendingMusic.map((item, i) => (
            <TrendingProductCard
              key={i}
              title={item.title}
              subtitle={item.subtitle}
              imageUrl={item.image}
              href="/entertainment"
            />
          ))}
        </div>
      </div>

      {/* Browse Genres */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Browse Genres
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {categories.map((cat, i) => (
            <CategoryIconCard
              key={i}
              title={cat.name}
              icon={cat.icon}
              href="/entertainment"
            />
          ))}
        </div>
      </div>

      {/* Top Podcasts */}
      <div className="px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
          Top Podcasts
        </h2>
        <div>
          {podcasts.map((pod, i) => (
            <ProductListCard
              key={i}
              title={pod.title}
              subtitle={pod.subtitle}
              imageUrl={pod.image}
              badgeText={pod.tag}
              actionText="Listen Now"
              href="/entertainment"
            />
          ))}
        </div>
      </div>

      {/* Now Playing Bar */}
      <div className="fixed bottom-[65px] md:bottom-0 left-0 right-0 bg-white border-t border-[var(--border-light)] shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50">
        <div className="max-w-[1280px] mx-auto px-4 py-3 flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gray-100 overflow-hidden shrink-0 shadow-sm relative">
            <Image src="https://picsum.photos/seed/album/100/100" alt="Album Art" fill className="object-cover" />
          </div>
          <div className="flex-1 min-w-0 pr-2">
            <h4 className="font-bold text-sm text-[var(--text-primary)] truncate">
              Starlight Serenade
            </h4>
            <p className="text-xs text-[var(--text-secondary)] truncate">
              The Midnight Echoes
            </p>
          </div>
          <div className="flex items-center gap-1 sm:gap-4 shrink-0">
            <button className="w-10 h-10 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              <SkipBack className="w-5 h-5 fill-current" />
            </button>
            <button className="w-10 h-10 bg-[var(--primary)] text-white rounded-full flex items-center justify-center hover:bg-[var(--primary)]/90 transition-default">
              <Play className="w-5 h-5 fill-current ml-1" />
            </button>
            <button className="w-10 h-10 flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              <SkipForward className="w-5 h-5 fill-current" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
