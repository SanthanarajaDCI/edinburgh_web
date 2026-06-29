"use client";

import { useState } from "react";
import { Search, Gamepad2, Wrench, ShoppingBag, Users, CircleDollarSign, ShieldPlus } from "lucide-react";
import FilterChips from "@/components/ui/FilterChips";
import TrendingProductCard from "@/components/ui/TrendingProductCard";
import CategoryIconCard from "@/components/ui/CategoryIconCard";
import ProductListCard from "@/components/ui/ProductListCard";

export default function MiniProgramsDirectoryPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const categories = [
    { name: 'Games', icon: Gamepad2 },
    { name: 'Utilities', icon: Wrench },
    { name: 'Shopping', icon: ShoppingBag },
    { name: 'Social', icon: Users },
    { name: 'Finance', icon: CircleDollarSign },
    { name: 'Health', icon: ShieldPlus },
  ];

  return (
    <div className="max-w-[1280px] mx-auto w-full relative bg-[var(--background)] min-h-screen">
      {/* App Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-between sticky top-0 bg-[var(--background)]/80 backdrop-blur-md z-40 border-b border-[var(--border-light)]">
        <h1 className="text-playfair text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
          Mini Programs
        </h1>
        <button className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[var(--text-primary)] hover:bg-gray-50 transition-default">
          <Search className="w-5 h-5" />
        </button>
      </div>

      <div className="py-6">
        {/* Filters */}
        <FilterChips 
          filters={['All', 'Favorites', 'Recently Used', 'New']}
          selectedFilter={selectedFilter}
          onSelect={setSelectedFilter}
        />

        {/* Featured Programs */}
        <div className="mt-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-6">
            Featured Programs
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          <TrendingProductCard
            title="Weather Pro"
            subtitle="Utilities • Live Forecast"
            imageUrl="https://picsum.photos/seed/mini_weather/400/300"
            tag="Featured"
            href="/mini-programs"
            priority={true}
          />
          <TrendingProductCard
            title="QR Scanner Plus"
            subtitle="Tools • Fast & Secure"
            imageUrl="https://picsum.photos/seed/mini_qr/400/300"
            tag="Hot"
            href="/mini-programs"
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
              href="/mini-programs"
            />
          ))}
        </div>

        {/* Popular Programs */}
        <div className="mt-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-6">
            Popular Programs
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            <ProductListCard
              title="Expense Tracker"
              subtitle="Finance • 4.8 ★"
              imageUrl="https://picsum.photos/seed/mini_expense/400/300"
              badgeText="Finance"
              actionText="Open"
              href="/mini-programs/expense"
            />
            <ProductListCard
              title="Quick Notes"
              subtitle="Productivity • 4.9 ★"
              imageUrl="https://picsum.photos/seed/mini_notes/400/300"
              badgeText="Tools"
              actionText="Open"
              href="/mini-programs/notes"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
