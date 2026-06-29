"use client";

import { useState } from "react";
import { Search, MapPin, ShoppingBag, Laptop, Wrench, ShieldPlus, Landmark, Handshake, Building2, Paintbrush } from "lucide-react";
import FilterChips from "@/components/ui/FilterChips";
import TrendingProductCard from "@/components/ui/TrendingProductCard";
import CategoryIconCard from "@/components/ui/CategoryIconCard";
import ProductListCard from "@/components/ui/ProductListCard";

const nearbyBusinesses = Array.from({ length: 10 }).map((_, index) => {
  const names = ['Local Shop', 'Tech Fix', 'Law Firm', 'Dental Care', 'Accounting Pro', 'Marketing Agency', 'IT Solutions', 'Plumbing Co', 'Fitness Center', 'Auto Repair'];
  const categories = ['Retail', 'Tech', 'Services', 'Health', 'Finance', 'Consulting', 'Tech', 'Services', 'Health', 'Services'];
  return {
    id: `biz_nearby_${index}`,
    name: names[index],
    category: categories[index],
    distance: `${(0.3 + index * 0.2).toFixed(1)} miles`,
    image: `https://picsum.photos/seed/nearby_biz_${index}/400/300`,
  };
});

const topRatedBusinesses = Array.from({ length: 10 }).map((_, index) => {
  const names = ['Premium Services', 'Wellness Spa', 'Global Consultants', 'Elite Banking', 'Secure Tech', 'Modern Real Estate', 'Luxury Autos', 'Creative Studio', 'Legal Eagles', 'Top Architects'];
  const categories = ['Services', 'Health', 'Consulting', 'Finance', 'Tech', 'Real Estate', 'Retail', 'Design', 'Services', 'Design'];
  return {
    id: `biz_top_${index}`,
    name: names[index],
    category: categories[index],
    rating: (4.8 + (index % 2) / 10).toFixed(1),
    reviews: 350 + (index * 40),
    image: `https://picsum.photos/seed/top_biz_${index}/400/300`,
  };
});

const categories = [
  { name: 'Retail', icon: ShoppingBag },
  { name: 'Tech', icon: Laptop },
  { name: 'Services', icon: Wrench },
  { name: 'Health', icon: ShieldPlus },
  { name: 'Finance', icon: Landmark },
  { name: 'Consulting', icon: Handshake },
  { name: 'Real Estate', icon: Building2 },
  { name: 'Design', icon: Paintbrush },
];

export default function BusinessDirectoryPage() {
  const [selectedFilter, setSelectedFilter] = useState("Trending");

  return (
    <div className="max-w-[1280px] mx-auto w-full pb-20 md:pb-10">
      {/* App Bar replacement */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-playfair text-2xl font-bold text-[var(--text-primary)]">
          Business Directory
        </h1>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default">
            <Search className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
          <button className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default">
            <MapPin className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="mt-2 mb-8">
        <FilterChips
          filters={['Trending', 'Distance', 'Rating', 'Open Now']}
          selectedFilter={selectedFilter}
          onSelect={setSelectedFilter}
        />
      </div>

      {/* Trending Near Me */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Trending Near Me
          </h2>
          <button className="text-sm font-bold text-[var(--primary)] hover:text-[var(--accent)] transition-default">
            See all
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {nearbyBusinesses.map((biz) => (
            <TrendingProductCard
              key={biz.id}
              title={biz.name}
              subtitle={`${biz.distance} • ${biz.category}`}
              imageUrl={biz.image}
              href={`/business/detail/${biz.id}`}
            />
          ))}
        </div>
      </div>

      {/* Popular Categories */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Popular Categories
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {categories.map((cat) => (
            <CategoryIconCard
              key={cat.name}
              title={cat.name}
              icon={cat.icon}
              href="/business"
            />
          ))}
        </div>
      </div>

      {/* Top Rated Businesses */}
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
          Top Rated
        </h2>
        <div>
          {topRatedBusinesses.map((biz) => (
            <ProductListCard
              key={biz.id}
              title={biz.name}
              subtitle={`${biz.category} • ${biz.rating} ★ (${biz.reviews} reviews)`}
              imageUrl={biz.image}
              actionText="Contact"
              href={`/business/detail/${biz.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
