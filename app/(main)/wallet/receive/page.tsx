"use client";

import { ArrowLeft, QrCode, FileText, Share2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ReceiveMoneyPage() {
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
        <h1 className="text-playfair text-xl font-bold text-[var(--text-primary)] absolute left-1/2 -translate-x-1/2">
          Receive Money
        </h1>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 mt-6 max-w-sm mx-auto flex flex-col items-center">
        <p className="text-base text-[var(--text-secondary)] text-center mb-8">
          Show this QR code to receive money
        </p>

        <div className="bg-white p-8 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col items-center w-full mb-12 border border-[var(--border-light)]">
          <QrCode className="w-48 h-48 text-black mb-6" strokeWidth={1} />
          <p className="text-xl font-bold text-gray-800 tracking-wide">
            @john_doe
          </p>
        </div>

        <button className="w-full bg-[var(--primary)] text-white py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-3 hover:bg-[var(--primary)]/90 transition-default active:scale-95 mb-4">
          <FileText className="w-5 h-5" />
          Create Payment Request
        </button>

        <button className="w-full bg-transparent text-[var(--primary)] border-2 border-[var(--primary)] py-4 rounded-2xl font-bold text-base flex items-center justify-center gap-3 hover:bg-[var(--primary-light)] transition-default active:scale-95">
          <Share2 className="w-5 h-5" />
          Share QR Code
        </button>
      </div>
    </div>
  );
}
