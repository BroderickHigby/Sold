import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { publishListingSchema } from '@sold/shared/validators';
import { PublishListingRequest, Platform } from '@sold/shared/types';

const prisma = new PrismaClient();

export const publishListing = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const validatedData = publishListingSchema.parse(req.body);
    const { itemId, platforms } = validatedData;

    // Verify the item belongs to the user
    const item = await prisma.item.findFirst({
      where: { 
        id: itemId,
        userId,
      },
    });

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    // Check if user has permission to post (subscription tier)
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { subscriptionTier: true },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // For free tier, only allow one platform
    if (user.subscriptionTier === 'free' && platforms.length > 1) {
      return res.status(403).json({ 
        error: 'Free tier users can only post to one platform at a time' 
      });
    }

    // Create listings for each platform
    const listings = await Promise.all(
      platforms.map(async (platform: Platform) => {
        return prisma.listing.create({
          data: {
            itemId,
            platform,
            status: 'pending',
          },
        });
      })
    );

    // Update item status to 'posted'
    await prisma.item.update({
      where: { id: itemId },
      data: { status: 'posted' },
    });

    // TODO: Integrate with actual platform APIs to post listings
    // For now, we'll simulate the posting process
    setTimeout(async () => {
      await Promise.all(
        listings.map(async (listing) => {
          // Simulate platform posting
          const success = Math.random() > 0.1; // 90% success rate
          
          await prisma.listing.update({
            where: { id: listing.id },
            data: {
              status: success ? 'posted' : 'failed',
              postedAt: success ? new Date() : null,
              platformListingId: success ? `ext_${listing.id}` : null,
            },
          });
        })
      );
    }, 2000);

    res.status(201).json({
      message: 'Listings created successfully',
      listings: listings.map(listing => ({
        id: listing.id,
        platform: listing.platform,
        status: listing.status,
      })),
    });
  } catch (error) {
    console.error('Error publishing listing:', error);
    if (error instanceof Error && error.name === 'ZodError') {
      return res.status(400).json({ error: 'Validation error', details: error.message });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getListings = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { itemId } = req.query;

    const whereClause: any = {
      item: {
        userId,
      },
    };

    if (itemId) {
      whereClause.itemId = itemId as string;
    }

    const listings = await prisma.listing.findMany({
      where: whereClause,
      include: {
        item: {
          select: {
            id: true,
            title: true,
            status: true,
          },
        },
        conversations: {
          select: {
            id: true,
            status: true,
            buyerContact: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json(listings);
  } catch (error) {
    console.error('Error fetching listings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getListingById = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { id } = req.params;
    
    const listing = await prisma.listing.findFirst({
      where: { 
        id,
        item: {
          userId,
        },
      },
      include: {
        item: {
          select: {
            id: true,
            title: true,
            description: true,
            imageUrls: true,
            priceHigh: true,
            priceMid: true,
            priceLow: true,
            status: true,
          },
        },
        conversations: {
          include: {
            messagesJson: true,
          },
        },
      },
    });

    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }

    res.json(listing);
  } catch (error) {
    console.error('Error fetching listing:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateListingStatus = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { id } = req.params;
    const { status } = req.body;

    if (!['pending', 'posted', 'failed'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const listing = await prisma.listing.findFirst({
      where: { 
        id,
        item: {
          userId,
        },
      },
    });

    if (!listing) {
      return res.status(404).json({ error: 'Listing not found' });
    }

    const updatedListing = await prisma.listing.update({
      where: { id },
      data: { 
        status,
        postedAt: status === 'posted' ? new Date() : listing.postedAt,
      },
    });

    res.json(updatedListing);
  } catch (error) {
    console.error('Error updating listing status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};