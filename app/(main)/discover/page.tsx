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
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CategoryCard from "@/components/ui/CategoryCard";
import ProductCard from "@/components/ui/ProductCard";

const categories = [
  {
    title: "Businesses",
    subtitle: "Find local shops",
    imageUrl: "https://picsum.photos/seed/Businesses/400/600",
    href: "/business",
  },
  {
    title: "Restaurants",
    subtitle: "Top places to eat",
    imageUrl: "https://picsum.photos/seed/Restaurants/400/600",
    href: "/restaurants",
  },
  {
    title: "Jobs",
    subtitle: "Explore careers",
    imageUrl: "https://picsum.photos/seed/Jobs/400/600",
    href: "/jobs",
  },
  {
    title: "Mini Programs",
    subtitle: "New experiences",
    imageUrl: "https://picsum.photos/seed/MiniPrograms/400/600",
    href: "/mini-programs",
  },
];

const suggestedRestaurants = [
  { title: "Culina Edinburgh", subtitle: "Fine Dining & Spirits", img: "https://picsum.photos/seed/srest1/300/200", href: "/restaurants/detail/rest_0" },
  { title: "Old Town Bistro", subtitle: "Traditional Scottish", img: "https://picsum.photos/seed/srest2/300/200", href: "/restaurants/detail/rest_1" },
  { title: "The Royal Grill", subtitle: "Steakhouse & Rooftop", img: "https://picsum.photos/seed/srest3/300/200", href: "/restaurants/detail/rest_2" },
  { title: "Coastal Catch", subtitle: "Fresh Seafood", img: "https://picsum.photos/seed/srest4/300/200", href: "/restaurants/detail/rest_3" },
];

const recommendedJobs = [
  { title: "Textile Design Specialist", company: "Heritage Mills Ltd • Edinburgh", type: "FULL TIME", img: "https://picsum.photos/seed/djob1/100/100", href: "/jobs/detail/job_0" },
  { title: "Marketing Director", company: "Global Luxury Goods • Remote", type: "SENIOR LEVEL", img: "https://picsum.photos/seed/djob2/100/100", href: "/jobs/detail/job_1" },
];

const miniPrograms = [
  { name: "Fitness Hub", icon: Dumbbell, href: "/fitness" },
  { name: "Library", icon: GraduationCap, href: "/education" },
  { name: "Education", icon: GraduationCap, href: "/education" },
  { name: "Payments", icon: Wallet, href: "/wallet" },
  { name: "Analytics", icon: LayoutGrid, href: "#" },
  { name: "Community", icon: Store, href: "#" },
];

export default function DiscoverPage() {
  return (
    <div className="max-w-[1280px] mx-auto w-full">
      {/* Page Header */}
      <div className="px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <h1 className="text-playfair text-3xl font-bold text-[var(--text-primary)]">
          Discover
        </h1>
      </div>

      {/* Search */}
      <div className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center bg-white rounded-full px-5 py-3 shadow-[var(--shadow-sm)] border border-[var(--border-light)]">
          <Search className="w-5 h-5 text-[var(--text-secondary)] mr-3" />
          <input
            type="text"
            placeholder="Search for everything..."
            className="flex-1 text-sm bg-transparent text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none"
          />
        </div>
      </div>

      {/* Category Cards */}
      <div className="px-4 sm:px-6 lg:px-8 mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.title}
              title={cat.title}
              subtitle={cat.subtitle}
              imageUrl={cat.imageUrl}
              href={cat.href}
            />
          ))}
        </div>
      </div>

      {/* Suggested Restaurants */}
      <div className="mb-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Suggested Restaurants"
            icon={UtensilsCrossed}
            seeAllHref="/restaurants"
          />
        </div>
        <div className="mt-4 flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-2">
          {suggestedRestaurants.map((r) => (
            <div key={r.title} className="shrink-0">
              <ProductCard
                title={r.title}
                subtitle={r.subtitle}
                imageUrl={r.img}
                href={r.href}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Marketplace Deals Banner */}
      <div className="px-4 sm:px-6 lg:px-8 mb-10">
        <div className="relative rounded-2xl overflow-hidden h-[200px] sm:h-[260px] group">
          <Image
            src="https://picsum.photos/seed/marketplace-deals/1200/400"
            alt="Marketplace Deals"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-center">
            <h3 className="text-playfair text-3xl sm:text-4xl font-bold text-[var(--accent)] leading-tight">
              Marketplace Deals
            </h3>
            <p className="text-white/80 text-sm mt-2 max-w-[360px] leading-relaxed">
              Up to 50% off on winter collection. Experience the finest Scottish
              cashmere at unbeatable prices.
            </p>
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-1 mt-4 px-5 py-2.5 bg-[var(--accent)] text-[var(--primary)] text-sm font-bold rounded-full hover:bg-[var(--accent-hover)] transition-default w-fit"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </div>

      {/* Recommended Jobs */}
      <div className="px-4 sm:px-6 lg:px-8 mb-10">
        <SectionHeader
          title="Recommended Jobs"
          icon={Briefcase}
          seeAllHref="/jobs"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {recommendedJobs.map((job) => (
            <Link
              key={job.title}
              href={job.href}
              className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-[var(--shadow-sm)] border border-[var(--border-light)] hover:shadow-[var(--shadow-md)] transition-default"
            >
              <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0">
                <Image
                  src={job.img}
                  alt={job.title}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-bold text-[var(--text-primary)] truncate">
                  {job.title}
                </h4>
                <p className="text-xs text-[var(--text-secondary)] truncate mt-0.5">
                  {job.company}
                </p>
                <span className="inline-block text-[10px] font-bold text-[var(--accent)] mt-1 tracking-wider">
                  {job.type}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mini Programs */}
      <div className="px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeader
          title="Mini Programs"
          icon={LayoutGrid}
          seeAllHref="/mini-programs"
        />
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mt-4">
          {miniPrograms.map((prog) => {
            const Icon = prog.icon;
            return (
              <Link
                key={prog.name}
                href={prog.href}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-14 h-14 rounded-2xl border border-[var(--border-light)] bg-white flex items-center justify-center group-hover:shadow-[var(--shadow-md)] group-hover:border-[var(--primary)] transition-default">
                  <Icon className="w-6 h-6 text-[var(--primary)]" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-medium text-[var(--text-primary)] text-center">
                  {prog.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
