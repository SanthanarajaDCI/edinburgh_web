"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Settings,
  Mail,
  Phone,
  Star,
  Share2,
  ShoppingBag,
  Wallet,
  Briefcase,
  Bookmark,
  Tv,
  LayoutGrid,
  ChevronRight,
  Plus,
  LogOut,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import StatItem from "@/components/ui/StatItem";

const menuItems = [
  { icon: ShoppingBag, label: "Orders", href: "#" },
  { icon: Wallet, label: "Wallet", href: "/wallet" },
  { icon: Briefcase, label: "Applications", href: "/jobs/applications" },
  { icon: Bookmark, label: "Saved Items", href: "#" },
  { icon: Tv, label: "Subscription Channels", href: "/channels" },
  { icon: LayoutGrid, label: "Mini Programs", href: "/mini-programs" },
  { icon: Star, label: "Creator Profile", href: "#" },
];

const recentOrders = [
  { name: "Cashmere Scarf", date: "Ordered: Oct 12, 2023", price: "$120.00" },
  { name: "Tech Blazer", date: "Ordered: Oct 05, 2023", price: "$450.00" },
];

const activityHighlights = [
  { text: "Application for 'Local Artisan Partner' approved.", time: "2 hours ago", color: "bg-[var(--accent)]" },
  { text: "New followers from Edinburgh tech scene.", time: "Yesterday", color: "bg-blue-500" },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"settings" | "posts" | "saved">("settings");
  const [activeMenu, setActiveMenu] = useState("Orders");

  const tabs = [
    { key: "settings" as const, label: "Settings" },
    { key: "posts" as const, label: "Posts" },
    { key: "saved" as const, label: "Saved" },
  ];

  return (
    <div className="max-w-[1280px] mx-auto w-full">
      {/* Profile Header */}
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[var(--shadow-sm)] border border-[var(--border-light)]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar */}
            <div className="shrink-0">
              <div className="w-[108px] h-[108px] rounded-full border-[3px] border-[var(--accent)] p-1">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="https://picsum.photos/seed/userprofile/200/200"
                    alt="John Doe"
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
                <div className="flex items-center gap-3">
                  <h1 className="text-playfair text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                    John Doe
                  </h1>
                  <Badge variant="gold">Gold Member</Badge>
                </div>
                <div className="flex items-center gap-2 sm:ml-auto">
                  <Link
                    href="/profile"
                    className="px-5 py-2.5 bg-[var(--primary)] text-white text-sm font-bold rounded-xl hover:bg-[var(--primary)]/90 transition-default"
                  >
                    Edit Profile
                  </Link>
                  <Link href="/settings" className="w-10 h-10 rounded-xl border border-[var(--border-medium)] flex items-center justify-center hover:bg-[var(--primary-light)] transition-default">
                    <Settings className="w-4 h-4 text-[var(--primary)]" />
                  </Link>
                  <button className="w-10 h-10 rounded-xl border border-[var(--border-medium)] flex items-center justify-center hover:bg-[var(--primary-light)] transition-default">
                    <Share2 className="w-4 h-4 text-[var(--primary)]" />
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-center sm:justify-start gap-8 mt-4">
                <StatItem label="Posts" value="142" />
                <StatItem label="Followers" value="12.5K" />
                <StatItem label="Following" value="248" />
              </div>

              {/* Contact */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-4">
                <span className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
                  <Mail className="w-4 h-4 text-[var(--primary)]" />
                  johndoe@example.com
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)]">
                  <Phone className="w-4 h-4 text-[var(--primary)]" />
                  +44 7700 900077
                </span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-6 bg-[var(--primary-light)] rounded-2xl px-5 py-4">
            <p className="text-sm text-[var(--text-primary)] leading-relaxed italic">
              &ldquo;Digital creator and cashmere enthusiast based in Edinburgh.
              Exploring the intersection of fashion, technology, and local
              business.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex border-b border-[var(--border-light)]">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "px-6 py-3 text-sm font-medium border-b-2 transition-default",
                activeTab === tab.key
                  ? "text-[var(--primary)] border-[var(--primary)] font-bold"
                  : "text-[var(--text-secondary)] border-transparent hover:text-[var(--primary)]"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === "settings" && (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Settings Sidebar */}
            <div className="w-full lg:w-[220px] shrink-0">
              <div className="bg-white rounded-2xl shadow-[var(--shadow-sm)] border border-[var(--border-light)] overflow-hidden">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeMenu === item.label;
                  return (
                    <button
                      key={item.label}
                      onClick={() => setActiveMenu(item.label)}
                      className={cn(
                        "flex items-center gap-3 w-full px-4 py-3.5 text-sm transition-default text-left",
                        isActive
                          ? "text-[var(--primary)] font-bold bg-[var(--primary-light)] border-l-3 border-[var(--primary)]"
                          : "text-[var(--text-secondary)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)]"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Settings Content */}
            <div className="flex-1 flex flex-col gap-6">
              {activeMenu === "Orders" && (
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white rounded-2xl p-5 shadow-[var(--shadow-sm)] border border-[var(--border-light)]">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-playfair text-lg font-bold text-[var(--text-primary)]">
                        Recent Orders
                      </h3>
                      <button className="text-xs text-[var(--text-secondary)] hover:text-[var(--primary)] transition-default">
                        View All
                      </button>
                    </div>
                    {recentOrders.map((order) => (
                      <div
                        key={order.name}
                        className="flex items-center gap-3 py-3 border-b border-[var(--border-light)] last:border-0"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[var(--background)] shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-[var(--text-primary)] truncate">
                            {order.name}
                          </p>
                          <p className="text-xs text-[var(--accent)]">
                            {order.date}
                          </p>
                        </div>
                        <span className="text-sm font-bold text-[var(--text-primary)]">
                          {order.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeMenu === "Wallet" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Available Balance Card */}
                  <div className="bg-gradient-to-br from-[var(--primary)] to-[#1B2D45] rounded-2xl p-5 text-white">
                    <p className="text-xs text-white/60 uppercase tracking-wider">
                      Available Balance
                    </p>
                    <p className="text-3xl font-bold mt-1">
                      $3,240<span className="text-lg text-white/60">.50</span>
                    </p>
                    <div className="mt-6">
                      <p className="text-xs text-white/40 uppercase tracking-wider">
                        Active Card
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-sm text-white/80 tracking-[0.2em]">
                          •••• •••• •••• 1234
                        </span>
                        <button className="px-4 py-1.5 bg-[var(--accent)] text-[var(--primary)] text-xs font-bold rounded-lg hover:bg-[var(--accent-hover)] transition-default">
                          TOP UP
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-sm)] border border-[var(--border-light)] flex flex-col items-center justify-center text-center">
                    <Wallet className="w-10 h-10 text-[var(--primary)] mb-3" />
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">Wallet Dashboard</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">View your full transaction history and manage payment methods.</p>
                    <Link href="/wallet" className="px-5 py-2 bg-[var(--primary)] text-white text-sm font-bold rounded-xl hover:bg-[var(--primary)]/90 transition-default">
                      Open Wallet
                    </Link>
                  </div>
                </div>
              )}

              {activeMenu === "Applications" && (
                <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-sm)] border border-[var(--border-light)] text-center">
                  <Briefcase className="w-12 h-12 text-[var(--primary)] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">My Applications</h3>
                  <p className="text-[var(--text-secondary)] mb-6">Track your job and business partnership applications.</p>
                  <Link href="/jobs/applications" className="inline-flex px-6 py-2 bg-[var(--primary)] text-white font-bold rounded-xl hover:bg-[var(--primary)]/90 transition-default">
                    View Applications
                  </Link>
                </div>
              )}
              
              {activeMenu === "Saved Items" && (
                <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-sm)] border border-[var(--border-light)] text-center">
                  <Bookmark className="w-12 h-12 text-[var(--primary)] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Saved Items</h3>
                  <p className="text-[var(--text-secondary)] mb-6">View your saved products, jobs, and articles.</p>
                </div>
              )}

              {activeMenu === "Subscription Channels" && (
                <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-sm)] border border-[var(--border-light)] text-center">
                  <Tv className="w-12 h-12 text-[var(--primary)] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">My Channels</h3>
                  <p className="text-[var(--text-secondary)] mb-6">Manage your channel subscriptions.</p>
                  <Link href="/channels" className="inline-flex px-6 py-2 bg-[var(--primary)] text-white font-bold rounded-xl hover:bg-[var(--primary)]/90 transition-default">
                    Browse Channels
                  </Link>
                </div>
              )}

              {activeMenu === "Mini Programs" && (
                <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-sm)] border border-[var(--border-light)] text-center">
                  <LayoutGrid className="w-12 h-12 text-[var(--primary)] mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Mini Programs</h3>
                  <p className="text-[var(--text-secondary)] mb-6">Access your frequently used tools and mini apps.</p>
                  <Link href="/mini-programs" className="inline-flex px-6 py-2 bg-[var(--primary)] text-white font-bold rounded-xl hover:bg-[var(--primary)]/90 transition-default">
                    Open Mini Programs
                  </Link>
                </div>
              )}

              {activeMenu === "Creator Profile" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Activity Highlights */}
                  <div className="bg-white rounded-2xl p-5 shadow-[var(--shadow-sm)] border border-[var(--border-light)]">
                    <h3 className="text-playfair text-lg font-bold text-[var(--text-primary)] mb-4">
                      Activity Highlights
                    </h3>
                    {activityHighlights.map((act, i) => (
                      <div key={i} className="flex items-start gap-3 py-2">
                        <div className={cn("w-1 h-10 rounded-full shrink-0 mt-0.5", act.color)} />
                        <div>
                          <p className="text-sm text-[var(--text-primary)]">
                            {act.text}
                          </p>
                          <p className="text-xs text-[var(--accent)] mt-0.5">
                            {act.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Links */}
                  <div className="bg-white rounded-2xl p-5 shadow-[var(--shadow-sm)] border border-[var(--border-light)]">
                    <h3 className="text-playfair text-lg font-bold text-[var(--text-primary)] mb-4">
                      Quick Links
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="flex flex-col items-center gap-2 py-4 rounded-xl border border-[var(--border-light)] hover:bg-[var(--primary-light)] transition-default">
                        <Plus className="w-6 h-6 text-[var(--primary)]" />
                        <span className="text-sm font-medium text-[var(--text-primary)]">
                          New Post
                        </span>
                      </button>
                      <Link href="/login" className="flex flex-col items-center gap-2 py-4 rounded-xl border border-[var(--border-light)] hover:bg-[var(--primary-light)] transition-default">
                        <LogOut className="w-6 h-6 text-[var(--primary)]" />
                        <span className="text-sm font-medium text-[var(--text-primary)]">
                          Logout
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "posts" && (
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={`https://picsum.photos/seed/post${i}/300/300`}
                  alt={`Post ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 16vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-default" />
              </div>
            ))}
          </div>
        )}

        {activeTab === "saved" && (
          <div className="flex flex-col items-center justify-center py-20">
            <Bookmark className="w-16 h-16 text-[var(--text-secondary)]/20" />
            <h3 className="text-playfair text-2xl font-bold text-[var(--text-secondary)]/60 mt-4">
              No Saved Items
            </h3>
            <p className="text-sm text-[var(--text-secondary)]/40 mt-2">
              Items you save will appear here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
