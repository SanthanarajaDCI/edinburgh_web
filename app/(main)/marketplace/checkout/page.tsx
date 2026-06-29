"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, MapPin, CreditCard, Apple, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CheckoutPage() {
  const router = useRouter();
  const [selectedDelivery, setSelectedDelivery] = useState("standard");
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [showSuccess, setShowSuccess] = useState(false);

  const subtotal = 219.98;
  const discount = 15.00;
  const shipping = selectedDelivery === "express" ? 5.99 : 0.00;
  const total = subtotal - discount + shipping;

  const handlePlaceOrder = () => {
    setShowSuccess(true);
  };

  return (
    <div className="max-w-[1280px] mx-auto w-full pb-28 md:pb-10 relative">
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-[400px] w-full flex flex-col items-center text-center animate-in fade-in zoom-in duration-200">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-playfair text-2xl font-bold text-[var(--primary)] mb-2">
              Order Placed!
            </h2>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8">
              Your order #EC-123456 has been confirmed. You will receive an email shortly with tracking details.
            </p>
            <button 
              onClick={() => router.push("/home")}
              className="w-full py-4 bg-[var(--primary)] text-white text-sm font-bold rounded-xl hover:bg-[var(--primary)]/90 transition-default active:scale-95"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}

      {/* App Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4 sticky top-16 md:top-0 bg-white/80 backdrop-blur-md z-40 border-b border-[var(--border-light)] md:border-none">
        <button 
          onClick={() => router.back()}
          className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default"
        >
          <ArrowLeft className="w-5 h-5 text-[var(--text-primary)]" />
        </button>
        <h1 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
          Checkout
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 px-4 sm:px-6 lg:px-8 mt-4">
        {/* Left Column: Form */}
        <div className="flex-1 space-y-8">
          {/* Shipping Address */}
          <div>
            <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
              Shipping Address
            </h2>
            <div className="p-5 border-2 border-[var(--primary)] rounded-2xl flex gap-4 bg-white shadow-sm">
              <MapPin className="w-6 h-6 text-[var(--primary)] shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-[var(--text-primary)]">Home</span>
                  <button className="text-sm font-bold text-[var(--accent)] hover:text-[var(--accent-hover)]">Change</button>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  123 Princes Street<br />
                  Edinburgh, EH2 2ER<br />
                  United Kingdom
                </p>
                <p className="text-sm text-[var(--text-primary)] font-medium mt-2">
                  +44 7700 900077
                </p>
              </div>
            </div>
          </div>

          {/* Delivery Options */}
          <div>
            <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
              Delivery Options
            </h2>
            <div className="space-y-3">
              {[
                { id: "standard", title: "Standard Delivery", subtitle: "Est. 3-5 Business Days", price: "Free" },
                { id: "express", title: "Express Delivery", subtitle: "Est. 1-2 Business Days", price: "£5.99" }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedDelivery(opt.id)}
                  className={cn(
                    "w-full p-4 border rounded-2xl flex items-center gap-4 text-left transition-default bg-white",
                    selectedDelivery === opt.id 
                      ? "border-[var(--primary)] border-2 shadow-[0_4px_12px_rgba(13,27,42,0.08)]" 
                      : "border-[var(--border-medium)] hover:border-[var(--primary-medium)]"
                  )}
                >
                  <div className={cn(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0",
                    selectedDelivery === opt.id ? "border-[var(--primary)]" : "border-[var(--text-secondary)]"
                  )}>
                    {selectedDelivery === opt.id && <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[var(--text-primary)]">{opt.title}</h3>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5">{opt.subtitle}</p>
                  </div>
                  <span className="font-bold text-[var(--primary)]">{opt.price}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
              Payment Method
            </h2>
            <div className="space-y-3">
              {[
                { id: "card", title: "Credit / Debit Card", subtitle: "**** **** **** 4242", icon: CreditCard },
                { id: "paypal", title: "PayPal", subtitle: "john.doe@example.com", icon: null }, // Replaced by a custom icon or text if needed
                { id: "apple", title: "Apple Pay", subtitle: "Linked to device", icon: Apple }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedPayment(opt.id)}
                  className={cn(
                    "w-full p-4 border rounded-2xl flex items-center gap-4 text-left transition-default bg-white",
                    selectedPayment === opt.id 
                      ? "border-[var(--primary)] border-2 shadow-[0_4px_12px_rgba(13,27,42,0.08)]" 
                      : "border-[var(--border-medium)] hover:border-[var(--primary-medium)]"
                  )}
                >
                  <div className={cn(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0",
                    selectedPayment === opt.id ? "border-[var(--primary)]" : "border-[var(--text-secondary)]"
                  )}>
                    {selectedPayment === opt.id && <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]" />}
                  </div>
                  {opt.icon && <opt.icon className="w-6 h-6 text-[var(--primary)] shrink-0" />}
                  {!opt.icon && <span className="font-bold text-[var(--primary)] shrink-0 italic">PayPal</span>}
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-[var(--text-primary)]">{opt.title}</h3>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5">{opt.subtitle}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:w-[380px] shrink-0">
          <div className="bg-[var(--primary-light)] rounded-2xl p-6 border border-[var(--primary-medium)]">
            <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-6">
              Summary
            </h2>
            <div className="flex justify-between items-end border-b border-[var(--border-medium)] pb-4 mb-4">
              <span className="font-bold text-[var(--text-primary)] text-lg">Total</span>
              <span className="text-playfair text-3xl font-bold text-[var(--primary)]">£{total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Includes VAT. By placing this order, you agree to our Terms & Conditions and Privacy Policy.
            </p>
            
            {/* Desktop Button */}
            <button 
              onClick={handlePlaceOrder}
              className="hidden lg:block w-full mt-8 py-4 bg-[var(--primary)] text-white text-sm font-bold rounded-xl hover:bg-[var(--primary)]/90 transition-default active:scale-95 shadow-md"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-[64px] md:bottom-0 left-0 right-0 p-4 bg-white border-t border-[var(--border-light)] shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 safe-area-bottom pb-safe+4">
        <button 
          onClick={handlePlaceOrder}
          className="w-full flex items-center justify-center gap-2 py-4 bg-[var(--primary)] text-white text-sm font-bold rounded-2xl active:scale-95 transition-default"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
