"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  Lock,
  ChevronDown,
  Scissors,
} from "lucide-react";
import { cn } from "@/lib/utils";

const product = {
  id: "prod_1",
  collection: "HERITAGE COLLECTION",
  title: "Heritage Cashmere Scarf",
  price: 249,
  rating: 5.0,
  reviews: 124,
  description:
    "Hand-woven from the finest Inner Mongolian cashmere. A timeless piece of Scottish heritage that balances warmth with effortless elegance.",
  images: [
    "https://picsum.photos/seed/cscarf1/800/1000",
    "https://picsum.photos/seed/cscarf2/800/1000",
    "https://picsum.photos/seed/cscarf3/800/1000",
    "https://picsum.photos/seed/cscarf4/800/1000",
  ],
  colors: [
    { name: "Camel", hex: "#C19A5B" },
    { name: "Forest", hex: "#2D5A3D" },
    { name: "Navy", hex: "#1B263B" },
    { name: "Slate", hex: "#708090" },
  ],
  sizes: [
    { label: "Classic (180x30cm)" },
    { label: "Grand (200x50cm)" },
  ],
  details: [
    "100% Pure Cashmere",
    "Dimensions: 180cm x 30cm",
    "Weight: 180g",
    "Made in Scotland",
  ],
  careInstructions: [
    "Dry clean recommended",
    "Store folded, away from direct sunlight",
    "Remove pills gently with a cashmere comb",
  ],
};

const reviews = [
  { rating: 5, text: "Absolutely stunning quality. The softness is unreal and it arrived beautifully packaged.", author: "Sarah M.", date: "2 weeks ago" },
  { rating: 5, text: "Bought this as a gift and it exceeded every expectation. The craftsmanship is impeccable.", author: "James T.", date: "1 month ago" },
];

