export const PLATFORMS = ['facebook', 'craigslist', 'offerup', '5miles'] as const;

export const SUBSCRIPTION_TIERS = {
  FREE: 'free',
  PER_POST: 'perpost',
  UNLIMITED: 'unlimited',
} as const;

export const ITEM_STATUS = {
  DRAFT: 'draft',
  POSTED: 'posted',
  SOLD: 'sold',
} as const;

export const LISTING_STATUS = {
  PENDING: 'pending',
  POSTED: 'posted',
  FAILED: 'failed',
} as const;

export const CONVERSATION_STATUS = {
  ACTIVE: 'active',
  SCHEDULED: 'scheduled',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
} as const;

export const PAYMENT_METHODS = {
  VENMO: 'venmo',
  ZELLE: 'zelle',
  CASH: 'cash',
} as const;

export const PRICING = {
  PER_POST_CHARGE: 0.5, // $0.50 per post
  MONTHLY_SUBSCRIPTION: 6.0, // $6/month unlimited
  TRANSACTION_FEE_PERCENTAGE: 0.05, // 5% of sale
} as const;

export const FILE_LIMITS = {
  MAX_IMAGE_SIZE: 10 * 1024 * 1024, // 10MB
  MAX_IMAGES_PER_ITEM: 10,
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
} as const;
