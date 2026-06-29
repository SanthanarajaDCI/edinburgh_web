"use client";

import { Bell, ShoppingBag, Mail, CreditCard, RefreshCcw, UserPlus, Briefcase, Clock, ArrowRightLeft, PhoneMissed, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const notifications = [
  {
    title: 'System Announcement',
    description: 'Welcome to the new Edinburgh Cashmere app experience!',
    time: 'Just now',
    icon: Bell,
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-500/10',
    isUnread: true,
  },
  {
    title: 'Order Shipped',
    description: 'Your order #12049 has been shipped and is on its way.',
    time: 'Just now',
    icon: ShoppingBag,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-500/10',
    isUnread: true,
  },
  {
    title: 'New Message',
    description: 'Sarah: Are we still meeting for coffee later?',
    time: '5m ago',
    icon: Mail,
    iconColor: 'text-green-500',
    iconBg: 'bg-green-500/10',
    isUnread: true,
  },
  {
    title: 'Payment Received',
    description: 'You received a payment of £45.00 from John Doe.',
    time: '1h ago',
    icon: CreditCard,
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-500/10',
  },
  {
    title: 'Return Approved',
    description: 'Your return request for Cashmere Scarf has been approved.',
    time: '2h ago',
    icon: RefreshCcw,
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-500/10',
  },
  {
    title: 'New Follower',
    description: 'Alex started following your creator profile.',
    time: '3h ago',
    icon: UserPlus,
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-500/10',
  },
  {
    title: 'Application Update',
    description: 'Your application for Senior Designer has been viewed.',
    time: 'Yesterday',
    icon: Briefcase,
    iconColor: 'text-teal-500',
    iconBg: 'bg-teal-500/10',
  },
  {
    title: 'Content Milestone',
    description: 'Your recent video just reached 10,000 views!',
    time: 'Yesterday',
    icon: Clock,
    iconColor: 'text-pink-500',
    iconBg: 'bg-pink-500/10',
  },
  {
    title: 'Transfer Successful',
    description: 'Your transfer of £150.00 to savings was completed.',
    time: '2 days ago',
    icon: ArrowRightLeft,
    iconColor: 'text-indigo-500',
    iconBg: 'bg-indigo-500/10',
  },
  {
    title: 'Missed Call',
    description: 'You missed a call from Edinburgh Cafe.',
    time: '2 days ago',
    icon: PhoneMissed,
    iconColor: 'text-red-500',
    iconBg: 'bg-red-500/10',
  },
  {
    title: 'System Update',
    description: 'A new version of Edinburgh App is now available.',
    time: '1 week ago',
    icon: Settings,
    iconColor: 'text-gray-500',
    iconBg: 'bg-gray-500/10',
  },
];

export default function NotificationsPage() {
  return (
    <div className="max-w-[1280px] mx-auto w-full relative bg-[var(--background)] min-h-screen">
      {/* App Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 sticky top-0 bg-[var(--background)]/80 backdrop-blur-md z-40 border-b border-[var(--border-light)]">
        <h1 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
          Notifications
        </h1>
      </div>

      <div className="py-2">
        {notifications.map((notification, index) => (
          <div 
            key={index} 
            className={cn(
              "flex items-start gap-4 p-4 sm:px-6 lg:px-8 border-b border-[var(--border-light)] hover:bg-gray-50 transition-colors cursor-pointer",
              notification.isUnread ? "bg-[var(--primary)]/5" : "bg-transparent"
            )}
          >
            <div className={cn("w-12 h-12 rounded-full flex items-center justify-center shrink-0", notification.iconBg)}>
              <notification.icon className={cn("w-6 h-6", notification.iconColor)} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className={cn(
                  "text-sm font-bold text-[var(--text-primary)] truncate",
                  notification.isUnread ? "font-bold" : "font-semibold"
                )}>
                  {notification.title}
                </h3>
                <span className={cn(
                  "text-xs shrink-0",
                  notification.isUnread ? "font-bold text-[var(--primary)]" : "text-[var(--text-secondary)]"
                )}>
                  {notification.time}
                </span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {notification.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
