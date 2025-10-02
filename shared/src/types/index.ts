// User types
export interface User {
  id: string;
  email: string;
  oauthProvider?: string | null;
  oauthId?: string | null;
  address?: string | null;
  locationLat?: number | null;
  locationLng?: number | null;
  venmoHandle?: string | null;
  zelleHandle?: string | null;
  subscriptionTier: 'free' | 'perpost' | 'unlimited';
  createdAt: Date;
  updatedAt: Date;
}

// Item types
export interface Item {
  id: string;
  userId: string;
  title: string;
  description: string;
  imageUrls: string[];
  priceHigh: number;
  priceMid: number;
  priceLow: number;
  status: 'draft' | 'posted' | 'sold';
  createdAt: Date;
  updatedAt: Date;
}

// Listing types
export type Platform = 'facebook' | 'craigslist' | 'offerup' | '5miles';

export interface Listing {
  id: string;
  itemId: string;
  platform: Platform;
  platformListingId?: string | null;
  status: 'pending' | 'posted' | 'failed';
  postedAt?: Date | null;
  createdAt: Date;
}

// Conversation types
export interface Message {
  role: 'user' | 'assistant' | 'seller';
  content: string;
  timestamp: Date;
}

export interface Conversation {
  id: string;
  listingId: string;
  buyerContact: string;
  messages: Message[];
  pickupScheduledAt?: Date | null;
  status: 'active' | 'scheduled' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

// Transaction types
export type PaymentMethod = 'venmo' | 'zelle' | 'cash';

export interface Transaction {
  id: string;
  itemId: string;
  userId: string;
  amount: number;
  platformFee: number;
  paymentMethod: PaymentMethod;
  status: 'pending' | 'completed';
  completedAt?: Date | null;
  createdAt: Date;
}

// API Request/Response types
export interface RegisterRequest {
  email: string;
  password: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export interface CreateItemRequest {
  title: string;
  description: string;
  imageUrls: string[];
  priceHigh: number;
  priceMid: number;
  priceLow: number;
}

export interface AIAnalysisResponse {
  title: string;
  description: string;
  category: string;
  priceHigh: number;
  priceMid: number;
  priceLow: number;
  confidence: number;
}

export interface PublishListingRequest {
  itemId: string;
  platforms: Platform[];
}

export interface UpdateProfileRequest {
  address?: string;
  venmoHandle?: string;
  zelleHandle?: string;
}
