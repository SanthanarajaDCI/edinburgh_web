import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  onSearch?: (query: string) => void;
}

export default function SearchBar({
  placeholder = "Search...",
  className,
}: SearchBarProps) {
  return (
    <div
      className={cn(
        "flex items-center bg-[var(--background)] rounded-xl px-4 py-3 border border-[var(--border-light)]",
        className
      )}
    >
      <Search className="w-4 h-4 text-[var(--text-secondary)] mr-3 shrink-0" />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] outline-none w-full"
      />
    </div>
  );
}
