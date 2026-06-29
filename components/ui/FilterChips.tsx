import { cn } from "@/lib/utils";
import { SlidersHorizontal } from "lucide-react";

interface FilterChipsProps {
  filters: string[];
  selectedFilter: string;
  onSelect: (filter: string) => void;
  className?: string;
}

export default function FilterChips({
  filters,
  selectedFilter,
  onSelect,
  className,
}: FilterChipsProps) {
  return (
    <div className={cn("flex items-center gap-2 overflow-x-auto hide-scrollbar px-4 sm:px-6 lg:px-8", className)}>
      <button className="flex items-center gap-2 shrink-0 h-10 px-4 rounded-full shadow-sm bg-white text-[var(--text-primary)] hover:bg-[var(--primary-light)] transition-default">
        <SlidersHorizontal className="w-4 h-4" />
        <span className="text-sm font-bold">Filter</span>
      </button>
      
      {filters.map((filter) => {
        const isSelected = filter === selectedFilter;
        return (
          <button
            key={filter}
            onClick={() => onSelect(filter)}
            className={cn(
              "shrink-0 h-10 px-5 rounded-full text-sm font-semibold transition-default",
              isSelected
                ? "bg-[var(--primary)] text-white shadow-md"
                : "bg-white text-[var(--text-primary)] shadow-sm hover:bg-[var(--primary-light)]"
            )}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
