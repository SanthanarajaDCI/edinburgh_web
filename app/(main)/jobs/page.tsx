"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Lock, Sparkles, ChevronLeft, ChevronRight, ChevronDown, Building2, MapPin, Banknote, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const featuredEmployers = [
  { name: "Edinburgh Global", industry: "Luxury Retail • Scotland", jobs: 12, image: "https://picsum.photos/seed/emp_ed/200/200", color: "bg-[#F5F0E8]" },
  { name: "Luminary Systems", industry: "AI Tech • San Francisco", jobs: 8, image: "https://picsum.photos/seed/emp_lum/200/200", color: "bg-[#E8ECF0]" },
  { name: "Velvet Agency", industry: "Creative • Paris", jobs: 5, image: "https://picsum.photos/seed/emp_vel/200/200", color: "bg-[#F0E8EF]" },
];

const jobListings = [
  {
    id: "job_1",
    title: "Senior Brand Designer",
    company: "Edinburgh Cashmere",
    location: "London • Remote Friendly",
    salary: "£85k - £110k",
    badge: "New",
    badgeColor: "bg-gray-200 text-gray-800",
    image: "https://picsum.photos/seed/jlogo1/100/100",
  },
  {
    id: "job_2",
    title: "Lead AI Researcher",
    company: "Quantum Vision",
    location: "New York • Remote",
    salary: "$180k - $240k",
    badge: "Hot",
    badgeColor: "bg-orange-100 text-orange-600",
    image: "https://picsum.photos/seed/jlogo2/100/100",
  },
  {
    id: "job_3",
    title: "Head of Content Marketing",
    company: "Vogue Global",
    location: "Milan, Italy",
    salary: "€90k - €120k",
    badge: null,
    badgeColor: "",
    image: "https://picsum.photos/seed/jlogo3/100/100",
  },
  {
    id: "job_4",
    title: "Director of Logistics",
    company: "Atlas Global",
    location: "Dubai • Remote",
    salary: "$150k - $200k",
    badge: null,
    badgeColor: "",
    image: "https://picsum.photos/seed/jlogo4/100/100",
  },
  {
    id: "job_5",
    title: "VP of Engineering",
    company: "CyberForge",
    location: "Berlin • Hybrid",
    salary: "€130k - €180k",
    badge: "New",
    badgeColor: "bg-gray-200 text-gray-800",
    image: "https://picsum.photos/seed/jlogo5/100/100",
  },
];

const jobTypes = [
  { name: "Full-time", checked: true },
  { name: "Contract", checked: false },
  { name: "Remote", checked: false },
];

const experienceLevels = ["Junior", "Mid-Level", "Senior", "Executive"];

const suggestedSearches = ["Remote UX Designer", "Luxury Brand Manager", "Retail Lead London"];

