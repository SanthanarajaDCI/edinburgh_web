"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import { useUIStore } from "@/store/useUIStore";
import {
  ChevronLeft,
  Share2,
  Heart,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mock Product Data
const product = {
  id: "prod_0",
  title: "Classic Edinburgh Cashmere Scarf",
  price: 145,
  rating: 4.8,
  reviews: 124,
  description:
    "Wrap yourself in luxury with our signature 100% pure Scottish cashmere scarf. Hand-woven in the heart of Edinburgh using traditional techniques passed down through generations. Unbelievably soft and incredibly warm.",
  images: [
    "https://picsum.photos/seed/scarf1/800/1000",
    "https://picsum.photos/seed/scarf2/800/1000",
    "https://picsum.photos/seed/scarf3/800/1000",
  ],
  colors: [
    { name: "Navy Blue", hex: "#1B263B" },
    { name: "Soft Gold", hex: "#D4AF37" },
    { name: "Classic Gray", hex: "#778DA9" },
    { name: "Burgundy", hex: "#800020" },
  ],
  details: [
    "100% Pure Cashmere",
    "Dimensions: 180cm x 25cm",
    "Dry clean only",
    "Made in Scotland",
  ],
};

export default function ProductDetailPage() {
  const router = useRouter();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const { addItem } = useCartStore();
  const { showToast } = useUIStore();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity,
      imageUrl: product.images[0]
    });
    showToast("Added to Cart successfully!", "success");
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    showToast(isFavorite ? "Removed from favorites" : "Added to favorites", "info");
  };

  return (
    <div className="max-w-[1280px] mx-auto w-full bg-[var(--background)] min-h-screen pb-safe-bottom">
      {/* App Bar (Fixed on Mobile, Inline on Desktop) */}
      <div className="sticky top-[64px] z-40 bg-white/80 backdrop-blur-md border-b border-[var(--border-light)] px-4 h-14 flex items-center justify-between md:hidden">
        <button
          onClick={() => router.back()}
          className="w-10 h-10 flex items-center justify-center text-[var(--text-primary)]"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex items-center gap-2">
          <button 
            className="w-10 h-10 flex items-center justify-center text-[var(--text-primary)]"
            onClick={toggleFavorite}
          >
            <Heart className={cn("w-5 h-5", isFavorite && "fill-red-500 text-red-500")} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-[var(--text-primary)]">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:gap-8 lg:gap-12 md:p-8 mt-4 md:mt-0">
        {/* Left: Image Gallery */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="relative w-full aspect-[4/5] md:rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src={product.images[activeImage]}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          {/* Thumbnails */}
          <div className="flex items-center gap-3 px-4 md:px-0 overflow-x-auto hide-scrollbar">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={cn(
                  "relative w-20 h-24 shrink-0 rounded-xl overflow-hidden border-2 transition-all",
                  activeImage === idx
                    ? "border-[var(--primary)] opacity-100"
                    : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                <Image src={img} alt="" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-1/2 px-4 py-6 md:p-0 flex flex-col">
          {/* Title & Price */}
          <div className="mb-6">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h1 className="text-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] leading-tight">
                {product.title}
              </h1>
              <div className="hidden md:flex gap-2 shrink-0">
                <button 
                  className="w-10 h-10 rounded-full bg-white border border-[var(--border-light)] flex items-center justify-center hover:bg-gray-50 transition-colors"
                  onClick={toggleFavorite}
                >
                  <Heart className={cn("w-5 h-5 text-[var(--text-primary)]", isFavorite && "fill-red-500 text-red-500")} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white border border-[var(--border-light)] flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <Share2 className="w-5 h-5 text-[var(--text-primary)]" />
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl font-bold text-[var(--primary)]">
                £{product.price}
              </span>
              <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-lg">
                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                <span className="text-sm font-bold text-yellow-700">
                  {product.rating}
                </span>
                <span className="text-sm text-yellow-600">
                  ({product.reviews})
                </span>
              </div>
            </div>
          </div>

          {/* Color Selection */}
          <div className="mb-6 border-t border-[var(--border-light)] pt-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-[var(--text-primary)]">Color</h3>
              <span className="text-sm text-[var(--text-secondary)]">
                {product.colors[selectedColor].name}
              </span>
            </div>
            <div className="flex items-center gap-3">
              {product.colors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColor(idx)}
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                    selectedColor === idx
                      ? "ring-2 ring-offset-2 ring-[var(--primary)]"
                      : "ring-1 ring-gray-200 hover:ring-gray-300"
                  )}
                >
                  <div
                    className="w-8 h-8 rounded-full border border-black/10"
                    style={{ backgroundColor: color.hex }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6 border-t border-[var(--border-light)] pt-6">
            <h3 className="font-bold text-[var(--text-primary)] mb-2">
              Description
            </h3>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Details List */}
          <div className="mb-8">
            <ul className="space-y-2">
              {product.details.map((detail, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-2 mb-8 bg-white p-4 rounded-2xl border border-[var(--border-light)]">
            <div className="flex flex-col items-center gap-2 text-center">
              <ShieldCheck className="w-6 h-6 text-[var(--accent)]" />
              <span className="text-[10px] sm:text-xs font-medium">Authentic</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center border-x border-[var(--border-light)]">
              <Truck className="w-6 h-6 text-[var(--accent)]" />
              <span className="text-[10px] sm:text-xs font-medium">Free Shipping</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <RotateCcw className="w-6 h-6 text-[var(--accent)]" />
              <span className="text-[10px] sm:text-xs font-medium">30-Day Return</span>
            </div>
          </div>

          <div className="flex-1" />

          {/* Fixed Bottom Action Bar */}
          <div className="fixed bottom-16 left-0 right-0 md:relative md:bottom-0 bg-white md:bg-transparent border-t border-[var(--border-light)] md:border-none p-4 md:p-0 z-40 flex items-center gap-4 pb-safe-bottom md:pb-0 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] md:shadow-none">
            {/* Quantity Selector */}
            <div className="flex items-center justify-between bg-gray-100 rounded-2xl h-14 px-2 w-[120px] shrink-0">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center text-[var(--text-primary)] hover:bg-gray-200 rounded-xl transition-colors"
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="font-bold text-[var(--text-primary)] w-8 text-center">
                {quantity}
              </span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center text-[var(--text-primary)] hover:bg-gray-200 rounded-xl transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button 
              onClick={handleAddToCart}
              className="flex-1 h-14 bg-[var(--primary)] text-[var(--accent)] rounded-2xl flex items-center justify-center gap-2 hover:bg-[var(--primary)]/90 transition-default shadow-lg active:scale-[0.98]"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="font-bold">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
