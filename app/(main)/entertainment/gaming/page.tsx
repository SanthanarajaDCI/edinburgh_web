"use client";

import { useState } from "react";
import { Trophy, UserPlus, Gamepad2, Puzzle, Flag, LayoutGrid, Club, Activity } from "lucide-react";
import FilterChips from "@/components/ui/FilterChips";
import TrendingProductCard from "@/components/ui/TrendingProductCard";
import CategoryIconCard from "@/components/ui/CategoryIconCard";
import ProductListCard from "@/components/ui/ProductListCard";

const recentGames = [
  {
    name: 'Chess Online',
    players: '2 Players',
    image: 'https://picsum.photos/seed/chess/400/300',
    progress: 'Level 14',
  },
  {
    name: 'Subway Runner',
    players: 'Single',
    image: 'https://picsum.photos/seed/run/400/300',
    progress: 'Highscore: 12K',
  },
  {
    name: 'Word Puzzle',
    players: 'Single',
    image: 'https://picsum.photos/seed/word/400/300',
    progress: 'Level 89',
  },
  {
    name: 'Epic Fantasy Quest',
    players: 'MMORPG',
    image: 'https://picsum.photos/seed/fantasy/400/300',
    progress: 'Level 50',
  },
];

const categories = [
  { name: 'Action', icon: Activity },
  { name: 'Puzzle', icon: Puzzle },
  { name: 'Racing', icon: Flag },
  { name: 'Strategy', icon: LayoutGrid },
  { name: 'Cards', icon: Club },
];

const topMultiplayer = [
  {
    name: 'Battle Royale',
    players: '100 Players',
    image: 'https://picsum.photos/seed/battle/400/300',
    tag: 'Hot',
  },
  {
    name: 'Ludo King',
    players: '4 Players',
    image: 'https://picsum.photos/seed/ludo/400/300',
    tag: 'Casual',
  },
  {
    name: '8 Ball Pool',
    players: '2 Players',
    image: 'https://picsum.photos/seed/pool/400/300',
    tag: 'Sports',
  },
];

export default function GamingPage() {
  const [selectedFilter, setSelectedFilter] = useState("Trending");

  return (
    <div className="max-w-[1280px] mx-auto w-full pb-20 md:pb-10 min-h-screen bg-[var(--background)]">
      {/* App Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-playfair text-2xl font-bold text-[var(--text-primary)]">
          Gaming Hub
        </h1>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default">
            <Trophy className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
          <button className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default">
            <UserPlus className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="mt-2 mb-8">
        <FilterChips
          filters={['Trending', 'Multiplayer', 'Casual', 'Action']}
          selectedFilter={selectedFilter}
          onSelect={setSelectedFilter}
        />
      </div>

      {/* Featured Games */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Featured Games
          </h2>
          <button className="text-sm font-bold text-[var(--primary)] hover:text-[var(--accent)] transition-default">
            See all
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {recentGames.map((game, i) => (
            <TrendingProductCard
              key={i}
              title={game.name}
              subtitle={`${game.players} • ${game.progress}`}
              imageUrl={game.image}
              href="/entertainment"
            />
          ))}
        </div>
      </div>

      {/* Genres */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Genres
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

      {/* Top Multiplayer */}
      <div className="px-4 sm:px-6 lg:px-8 mb-24">
        <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
          Top Multiplayer
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {topMultiplayer.map((game, i) => (
            <ProductListCard
              key={i}
              title={game.name}
              subtitle={`${game.players} • Online`}
              imageUrl={game.image}
              badgeText={game.tag}
              actionText="Play Now"
              href="/entertainment"
            />
          ))}
        </div>
      </div>

      {/* FAB */}
      <div className="fixed bottom-[80px] md:bottom-8 right-4 sm:right-6 lg:right-8 z-50">
        <button className="px-6 py-4 bg-[var(--primary)] text-white rounded-2xl flex items-center gap-3 shadow-[0_10px_20px_rgba(212,175,55,0.3)] hover:bg-[var(--primary)]/90 transition-default active:scale-95">
          <Gamepad2 className="w-6 h-6" />
          <span className="font-bold text-lg">My Games</span>
        </button>
      </div>
    </div>
  );
}
