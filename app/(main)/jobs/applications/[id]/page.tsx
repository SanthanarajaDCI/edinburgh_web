"use client";

import Image from "next/image";
import { ArrowLeft, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const appData = {
  jobTitle: 'Senior Flutter Developer',
  company: 'Tech Corp UK',
  status: 'Interviewing',
};

const steps = [
  { title: 'Application Sent', date: 'Oct 24, 2023', completed: true },
  { title: 'Under Review', date: 'Oct 26, 2023', completed: true },
  { title: 'Interview Scheduled', date: 'Nov 02, 2023', completed: true },
  { title: 'Offer Decision', date: 'Pending', completed: false },
];

export default function ApplicationDetailPage() {
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
          Application Details
        </h1>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="px-4 sm:px-6 mt-2">
          <div className="bg-[var(--primary-light)] rounded-2xl border border-[var(--primary-medium)] p-4 flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 relative bg-white">
              <Image
                src="https://picsum.photos/seed/tech/100"
                alt="Company"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[var(--text-primary)]">
                {appData.jobTitle}
              </h2>
              <p className="text-sm font-bold text-[var(--primary)] mt-1">
                {appData.company}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="px-8 sm:px-10 py-8">
          <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-8">
            Status Tracking
          </h2>
          
          <div className="flex flex-col">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={cn(
                      "w-6 h-6 rounded-full flex items-center justify-center border-2 shrink-0 z-10",
                      step.completed 
                        ? "bg-[var(--primary)] border-[var(--primary)]" 
                        : "bg-white border-gray-300"
                    )}>
                      {step.completed && <Check className="w-3.5 h-3.5 text-white" />}
                    </div>
                    {!isLast && (
                      <div className={cn(
                        "w-[2px] h-12 my-1",
                        step.completed ? "bg-[var(--primary)]" : "bg-gray-200"
                      )} />
                    )}
                  </div>
                  <div className="pb-10 -mt-1">
                    <h3 className={cn(
                      "text-base",
                      step.completed ? "font-bold text-[var(--text-primary)]" : "text-gray-500"
                    )}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {step.date}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="h-px w-full bg-[var(--border-light)] mb-8" />

        {/* Messages */}
        <div className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
              Messages
            </h2>
            <button className="text-sm font-bold text-[var(--primary)] hover:text-[var(--accent)] transition-default">
              Reply
            </button>
          </div>

          <div className="space-y-4">
            {/* Employer Message */}
            <div className="flex items-end gap-2 pr-12">
              <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 relative mb-1">
                <Image src="https://picsum.photos/seed/hr/100" alt="HR" fill className="object-cover" />
              </div>
              <div className="bg-white rounded-2xl rounded-bl-none p-4 shadow-sm border border-[var(--border-light)] relative">
                <div className="flex justify-between items-baseline gap-4 mb-2">
                  <span className="text-xs font-bold text-[var(--text-primary)]">Tech Corp HR</span>
                  <span className="text-[10px] text-[var(--text-secondary)]">Yesterday, 10:30 AM</span>
                </div>
                <p className="text-sm text-[var(--text-primary)] leading-relaxed">
                  Hi there! We reviewed your application and would love to schedule a technical interview with our engineering team next Tuesday. Does 2 PM GMT work for you?
                </p>
              </div>
            </div>

            {/* User Message */}
            <div className="flex items-end justify-end pl-12">
              <div className="bg-[var(--primary)] rounded-2xl rounded-br-none p-4 shadow-sm relative">
                <div className="flex justify-between items-baseline gap-4 mb-2">
                  <span className="text-xs font-bold text-white">You</span>
                  <span className="text-[10px] text-white/80">Yesterday, 11:15 AM</span>
                </div>
                <p className="text-sm text-white leading-relaxed">
                  Hello! Yes, 2 PM GMT works perfectly for me. Looking forward to speaking with the team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
