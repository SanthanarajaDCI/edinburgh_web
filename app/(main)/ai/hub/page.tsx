"use client";

import { useState } from "react";
import { History, Image as ImageIcon, Video, FileText, Megaphone, Code, TrendingUp } from "lucide-react";
import FilterChips from "@/components/ui/FilterChips";
import TrendingProductCard from "@/components/ui/TrendingProductCard";
import CategoryIconCard from "@/components/ui/CategoryIconCard";
import ProductListCard from "@/components/ui/ProductListCard";

export default function AiHubPage() {
  const [selectedFilter, setSelectedFilter] = useState("All Tools");

  const categories = [
    { name: 'Images', icon: ImageIcon },
    { name: 'Video', icon: Video },
    { name: 'Text', icon: FileText },
    { name: 'Marketing', icon: Megaphone },
    { name: 'Code', icon: Code },
    { name: 'SEO', icon: TrendingUp },
  ];

  return (
    <div className="max-w-[1280px] mx-auto w-full relative bg-[var(--background)] min-h-screen pb-20">
      {/* App Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between sticky top-0 bg-[var(--background)]/80 backdrop-blur-md z-40 border-b border-[var(--border-light)]">
        <h1 className="text-playfair text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
          AI Creation Hub
        </h1>
        <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[var(--text-primary)] hover:bg-gray-50 transition-default">
          <History className="w-5 h-5" />
        </button>
      </div>

      <div className="py-6">
        {/* Filters */}
        <FilterChips 
          filters={['All Tools', 'Generative', 'Business', 'Coding']}
          selectedFilter={selectedFilter}
          onSelect={setSelectedFilter}
        />

        {/* Featured Tools */}
        <div className="mt-10 px-4 sm:px-6 lg:px-8 flex justify-between items-end">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4">
            Featured Tools
          </h2>
          <button className="text-[var(--primary)] font-bold text-sm mb-4">See all</button>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          <TrendingProductCard
            title="Image Generator"
            subtitle="Create stunning visuals"
            imageUrl="https://picsum.photos/seed/ai_image/400/300"
            tag="Popular"
            href="/ai"
          />
          <TrendingProductCard
            title="Video Generator"
            subtitle="AI powered videos"
            imageUrl="https://picsum.photos/seed/ai_video/400/300"
            tag="New"
            href="/ai"
          />
          <TrendingProductCard
            title="Content Writer"
            subtitle="Automate your blog"
            imageUrl="https://picsum.photos/seed/ai_writer/400/300"
            tag="Free"
            href="/ai"
          />
        </div>

        {/* Categories */}
        <div className="mt-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-6">
            Browse by Category
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {categories.map((cat, index) => (
            <CategoryIconCard
              key={index}
              title={cat.name}
              icon={cat.icon}
              href="/ai"
            />
          ))}
        </div>

        {/* Recommended */}
        <div className="mt-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-6">
            Recommended For You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <ProductListCard
              title="SEO Optimizer Pro"
              subtitle="Boost your ranking instantly"
              imageUrl="https://picsum.photos/seed/seo/400/300"
              badgeText="Premium"
              actionText="Launch Tool"
              href="/ai"
            />
            <ProductListCard
              title="Code Assistant"
              subtitle="Fix bugs and write faster"
              imageUrl="https://picsum.photos/seed/code/400/300"
              badgeText="Developer"
              actionText="Launch Tool"
              href="/ai"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
