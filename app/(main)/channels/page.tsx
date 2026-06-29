"use client";

import { useState } from "react";
import { Search, Newspaper, Monitor, Gamepad2, Coffee, TrendingUp, CircleFadingPlus } from "lucide-react";
import FilterChips from "@/components/ui/FilterChips";
import TrendingProductCard from "@/components/ui/TrendingProductCard";
import CategoryIconCard from "@/components/ui/CategoryIconCard";
import ProductListCard from "@/components/ui/ProductListCard";

export default function ChannelsDirectoryPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const categories = [
    { name: 'News', icon: Newspaper },
    { name: 'Tech', icon: Monitor },
    { name: 'Gaming', icon: Gamepad2 },
    { name: 'Lifestyle', icon: Coffee },
    { name: 'Finance', icon: TrendingUp },
    { name: 'Sports', icon: CircleFadingPlus },
  ];

  return (
    <div className="max-w-[1280px] mx-auto w-full relative bg-[var(--background)] min-h-screen">
      {/* App Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between sticky top-0 bg-[var(--background)]/80 backdrop-blur-md z-40 border-b border-[var(--border-light)]">
        <h1 className="text-playfair text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
          Channels
        </h1>
        <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[var(--text-primary)] hover:bg-gray-50 transition-default">
          <Search className="w-5 h-5" />
        </button>
      </div>

      <div className="py-6">
        {/* Filters */}
        <FilterChips 
          filters={['All', 'Following', 'Recommended', 'Live']}
          selectedFilter={selectedFilter}
          onSelect={setSelectedFilter}
        />

        {/* Trending Channels */}
        <div className="mt-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-6">
            Trending Channels
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          <TrendingProductCard
            title="Tech Review Daily"
            subtitle="Gadgets & Tech • 1.2M Subs"
            imageUrl="https://picsum.photos/seed/channel_tech/400/300"
            tag="Trending"
            href="/channels"
          />
          <TrendingProductCard
            title="Finance Gurus"
            subtitle="Investing & Money • 850K Subs"
            imageUrl="https://picsum.photos/seed/channel_fin/400/300"
            tag="Hot"
            href="/channels"
          />
        </div>

        {/* Categories */}
        <div className="mt-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-6">
            Browse by Topic
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {categories.map((cat, index) => (
            <CategoryIconCard
              key={index}
              title={cat.name}
              icon={cat.icon}
              href="/channels"
            />
          ))}
        </div>

        {/* Popular Channels */}
        <div className="mt-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-6">
            Popular Channels
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            <ProductListCard
              title="Edinburgh Travel Guide"
              subtitle="Travel & Vlog • 300K Subs"
              imageUrl="https://picsum.photos/seed/channel_travel/400/300"
              badgeText="Travel"
              actionText="Subscribe"
              href="/channels/travel"
            />
            <ProductListCard
              title="Cooking Masterclass"
              subtitle="Food & Recipes • 2.1M Subs"
              imageUrl="https://picsum.photos/seed/channel_food/400/300"
              badgeText="Food"
              actionText="Subscribe"
              href="/channels/food"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
