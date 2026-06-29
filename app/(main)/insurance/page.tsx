"use client";

import { useState } from "react";
import { Search, Headset, Car, Plane, HeartPulse, Home, Heart, Dog, Smartphone, Briefcase } from "lucide-react";
import FilterChips from "@/components/ui/FilterChips";
import TrendingProductCard from "@/components/ui/TrendingProductCard";
import CategoryIconCard from "@/components/ui/CategoryIconCard";
import ProductListCard from "@/components/ui/ProductListCard";

const plans = Array.from({ length: 20 }).map((_, index) => {
  const titles = ['Comprehensive Car Insurance', 'Global Flight Protection', 'Family Health Cover', 'Premium Home Protection', 'Term Life Policy', 'Pet Health Plan', 'Gadget Screen Cover', 'Annual Travel Insurance', 'Third Party Auto', 'Dental Plus'];
  const providers = ['AutoSafe UK', 'AeroGuard', 'CarePlus', 'HomeShield', 'LifeTrust', 'PetCare', 'TechProtect', 'TravelSafe', 'AutoSafe UK', 'CarePlus'];
  const types = ['Car', 'Flight', 'Health', 'Home', 'Life', 'Pet', 'Gadget', 'Travel', 'Car', 'Health'];
  return {
    id: `ins_${index}`,
    title: titles[index % 10],
    provider: providers[index % 10],
    type: types[index % 10],
    price: `£${15 + index * 10}/${index % 2 === 0 ? 'mo' : 'trip'}`,
    rating: (4.5 + (index % 5) / 10).toFixed(1),
    image: `https://picsum.photos/seed/ins_${index}/400/200`,
  };
});

const trendingPlans = plans.slice(0, 10);
const topPlans = plans.slice(10, 20);

const categories = [
  { name: 'Car', icon: Car },
  { name: 'Flight', icon: Plane },
  { name: 'Health', icon: HeartPulse },
  { name: 'Home', icon: Home },
  { name: 'Life', icon: Heart },
  { name: 'Pet', icon: Dog },
  { name: 'Gadget', icon: Smartphone },
  { name: 'Travel', icon: Briefcase },
];

export default function InsuranceListingPage() {
  const [selectedFilter, setSelectedFilter] = useState("Trending");

  return (
    <div className="max-w-[1280px] mx-auto w-full pb-20 md:pb-10 min-h-screen bg-[var(--background)]">
      {/* App Bar replacement */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-playfair text-2xl font-bold text-[var(--text-primary)]">
          Insurance
        </h1>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default">
            <Search className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
          <button className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default">
            <Headset className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="mt-2 mb-8">
        <FilterChips
          filters={['Trending', 'Auto', 'Health', 'Travel', 'Home']}
          selectedFilter={selectedFilter}
          onSelect={setSelectedFilter}
        />
      </div>

      {/* Trending Policies */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Trending Policies
          </h2>
          <button className="text-sm font-bold text-[var(--primary)] hover:text-[var(--accent)] transition-default">
            See all
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {trendingPlans.map((plan) => (
            <TrendingProductCard
              key={plan.id}
              title={plan.title}
              subtitle={`${plan.provider} • ${plan.price}`}
              imageUrl={plan.image}
              href={`/insurance/detail/${plan.id}`}
            />
          ))}
        </div>
      </div>

      {/* Browse by Category */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Browse by Category
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {categories.map((cat) => (
            <CategoryIconCard
              key={cat.name}
              title={cat.name}
              icon={cat.icon}
              href="/insurance"
            />
          ))}
        </div>
      </div>

      {/* Recommended For You */}
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
          Recommended For You
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {topPlans.map((plan) => (
            <ProductListCard
              key={plan.id}
              title={plan.title}
              subtitle={`${plan.provider} • ${plan.rating} ★`}
              imageUrl={plan.image}
              badgeText={plan.price}
              actionText="Get Quote"
              href={`/insurance/detail/${plan.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
