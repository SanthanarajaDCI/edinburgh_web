"use client";

import { useState } from "react";
import { Search, Bookmark, Briefcase, Clock, FileText, Monitor, Globe, GraduationCap } from "lucide-react";
import FilterChips from "@/components/ui/FilterChips";
import TrendingProductCard from "@/components/ui/TrendingProductCard";
import CategoryIconCard from "@/components/ui/CategoryIconCard";
import ProductListCard from "@/components/ui/ProductListCard";

const recommendedJobs = Array.from({ length: 10 }).map((_, index) => {
  const titles = ['Software Engineer', 'Data Scientist', 'Product Manager', 'UX Designer', 'DevOps Engineer', 'Frontend Developer', 'Backend Developer', 'QA Analyst', 'Scrum Master', 'Cloud Architect'];
  const companies = ['Tech Corp', 'Data Inc', 'Design Studio', 'Cloud Systems', 'Agile Co'];
  return {
    id: `job_rec_${index}`,
    title: `${titles[index % 10]} ${index + 1}`,
    company: companies[index % 5],
    location: index % 2 === 0 ? 'Edinburgh, UK' : 'London, UK',
    salary: `£${45 + index * 5}k - £${65 + index * 5}k`,
    type: ['Full-Time', 'Contract', 'Remote'][index % 3],
    posted: `${index + 1} days ago`,
    image: `https://picsum.photos/seed/company_${index}/400/300`,
  };
});

const recentJobs = Array.from({ length: 20 }).map((_, index) => {
  const titles = ['Marketing Manager', 'Sales Executive', 'HR Coordinator', 'Financial Analyst', 'Legal Advisor', 'Content Writer', 'Customer Support', 'Operations Manager', 'Graphic Designer', 'Business Analyst'];
  const companies = ['Global Agency', 'Media Plus', 'Finance Ltd', 'Legal Group', 'Creative Hub'];
  return {
    id: `job_recent_${index}`,
    title: `${titles[index % 10]} ${index + 1}`,
    company: companies[index % 5],
    location: index % 3 === 0 ? 'Remote' : 'Manchester, UK',
    salary: `£${30 + index * 2}k - £${45 + index * 2}k`,
    type: ['Contract', 'Part-Time', 'Full-Time'][index % 3],
    posted: `${index * 2 + 1} hours ago`,
    image: `https://picsum.photos/seed/agency_${index}/400/300`,
  };
});

const types = [
  { name: 'Full-Time', icon: Briefcase },
  { name: 'Part-Time', icon: Clock },
  { name: 'Contract', icon: FileText },
  { name: 'Freelance', icon: Monitor },
  { name: 'Remote', icon: Globe },
  { name: 'Internship', icon: GraduationCap },
];

export default function JobListingPage() {
  const [selectedFilter, setSelectedFilter] = useState("Trending");

  return (
    <div className="max-w-[1280px] mx-auto w-full pb-20 md:pb-10">
      {/* App Bar replacement */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-playfair text-2xl font-bold text-[var(--text-primary)]">
          Find Jobs
        </h1>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default">
            <Search className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
          <button className="p-2 rounded-xl hover:bg-[var(--primary-light)] transition-default">
            <Bookmark className="w-5 h-5 text-[var(--text-primary)]" />
          </button>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="mt-2 mb-8">
        <FilterChips
          filters={['Trending', 'Recent', 'Remote', 'Salary']}
          selectedFilter={selectedFilter}
          onSelect={setSelectedFilter}
        />
      </div>

      {/* Trending Roles */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 flex items-center justify-between mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Trending Roles
          </h2>
          <button className="text-sm font-bold text-[var(--primary)] hover:text-[var(--accent)] transition-default">
            See all
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {recentJobs.map((job) => (
            <TrendingProductCard
              key={job.id}
              title={job.title}
              subtitle={`${job.company} • ${job.location}`}
              imageUrl={job.image}
              href={`/jobs/detail/${job.id}`}
            />
          ))}
        </div>
      </div>

      {/* Job Types */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8 mb-4">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
            Job Types
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-4">
          {types.map((type) => (
            <CategoryIconCard
              key={type.name}
              title={type.name}
              icon={type.icon}
              href="/jobs"
            />
          ))}
        </div>
      </div>

      {/* Recommended Jobs */}
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-4">
          Recommended For You
        </h2>
        <div>
          {recommendedJobs.map((job) => (
            <ProductListCard
              key={job.id}
              title={job.title}
              subtitle={`${job.company} • ${job.location}`}
              imageUrl={job.image}
              badgeText={job.salary}
              actionText="View Job"
              href={`/jobs/detail/${job.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
