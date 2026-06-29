import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Wallet,
  QrCode,
  Search,
  Sparkles,
  ShoppingBag,
  Store,
  UtensilsCrossed,
  Briefcase,
  Car,
  Gamepad2,
  Music,
  Dumbbell,
  GraduationCap,
  Bot,
  LayoutGrid,
  ChevronRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";
import QuickActionItem from "@/components/ui/QuickActionItem";

const searchChips = [
  { label: "Products", icon: ShoppingBag, href: "/marketplace" },
  { label: "Businesses", icon: Store, href: "/business" },
  { label: "Restaurants", icon: UtensilsCrossed, href: "/restaurants" },
];

const quickActions = [
  { icon: Car, label: "Ride Hailing", href: "/ride-hailing" },
  { icon: UtensilsCrossed, label: "Food Order", href: "/restaurants" },
  { icon: Gamepad2, label: "Gaming", href: "/entertainment/gaming" },
  { icon: Music, label: "Music", href: "/entertainment/music" },
  { icon: Dumbbell, label: "Fitness", href: "/fitness" },
  { icon: GraduationCap, label: "Education", href: "/education" },
  { icon: Bot, label: "AI Hub", href: "/ai/hub" },
  { icon: Store, label: "Marketplace", href: "/marketplace" },
  { icon: Wallet, label: "Wallet", href: "/wallet" },
  { icon: LayoutGrid, label: "Customize", href: "/mini-programs" },
];

const banners = [
  {
    title: "Marketplace Deals",
    subtitle:
      "Up to 50% off on winter collection. Experience the finest Scottish cashmere at unbeatable prices.",
    image: "https://picsum.photos/seed/deals/800/400",
    cta: "Explore Now",
  },
  {
    title: "New Arrivals",
    subtitle: "The Purest Fibers",
    image: "https://picsum.photos/seed/arrivals/800/400",
  },
];

const sections = [
  {
    title: "Suggested Restaurants",
    icon: UtensilsCrossed,
    seeAllHref: "/restaurants",
    items: [
      { title: "Culina Edinburgh", subtitle: "Fine Dining & Spirits", img: "https://picsum.photos/seed/rest1/300/200", href: "/restaurants/detail/rest_0" },
      { title: "Old Town Bistro", subtitle: "Traditional Scottish", img: "https://picsum.photos/seed/rest2/300/200", href: "/restaurants/detail/rest_1" },
      { title: "The Royal Grill", subtitle: "Steakhouse & Rooftop", img: "https://picsum.photos/seed/rest3/300/200", href: "/restaurants/detail/rest_2" },
      { title: "Coastal Catch", subtitle: "Fresh Seafood", img: "https://picsum.photos/seed/rest4/300/200", href: "/restaurants/detail/rest_3" },
    ],
  },
  {
    title: "Recommended Products",
    icon: ShoppingBag,
    seeAllHref: "/marketplace",
    items: [
      { title: "Heritage Scarf", subtitle: "Pure Cashmere", img: "https://picsum.photos/seed/prod1/300/200", href: "/marketplace/product/prod_0" },
      { title: "Classic Cardigan", subtitle: "Scottish Wool", img: "https://picsum.photos/seed/prod2/300/200", href: "/marketplace/product/prod_1" },
      { title: "Tartan Blanket", subtitle: "Home Collection", img: "https://picsum.photos/seed/prod3/300/200", href: "/marketplace/product/prod_2" },
      { title: "Cashmere Beanie", subtitle: "Winter Essential", img: "https://picsum.photos/seed/prod4/300/200", href: "/marketplace/product/prod_3" },
    ],
  },
  {
    title: "Recommended Jobs",
    icon: Briefcase,
    seeAllHref: "/jobs",
    items: [
      { title: "Textile Design Specialist", subtitle: "Heritage Mills Ltd • Edinburgh", img: "https://picsum.photos/seed/job1/300/200", href: "/jobs/detail/job_0", tag: "FULL TIME" },
      { title: "Marketing Director", subtitle: "Global Luxury Goods • Remote", img: "https://picsum.photos/seed/job2/300/200", href: "/jobs/detail/job_1", tag: "SENIOR LEVEL" },
    ],
  },
];

