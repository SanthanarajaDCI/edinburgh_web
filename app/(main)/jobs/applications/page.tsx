"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { useRouter } from "next/navigation";

const applications = [
  {
    id: 'app_001',
    jobTitle: 'Senior Flutter Developer',
    company: 'Tech Corp UK',
    appliedDate: 'Oct 24, 2023',
    status: 'Under Review',
    logo: 'https://picsum.photos/seed/tech/100',
  },
  {
    id: 'app_002',
    jobTitle: 'UI/UX Designer',
    company: 'Creative Studio',
    appliedDate: 'Oct 20, 2023',
    status: 'Interviewing',
    logo: 'https://picsum.photos/seed/creative/100',
  },
  {
    id: 'app_003',
    jobTitle: 'Backend Engineer',
    company: 'FinTech Solutions',
    appliedDate: 'Oct 15, 2023',
    status: 'Rejected',
    logo: 'https://picsum.photos/seed/fintech/100',
  },
  {
    id: 'app_004',
    jobTitle: 'Product Manager',
    company: 'Innovate Inc',
    appliedDate: 'Oct 10, 2023',
    status: 'Offered',
    logo: 'https://picsum.photos/seed/innovate/100',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Under Review': return 'text-orange-600 bg-orange-50';
    case 'Interviewing': return 'text-blue-600 bg-blue-50';
    case 'Offered': return 'text-green-600 bg-green-50';
    case 'Rejected': return 'text-red-600 bg-red-50';
    default: return 'text-gray-600 bg-gray-50';
  }
};

export default function MyApplicationsPage() {
  const router = useRouter();

  return (
    <div className="max-w-[1280px] mx-auto w-full pb-20 md:pb-10 min-h-screen bg-[var(--background)]">
      {/* App Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center sticky top-0 bg-[var(--background)] z-50">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-primary)] hover:bg-gray-100 transition-default -ml-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-playfair text-xl font-bold text-[var(--text-primary)] mx-auto pr-8">
          My Applications
        </h1>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 mt-4 space-y-4 max-w-3xl mx-auto">
        {applications.map((app) => (
          <Link 
            key={app.id} 
            href={`/jobs/applications/${app.id}`}
            className="block bg-white rounded-2xl border border-[var(--border-light)] p-4 sm:p-6 hover:shadow-md transition-default active:scale-[0.98]"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm overflow-hidden shrink-0 relative">
                <Image
                  src={app.logo}
                  alt={app.company}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-bold text-[var(--text-primary)] truncate">
                  {app.jobTitle}
                </h2>
                <p className="text-sm font-bold text-[var(--primary)] mt-1">
                  {app.company}
                </p>
              </div>
            </div>
            
            <div className="h-px w-full bg-[var(--border-light)] my-4" />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[var(--text-secondary)]">
                <CalendarDays className="w-4 h-4" />
                <span className="text-xs">Applied: {app.appliedDate}</span>
              </div>
              <div className={`px-3 py-1.5 rounded-full ${getStatusColor(app.status)}`}>
                <span className="text-xs font-bold">{app.status}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
