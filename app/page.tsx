import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  ShoppingBag,
  Briefcase,
  Bot,
  LayoutGrid,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">SuperPlatform</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">
              Log In
            </Link>
            <Link href="/register" className="text-sm font-bold bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">v2.0 Now Live</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
          Everything you need.<br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            In one super app.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          From luxury shopping and global job boards to autonomous AI tools and mini-programs. 
          Experience the future of digital platforms, beautifully designed and powered by intelligence.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/register" className="w-full sm:w-auto px-8 py-4 bg-black text-white text-lg font-bold rounded-full hover:bg-gray-800 transition-all hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
            Start for Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/home" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 text-lg font-bold rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all text-center">
            Explore Preview
          </Link>
        </div>

        {/* Dashboard Preview Image */}
        <div className="mt-20 relative mx-auto max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
          <Image 
            src="https://picsum.photos/seed/dashboard/1200/800" 
            alt="Dashboard Preview" 
            width={1200}
            height={800}
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
          />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              A Complete Ecosystem
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Replace a dozen different apps with one unified platform. We have analyzed your daily needs and integrated the best solutions natively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                <ShoppingBag className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Luxury Marketplace</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Shop curated collections of heritage cashmere, premium tech, and lifestyle goods directly from verified sellers.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Intelligence Hub</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Generate copy, edit videos, design images, and automate workflows with our suite of autonomous AI tools.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-pink-50 rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Job Board</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Discover remote and local career opportunities, or hire top talent using our AI-driven matching algorithms.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                <LayoutGrid className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mini Programs</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Access a growing library of mini-apps like fitness trackers, dining explorers, and ride-hailing services instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics / Trust Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto bg-black rounded-[40px] p-10 md:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-16">
              Trusted by a global community.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <p className="text-5xl font-extrabold text-blue-400 mb-2">2M+</p>
                <p className="text-lg text-gray-400">Active Users</p>
              </div>
              <div>
                <p className="text-5xl font-extrabold text-indigo-400 mb-2">50k+</p>
                <p className="text-lg text-gray-400">Verified Sellers & Partners</p>
              </div>
              <div>
                <p className="text-5xl font-extrabold text-purple-400 mb-2">99.9%</p>
                <p className="text-lg text-gray-400">Platform Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] rounded-[40px] overflow-hidden shadow-xl">
             <Image 
                src="https://picsum.photos/seed/mobile-app/800/1200" 
                alt="Mobile App" 
                fill 
                className="object-cover" 
              />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Lightning fast.<br />Impossibly simple.
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              We&apos;ve engineered every interaction to feel completely native. With zero latency, fluid animations, and a polished design system, navigating the super platform is an absolute joy.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Blazing Performance</h4>
                  <p className="text-gray-500">Built on Next.js with optimized edge routing for instant page loads.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Bank-Grade Security</h4>
                  <p className="text-gray-500">Your wallet, purchases, and data are encrypted end-to-end.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900 tracking-tight">SuperPlatform</span>
          </div>
          <div className="flex gap-6">
             <Link href="#" className="text-sm font-bold text-gray-500 hover:text-gray-900">About</Link>
             <Link href="#" className="text-sm font-bold text-gray-500 hover:text-gray-900">Careers</Link>
             <Link href="#" className="text-sm font-bold text-gray-500 hover:text-gray-900">Privacy</Link>
             <Link href="#" className="text-sm font-bold text-gray-500 hover:text-gray-900">Terms</Link>
          </div>
          <p className="text-sm text-gray-400">© 2026 SuperPlatform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
