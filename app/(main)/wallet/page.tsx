"use client";

import { ArrowLeft, Settings, ArrowUpRight, ArrowDownLeft, Plus, History, MoreHorizontal, Coffee, Landmark, Car, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

const recentTransactions = [
  { id: 1, title: 'Coffee Shop', date: 'Today, 08:45 AM', amount: '-£4.50', icon: Coffee, isPositive: false },
  { id: 2, title: 'Salary Deposit', date: 'Yesterday', amount: '+£2,100.00', icon: Landmark, isPositive: true },
  { id: 3, title: 'Uber Ride', date: 'Oct 24, 2023', amount: '-£12.40', icon: Car, isPositive: false },
  { id: 4, title: 'Transfer to John', date: 'Oct 23, 2023', amount: '-£50.00', icon: Send, isPositive: false },
];

const linkedAccounts = [
  { id: 1, bank: 'Monzo', type: 'Debit', last4: '4321', logo: 'M' },
  { id: 2, bank: 'Barclays', type: 'Credit', last4: '9876', logo: 'B' },
];

export default function WalletDashboardPage() {
  const router = useRouter();
  const balance = 2450.75;

  return (
    <div className="max-w-[1280px] mx-auto w-full pb-20 md:pb-10 min-h-screen bg-[var(--background)]">
      {/* App Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between sticky top-0 bg-[var(--background)] z-50">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-primary)] hover:bg-gray-100 transition-default -ml-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-playfair text-xl font-bold text-[var(--text-primary)] absolute left-1/2 -translate-x-1/2">
          Wallet
        </h1>
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--text-primary)] hover:bg-gray-100 transition-default -mr-2">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 mt-4 max-w-4xl mx-auto">
        {/* Balance Card with Glassmorphism */}
        <div className="relative overflow-hidden rounded-[24px] p-7 md:p-8 mb-8 border-[1.5px] border-amber-400/50 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">
          {/* Blobs */}
          <div className="absolute -top-10 -right-10 w-[150px] h-[150px] bg-amber-400/60 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
          <div className="absolute -bottom-10 -left-10 w-[180px] h-[180px] bg-orange-400/60 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
          
          {/* Glass background */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/40 to-orange-400/10 backdrop-blur-xl -z-10" />

          <div className="relative z-10">
            <div className="flex justify-between items-center mb-3">
              <span className="text-white/90 text-base tracking-wide font-medium">Total Balance</span>
              <div className="w-8 h-5 border border-white/80 rounded-md flex items-center justify-center">
                <div className="w-3 h-2 bg-white/80 rounded-[2px]" />
              </div>
            </div>
            
            <h2 className="text-playfair text-4xl md:text-5xl font-bold text-white tracking-wider mb-8">
              £{balance.toFixed(2)}
            </h2>

            <div className="flex justify-between max-w-sm mx-auto w-full px-2">
              <Link href="/wallet/send" className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 rounded-full border border-white/30 bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-default">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
                <span className="text-white text-xs font-bold">Send</span>
              </Link>
              <Link href="/wallet/receive" className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 rounded-full border border-white/30 bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-default">
                  <ArrowDownLeft className="w-6 h-6 text-white" />
                </div>
                <span className="text-white text-xs font-bold">Receive</span>
              </Link>
              <button className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 rounded-full border border-white/30 bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-default">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <span className="text-white text-xs font-bold">Top Up</span>
              </button>
              <Link href="/wallet/history" className="flex flex-col items-center gap-2 group">
                <div className="w-12 h-12 rounded-full border border-white/30 bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-default">
                  <History className="w-6 h-6 text-white" />
                </div>
                <span className="text-white text-xs font-bold">History</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Linked Accounts */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
              Linked Accounts
            </h3>
            <button className="text-[var(--primary)] font-bold text-sm hover:text-[var(--primary-medium)]">
              Add New
            </button>
          </div>
          
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {linkedAccounts.map((account) => (
              <div key={account.id} className="w-[180px] shrink-0 bg-white border border-[var(--border-light)] rounded-2xl p-4 flex flex-col h-[120px]">
                <div className="flex justify-between items-start mb-auto">
                  <div className="w-8 h-8 rounded-full bg-[var(--primary-light)] flex items-center justify-center text-[var(--primary)] font-bold text-sm">
                    {account.logo}
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-[var(--text-secondary)]" />
                </div>
                <div>
                  <h4 className="font-bold text-[var(--text-primary)] text-base leading-tight">
                    {account.bank}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">
                    {account.type} •••• {account.last4}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-playfair text-xl font-bold text-[var(--text-primary)]">
              Recent Transactions
            </h3>
            <Link href="/wallet/history" className="text-[var(--primary)] font-bold text-sm hover:text-[var(--primary-medium)]">
              See All
            </Link>
          </div>
          
          <div className="bg-white rounded-2xl border border-[var(--border-light)] overflow-hidden">
            {recentTransactions.map((tx, index) => (
              <div key={tx.id} className={cn(
                "flex items-center gap-4 p-4",
                index !== recentTransactions.length - 1 && "border-b border-[var(--border-light)]"
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
                    {tx.date}
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
