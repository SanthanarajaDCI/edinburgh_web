import Image from "next/image";
import Link from "next/link";
import { Video, Music, Gamepad2, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const entertainmentCategories = [
  { 
    name: "Videos", 
    href: "/entertainment/video", 
    image: "https://picsum.photos/seed/vid/600/400", 
    icon: Video,
    description: "Watch the latest trending videos, movies, and shows."
  },
  { 
    name: "Music", 
    href: "/entertainment/music", 
    image: "https://picsum.photos/seed/mus/600/400", 
    icon: Music,
    description: "Discover new artists, albums, and playlists."
  },
  { 
    name: "Gaming", 
    href: "/entertainment/gaming", 
    image: "https://picsum.photos/seed/gam/600/400", 
    icon: Gamepad2,
    description: "Play instantly, connect with friends, and unlock achievements."
  },
];

export default function EntertainmentPage() {
  return (
    <div className="max-w-[1280px] mx-auto w-full pb-20">
      {/* Header */}
      <div className="px-4 sm:px-6 lg:px-8 pt-10 pb-12 bg-gray-900 text-white rounded-b-[3rem] mb-12 shadow-xl shadow-gray-900/10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Entertainment Hub
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Your gateway to endless videos, music, and gaming. Dive into a world of immersive experiences.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Explore Categories" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {entertainmentCategories.map(cat => (
            <Link key={cat.name} href={cat.href} className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all block aspect-[4/5] sm:aspect-square md:aspect-[3/4]">
              <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-left">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 border border-white/30 text-white group-hover:bg-white group-hover:text-black transition-all group-hover:scale-110 shadow-lg">
                  <cat.icon className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{cat.name}</h2>
                <p className="text-sm text-gray-300 line-clamp-2">{cat.description}</p>
                
                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                  Explore <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
