import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ChatItemProps {
  name: string;
  message: string;
  time: string;
  unreadCount: number;
  isGroup: boolean;
  isPinned: boolean;
  isOnline?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  isActive?: boolean;
  className?: string;
}

export default function ChatItem({
  name,
  message,
  time,
  unreadCount,
  isGroup,
  isPinned,
  isOnline,
  href,
  onClick,
  isActive,
  className,
}: ChatItemProps) {
  const innerContent = (
    <>
      {/* Avatar */}
      <div className="relative shrink-0">
        <div
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold",
            isGroup
              ? "bg-[var(--primary-medium)] text-[var(--primary)]"
              : "bg-[var(--primary-medium)] text-[var(--primary)]"
          )}
        >
          {isGroup ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          ) : (
            <span className="text-lg">{name[0]}</span>
          )}
        </div>
        {isOnline && (
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold text-[var(--text-primary)] truncate">
            {name}
          </h4>
          <span className="text-xs text-[var(--text-secondary)] shrink-0 ml-2">
            {time}
          </span>
        </div>
        <div className="flex items-center justify-between mt-0.5">
          <p className="text-xs text-[var(--text-secondary)] truncate">
            {message}
          </p>
          <div className="shrink-0 ml-2">
            {unreadCount > 0 ? (
              <span className="inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-[var(--accent)] rounded-full">
                {unreadCount}
              </span>
            ) : isPinned ? (
              <svg className="w-4 h-4 text-[var(--text-secondary)]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );

  const containerClasses = cn(
    "flex items-center gap-3 px-4 py-3 hover:bg-[var(--primary-light)] transition-default rounded-lg w-full text-left",
    isActive && "bg-[var(--primary-light)]",
    className
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={containerClasses}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={containerClasses}>
      {innerContent}
    </button>
  );
}
