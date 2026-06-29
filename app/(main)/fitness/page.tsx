"use client";

import { useState } from "react";
import { Settings, Footprints, Droplets, Moon, Heart, Utensils, Dumbbell, Scale, Activity, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import FilterChips from "@/components/ui/FilterChips";
import CategoryIconCard from "@/components/ui/CategoryIconCard";
import ProductListCard from "@/components/ui/ProductListCard";

const categories = [
  { name: 'Diet Plan', icon: Utensils },
  { name: 'Workouts', icon: Dumbbell },
  { name: 'Weight Loss', icon: Scale },
  { name: 'Yoga', icon: Activity },
];

const recommended = [
  {
    title: 'Full Body HIIT',
    subtitle: 'Burn 500 kcal in 30 mins',
    image: 'https://picsum.photos/seed/hiit/400/300',
    badge: '30 mins',
    tag: 'HIIT',
  },
  {
    title: 'Keto Meal Prep',
    subtitle: '7 days of healthy meals',
    image: 'https://picsum.photos/seed/keto/400/300',
    badge: 'Nutrition',
    tag: 'Diet',
  },
];

export default function FitnessDashboardPage() {
  const [selectedFilter, setSelectedFilter] = useState("My Plan");

  return (
    <div className="max-w-[1280px] mx-auto w-full pb-20 md:pb-10 min-h-screen bg-[var(--background)]">
      {/* App Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-playfair text-2xl font-bold text-[var(--text-primary)]">
          Health & Fitness
        </h1>
        <button className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default">
          <Settings className="w-5 h-5 text-[var(--text-primary)]" />
        </button>
      </div>

      {/* Filter Chips */}
      <div className="mt-2 mb-8">
        <FilterChips
          filters={['My Plan', 'Workouts', 'Diet', 'Progress']}
          selectedFilter={selectedFilter}
          onSelect={setSelectedFilter}
        />
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        {/* Daily Goals */}
        <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
          Daily Goals
        </h2>
        <div className="bg-white rounded-3xl border border-[var(--primary)]/10 p-5 sm:p-6 mb-8 shadow-[0_4px_10px_rgba(212,175,55,0.05)] flex items-center gap-6">
          <div className="relative w-20 h-20 shrink-0">
            <svg className="w-20 h-20 transform -rotate-90">
              <circle cx="40" cy="40" r="36" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-[var(--primary-light)]" />
              <circle cx="40" cy="40" r="36" fill="transparent" stroke="currentColor" strokeWidth="8" strokeDasharray="226" strokeDashoffset="56.5" className="text-[var(--primary)] stroke-current" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center font-bold text-lg text-[var(--text-primary)]">
              75%
            </div>
          </div>
          <div>
            <p className="text-sm text-[var(--text-secondary)] mb-1">Daily Goal</p>
            <h3 className="text-playfair text-2xl font-bold text-[var(--text-primary)] leading-tight">
              1,500 <span className="text-lg text-[var(--text-secondary)] font-sans">/ 2,000 kcal</span>
            </h3>
            <p className="text-[var(--primary)] font-bold text-sm mt-1">Keep it up!</p>
          </div>
        </div>

        {/* Health Metrics */}
        <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
          Health Metrics
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <MetricCard title="Steps" value="8,432" subtitle="Goal: 10,000" icon={Footprints} color="text-blue-500" bg="bg-blue-50" />
          <MetricCard title="Water" value="1.5 L" subtitle="Goal: 2.5 L" icon={Droplets} color="text-cyan-500" bg="bg-cyan-50" />
          <MetricCard title="Sleep" value="6h 45m" subtitle="Goal: 8h" icon={Moon} color="text-indigo-500" bg="bg-indigo-50" />
          <MetricCard title="Heart Rate" value="72 bpm" subtitle="Resting" icon={Heart} color="text-red-500" bg="bg-red-50" />
        </div>
      </div>

      {/* Explore Programs */}
      <div className="mb-8">
        <div className="px-4 sm:px-6 lg:px-8 mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Explore Programs
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {categories.map((cat) => (
            <CategoryIconCard key={cat.name} title={cat.name} icon={cat.icon} href="/fitness" />
          ))}
        </div>
      </div>

      {/* Personalized Recommendations */}
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
          Personalized Recommendations
        </h2>
        <div>
          {recommended.map((rec, i) => (
            <ProductListCard
              key={i}
              title={rec.title}
              subtitle={rec.subtitle}
              imageUrl={rec.image}
              badgeText={rec.badge}
              actionText="Start Now"
              href="/fitness"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, subtitle, icon: Icon, color, bg }: { title: string, value: string, subtitle: string, icon: any, color: string, bg: string }) {
  return (
    <div className="bg-white rounded-2xl p-4 border border-[var(--border-light)] shadow-sm flex flex-col justify-between aspect-[1.2]">
      <div className="flex items-center gap-2">
        <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0", bg)}>
          <Icon className={cn("w-4 h-4", color)} />
        </div>
        <span className="text-xs font-bold text-[var(--text-secondary)] truncate">{title}</span>
      </div>
      <div>
        <div className="text-playfair text-xl font-bold text-[var(--text-primary)]">{value}</div>
        <div className="text-xs font-bold text-[var(--primary)] mt-1">{subtitle}</div>
      </div>
    </div>
  );
}
