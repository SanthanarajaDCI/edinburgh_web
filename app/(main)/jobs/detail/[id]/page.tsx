"use client";

import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { 
  ArrowLeft, Share2, Bookmark, Briefcase, 
  TrendingUp, Wifi, DollarSign 
} from "lucide-react";

export default function JobDetailPage() {
  const router = useRouter();
  const params = useParams();
  const jobId = params.id as string;

  return (
    <div className="max-w-[1280px] mx-auto w-full relative bg-[var(--background)] pb-32 min-h-screen">
      {/* App Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between sticky top-0 bg-[var(--background)] z-50">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-primary)] hover:bg-gray-100 transition-default -ml-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-primary)] hover:bg-gray-100 transition-default">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-primary)] hover:bg-gray-100 transition-default">
            <Bookmark className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-xl bg-white shadow-sm overflow-hidden shrink-0 relative">
            <Image
              src={`https://picsum.photos/seed/company_${jobId}/100/100`}
              alt="Company Logo"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-playfair text-2xl font-bold text-[var(--text-primary)]">
              Software Engineer
            </h1>
            <p className="text-[var(--primary)] font-bold mt-1 text-sm sm:text-base">
              Tech Corp • Edinburgh, UK
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="px-3 py-1.5 rounded-full bg-[var(--primary-light)] flex items-center gap-1.5 w-max">
            <Briefcase className="w-3.5 h-3.5 text-[var(--primary)]" />
            <span className="text-xs font-bold text-[var(--primary)]">Full-Time</span>
          </div>
          <div className="px-3 py-1.5 rounded-full bg-[var(--primary-light)] flex items-center gap-1.5 w-max">
            <TrendingUp className="w-3.5 h-3.5 text-[var(--primary)]" />
            <span className="text-xs font-bold text-[var(--primary)]">Mid-Level</span>
          </div>
          <div className="px-3 py-1.5 rounded-full bg-[var(--primary-light)] flex items-center gap-1.5 w-max">
            <Wifi className="w-3.5 h-3.5 text-[var(--primary)]" />
            <span className="text-xs font-bold text-[var(--primary)]">Remote</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <DollarSign className="w-5 h-5 text-green-600" />
          <span className="text-lg font-bold text-green-600">£45,000 - £65,000 / year</span>
        </div>
        <p className="text-sm text-[var(--text-secondary)] mb-8">
          Posted 2 days ago
        </p>

        {/* About Company */}
        <div className="bg-white rounded-2xl p-6 border border-[var(--border-light)] mb-8">
          <h2 className="font-bold text-[var(--text-primary)] mb-2">
            About Tech Corp
          </h2>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
            We are a leading technology provider based in Edinburgh, dedicated to building innovative software solutions.
          </p>
        </div>

        {/* Job Description */}
        <div className="mb-8">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
            Job Description
          </h2>
          <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
            We are looking for a passionate and experienced professional to join our dynamic team. You will be responsible for building high-quality, scalable applications and collaborating with cross-functional teams to deliver excellent user experiences.
          </p>
        </div>

        {/* Requirements */}
        <div className="mb-8">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
            Requirements
          </h2>
          <ul className="text-[var(--text-secondary)] text-[15px] leading-relaxed space-y-2 list-disc pl-5">
            <li>3+ years of experience in software development</li>
            <li>Proficiency in Typescript and React</li>
            <li>Experience with state management</li>
            <li>Strong understanding of UI/UX principles</li>
            <li>Excellent problem-solving skills</li>
          </ul>
        </div>

        {/* Benefits */}
        <div className="mb-8">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
            Benefits
          </h2>
          <ul className="text-[var(--text-secondary)] text-[15px] leading-relaxed space-y-2 list-disc pl-5">
            <li>Competitive salary (£45k - £65k)</li>
            <li>Remote work flexibility</li>
            <li>Health and dental insurance</li>
            <li>25 days annual leave</li>
            <li>Professional development budget</li>
          </ul>
        </div>
      </div>

      {/* Floating Action Bar */}
      <div className="fixed bottom-[80px] md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
        <div className="bg-white rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.15)] p-2 flex items-center gap-2">
          <button className="flex-1 bg-[var(--primary)] text-white py-3.5 rounded-full font-bold text-base hover:bg-[var(--primary)]/90 transition-default active:scale-95">
            Apply Now
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-full bg-[var(--primary-light)] text-[var(--primary)] hover:bg-[var(--primary-medium)] transition-default active:scale-95 shrink-0">
            <Bookmark className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
