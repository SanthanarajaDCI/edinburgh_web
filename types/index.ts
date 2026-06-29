// ============ Chat Types ============
export interface ChatItem {
  id: string;
  name: string;
  message: string;
  time: string;
  unreadCount: number;
  isGroup: boolean;
  isPinned: boolean;
  avatarUrl?: string;
  isOnline?: boolean;
}

export interface CallItem {
  id: string;
  name: string;
  type: "voice" | "video";
  status: "missed" | "outgoing" | "incoming";
  time: string;
  avatarUrl?: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  time: string;
  isSent: boolean;
  senderName?: string;
  senderAvatar?: string;
}

// ============ Product Types ============
export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  imageUrl: string;
  category?: string;
  rating?: number;
}

// ============ Business Types ============
export interface Business {
  id: string;
  name: string;
  subtitle: string;
  imageUrl: string;
  category?: string;
  rating?: number;
  address?: string;
}

// ============ Restaurant Types ============
export interface Restaurant {
  id: string;
  name: string;
  subtitle: string;
  imageUrl: string;
  rating?: number;
  cuisine?: string;
  priceRange?: string;
}

// ============ Job Types ============
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  imageUrl?: string;
}

// ============ Quick Action Types ============
export interface QuickAction {
  icon: string;
  label: string;
  href: string;
  color?: string;
}

// ============ Category Types ============
export interface Category {
  title: string;
  subtitle: string;
  icon: string;
  route: string;
  imageUrl?: string;
  color?: string;
}

// ============ Banner Types ============
export interface Banner {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
}

// ============ Profile Types ============
export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  bio: string;
  avatarUrl: string;
  postsCount: number;
  followersCount: string;
  followingCount: number;
  membershipTier: string;
}

// ============ Order Types ============
export interface Order {
  id: string;
  name: string;
  date: string;
  price: number;
  imageUrl?: string;
}

// ============ Activity Types ============
export interface Activity {
  id: string;
  text: string;
  time: string;
  color: string;
}

// ============ Creator Tool Types ============
export interface CreatorTool {
  title: string;
  icon: string;
  color: string;
}

// ============ Mini Program Types ============
export interface MiniProgram {
  id: string;
  name: string;
  icon: string;
  description?: string;
}