export default function JobListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([true, false, false]);
  const [selectedLevel, setSelectedLevel] = useState("Mid-Level");
  const [salaryRange, setSalaryRange] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleType = (index: number) => {
    const newTypes = [...selectedTypes];
    newTypes[index] = !newTypes[index];
    setSelectedTypes(newTypes);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <div className="bg-[var(--background)] border-b border-[var(--border-light)]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight leading-tight">
            Global Careers
          </h1>
          <p className="text-[var(--text-secondary)] mt-2">
            1,420 International & Remote Opportunities
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex items-center gap-3 bg-white rounded-full border border-[var(--border-medium)] p-1.5 shadow-sm max-w-2xl">
            <div className="px-3">
              <Search className="w-5 h-5 text-[var(--text-secondary)]" />
            </div>
            <input
              type="text"
              placeholder="Search by role, company, or skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]"
            />
            <button className="flex items-center gap-2 bg-[var(--primary)] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[var(--primary)]/90 transition-colors">
              <Sparkles className="w-4 h-4" />
              AI Search
            </button>
          </div>

          {/* Suggested Searches */}
          <div className="flex items-center gap-2 mt-4 flex-wrap">
            <span className="text-xs text-[var(--text-secondary)]">Try searching for:</span>
            {suggestedSearches.map((term) => (
              <button
                key={term}
                className="text-xs bg-white border border-[var(--border-medium)] px-3 py-1.5 rounded-full text-[var(--text-primary)] hover:bg-gray-50 transition-colors font-medium"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8 lg:gap-12">
          
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-[200px] shrink-0">
            {/* Filters Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-bold text-[var(--text-primary)]">Filters</h3>
              <button className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">Reset All</button>
            </div>

            {/* Job Type */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-[var(--text-primary)] mb-3">Job Type</h4>
              <ul className="space-y-3">
                {jobTypes.map((type, index) => (
                  <li key={type.name}>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div
                        onClick={() => toggleType(index)}
                        className={cn(
                          "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors shrink-0",
                          selectedTypes[index]
                            ? "bg-[var(--primary)] border-[var(--primary)]"
                            : "border-gray-300 group-hover:border-gray-400"
                        )}
                      >
                        {selectedTypes[index] && (
                          <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm text-[var(--text-primary)]">{type.name}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industry */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-[var(--text-primary)] mb-3">Industry</h4>
              <button className="w-full flex items-center justify-between bg-white border border-[var(--border-medium)] rounded-lg px-3 py-2.5 text-sm text-[var(--text-primary)] hover:bg-gray-50 transition-colors">
                All Industries
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Min. Salary */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-[var(--text-primary)]">Min. Salary</h4>
                <span className="text-sm font-bold text-[var(--text-primary)]">${Math.round(30 + salaryRange * 1.7)}k</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={salaryRange}
                onChange={(e) => setSalaryRange(Number(e.target.value))}
                className="w-full accent-[var(--primary)] h-1.5 rounded-full appearance-none bg-gray-200 cursor-pointer"
              />
            </div>

            {/* Experience Level */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-[var(--text-primary)] mb-3">Experience Level</h4>
              <div className="flex flex-wrap gap-2">
                {experienceLevels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={cn(
                      "text-xs font-bold py-2 px-4 rounded-full transition-colors",
                      selectedLevel === level
                        ? "bg-[var(--primary)] text-white"
                        : "bg-white border border-[var(--border-medium)] text-[var(--text-primary)] hover:bg-gray-50"
                    )}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Featured Employers */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-[var(--text-primary)]">Featured Employers</h2>
                <Link href="/business" className="flex items-center gap-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                  View all <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {featuredEmployers.map((employer) => (
                  <div key={employer.name} className="bg-white border border-[var(--border-light)] rounded-2xl p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                    <div className={cn("w-16 h-16 rounded-2xl mx-auto mb-3 overflow-hidden", employer.color)}>
                      <Image
                        src={employer.image}
                        alt={employer.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-sm font-bold text-[var(--text-primary)]">{employer.name}</h3>
                    <p className="text-xs text-[var(--text-secondary)] mt-0.5">{employer.industry}</p>
                    <span className="inline-block mt-3 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {employer.jobs} Active Jobs
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
              {jobListings.map((job) => (
                <Link
                  key={job.id}
                  href={`/jobs/detail/${job.id}`}
                  className="flex items-center gap-4 p-5 bg-white border border-[var(--border-light)] rounded-2xl hover:shadow-md transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                    <Image
                      src={job.image}
                      alt={job.company}
                      width={56}
                      height={56}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">{job.title}</h3>
                      {job.badge && (
                        <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full", job.badgeColor)}>
                          {job.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 flex-wrap text-xs text-[var(--text-secondary)]">
                      <span className="flex items-center gap-1"><Building2 className="w-3.5 h-3.5" />{job.company}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                      <span className="flex items-center gap-1"><Banknote className="w-3.5 h-3.5" />{job.salary}</span>
                    </div>
                  </div>
                  <button className="hidden sm:flex items-center gap-2 bg-[var(--primary)] text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-[var(--primary)]/90 transition-colors shrink-0">
                    <Lock className="w-3.5 h-3.5" />
                    Sign in to Apply
                  </button>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-10 pt-8 border-t border-[var(--border-light)]">
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
                onClick={() => setCurrentPage(48)}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                  currentPage === 48
                    ? "bg-[var(--primary)] text-white"
                    : "text-[var(--text-secondary)] hover:bg-gray-100"
                )}
              >
                48
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
            <h3 className="text-lg font-bold text-[var(--text-primary)]">SuperApp Careers</h3>
            <div className="flex flex-wrap gap-6">
              <Link href="/marketplace" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Privacy Policy</Link>
              <Link href="/marketplace" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Terms of Service</Link>
              <Link href="/marketplace" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Help Center</Link>
              <Link href="/jobs" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">Global Careers</Link>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-[var(--border-light)]">
            <p className="text-xs text-[var(--text-secondary)]">© 2024 Global Super App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
