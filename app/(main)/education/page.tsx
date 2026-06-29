"use client";

import { useState } from "react";
import { Bell, User, Brain, Library, Calendar, BookOpen, PenTool, StickyNote } from "lucide-react";
import FilterChips from "@/components/ui/FilterChips";
import TrendingProductCard from "@/components/ui/TrendingProductCard";
import CategoryIconCard from "@/components/ui/CategoryIconCard";
import ProductListCard from "@/components/ui/ProductListCard";

const recentCourses = [
  {
    title: 'Advanced React Development',
    subtitle: 'Course • 65% Completed',
    image: 'https://picsum.photos/seed/flutter/400/300',
    tag: 'In Progress',
  },
  {
    title: 'Business & Marketing 101',
    subtitle: 'Course • 20% Completed',
    image: 'https://picsum.photos/seed/business/400/300',
    tag: 'In Progress',
  },
];

const tools = [
  { name: 'AI Tutor', icon: Brain },
  { name: 'Flashcards', icon: BookOpen },
  { name: 'Timetable', icon: Calendar },
  { name: 'Research Lib', icon: Library },
  { name: 'Quiz', icon: PenTool },
  { name: 'Notes', icon: StickyNote },
];

const recommended = [
  {
    title: 'UI/UX Design Masterclass',
    subtitle: 'Learn Figma & Design Systems',
    image: 'https://picsum.photos/seed/ui/400/300',
    badge: 'Design',
    tag: 'New',
  },
  {
    title: 'Data Science for Beginners',
    subtitle: 'Python, Pandas, and Machine Learning',
    image: 'https://picsum.photos/seed/data/400/300',
    badge: 'Tech',
    tag: 'Hot',
  },
];

export default function EducationHubPage() {
  const [selectedFilter, setSelectedFilter] = useState("My Courses");

  return (
    <div className="max-w-[1280px] mx-auto w-full pb-20 md:pb-10 min-h-screen bg-[var(--background)]">
      {/* App Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-playfair text-2xl font-bold text-[var(--text-primary)]">
          Student Hub
        </h1>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default">
            <Bell className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
          <button className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default">
            <User className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="mt-2 mb-8">
        <FilterChips
          filters={['My Courses', 'Study Tools', 'Explore', 'Saved']}
          selectedFilter={selectedFilter}
          onSelect={setSelectedFilter}
        />
      </div>

      {/* Recent Courses */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Continue Learning
          </h2>
          <button className="text-sm font-bold text-[var(--primary)] hover:text-[var(--accent)] transition-default">
            See all
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {recentCourses.map((course, i) => (
            <TrendingProductCard
              key={i}
              title={course.title}
              subtitle={course.subtitle}
              imageUrl={course.image}
              href="/education"
            />
          ))}
        </div>
      </div>

      {/* Study Tools */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Study Tools
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {tools.map((tool, i) => (
            <CategoryIconCard
              key={i}
              title={tool.name}
              icon={tool.icon}
              href="/education"
            />
          ))}
        </div>
      </div>

      {/* Recommended */}
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
          Explore Courses
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recommended.map((rec, i) => (
            <ProductListCard
              key={i}
              title={rec.title}
              subtitle={rec.subtitle}
              imageUrl={rec.image}
              badgeText={rec.badge}
              actionText="Enroll Now"
              href="/education"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
