import Link from "next/link";
import {
  Camera,
  Video,
  ImageIcon,
  Film,
  SlidersHorizontal,
  Sparkles,
  Music,
  Subtitles,
  Radio,
} from "lucide-react";

const creatorTools = [
  { title: "Camera", icon: Camera, color: "bg-blue-50 text-blue-600" },
  { title: "Upload Video", icon: Video, color: "bg-purple-50 text-purple-600" },
  { title: "Upload Photos", icon: ImageIcon, color: "bg-orange-50 text-orange-600" },
  { title: "Video Editor", icon: Film, color: "bg-indigo-50 text-indigo-600" },
  { title: "Filters", icon: SlidersHorizontal, color: "bg-teal-50 text-teal-600" },
  { title: "Effects", icon: Sparkles, color: "bg-pink-50 text-pink-600" },
  { title: "Music Library", icon: Music, color: "bg-red-50 text-red-600" },
  { title: "Captions", icon: Subtitles, color: "bg-amber-50 text-amber-700" },
];

export default function CreatePage() {
  return (
    <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
      {/* Page Header */}
      <h1 className="text-playfair text-2xl font-bold text-center text-[var(--text-primary)] mb-6">
        Content Creation Center
      </h1>

      {/* Go Live Button */}
      <Link
        href="/creator/live"
        className="flex items-center justify-center gap-3 w-full py-4 bg-red-500 text-white text-lg font-bold rounded-2xl hover:bg-red-600 transition-default active:scale-[0.98] shadow-lg shadow-red-500/20 mb-8"
      >
        <Radio className="w-5 h-5" />
        Go Live
      </Link>

      {/* Creator Tools */}
      <h2 className="text-playfair text-xl font-bold text-[var(--text-primary)] mb-5">
        Creator Tools
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {creatorTools.map((tool) => {
          const Icon = tool.icon;
          const [bgColor, textColor] = tool.color.split(" ");
          return (
            <button
              key={tool.title}
              className="flex flex-col items-center justify-center gap-3 p-6 bg-white rounded-3xl border border-[var(--border-light)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-default hover:scale-[1.02] active:scale-95"
            >
              <div
                className={`w-16 h-16 rounded-full ${bgColor} flex items-center justify-center`}
              >
                <Icon className={`w-7 h-7 ${textColor}`} strokeWidth={1.5} />
              </div>
              <span className="text-sm font-bold text-[var(--text-primary)]">
                {tool.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
