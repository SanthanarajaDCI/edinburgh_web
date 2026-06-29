"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, Lock, ChevronLeft, ChevronRight, ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Scarves", count: 420 },
  { name: "Blankets", count: 180 },
  { name: "Sweaters", count: 310 },
  { name: "Accessories", count: 215 },
  { name: "Home", count: 115 },
];

const materials = [
  { name: "100% Cashmere", checked: true },
  { name: "Cashmere Blend", checked: false },
  { name: "Merino Wool", checked: false },
];

const colorSwatches = [
  { name: "Black", hex: "#1a1a1a" },
  { name: "Cream", hex: "#F5F0E8" },
  { name: "Camel", hex: "#C19A5B" },
  { name: "Forest", hex: "#2D5A3D" },
  { name: "Slate", hex: "#708090" },
  { name: "Navy", hex: "#1B263B" },
  { name: "Blush", hex: "#F0D5C9" },
];

const collections = ["Heritage", "Modern", "Limited Edition"];

const products = [
  { id: "prod_1", title: "Heritage Cashmere Scarf", price: "£245.00", image: "https://picsum.photos/seed/cscarf1/500/600", badge: null },
  { id: "prod_2", title: "Artisan Throw Blanket", price: "£895.00", image: "https://picsum.photos/seed/cblanket/500/600", badge: null },
  { id: "prod_3", title: "Signature V-Neck", price: "£550.00", image: "https://picsum.photos/seed/cvneck/500/600", badge: "LIMITED EDITION" },
  { id: "prod_4", title: "Winter Accessory Set", price: "£185.00", image: "https://picsum.photos/seed/cwinter/500/600", badge: null },
  { id: "prod_5", title: "Heritage Tartan Shawl", price: "£320.00", image: "https://picsum.photos/seed/ctartan/500/600", badge: null },
  { id: "prod_6", title: "First-Class Travel Kit", price: "£450.00", image: "https://picsum.photos/seed/ctravel/500/600", badge: null },
  { id: "prod_7", title: "Cashmere Accent Rug", price: "£1,450.00", image: "https://picsum.photos/seed/crug/500/600", badge: null },
  { id: "prod_8", title: "Royal Lounge Robe", price: "£780.00", image: "https://picsum.photos/seed/crobe/500/600", badge: null },
];

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState("Scarves");
  const [selectedCollection, setSelectedCollection] = useState("Heritage");
  const [selectedColor, setSelectedColor] = useState(0);
  const [priceRange, setPriceRange] = useState(50);
  const [materialChecks, setMaterialChecks] = useState([true, false, false]);
  const [sortBy, setSortBy] = useState("Featured");
  const [currentPage, setCurrentPage] = useState(1);

  const toggleMaterial = (index: number) => {
    const newChecks = [...materialChecks];
    newChecks[index] = !newChecks[index];
    setMaterialChecks(newChecks);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-[var(--background)] border-b border-[var(--border-light)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight leading-tight">
                Marketplace
              </h1>
              <p className="text-[var(--text-secondary)] mt-2">
                1,240 items curated for heritage and quality.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-[var(--text-secondary)] hidden md:block">Sort by:</span>
              <button className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] bg-white border border-[var(--border-medium)] rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors">
                {sortBy}
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8 lg:gap-12">
          
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-[200px] shrink-0">
            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-4">Categories</h3>
              <ul className="space-y-1.5">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <button
                      onClick={() => setSelectedCategory(cat.name)}
                      className={cn(
                        "flex items-center justify-between w-full text-left py-1.5 text-sm transition-colors",
                        selectedCategory === cat.name
                          ? "font-bold text-[var(--text-primary)]"
                          : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                      )}
                    >
                      <span>{cat.name}</span>
                      <span className={cn(
                        "text-xs px-2 py-0.5 rounded-full",
                        selectedCategory === cat.name
                          ? "bg-[var(--primary)] text-white"
                          : "text-[var(--text-secondary)]"
                      )}>
                        {cat.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Material */}
            <div className="mb-8">
              <h3 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-4">Material</h3>
              <ul className="space-y-3">
                {materials.map((mat, index) => (
                  <li key={mat.name}>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div
                        onClick={() => toggleMaterial(index)}
                        className={cn(
                          "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors shrink-0",
                          materialChecks[index]
                            ? "bg-[var(--primary)] border-[var(--primary)]"
                            : "border-gray-300 group-hover:border-gray-400"
                        )}
                      >
                        {materialChecks[index] && (
                          <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm text-[var(--text-primary)]">{mat.name}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h3 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-4">Price Range</h3>
              <input
                type="range"
                min={0}
                max={100}
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-[var(--primary)] h-1.5 rounded-full appearance-none bg-gray-200 cursor-pointer"
              />
              <div className="flex justify-between mt-2 text-xs text-[var(--text-secondary)]">
                <span>£100</span>
                <span>£2,500+</span>
              </div>
            </div>

            {/* Colors */}
            <div className="mb-8">
              <h3 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-4">Colors</h3>
              <div className="flex flex-wrap gap-2.5">
                {colorSwatches.map((color, idx) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(idx)}
                    className={cn(
                      "w-8 h-8 rounded-full border-2 transition-all",
                      selectedColor === idx
                        ? "ring-2 ring-offset-2 ring-[var(--primary)] border-transparent"
                        : "border-gray-200 hover:border-gray-400"
                    )}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Collection */}
            <div className="mb-8">
              <h3 className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-4">Collection</h3>
              <ul className="space-y-1">
                {collections.map((col) => (
                  <li key={col}>
                    <button
                      onClick={() => setSelectedCollection(col)}
                      className={cn(
                        "w-full text-left text-sm py-2 px-3 rounded-lg transition-colors",
                        selectedCollection === col
                          ? "bg-[var(--background)] font-bold text-[var(--text-primary)] border border-[var(--border-medium)]"
                          : "text-[var(--text-secondary)] hover:bg-gray-50"
                      )}
                    >
                      {col}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/marketplace/product/${product.id}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-gray-100 mb-3">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-[var(--primary)] px-3 py-1 rounded">
                        <span className="text-[9px] font-bold text-white uppercase tracking-widest">{product.badge}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-1">
                      Edinburgh Cashmere
                    </p>
                    <h3 className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors leading-snug line-clamp-1">
                      {product.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm font-bold text-[var(--text-primary)]">{product.price}</span>
                      <button className="flex items-center gap-1 text-[10px] font-medium text-[var(--text-secondary)] bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 transition-colors">
                        <Lock className="w-3 h-3" />
                        Sign in to Buy
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-[var(--border-light)]">
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:bg-gray-100 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                    currentPage === page
                      ? "bg-[var(--primary)] text-white"
                      : "text-[var(--text-secondary)] hover:bg-gray-100"
                  )}
                >
                  {page}
                </button>
              ))}
              <span className="text-[var(--text-secondary)] text-sm">...</span>
              <button
                onClick={() => setCurrentPage(12)}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                  currentPage === 12
                    ? "bg-[var(--primary)] text-white"
                    : "text-[var(--text-secondary)] hover:bg-gray-100"
                )}
              >
                12
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:bg-gray-100 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[var(--border-light)] bg-white mt-12">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-[var(--text-primary)]">Edinburgh Cashmere</h3>
            <div className="flex flex-wrap gap-6">
              <Link href="/marketplace" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Terms of Service</Link>
              <Link href="/marketplace" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Privacy Policy</Link>
              <Link href="/marketplace" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Marketplace Support</Link>
              <Link href="/jobs" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Job Board</Link>
              <Link href="/business" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Corporate Solutions</Link>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6 pt-6 border-t border-[var(--border-light)]">
            <p className="text-xs text-[var(--text-secondary)]">© 2024 Edinburgh Cashmere. Heritage meets Intelligence.</p>
            <button className="w-12 h-12 bg-[var(--primary)] text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-lg">
              <Sparkles className="w-5 h-5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
