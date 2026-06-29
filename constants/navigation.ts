import {
  Home,
  Search,
  Plus,
  MessageSquare,
  User,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  activeIcon?: LucideIcon;
}

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/home", icon: Home },
  { label: "Discover", href: "/discover", icon: Search },
  { label: "Create", href: "/create", icon: Plus },
  { label: "Inbox", href: "/inbox", icon: MessageSquare },
  { label: "Profile", href: "/profile", icon: User },
];

export const topNavItems = [
  { label: "Home", href: "/home" },
  { label: "Discover", href: "/discover" },
  { label: "Store", href: "/marketplace" },
  { label: "Settings", href: "/settings" },
];
