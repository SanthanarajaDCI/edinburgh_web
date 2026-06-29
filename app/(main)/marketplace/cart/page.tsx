"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, Minus, Plus, Tag, Wallet, ArrowRight, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/useCartStore";

export default function CartPage() {
  const router = useRouter();
  const [useWallet, setUseWallet] = useState(false);
  
  const { items, updateQuantity, removeItem, totalPrice } = useCartStore();

  const subtotal = totalPrice;
  const discount = useWallet && subtotal > 0 ? 15.00 : 0.00;
  const total = subtotal > 0 ? subtotal - discount : 0.00;

  return (
    <div className="max-w-[1280px] mx-auto w-full pb-28 md:pb-10">
      {/* App Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4 sticky top-16 md:top-0 bg-white/80 backdrop-blur-md z-40 border-b border-[var(--border-light)] md:border-none">
        <button 
          onClick={() => router.back()}
          className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default"
        >
          <ArrowLeft className="w-5 h-5 text-[var(--text-primary)]" />
        </button>
        <h1 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
          My Cart
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 px-4 sm:px-6 lg:px-8 mt-4">
        {/* Cart Items */}
        <div className="flex-1 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-10 bg-white rounded-2xl border border-[var(--border-light)] shadow-sm">
              <ShoppingBag className="w-12 h-12 text-[var(--text-secondary)] mx-auto mb-3" />
              <h3 className="text-lg font-bold text-[var(--text-primary)]">Your cart is empty</h3>
              <p className="text-sm text-[var(--text-secondary)] mt-1 mb-4">Looks like you haven't added anything yet.</p>
              <Link href="/marketplace" className="inline-flex items-center px-4 py-2 bg-[var(--primary)] text-white font-bold rounded-xl text-sm transition-default hover:bg-[var(--primary)]/90">
                Continue Shopping
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="bg-white p-3 rounded-2xl border border-[var(--border-light)] shadow-sm flex gap-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-gray-100">
                  <Image src={item.imageUrl} alt={item.title} width={96} height={96} className="object-cover w-full h-full" />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h3 className="text-sm font-bold text-[var(--text-primary)] leading-tight line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-[var(--text-secondary)] hover:text-red-500 transition-colors p-1"
                    >
                      <ArrowRight className="w-4 h-4 rotate-45" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-playfair font-bold text-[var(--primary)] text-lg">
                      £{item.price.toFixed(2)}
                    </span>
                    <div className="flex items-center gap-3 bg-[var(--background)] px-2 py-1 rounded-lg border border-[var(--border-light)]">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-default"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-sm font-bold w-4 text-center">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-[var(--text-secondary)] hover:text-[var(--primary)] transition-default"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:w-[380px] shrink-0 space-y-6">
          {/* Coupon */}
          <div>
            <h3 className="text-playfair text-lg font-bold text-[var(--text-primary)] mb-3">
              Coupons & Offers
            </h3>
            <div className="flex items-center bg-white border border-[var(--border-light)] rounded-xl p-1.5 shadow-sm">
              <div className="px-3 shrink-0">
                <Tag className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <input 
                type="text" 
                placeholder="Enter Promo Code" 
                className="flex-1 bg-transparent outline-none text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]" 
              />
              <button className="px-4 py-2 text-sm font-bold text-[var(--primary)] hover:bg-[var(--primary-light)] rounded-lg transition-default">
                Apply
              </button>
            </div>
          </div>

          {/* Wallet */}
          <div className="flex items-center justify-between p-4 bg-[var(--primary-light)] rounded-xl border border-[var(--primary-medium)]">
            <div className="flex items-center gap-3">
              <Wallet className="w-6 h-6 text-[var(--primary)]" />
              <div>
                <h4 className="text-sm font-bold text-[var(--text-primary)]">Use Wallet Balance</h4>
                <p className="text-xs text-[var(--text-secondary)] mt-0.5">Available: £45.50</p>
              </div>
            </div>
            <button 
              onClick={() => setUseWallet(!useWallet)}
              className={cn(
                "w-12 h-6 rounded-full relative transition-colors duration-300",
                useWallet ? "bg-[var(--accent)]" : "bg-gray-300"
              )}
            >
              <div className={cn(
                "w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-300 shadow-sm",
                useWallet ? "translate-x-6.5 left-[2px]" : "translate-x-0.5"
              )} />
            </button>
          </div>

          {/* Order Summary */}
          <div>
            <h3 className="text-playfair text-lg font-bold text-[var(--text-primary)] mb-4">
              Order Summary
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-[var(--text-secondary)]">Subtotal</span>
                <span className="font-medium">£{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[var(--text-secondary)]">Shipping</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
              {useWallet && (
                <div className="flex justify-between text-sm">
                  <span className="text-[var(--text-secondary)]">Wallet Applied</span>
                  <span className="font-medium text-green-600">-£{discount.toFixed(2)}</span>
                </div>
              )}
            </div>
            <div className="pt-4 border-t border-[var(--border-light)] flex justify-between items-center mb-6">
              <span className="text-lg font-bold text-[var(--text-primary)]">Total</span>
              <span className="text-playfair text-2xl font-bold text-[var(--primary)]">
                £{total.toFixed(2)}
              </span>
            </div>

            {/* Desktop Checkout Button */}
            <button 
              onClick={() => router.push("/marketplace/checkout")}
              className="hidden lg:flex w-full items-center justify-center gap-2 py-4 bg-[var(--primary)] text-white text-sm font-bold rounded-2xl hover:bg-[var(--primary)]/90 transition-default active:scale-95 shadow-md"
            >
              Proceed to Checkout
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Checkout Bar */}
      <div className="lg:hidden fixed bottom-[64px] md:bottom-0 left-0 right-0 p-4 bg-white border-t border-[var(--border-light)] shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 safe-area-bottom pb-safe+4">
        <button 
          onClick={() => router.push("/marketplace/checkout")}
          className="w-full flex items-center justify-center gap-2 py-4 bg-[var(--primary)] text-white text-sm font-bold rounded-2xl active:scale-95 transition-default"
        >
          Proceed to Checkout
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
