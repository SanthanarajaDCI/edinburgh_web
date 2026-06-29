"use client";

import { useState } from "react";
import { Eye, Store, FileText, ImageIcon, UtensilsCrossed, Building2, CalendarDays } from "lucide-react";
import FilterChips from "@/components/ui/FilterChips";
import TrendingProductCard from "@/components/ui/TrendingProductCard";
import CategoryIconCard from "@/components/ui/CategoryIconCard";
import ProductListCard from "@/components/ui/ProductListCard";

const featuredTemplates = [
  {
    id: "temp_1",
    title: 'E-commerce Pro',
    subtitle: 'Best for online stores',
    image: 'https://picsum.photos/seed/template_e/400/300',
    tag: 'Free',
  },
  {
    id: "temp_2",
    title: 'Modern Portfolio',
    subtitle: 'Showcase your work',
    image: 'https://picsum.photos/seed/template_p/400/300',
    tag: 'Free',
  },
];

const categories = [
  { name: 'Store', icon: Store },
  { name: 'Blog', icon: FileText },
  { name: 'Portfolio', icon: ImageIcon },
  { name: 'Restaurant', icon: UtensilsCrossed },
  { name: 'Corporate', icon: Building2 },
  { name: 'Event', icon: CalendarDays },
];

const moreTemplates = [
  {
    id: "temp_3",
    title: 'Local Restaurant',
    subtitle: 'Menu and reservations included',
    image: 'https://picsum.photos/seed/template_r/400/300',
    badge: 'Popular',
  },
  {
    id: "temp_4",
    title: 'Corporate Business',
    subtitle: 'Professional and clean design',
    image: 'https://picsum.photos/seed/template_c/400/300',
    badge: 'Business',
  },
];

export default function WebsiteBuilderPage() {
  const [selectedFilter, setSelectedFilter] = useState("Templates");

  return (
    <div className="max-w-[1280px] mx-auto w-full pb-20 md:pb-10">
      {/* App Bar replacement */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-playfair text-2xl font-bold text-[var(--text-primary)]">
          Website Builder
        </h1>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default">
            <Eye className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="mt-2 mb-8">
        <FilterChips
          filters={['Templates', 'My Sites', 'Domains', 'Settings']}
          selectedFilter={selectedFilter}
          onSelect={setSelectedFilter}
        />
      </div>

      {/* Featured Templates */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Featured Templates
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {featuredTemplates.map((template) => (
            <TrendingProductCard
              key={template.id}
              title={template.title}
              subtitle={template.subtitle}
              imageUrl={template.image}
              href="/business"
            />
          ))}
        </div>
      </div>

      {/* Browse by Type */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Browse by Type
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

      {/* More Templates */}
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
          More Templates
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {moreTemplates.map((template) => (
            <ProductListCard
              key={template.id}
              title={template.title}
              subtitle={template.subtitle}
              imageUrl={template.image}
              badgeText={template.badge}
              actionText="Use Template"
              href="/business"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
