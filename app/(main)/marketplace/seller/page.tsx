"use client";

import { useState } from "react";
import { Bell, Settings, Plus, LayoutDashboard, ShoppingBag, BarChart3, Wallet, Megaphone, HelpCircle } from "lucide-react";
import FilterChips from "@/components/ui/FilterChips";
import TrendingProductCard from "@/components/ui/TrendingProductCard";
import CategoryIconCard from "@/components/ui/CategoryIconCard";
import ProductListCard from "@/components/ui/ProductListCard";

const dashboardCards = [
  {
    id: "highlight_1",
    title: 'Zero Listing Fees',
    subtitle: 'Keep 100% of your profits',
    image: 'https://picsum.photos/seed/zero_fee/400/300',
    tag: 'Forever',
  },
  {
    id: "highlight_2",
    title: '1-Click Import',
    subtitle: 'Import from Amazon, eBay',
    image: 'https://picsum.photos/seed/import/400/300',
    tag: 'Tool',
  },
];

const quickActions = [
  { name: 'Add Product', icon: Plus },
  { name: 'Orders', icon: ShoppingBag },
  { name: 'Analytics', icon: BarChart3 },
  { name: 'Payments', icon: Wallet },
  { name: 'Marketing', icon: Megaphone },
  { name: 'Support', icon: HelpCircle },
];

const activeListings = [
  {
    id: "prod_1",
    title: 'Cashmere Scarf Classic',
    subtitle: '120 Views • 5 Sales',
    image: 'https://picsum.photos/seed/product_1/400/300',
    badge: '£120.00',
    tag: 'Active',
  },
  {
    id: "prod_2",
    title: 'Winter Jacket Slim',
    subtitle: '85 Views • 2 Sales',
    image: 'https://picsum.photos/seed/product_2/400/300',
    badge: '£250.00',
    tag: 'Active',
  },
];

export default function SellerDashboardPage() {
  const [selectedFilter, setSelectedFilter] = useState("Overview");

  return (
    <div className="max-w-[1280px] mx-auto w-full pb-24 md:pb-10 relative">
      {/* App Bar replacement */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-playfair text-2xl font-bold text-[var(--text-primary)]">
          Seller Dashboard
        </h1>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default">
            <Bell className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
          <button className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default">
            <Settings className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="mt-2 mb-8">
        <FilterChips
          filters={['Overview', 'Listings', 'Orders', 'Reports']}
          selectedFilter={selectedFilter}
          onSelect={setSelectedFilter}
        />
      </div>

      {/* Highlights */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Seller Highlights
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {dashboardCards.map((card) => (
            <TrendingProductCard
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              imageUrl={card.image}
              href="/marketplace"
            />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Quick Actions
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {quickActions.map((action) => (
            <CategoryIconCard
              key={action.name}
              title={action.name}
              icon={action.icon}
              href="/marketplace"
            />
          ))}
        </div>
      </div>

      {/* Active Listings */}
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
          Your Active Listings
        </h2>
        <div>
          {activeListings.map((listing) => (
            <ProductListCard
              key={listing.id}
              title={listing.title}
              subtitle={listing.subtitle}
              imageUrl={listing.image}
              badgeText={listing.badge}
              actionText="Edit Listing"
              href="/marketplace"
            />
          ))}
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-[80px] md:bottom-8 right-4 md:right-8 bg-[var(--primary)] text-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 z-50">
        <Plus className="w-5 h-5" />
        <span className="font-bold">Add Product</span>
      </button>
    </div>
  );
}