export default function ProductDetailPage() {
  const router = useRouter();
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(3);
  const [selectedSize, setSelectedSize] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showSpecs, setShowSpecs] = useState(false);
  const [showCare, setShowCare] = useState(false);
  const quantity = 1;

  const { addItem } = useCartStore();
  const { showToast } = useUIStore();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity,
      imageUrl: product.images[0],
    });
    showToast("Added to Cart successfully!", "success");
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    showToast(isFavorite ? "Removed from favorites" : "Added to favorites", "info");
  };

  return (
    <div className="max-w-[1280px] mx-auto w-full bg-white min-h-screen pb-20 md:pb-10">
      {/* Breadcrumb */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
        <Link href="/marketplace" className="hover:text-[var(--text-primary)] transition-colors">Atelier</Link>
        <span>›</span>
        <span className="hover:text-[var(--text-primary)] transition-colors cursor-pointer">Accessories</span>
        <span>›</span>
        <span className="text-[var(--text-primary)] font-medium">{product.title}</span>
      </div>

      <div className="flex flex-col md:flex-row md:gap-10 lg:gap-16 px-4 sm:px-6 lg:px-8">
        {/* Left: Image Gallery */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#E8E4DC]">
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
          <div className="flex items-center gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={cn(
                  "relative w-16 h-16 shrink-0 rounded-lg overflow-hidden border-2 transition-all",
                  activeImage === idx
                    ? "border-[var(--primary)] opacity-100"
                    : "border-transparent opacity-50 hover:opacity-100"
                )}
              >
                <Image src={img} alt="" fill className="object-cover" sizes="64px" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-1/2 py-6 md:py-0 flex flex-col">
          {/* Collection & Rating */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-[0.15em]">
              {product.collection}
            </span>
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-[var(--text-primary)] text-[var(--text-primary)]" />
              <span className="text-sm font-medium text-[var(--text-primary)]">{product.rating} ({product.reviews})</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] leading-tight tracking-tight mb-2">
            {product.title}
          </h1>

          {/* Price */}
          <p className="text-xl font-bold text-[var(--text-primary)] mb-4">
            £{product.price.toFixed(2)}
          </p>

          {/* Description */}
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Color Selection */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">Color:</span>
              <span className="text-xs font-bold text-[var(--text-primary)] uppercase">{product.colors[selectedColor].name}</span>
            </div>
            <div className="flex items-center gap-3">
              {product.colors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedColor(idx)}
                  className={cn(
                    "w-9 h-9 rounded-full transition-all border",
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

          {/* Size Selection */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">Size</span>
              <button className="text-xs font-medium text-[var(--text-secondary)] underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors">Size Guide</button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {product.sizes.map((size, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSize(idx)}
                  className={cn(
                    "py-3 px-4 rounded-full text-sm font-bold transition-all text-center",
                    selectedSize === idx
                      ? "bg-[var(--primary)] text-white"
                      : "bg-white text-[var(--text-primary)] border border-[var(--border-medium)] hover:border-[var(--primary)]"
                  )}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Bag */}
          <button
            onClick={handleAddToCart}
            className="w-full py-4 bg-[var(--primary)] text-white rounded-full flex items-center justify-center gap-2.5 font-bold text-sm hover:bg-[var(--primary)]/90 transition-all active:scale-[0.98] shadow-lg mb-4"
          >
            <Lock className="w-4 h-4" />
            Add to Bag
          </button>

          {/* Sign in note */}
          <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)] mb-6 px-1">
            <Lock className="w-3.5 h-3.5 shrink-0 mt-0.5" />
            <span>Sign in to purchase and unlock member-exclusive pricing. Complimentary express shipping included.</span>
          </div>

          {/* Accordion: Specifications */}
          <div className="border-t border-[var(--border-light)]">
            <button
              onClick={() => setShowSpecs(!showSpecs)}
              className="flex items-center justify-between w-full py-4 text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider"
            >
              Specifications
              <ChevronDown className={cn("w-5 h-5 transition-transform", showSpecs && "rotate-180")} />
            </button>
            {showSpecs && (
              <ul className="pb-4 space-y-2">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    {detail}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Accordion: Care Instructions */}
          <div className="border-t border-[var(--border-light)]">
            <button
              onClick={() => setShowCare(!showCare)}
              className="flex items-center justify-between w-full py-4 text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider"
            >
              Care Instructions
              <ChevronDown className={cn("w-5 h-5 transition-transform", showCare && "rotate-180")} />
            </button>
            {showCare && (
              <ul className="pb-4 space-y-2">
                {product.careInstructions.map((inst, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                    {inst}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Loom to Life Section */}
      <section className="px-4 sm:px-6 lg:px-8 mt-16 mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] tracking-tight">Loom to Life</h2>
          <p className="text-sm text-[var(--text-secondary)] mt-2 max-w-lg mx-auto">
            Tracing the journey of our heritage cashmere from the high plateaus to your wardrobe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {/* The Source */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-900">
            <Image
              src="https://picsum.photos/seed/cashmere_source/800/500"
              alt="The Source"
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-white text-xl font-bold mb-1">The Source</h3>
              <p className="text-white/80 text-xs leading-relaxed max-w-xs">
                Ethically gathered from Caora Hircas goats in the Mongolian highlands.
              </p>
            </div>
          </div>

          {/* Artisanal Mastery */}
          <div className="bg-[var(--background)] rounded-2xl p-8 flex flex-col justify-center">
            <Scissors className="w-8 h-8 text-[var(--text-primary)] mb-4" />
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Artisanal Mastery</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Each scarf is woven on century-old looms in the heart of Scotland, ensuring a weave that lasts generations.
            </p>
          </div>

          {/* Unrivaled Purity */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-200">
              <Image
                src="https://picsum.photos/seed/cashmere_weave/800/500"
                alt="Weaving"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="bg-[#E0E8F0] rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Unrivaled Purity</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Our cashmere is tested for micron-level consistency, resulting in a fabric that is significantly softer and warmer than industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">Voices of Excellence</h2>
            <p className="text-sm text-[var(--text-secondary)] mt-1">Trusted by a community that values timeless quality.</p>
          </div>
          <button className="text-sm font-bold text-[var(--text-primary)] underline underline-offset-4 hover:text-[var(--accent)] transition-colors whitespace-nowrap">
            Read All {product.reviews} Reviews
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-[var(--border-light)]">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[var(--text-primary)] text-[var(--text-primary)]" />
                ))}
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{review.text}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[var(--text-primary)]">{review.author}</span>
                <span className="text-xs text-[var(--text-secondary)]">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
