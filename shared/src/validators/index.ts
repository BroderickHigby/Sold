import { z } from 'zod';

// Auth validators
export const registerSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Password is required'),
});

// User profile validators
export const updateProfileSchema = z.object({
  address: z.string().optional(),
  venmoHandle: z.string().optional(),
  zelleHandle: z.string().optional(),
});

// Item validators
export const createItemSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters').max(100, 'Title too long'),
  description: z.string().min(10, 'Description must be at least 10 characters').max(1000, 'Description too long'),
  imageUrls: z.array(z.string().url('Invalid image URL')).min(1, 'At least one image required').max(10, 'Maximum 10 images'),
  priceHigh: z.number().positive('Price must be positive'),
  priceMid: z.number().positive('Price must be positive'),
  priceLow: z.number().positive('Price must be positive'),
});

// Listing validators
export const publishListingSchema = z.object({
  itemId: z.string().uuid('Invalid item ID'),
  platforms: z.array(z.enum(['facebook', 'craigslist', 'offerup', '5miles'])).min(1, 'Select at least one platform'),
});

// Conversation validators
export const sendMessageSchema = z.object({
  content: z.string().min(1, 'Message cannot be empty').max(1000, 'Message too long'),
});

export const schedulePickupSchema = z.object({
  pickupTime: z.string().datetime('Invalid datetime format'),
});

// Payment validators
export const createSubscriptionSchema = z.object({
  tier: z.enum(['perpost', 'unlimited']),
  paymentMethodId: z.string(),
});

export const perPostPaymentSchema = z.object({
  itemId: z.string().uuid('Invalid item ID'),
  paymentMethodId: z.string(),
});

// Transaction validators
export const recordTransactionSchema = z.object({
  itemId: z.string().uuid('Invalid item ID'),
  amount: z.number().positive('Amount must be positive'),
  paymentMethod: z.enum(['venmo', 'zelle', 'cash']),
});
