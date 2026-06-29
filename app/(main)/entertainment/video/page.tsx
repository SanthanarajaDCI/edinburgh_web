"use client";

import { useState } from "react";
import { Cast, Search, UserCircle, Film, Music, Gamepad2, Newspaper, Tv, GraduationCap, Plus } from "lucide-react";
import FilterChips from "@/components/ui/FilterChips";
import TrendingProductCard from "@/components/ui/TrendingProductCard";
import CategoryIconCard from "@/components/ui/CategoryIconCard";
import ProductListCard from "@/components/ui/ProductListCard";

const trendingVideos = [
  {
    title: 'Edinburgh Vlog 2026 - Exploring the City',
    subtitle: 'Travel Vlogger • 1.2M views',
    image: 'https://picsum.photos/seed/vid1/400/300',
    duration: '10:24',
  },
  {
    title: 'How to start a business with 0 listing fees',
    subtitle: 'Business Guru • 450K views',
    image: 'https://picsum.photos/seed/vid2/400/300',
    duration: '15:30',
  },
];

const categories = [
  { name: 'Movies', icon: Film },
  { name: 'Music', icon: Music },
  { name: 'Gaming', icon: Gamepad2 },
  { name: 'News', icon: Newspaper },
  { name: 'Live', icon: Tv },
  { name: 'Education', icon: GraduationCap },
];

const popularVideos = [
  {
    title: 'Top 10 Action Movies Free to Watch',
    subtitle: 'Movie Reviewer • 2.1M views',
    image: 'https://picsum.photos/seed/vid3/400/300',
    duration: '08:45',
    tag: 'Movies',
  },
  {
    title: 'Coding in Flutter 2026',
    subtitle: 'Tech Ninja • 100K views',
    image: 'https://picsum.photos/seed/vid4/400/300',
    duration: '22:10',
    tag: 'Education',
  },
];

export default function VideoStreamingPage() {
  const [selectedFilter, setSelectedFilter] = useState("Trending");

  return (
    <div className="max-w-[1280px] mx-auto w-full pb-20 md:pb-10 min-h-screen bg-[var(--background)]">
      {/* App Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-playfair text-2xl font-bold text-[var(--text-primary)]">
          Videos
        </h1>
        <div className="flex items-center gap-1 sm:gap-2">
          <button className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default">
            <Cast className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
          <button className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default">
            <Search className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
          <button className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default">
            <UserCircle className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="mt-2 mb-8">
        <FilterChips
          filters={['Trending', 'Music', 'Live', 'Gaming']}
          selectedFilter={selectedFilter}
          onSelect={setSelectedFilter}
        />
      </div>

      {/* Trending Videos */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Trending Videos
          </h2>
          <button className="text-sm font-bold text-[var(--primary)] hover:text-[var(--accent)] transition-default">
            See all
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {trendingVideos.map((vid, i) => (
            <TrendingProductCard
              key={i}
              title={vid.title}
              subtitle={vid.subtitle}
              imageUrl={vid.image}
              href="/entertainment"
            />
          ))}
        </div>
      </div>

      {/* Browse Categories */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Browse Categories
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

      {/* Recommended For You */}
      <div className="px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
          Recommended For You
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {popularVideos.map((vid, i) => (
            <ProductListCard
              key={i}
              title={vid.title}
              subtitle={vid.subtitle}
              imageUrl={vid.image}
              badgeText={vid.duration}
              actionText="Watch Now"
              href="/entertainment"
            />
          ))}
        </div>
      </div>

      {/* FAB */}
      <div className="fixed bottom-[80px] md:bottom-8 right-4 sm:right-6 lg:right-8 z-50">
        <button className="w-14 h-14 bg-[var(--primary)] text-white rounded-2xl flex items-center justify-center shadow-lg hover:bg-[var(--primary)]/90 transition-default active:scale-95">
          <Plus className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
