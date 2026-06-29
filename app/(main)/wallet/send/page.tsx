"use client";

import { ArrowLeft, AtSign, Users, QrCode, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SendMoneyPage() {
  const router = useRouter();

  const methods = [
    {
      id: 1,
      icon: AtSign,
      title: "Send via Username",
      subtitle: "Send instantly to another Edinburgh Cashmere user",
      onClick: () => {}
    },
    {
      id: 2,
      icon: Users,
      title: "Send to Contact",
      subtitle: "Choose from your phone contacts",
      onClick: () => {}
    },
    {
      id: 3,
      icon: QrCode,
      title: "Scan QR Code",
      subtitle: "Scan a personal QR code to send",
      onClick: () => router.push('/qr-scanner')
    }
  ];

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
        <h1 className="text-playfair text-xl font-bold text-[var(--text-primary)] absolute left-1/2 -translate-x-1/2">
          Send Money
        </h1>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 mt-4 max-w-xl mx-auto">
        <h2 className="text-xl font-bold text-[var(--text-primary)] mb-6">
          Select a Method
        </h2>

        <div className="space-y-4">
          {methods.map((method) => (
            <button
              key={method.id}
              onClick={method.onClick}
              className="w-full bg-white rounded-2xl p-4 border border-[var(--border-light)] flex items-center gap-4 hover:shadow-md transition-default active:scale-[0.98] text-left group"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--primary-light)] flex items-center justify-center shrink-0">
                <method.icon className="w-7 h-7 text-[var(--primary)]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-[var(--text-primary)] text-base">
                  {method.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1 truncate pr-2">
                  {method.subtitle}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
