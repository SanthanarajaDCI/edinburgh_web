"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Search,
  Mic,
  Sparkles,
  Lock,
  Play,
  MonitorPlay,
  Briefcase,
  Trophy,
  Dumbbell,
  Image as ImageIcon,
  Video,
  PenTool,
  FileText,
  Beaker,
  Star,
  UtensilsCrossed,
  CloudSun,
  Wallet,
  Bell,
  ScanLine,
  Send,
  Car,
  PlusSquare,
  ArrowRight,
  Heart,
  MessageCircle,
  GraduationCap,
  ShieldCheck,
  MessageSquare,
  LayoutGrid,
  Tv,
  Zap,
  Settings,
} from "lucide-react";

export default function HomePage() {
  const router = useRouter();
  const [greeting, setGreeting] = useState("Welcome");
  const [searchQuery, setSearchQuery] = useState("");
  const [liked, setLiked] = useState(false);
  const [dashOffset, setDashOffset] = useState(251);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");

    // Trigger animation after initial render
    const timer = setTimeout(() => {
      setDashOffset(62);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      router.push(`/ai/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F8FD] font-sans pb-24">
      {/* Hero Section */}
      <section className="pt-20 pb-24 px-4 flex flex-col items-center text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm mb-8">
          <div className="w-2 h-2 rounded-full bg-blue-600" />
          <span className="text-xs font-bold text-gray-600 tracking-wider">INTELLIGENCE REDEFINED</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
          The World&apos;s First AI-Powered<br />
          <span className="text-blue-600">Free Super Platform</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
          Everything in one place. Shop. Learn. Work. Create. Watch. Play. Travel.
          Connect. Powered by advanced autonomous intelligence.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="px-8 py-3.5 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all w-full sm:w-auto">
            Explore Platform
          </button>
          <button className="px-8 py-3.5 bg-transparent text-black font-bold rounded-full border border-gray-300 hover:bg-gray-50 transition-all w-full sm:w-auto">
            Create Free Account
          </button>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Personal Dashboard Glance */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-[-20px] relative z-10 bg-white/60 backdrop-blur-md p-4 rounded-3xl border border-white shadow-sm mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
              M
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">{greeting}, Mac!</h2>
              <div className="flex items-center gap-2 text-sm text-gray-500 font-medium mt-0.5">
                <CloudSun className="w-4 h-4 text-orange-400" />
                <span>Edinburgh, 14°C</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Link href="/wallet" className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:scale-105 transition-all">
              <Wallet className="w-4 h-4 text-gray-600" />
              <span className="font-bold text-gray-900">£1,240.50</span>
            </Link>
            <Link href="/notifications" className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-sm border border-gray-100 hover:shadow-md hover:scale-105 transition-all relative">
              <Bell className="w-4 h-4 text-gray-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-4 gap-4 relative z-10 mb-8 max-w-2xl mx-auto">
          <Link href="/qr-scanner" className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center group-hover:scale-105 group-hover:shadow-md transition-all">
              <ScanLine className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors" />
            </div>
            <span className="text-xs font-bold text-gray-600">Scan</span>
          </Link>
          <Link href="/wallet/send" className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center group-hover:scale-105 group-hover:shadow-md transition-all">
              <Send className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-xs font-bold text-gray-600">Transfer</span>
          </Link>
          <Link href="/ride-hailing" className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center group-hover:scale-105 group-hover:shadow-md transition-all">
              <Car className="w-6 h-6 text-emerald-600" />
            </div>
            <span className="text-xs font-bold text-gray-600">Ride</span>
          </Link>
          <Link href="/creator/story/create" className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 bg-gray-900 rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-105 group-hover:shadow-md group-hover:bg-black transition-all">
              <PlusSquare className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-bold text-gray-600">Post</span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center relative z-10 mb-20">
          <div className="flex items-center bg-white rounded-full px-6 py-4 shadow-xl shadow-blue-900/5 border border-white w-full max-w-2xl group transition-all hover:shadow-2xl">
            <Search className="w-5 h-5 text-gray-400 mr-4 shrink-0 group-focus-within:text-blue-600 transition-colors" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Ask anything... 'Find me a remote engineering job'"
              className="flex-1 text-[15px] text-gray-800 placeholder:text-gray-400 outline-none bg-transparent min-w-0"
            />
            <div className="flex items-center gap-4 ml-4 shrink-0 border-l pl-4 border-gray-100">
              <Mic className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
              <Sparkles className="w-5 h-5 text-blue-600 hover:text-blue-700 cursor-pointer transition-colors hover:scale-110" />
            </div>
          </div>
        </div>

        {/* Marketplace */}
        <section>
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Marketplace</h2>
              <p className="text-sm text-gray-500">Curated luxury and essential goods.</p>
            </div>
            <Link href="/marketplace" className="text-sm font-bold text-blue-700 hover:underline">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/marketplace/product/prod_1" className="group block cursor-pointer">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-3 bg-gray-100">
                <Image src="https://picsum.photos/seed/scarf/400/500" alt="Scarf" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full flex items-center gap-1">
                  <Lock className="w-3 h-3 text-gray-700" />
                  <span className="text-xs font-bold text-gray-700">Sign in to Buy</span>
                </div>
              </div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Heritage Cashmere Scarf</h3>
              <p className="text-sm text-gray-500">£249.00</p>
            </Link>

            <Link href="/marketplace/product/prod_2" className="group block cursor-pointer">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-3 bg-gray-100">
                <Image src="https://picsum.photos/seed/hub/400/500" alt="AI Hub" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                <div className="absolute top-4 right-4 bg-blue-600 px-3 py-1.5 rounded-full">
                  <span className="text-xs font-bold text-white">Trending</span>
                </div>
              </div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">AI Home Hub</h3>
              <p className="text-sm text-gray-500">£199.00</p>
            </Link>

            <Link href="/marketplace/product/prod_3" className="group block cursor-pointer">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-3 bg-gray-100">
                <Image src="https://picsum.photos/seed/watch/400/500" alt="Watch" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Pro Series Watch</h3>
              <p className="text-sm text-gray-500">£399.00</p>
            </Link>

            <Link href="/marketplace/product/prod_4" className="group block cursor-pointer">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-3 bg-gray-100">
                <Image src="https://picsum.photos/seed/bag/400/500" alt="Travel Set" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Executive Travel Set</h3>
              <p className="text-sm text-gray-500">£549.00</p>
            </Link>
          </div>
        </section>

        {/* Local Businesses & Map */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 relative h-[400px] rounded-3xl overflow-hidden border border-gray-200">
            <Image src="https://picsum.photos/seed/map/800/400" alt="Map" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h2 className="text-4xl font-bold text-gray-900 bg-white/70 backdrop-blur-sm px-6 py-2 rounded-2xl">Edinburgh</h2>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Local Businesses</h2>
            <p className="text-sm text-gray-600 mb-6">Discover verified local businesses, artisans, and corporate partners in your immediate vicinity.</p>

            <div className="space-y-4">
              <Link href="/business/detail/biz_1" className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white shrink-0">
                  <UtensilsCrossed className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">The Highland Kitchen</h4>
                  <p className="text-xs text-gray-500 mt-0.5">5.0 ★ • 1.2k Reviews</p>
                </div>
              </Link>

              <Link href="/business/detail/biz_2" className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Caledonian Tech Hub</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Verified Partner</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Global Jobs & Dining */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Global Jobs</h2>
              <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
                <span className="text-gray-400">↗</span>
              </button>
            </div>

            <div className="space-y-4 flex-1">
              <Link href="/jobs/detail/job_1" className="flex items-center justify-between bg-[#F8FAFC] p-4 rounded-2xl hover:shadow-md hover:-translate-y-1 transition-all group">
                <div className="flex items-center gap-3">
                  <Image src="https://picsum.photos/seed/job1/100/100" alt="Company Logo" width={40} height={40} className="rounded-xl shrink-0 object-cover" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Senior AI Architect</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Remote • Edinburgh Cashmere</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="w-3 h-3 text-gray-400" />
                  <span className="px-4 py-1.5 rounded-full border border-gray-300 text-xs font-bold text-gray-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">Apply</span>
                </div>
              </Link>

              <Link href="/jobs/detail/job_2" className="flex items-center justify-between bg-[#F8FAFC] p-4 rounded-2xl hover:shadow-md hover:-translate-y-1 transition-all group">
                <div className="flex items-center gap-3">
                  <Image src="https://picsum.photos/seed/job2/100/100" alt="Company Logo" width={40} height={40} className="rounded-xl shrink-0 object-cover" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Global Marketing Lead</h4>
                    <p className="text-xs text-gray-500 mt-0.5">London • Stripe Partners</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-4 py-1.5 rounded-full border border-gray-300 text-xs font-bold text-gray-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">Apply</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-[300px]">
            <Image src="https://picsum.photos/seed/pizza/800/400" alt="Dining" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Dining Explorer</h2>
                <p className="text-sm text-white/80">Browse 5,000+ curated dining experiences</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white">Fine Dining</span>
                <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white">Vegan</span>
                <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white">Nightlife</span>
              </div>
            </div>
          </div>
        </section>

        {/* Trending Feed & Entertainment */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Trending Feed</h2>
              <button className="text-gray-400 hover:text-gray-600">•••</button>
            </div>
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex-1 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Link href="/creator/profile/alex_vision" className="w-10 h-10 rounded-full overflow-hidden hover:opacity-80 transition-opacity">
                  <Image src="https://i.pravatar.cc/150?img=11" alt="Avatar" width={40} height={40} className="object-cover w-full h-full" />
                </Link>
                <div>
                  <Link href="/creator/profile/alex_vision" className="text-sm font-bold text-gray-900 hover:underline">@alex_vision</Link>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <Link href="/creator/content/post_1" className="block">
                <p className="text-sm text-gray-800 mb-4 leading-relaxed group-hover:text-gray-900">
                  Just deployed the new AI model for the Marketplace. The latency is practically zero! 🚀 #BuildWithIntelligence
                </p>
                <div className="relative h-[200px] rounded-2xl overflow-hidden mb-4">
                  <Image src="https://picsum.photos/seed/edinburgh/600/300" alt="Edinburgh" fill className="object-cover hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
              </Link>
              <div className="flex gap-4 text-gray-500 text-sm">
                <button
                  onClick={() => setLiked(!liked)}
                  className={cn("flex items-center gap-1.5 transition-colors", liked ? "text-red-500" : "hover:text-red-500")}
                >
                  <Heart className={cn("w-4 h-4", liked && "fill-current")} /> {liked ? "1.2k" : "1.2k"}
                </button>
                <Link href="/creator/content/post_1" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                  <MessageCircle className="w-4 h-4" /> 8
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Entertainment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
              <Link href="/entertainment/video" className="relative rounded-3xl overflow-hidden group block">
                <Image src="https://picsum.photos/seed/space/400/400" alt="Video" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase w-fit mb-2">Exclusive</span>
                  <h4 className="text-white font-bold text-lg">The Singularity</h4>
                </div>
              </Link>

              <Link href="/entertainment/music" className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-center hover:shadow-md transition-shadow group">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Top Album</p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl shrink-0 group-hover:scale-105 transition-transform relative overflow-hidden">
                    <Image src="https://picsum.photos/seed/album/150/150" alt="Album Cover" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Midnight City</h4>
                    <p className="text-xs text-gray-500 mt-1">The Visionaries</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shrink-0 hover:bg-gray-800 transition-colors">
                    <Play className="w-4 h-4 ml-1" />
                  </button>
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-blue-600 rounded-full" />
                  </div>
                  <span className="text-[10px] text-gray-500 shrink-0">1:24 / 4:18</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Super Gaming & Health */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#E4E6F1] rounded-3xl p-8 flex flex-col">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Super Gaming</h2>
            <p className="text-sm text-gray-600 mb-8">Instant play. No downloads required.</p>
            <div className="grid grid-cols-3 gap-3">
              <Link href="/entertainment/gaming" className="bg-white/40 backdrop-blur aspect-square rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-white/70 hover:scale-105 transition-all group">
                <MonitorPlay className="w-6 h-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold text-gray-800">Arena Pro</span>
              </Link>
              <Link href="/entertainment/gaming" className="bg-white/40 backdrop-blur aspect-square rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-white/70 hover:scale-105 transition-all group">
                <Trophy className="w-6 h-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold text-gray-800">Grandmaster</span>
              </Link>
              <Link href="/entertainment/gaming" className="bg-white/40 backdrop-blur aspect-square rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-white/70 hover:scale-105 transition-all group">
                <Sparkles className="w-6 h-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold text-gray-800">Starship</span>
              </Link>
            </div>
          </div>

          <Link href="/fitness" className="bg-white rounded-3xl p-8 border-2 border-blue-100 flex flex-col justify-center hover:border-blue-300 hover:shadow-md transition-all group block">
            <h2 className="text-xl font-bold text-gray-900 mb-8 group-hover:text-blue-600 transition-colors">Health & Fitness</h2>
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full flex items-center justify-center relative">
                <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 96 96">
                  {/* Background Circle */}
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-blue-100"
                  />
                  {/* Progress Circle */}
                  <circle 
                    cx="48" 
                    cy="48" 
                    r="40" 
                    stroke="currentColor" 
                    strokeWidth="8" 
                    fill="none" 
                    className="text-blue-600 transition-all duration-1000 ease-out" 
                    strokeDasharray="251.2" 
                    strokeDashoffset={dashOffset} 
                    strokeLinecap="round" 
                  />
                </svg>
                <span className="text-xl font-bold text-gray-900">75%</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Daily Goal</h4>
                <p className="text-sm text-gray-500 mt-1 mb-3">6,500 / 8,000 steps</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-black text-white text-[10px] font-bold rounded-full group-hover:bg-blue-600 transition-colors">Workouts</span>
                  <span className="px-3 py-1 border border-gray-200 text-gray-600 text-[10px] font-bold rounded-full">Nutrition</span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Core Platform Features */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Core Platform Features</h2>
            <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded-md">ALL-IN-ONE</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/education" className="relative rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all block group aspect-[4/3]">
              <Image src="https://picsum.photos/seed/edu/400/300" alt="Education" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <GraduationCap className="w-6 h-6 text-white mb-2" />
                <h4 className="text-sm font-bold text-white leading-tight">Education</h4>
                <p className="text-[11px] text-white/80 mt-1 line-clamp-1">Courses & Learning</p>
              </div>
            </Link>

            <Link href="/insurance" className="relative rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all block group aspect-[4/3]">
              <Image src="https://picsum.photos/seed/ins/400/300" alt="Insurance" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <ShieldCheck className="w-6 h-6 text-white mb-2" />
                <h4 className="text-sm font-bold text-white leading-tight">Insurance</h4>
                <p className="text-[11px] text-white/80 mt-1 line-clamp-1">Protect your assets</p>
              </div>
            </Link>

            <Link href="/inbox" className="relative rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all block group aspect-[4/3]">
              <Image src="https://picsum.photos/seed/msg/400/300" alt="Inbox & Chat" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <MessageSquare className="w-6 h-6 text-white mb-2" />
                <h4 className="text-sm font-bold text-white leading-tight">Inbox & Chat</h4>
                <p className="text-[11px] text-white/80 mt-1 line-clamp-1">Connect instantly</p>
              </div>
            </Link>

            <Link href="/mini-programs" className="relative rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all block group aspect-[4/3]">
              <Image src="https://picsum.photos/seed/apps/400/300" alt="Mini Programs" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <LayoutGrid className="w-6 h-6 text-white mb-2" />
                <h4 className="text-sm font-bold text-white leading-tight">Mini Programs</h4>
                <p className="text-[11px] text-white/80 mt-1 line-clamp-1">Third-party apps</p>
              </div>
            </Link>

            <Link href="/channels" className="relative rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all block group aspect-[4/3]">
              <Image src="https://picsum.photos/seed/chan/400/300" alt="Channels" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <Tv className="w-6 h-6 text-white mb-2" />
                <h4 className="text-sm font-bold text-white leading-tight">Channels</h4>
                <p className="text-[11px] text-white/80 mt-1 line-clamp-1">Creator subs</p>
              </div>
            </Link>

            <Link href="/creator/story/create" className="relative rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all block group aspect-[4/3]">
              <Image src="https://picsum.photos/seed/crt/400/300" alt="Create Hub" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <Zap className="w-6 h-6 text-white mb-2" />
                <h4 className="text-sm font-bold text-white leading-tight">Create Hub</h4>
                <p className="text-[11px] text-white/80 mt-1 line-clamp-1">Publish content</p>
              </div>
            </Link>

            <Link href="/ai/hub" className="relative rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all block group aspect-[4/3]">
              <Image src="https://picsum.photos/seed/ai2/400/300" alt="AI Workshop" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <Sparkles className="w-6 h-6 text-white mb-2" />
                <h4 className="text-sm font-bold text-white leading-tight">AI Workshop</h4>
                <p className="text-[11px] text-white/80 mt-1 line-clamp-1">Smart tools</p>
              </div>
            </Link>

            <Link href="/settings" className="relative rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all block group aspect-[4/3]">
              <Image src="https://picsum.photos/seed/set/400/300" alt="Settings" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <Settings className="w-6 h-6 text-white mb-2" />
                <h4 className="text-sm font-bold text-white leading-tight">Settings</h4>
                <p className="text-[11px] text-white/80 mt-1 line-clamp-1">Manage</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Banner */}
        <section className="bg-[#0B0D17] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <Image src="https://picsum.photos/seed/tech_banner/1200/600" alt="AI Background" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D17]/80 via-transparent to-[#0B0D17]/80" />
          <div className="relative z-10 max-w-lg mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Presence,<br />Powered by AI.</h2>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              Create a professional website for free in under 60 seconds. Our AI handles the design, copy, and SEO while you focus on your vision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-white text-black font-bold rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                Build Website <Lock className="w-3 h-3" />
              </button>
              <button className="px-6 py-3 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Global Community */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">Global Community</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-blue-600 text-blue-600" />)}
              </div>
              <p className="text-sm text-gray-700 italic mb-6 leading-relaxed">
                &ldquo;Edinburgh Cashmere has transformed how I manage my freelance career. From the AI writing tools to the global job board, it&apos;s the only app I need.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image src="https://i.pravatar.cc/150?img=32" alt="Sarah Jenkins" width={32} height={32} className="rounded-full object-cover shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Sarah Jenkins</h4>
                  <p className="text-[10px] text-gray-500">Creative Director, NY</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-blue-600 text-blue-600" />)}
              </div>
              <p className="text-sm text-gray-700 italic mb-6 leading-relaxed">
                &ldquo;The Marketplace quality is unmatched. I bought my first cashmere scarf here and the experience was seamless from discovery to delivery.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image src="https://i.pravatar.cc/150?img=12" alt="Michael Chen" width={32} height={32} className="rounded-full object-cover shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Michael Chen</h4>
                  <p className="text-[10px] text-gray-500">Tech Entrepreneur</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-blue-600 text-blue-600" />)}
              </div>
              <p className="text-sm text-gray-700 italic mb-6 leading-relaxed">
                &ldquo;Finally, a super app that doesn&apos;t feel cluttered. The design is beautiful and the AI assistance is actually helpful, not intrusive.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image src="https://i.pravatar.cc/150?img=47" alt="Elena Rodriguez" width={32} height={32} className="rounded-full object-cover shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Elena Rodriguez</h4>
                  <p className="text-[10px] text-gray-500">Product Designer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insights & Intelligence */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-8">Insights & Intelligence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="cursor-pointer group">
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden mb-4">
                <Image src="https://picsum.photos/seed/insight1/600/400" alt="Article 1" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-2 block">Heritage</span>
              <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">The Future of Luxury: How AI is Preserving Craftsmanship</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Explore how machine learning models are assisting traditional weavers in maintaining the highest quality standards...</p>
            </div>
            <div className="cursor-pointer group">
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden mb-4">
                <Image src="https://picsum.photos/seed/insight2/600/400" alt="Article 2" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-2 block">Technology</span>
              <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">Navigating the Global Job Market in 2024</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Key trends shaping the future of work and how remote-first platforms are bridging the talent gap globally...</p>
            </div>
            <div className="cursor-pointer group">
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden mb-4">
                <Image src="https://picsum.photos/seed/insight3/600/400" alt="Article 3" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-2 block">Intelligence</span>
              <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">Understanding Generative AI: From Prompts to Profits</h3>
              <p className="text-xs text-gray-500 leading-relaxed">A comprehensive guide for entrepreneurs looking to leverage AI tools for business scaling and content creation...</p>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="mt-20 pt-10 pb-6 border-t border-gray-200/60 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900">Edinburgh Cashmere</h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#" className="text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</Link>
            <Link href="#" className="text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors">Marketplace Support</Link>
            <Link href="#" className="text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors">Job Board</Link>
            <Link href="#" className="text-xs font-bold text-gray-500 hover:text-gray-900 transition-colors">Corporate Solutions</Link>
          </div>
        </div>
        <p className="text-[10px] text-gray-400 text-center">
          © 2024 Edinburgh Cashmere. Heritage meets Intelligence.
        </p>
      </footer>

      {/* Floating Action Button */}
      <Link href="/creator/story/create" className="fixed bottom-24 right-6 sm:bottom-6 sm:right-10 z-50 w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-700 hover:scale-105 transition-all group">
        <PlusSquare className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
      </Link>
    </div>
  );
}