const miniPrograms = [
  { name: "Fitness Hub", icon: Dumbbell, href: "/fitness" },
  { name: "Library", icon: GraduationCap, href: "/education" },
  { name: "Education", icon: GraduationCap, href: "/education" },
  { name: "Payments", icon: Wallet, href: "/wallet" },
  { name: "Analytics", icon: LayoutGrid, href: "#" },
  { name: "Community", icon: Store, href: "#" },
];

export default function HomePage() {
  return (
    <div className="max-w-[1280px] mx-auto w-full">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider">
              Current Location
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 lg:px-8 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-red-500" />
          <h1 className="text-playfair text-2xl font-bold text-[var(--text-primary)]">
            Edinburgh, UK
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/wallet"
            className="flex items-center gap-2 px-4 py-2 border border-[var(--border-light)] rounded-xl hover:bg-[var(--primary-light)] transition-default"
          >
            <Wallet className="w-4 h-4 text-[var(--primary)]" />
            <span className="text-sm font-medium text-[var(--primary)] hidden sm:inline">
              Wallet
            </span>
          </Link>
          <Link
            href="/home"
            className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex items-center justify-center hover:bg-[var(--accent)]/20 transition-default"
          >
            <QrCode className="w-5 h-5 text-[var(--accent)]" />
          </Link>
        </div>
      </div>

      {/* Smart Search */}
      <div className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white rounded-2xl p-5 shadow-[var(--shadow-sm)] border border-[var(--border-light)]">
          <div className="flex items-center gap-3 pb-4 border-b border-[var(--border-light)]">
            <Search className="w-5 h-5 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Search in workspace..."
              className="flex-1 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none bg-transparent"
            />
            <Link href="/ai-search">
              <Sparkles className="w-5 h-5 text-[var(--accent)]" />
            </Link>
          </div>
          <p className="text-xs text-[var(--text-secondary)] mt-3 mb-2">
            I&apos;m looking for...
          </p>
          <div className="flex flex-wrap gap-2">
            {searchChips.map((chip) => {
              const Icon = chip.icon;
              return (
                <Link
                  key={chip.label}
                  href={chip.href}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[var(--border-light)] bg-[var(--primary-light)] text-sm font-semibold text-[var(--primary)] hover:bg-[var(--primary-medium)] transition-default"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {chip.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-playfair text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-5">
          Quick Actions
        </h2>
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 sm:gap-6">
          {quickActions.map((action) => (
            <QuickActionItem
              key={action.label}
              icon={action.icon}
              label={action.label}
              href={action.href}
            />
          ))}
        </div>
      </div>

      {/* Promotional Banners */}
      <div className="px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {banners.map((banner, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden h-[200px] sm:h-[240px] group"
            >
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-center">
                <h3 className="text-playfair text-2xl sm:text-3xl font-bold text-[var(--accent)] leading-tight">
                  {banner.title}
                </h3>
                <p className="text-white/80 text-sm mt-2 max-w-[280px] leading-relaxed">
                  {banner.subtitle}
                </p>
                {banner.cta && (
                  <Link
                    href="/marketplace"
                    className="inline-flex items-center gap-1 mt-4 px-5 py-2.5 bg-[var(--accent)] text-[var(--primary)] text-sm font-bold rounded-full hover:bg-[var(--accent-hover)] transition-default w-fit"
                  >
                    {banner.cta}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      {sections.map((section) => (
        <div key={section.title} className="mb-8">
          <div className="px-4 sm:px-6 lg:px-8">
            <SectionHeader
              title={section.title}
              icon={section.icon}
              seeAllHref={section.seeAllHref}
            />
          </div>
          <div className="mt-4 flex gap-4 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8 pb-2">
            {section.items.map((item) => (
              <div key={item.title} className="shrink-0">
                <ProductCard
                  title={item.title}
                  subtitle={item.subtitle}
                  imageUrl={item.img}
                  href={item.href}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

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
