"use client";

import { useState } from "react";
import { Search, MapPin, Pizza, Coffee, Soup, Salad, Fish, IceCream, Utensils, Navigation } from "lucide-react";
import FilterChips from "@/components/ui/FilterChips";
import TrendingProductCard from "@/components/ui/TrendingProductCard";
import CategoryIconCard from "@/components/ui/CategoryIconCard";
import ProductListCard from "@/components/ui/ProductListCard";

const nearbyRestaurants = Array.from({ length: 10 }).map((_, index) => {
  const names = ['Local Bites', 'The Green Olive', 'Spice Route', 'Urban Cafe', 'Ocean Grill', 'Pasta Pronto', 'Burger Joint', 'Sushi Zen', 'Taco Fiesta', 'Morning Brew'];
  const cuisines = ['Cafe', 'Italian', 'Indian', 'Cafe', 'Seafood', 'Italian', 'American', 'Japanese', 'Mexican', 'Cafe'];
  return {
    id: `rest_nearby_${index}`,
    name: names[index],
    cuisine: cuisines[index],
    distance: `${(0.2 + index * 0.1).toFixed(1)} miles`,
    image: `https://picsum.photos/seed/nearby_rest_${index}/400/300`,
  };
});

const topRatedRestaurants = Array.from({ length: 10 }).map((_, index) => {
  const names = ['The Royal Dining', 'La Piazza', 'Golden Dragon', 'Steakhouse 99', 'Vegan Delights', 'Sushi Master', 'Mamma Mia', 'The French Bistro', 'Spice Kitchen', 'Burger King'];
  const cuisines = ['Fine Dining', 'Italian', 'Chinese', 'Steakhouse', 'Vegan', 'Japanese', 'Italian', 'French', 'Indian', 'Fast Food'];
  return {
    id: `rest_top_${index}`,
    name: names[index],
    cuisine: cuisines[index],
    budget: index % 3 === 0 ? '£££' : '££',
    rating: (4.8 + (index % 2) / 10).toFixed(1),
    reviews: 450 + (index * 50),
    image: `https://picsum.photos/seed/top_rest_${index}/400/300`,
  };
});

const cuisines = [
  { name: 'Italian', icon: Pizza },
  { name: 'Asian', icon: Soup },
  { name: 'Burgers', icon: Utensils },
  { name: 'Cafes', icon: Coffee },
  { name: 'Healthy', icon: Salad },
  { name: 'Seafood', icon: Fish },
  { name: 'Desserts', icon: IceCream },
  { name: 'Indian', icon: Utensils },
];

export default function RestaurantsPage() {
  const [selectedFilter, setSelectedFilter] = useState("Trending");

  return (
    <div className="max-w-[1280px] mx-auto w-full pb-20 md:pb-10">
      {/* App Bar replacement */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-playfair text-2xl font-bold text-[var(--text-primary)]">
          Restaurants
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
          filters={['Trending', 'Distance', 'Rating', 'Price', 'Open Now']}
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
          {nearbyRestaurants.map((rest) => (
            <TrendingProductCard
              key={rest.id}
              title={rest.name}
              subtitle={`${rest.distance} • ${rest.cuisine}`}
              imageUrl={rest.image}
              href={`/restaurants/${rest.id}`}
            />
          ))}
        </div>
      </div>

      {/* Popular Cuisines */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Popular Cuisines
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {cuisines.map((cat) => (
            <CategoryIconCard
              key={cat.name}
              title={cat.name}
              icon={cat.icon}
              href="/restaurants"
            />
          ))}
        </div>
      </div>

      {/* Top Restaurants */}
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
          Top Restaurants
        </h2>
        <div>
          {topRatedRestaurants.map((rest) => (
            <ProductListCard
              key={rest.id}
              title={rest.name}
              subtitle={`${rest.cuisine} • ${rest.rating} ★ (${rest.reviews} reviews)`}
              imageUrl={rest.image}
              badgeText={rest.budget}
              actionText="Book Now"
              href={`/restaurants/${rest.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
