"use client";

import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Share2, Verified, Star, CheckCircle2, ShieldCheck, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function InsuranceDetailPage() {
  const router = useRouter();
  const params = useParams();
  const insuranceId = params.id as string;

  const planData = {
    title: 'Comprehensive Car Insurance',
    provider: 'AutoSafe UK',
    price: '£45/mo',
    rating: '4.8',
  };

  const coverageDetails = [
    'Accidental Damage',
    'Vandalism',
    'Windscreen Repair',
    'Personal Accident Cover',
    'Medical Expenses up to £500',
  ];

  return (
    <div className="max-w-[1280px] mx-auto w-full relative bg-[var(--background)] pb-32 min-h-screen">
      {/* Hero Image / Sliver AppBar */}
      <div className="relative h-[200px] sm:h-[300px] w-full">
        <Image
          src={`https://picsum.photos/seed/${insuranceId}_cover/800/400`}
          alt="Insurance Cover"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Top actions */}
        <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 lg:p-8 flex items-center justify-between z-10">
          <button 
            onClick={() => router.back()}
            className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[var(--text-primary)] hover:bg-white transition-default"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[var(--text-primary)] hover:bg-white transition-default">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
        {/* Header Info */}
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] leading-tight flex-1 pr-4">
            {planData.title}
          </h1>
          <div className="bg-[var(--primary-light)] px-3 py-1.5 rounded-lg shrink-0 mt-1">
            <span className="font-bold text-[var(--primary)] text-lg">
              {planData.price}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm sm:text-base">
          <div className="flex items-center gap-1.5 text-[var(--text-primary)]">
            <Verified className="w-4 h-4 text-green-600" />
            <span>{planData.provider}</span>
          </div>
          <div className="flex items-center gap-1.5 font-bold text-[var(--text-primary)]">
            <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
            <span>{planData.rating} rating</span>
          </div>
        </div>

        {/* Quote Comparison */}
        <div className="mt-8">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
            Quote Comparison
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Basic Tier */}
            <div className="bg-white border border-[var(--border-light)] rounded-2xl p-4 sm:p-6">
              <h3 className="font-bold text-[var(--text-primary)] text-lg">Basic</h3>
              <p className="font-bold text-[var(--primary)] text-2xl mt-1 mb-4">£30/mo</p>
              <ul className="space-y-2">
                {['Third-party', 'Fire & Theft'].map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-[var(--text-primary)]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Premium Tier */}
            <div className="bg-[var(--primary-light)] border-2 border-[var(--primary)] rounded-2xl p-4 sm:p-6 relative">
              <div className="absolute -top-3 left-4 bg-[var(--primary)] text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                Recommended
              </div>
              <h3 className="font-bold text-[var(--text-primary)] text-lg mt-1">Premium</h3>
              <p className="font-bold text-[var(--primary)] text-2xl mt-1 mb-4">£45/mo</p>
              <ul className="space-y-2">
                {['Comprehensive', 'Breakdown', 'Courtesy Car'].map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-[var(--text-primary)]">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Coverage Details */}
        <div className="mt-8">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
            Coverage Details
          </h2>
          <div className="bg-white border border-[var(--border-light)] rounded-2xl p-4 sm:p-6">
            <ul className="space-y-4">
              {coverageDetails.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[var(--primary)] shrink-0" />
                  <span className="text-base text-[var(--text-primary)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Provider Information */}
        <div className="mt-8 mb-8">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
            Provider Information
          </h2>
          <div className="bg-white border border-[var(--border-light)] rounded-2xl p-4 sm:p-6 flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-[var(--primary-light)] flex items-center justify-center shrink-0">
              <Building2 className="w-8 h-8 text-[var(--primary)]" />
            </div>
            <div>
              <h3 className="font-bold text-[var(--text-primary)] text-lg">
                {planData.provider}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mt-1">
                FCA Regulated • Est. 1998
              </p>
              <button className="text-sm font-bold text-[var(--primary)] mt-2 hover:text-[var(--accent)] transition-default">
                View Provider Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--border-light)] p-4 pb-8 sm:pb-4 z-50">
        <div className="max-w-4xl mx-auto flex gap-4">
          <button className="flex-1 bg-white border-2 border-[var(--primary)] text-[var(--primary)] py-3.5 rounded-xl font-bold text-base hover:bg-[var(--primary-light)] transition-default active:scale-95">
            Get Quote
          </button>
          <button className="flex-1 bg-[var(--primary)] text-white py-3.5 rounded-xl font-bold text-base hover:bg-[var(--primary)]/90 transition-default active:scale-95">
            Proceed to Purchase
          </button>
        </div>
      </div>
    </div>
  );
}
