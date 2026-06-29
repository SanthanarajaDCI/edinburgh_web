"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Shirt, Snowflake, Target, Watch, Gift, BaggageClaim, Footprints } from "lucide-react";
import FilterChips from "@/components/ui/FilterChips";
import TrendingProductCard from "@/components/ui/TrendingProductCard";
import CategoryIconCard from "@/components/ui/CategoryIconCard";
import ProductListCard from "@/components/ui/ProductListCard";

const products = Array.from({ length: 20 }).map((_, index) => {
  const titles = [
    'Cashmere Scarf Classic', 'Tweed Blazer Slim', 'Highland Tartan Kilt', 
    'Merino Wool Sweater', 'Leather Crossbody Bag', 'Cashmere Gloves',
    'Classic Peacoat', 'Cashmere Beanie', 'Silk Tie Set', 'Tartan Scarf'
  ];
  const sellers = ['Official Store', 'Boutique UK', 'Heritage Goods'];
  return {
    id: `prod_${index}`,
    title: `${titles[index % 10]} ${index + 1}`,
    price: `£${(89.99 + (index * 10)).toFixed(2)}`,
    seller: sellers[index % 3],
    rating: (4.0 + (index % 10) / 10).toFixed(1),
    reviews: 120 + (index * 15),
    image: `https://picsum.photos/seed/product_${index}/400/300`,
  };
});

const categories = [
  { name: 'Cashmere', icon: Snowflake },
  { name: 'Tweed', icon: Shirt },
  { name: 'Knitwear', icon: Target },
  { name: 'Accessories', icon: Watch },
  { name: 'Gifts', icon: Gift },
  { name: 'Shoes', icon: Footprints },
  { name: 'Bags', icon: BaggageClaim },
];

export default function MarketplacePage() {
  const [selectedFilter, setSelectedFilter] = useState("Trending");

  const trendingProducts = products.slice(0, 10);
  const topProducts = products.slice(10, 20);

  return (
    <div className="max-w-[1280px] mx-auto w-full pb-10">
      {/* App Bar replacement */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-playfair text-2xl font-bold text-[var(--text-primary)]">
          Marketplace
        </h1>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default">
            <Search className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
          <Link
            href="/marketplace/cart"
            className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default"
          >
            <ShoppingCart className="w-5 h-5 text-[var(--text-primary)]" />
          </Link>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="mt-2 mb-8">
        <FilterChips
          filters={['Trending', 'Men', 'Women', 'Gifts', 'Sale']}
          selectedFilter={selectedFilter}
          onSelect={setSelectedFilter}
        />
      </div>

      {/* Trending Products */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Trending Products
          </h2>
          <button className="text-sm font-bold text-[var(--primary)] hover:text-[var(--accent)] transition-default">
            See all
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {trendingProducts.map((prod) => (
            <TrendingProductCard
              key={prod.id}
              title={prod.title}
              subtitle={`${prod.price} • ${prod.seller}`}
              imageUrl={prod.image}
              href={`/marketplace/product/${prod.id}`}
            />
          ))}
        </div>
      </div>

      {/* Popular Categories */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Shop by Category
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {categories.map((cat) => (
            <CategoryIconCard
              key={cat.name}
              title={cat.name}
              icon={cat.icon}
              href="/marketplace"
            />
          ))}
        </div>
      </div>

      {/* Top Sellers */}
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
          Top Sellers
        </h2>
        <div>
          {topProducts.map((prod) => (
            <ProductListCard
              key={prod.id}
              title={prod.title}
              subtitle={`${prod.seller} • ${prod.rating} ★ (${prod.reviews} reviews)`}
              imageUrl={prod.image}
              badgeText={prod.price}
              actionText="Buy Now"
              href={`/marketplace/product/${prod.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
