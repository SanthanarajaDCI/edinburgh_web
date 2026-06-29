"use client";

import { useState } from "react";
import { ArrowLeft, Download, Search, SlidersHorizontal, Coffee, Landmark, Car, Send, ShoppingBasket, RefreshCcw } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const allTransactions = [
  { id: 1, title: 'Coffee Shop', date: 'Today, 08:45 AM', amount: '-£4.50', icon: Coffee, isPositive: false, type: 'Expense' },
  { id: 2, title: 'Salary Deposit', date: 'Yesterday', amount: '+£2,100.00', icon: Landmark, isPositive: true, type: 'Income' },
  { id: 3, title: 'Uber Ride', date: 'Oct 24, 2023', amount: '-£12.40', icon: Car, isPositive: false, type: 'Expense' },
  { id: 4, title: 'Transfer to John', date: 'Oct 23, 2023', amount: '-£50.00', icon: Send, isPositive: false, type: 'Transfer' },
  { id: 5, title: 'Grocery Store', date: 'Oct 22, 2023', amount: '-£65.20', icon: ShoppingBasket, isPositive: false, type: 'Expense' },
  { id: 6, title: 'Refund from Amazon', date: 'Oct 20, 2023', amount: '+£15.99', icon: RefreshCcw, isPositive: true, type: 'Income' },
];

export default function TransactionHistoryPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="max-w-[1280px] mx-auto w-full pb-20 md:pb-10 min-h-screen bg-[var(--background)] flex flex-col">
      {/* App Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between sticky top-0 bg-[var(--background)] z-50">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-primary)] hover:bg-gray-100 transition-default -ml-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-playfair text-xl font-bold text-[var(--text-primary)] absolute left-1/2 -translate-x-1/2">
          Transaction History
        </h1>
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-primary)] hover:bg-gray-100 transition-default -mr-2">
          <Download className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
        {/* Search and Filter */}
        <div className="px-4 sm:px-6 lg:px-8 py-4 flex gap-3">
          <div className="flex-1 h-12 bg-gray-100 rounded-xl flex items-center px-4">
            <Search className="w-5 h-5 text-[var(--text-secondary)] shrink-0" />
            <input 
              type="text" 
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-full bg-transparent border-none outline-none px-3 text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)]"
            />
          </div>
          <button className="w-12 h-12 rounded-xl bg-[var(--primary-light)] flex items-center justify-center shrink-0 hover:bg-[var(--primary-medium)] transition-default">
            <SlidersHorizontal className="w-5 h-5 text-[var(--primary)]" />
          </button>
        </div>

        {/* Transactions List */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-[var(--border-light)] overflow-hidden mt-2 mb-8">
            {allTransactions.map((tx, index) => (
              <div key={tx.id} className={cn(
                "flex items-center gap-4 p-4",
                index !== allTransactions.length - 1 && "border-b border-[var(--border-light)]"
              )}>
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center shrink-0",
                  tx.isPositive ? "bg-green-50 text-green-600" : "bg-gray-100 text-gray-600"
                )}>
                  <tx.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-[var(--text-primary)] text-base truncate">
                    {tx.title}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                    {tx.date} • {tx.type}
                  </p>
                </div>
                <span className={cn(
                  "font-bold text-base shrink-0",
                  tx.isPositive ? "text-green-600" : "text-[var(--text-primary)]"
                )}>
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
