import Image from "next/image";
import Link from "next/link";
import {
  Search,
  UtensilsCrossed,
  Briefcase,
  LayoutGrid,
  Dumbbell,
  GraduationCap,
  Wallet,
  Store,
  Car,
  ShieldCheck,
  Video,
  Music,
  Gamepad2,
  Sparkles,
  Tv,
  PenTool,
  ArrowRight
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";

const services = [
  { name: "Marketplace", icon: Store, href: "/marketplace", image: "https://picsum.photos/seed/Marketplace/400/500" },
  { name: "Jobs", icon: Briefcase, href: "/jobs", image: "https://picsum.photos/seed/Careers/400/500" },
  { name: "Business", icon: Store, href: "/business", image: "https://picsum.photos/seed/Biz/400/500" },
  { name: "Restaurants", icon: UtensilsCrossed, href: "/restaurants", image: "https://picsum.photos/seed/Dining/400/500" },
  { name: "Ride Hailing", icon: Car, href: "/ride-hailing", image: "https://picsum.photos/seed/Ride/400/500" },
  { name: "Insurance", icon: ShieldCheck, href: "/insurance", image: "https://picsum.photos/seed/Shield/400/500" },
];

const lifestyle = [
  { name: "Videos", href: "/entertainment/video", image: "https://picsum.photos/seed/vid/400/500", icon: Video },
  { name: "Music", href: "/entertainment/music", image: "https://picsum.photos/seed/mus/400/500", icon: Music },
  { name: "Gaming", href: "/entertainment/gaming", image: "https://picsum.photos/seed/gam/400/500", icon: Gamepad2 },
  { name: "Education", href: "/education", image: "https://picsum.photos/seed/edu2/400/500", icon: GraduationCap },
  { name: "Fitness", href: "/fitness", image: "https://picsum.photos/seed/fit/400/500", icon: Dumbbell },
];

const ecosystem = [
  { name: "AI Hub", href: "/ai/hub", icon: Sparkles, desc: "Smart AI tools", image: "https://picsum.photos/seed/AIHub/400/500" },
  { name: "Mini Programs", href: "/mini-programs", icon: LayoutGrid, desc: "Third-party apps", image: "https://picsum.photos/seed/MiniProg/400/500" },
  { name: "Channels", href: "/channels", icon: Tv, desc: "Creator subscriptions", image: "https://picsum.photos/seed/Channels/400/500" },
  { name: "Creator", href: "/create", icon: PenTool, desc: "Publish content", image: "https://picsum.photos/seed/Creator/400/500" },
  { name: "Wallet", href: "/wallet", icon: Wallet, desc: "Manage finances", image: "https://picsum.photos/seed/Wallets/400/500" },
];

const suggestedRestaurants = [
  { title: "Culina Edinburgh", subtitle: "Fine Dining & Spirits", img: "https://picsum.photos/seed/srest1/600/400", href: "/restaurants/detail/rest_0", rating: "4.9", category: "Fine Dining" },
  { title: "Old Town Bistro", subtitle: "Traditional Scottish", img: "https://picsum.photos/seed/srest2/600/400", href: "/restaurants/detail/rest_1", rating: "4.7", category: "Scottish" },
  { title: "The Royal Grill", subtitle: "Steakhouse & Rooftop", img: "https://picsum.photos/seed/srest3/600/400", href: "/restaurants/detail/rest_2", rating: "4.8", category: "Steakhouse" },
  { title: "Coastal Catch", subtitle: "Fresh Seafood", img: "https://picsum.photos/seed/srest4/600/400", href: "/restaurants/detail/rest_3", rating: "4.6", category: "Seafood" },
];

const recommendedJobs = [
  { title: "Textile Design Specialist", company: "Heritage Mills Ltd • Edinburgh", type: "FULL TIME", img: "https://picsum.photos/seed/djob1/100/100", href: "/jobs/detail/job_0" },
  { title: "Marketing Director", company: "Global Luxury Goods • Remote", type: "SENIOR LEVEL", img: "https://picsum.photos/seed/djob2/100/100", href: "/jobs/detail/job_1" },
];

export default function DiscoverPage() {
  return (
    <div className="max-w-[1280px] mx-auto w-full pb-20">
      {/* Hero Banner & Search */}
      <div className="px-4 sm:px-6 lg:px-8 pt-10 pb-16 bg-gradient-to-br from-blue-50 via-white to-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4 leading-tight">
            Discover Everything.
          </h1>
          <p className="text-gray-500 mb-10 text-base md:text-lg">
            Explore thousands of services, communities, and experiences tailored for you.
          </p>
          <div className="flex items-center bg-white rounded-full px-6 py-4 shadow-xl shadow-blue-900/5 border border-gray-100 transition-all hover:shadow-2xl">
            <Search className="w-5 h-5 text-gray-400 mr-4 shrink-0" />
            <input
              type="text"
              placeholder="Search for restaurants, jobs, mini-programs..."
              className="flex-1 text-[15px] bg-transparent text-gray-900 placeholder-gray-400 outline-none min-w-0"
            />
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors hidden sm:block">
              Search
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {['Marketplace', 'AI Tools', 'Remote Jobs', 'Fine Dining'].map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-600 cursor-pointer hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Essential Services</h2>
          <Link href="/marketplace" className="text-sm font-bold text-blue-600 flex items-center gap-1 hover:underline">
            All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map(service => (
            <Link key={service.name} href={service.href} className="relative rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all block group aspect-[3/4]">
              <Image src={service.image} alt={service.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 20vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 p-5 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 border border-white/30 text-white group-hover:scale-110 group-hover:bg-white group-hover:text-blue-600 transition-all">
                  <service.icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white leading-tight">{service.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Lifestyle & Entertainment (Image Cards) */}
      <div className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-900 text-white my-8 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 overflow-hidden relative">
        {/* Subtle decorative background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="flex items-center justify-between mb-8 relative z-10">
          <h2 className="text-2xl font-bold">Lifestyle & Entertainment</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
          {lifestyle.map(item => (
            <Link key={item.name} href={item.href} className="relative rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)] transition-all block group aspect-[3/4]">
              <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 20vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <item.icon className="w-6 h-6 text-white mb-2" />
                <h4 className="text-sm font-bold text-white leading-tight">{item.name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Ecosystem & Tools */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Super Ecosystem</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {ecosystem.map(item => (
            <Link key={item.name} href={item.href} className="relative rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] transition-all block group aspect-square">
              <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 20vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 border border-white/30 text-white group-hover:bg-white group-hover:text-blue-600 transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white mb-1 leading-tight">{item.name}</h4>
                <p className="text-xs text-gray-300 leading-relaxed truncate">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Suggested Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-100">
        {/* Trending Restaurants */}
        <div>
          <SectionHeader title="Trending Restaurants" icon={UtensilsCrossed} seeAllHref="/restaurants" />
          <div className="flex flex-col gap-4 mt-6">
            {suggestedRestaurants.map((r) => (
              <Link key={r.title} href={r.href} className="flex flex-col sm:flex-row items-center gap-5 bg-white rounded-3xl p-3 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group overflow-hidden">
                <div className="relative w-full sm:w-32 h-40 sm:h-28 rounded-2xl overflow-hidden shrink-0">
                  <Image src={r.img} alt={r.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 640px) 100vw, 128px" />
                  <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
                    <span className="text-[10px] font-bold text-yellow-500">★</span>
                    <span className="text-[10px] font-bold text-gray-900">{r.rating}</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0 p-2 sm:p-0 w-full text-left">
                  <span className="text-[10px] font-bold text-red-500 tracking-wider uppercase mb-1 block">{r.category}</span>
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors truncate">{r.title}</h4>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">{r.subtitle}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-200 hidden sm:flex items-center justify-center mr-4 group-hover:bg-red-50 group-hover:border-red-100 transition-colors text-gray-400 group-hover:text-red-600 shrink-0">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recommended Jobs */}
        <div>
          <SectionHeader title="Recommended Jobs" icon={Briefcase} seeAllHref="/jobs" />
          <div className="flex flex-col gap-4 mt-6">
            {recommendedJobs.map((job) => (
              <Link key={job.title} href={job.href} className="flex items-center gap-4 bg-white border border-gray-100 rounded-3xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 bg-gray-50 p-2 border border-gray-100">
                  <Image src={job.img} alt={job.title} fill className="object-contain p-2 group-hover:scale-110 transition-transform" sizes="64px" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">{job.title}</h4>
                  <p className="text-sm text-gray-500 truncate mt-0.5">{job.company}</p>
                  <span className="inline-block text-[10px] font-bold text-blue-700 mt-2 px-2.5 py-1 bg-blue-50 rounded-md tracking-wider">
                    {job.type}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors text-gray-400 group-hover:text-blue-600 shrink-0">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
