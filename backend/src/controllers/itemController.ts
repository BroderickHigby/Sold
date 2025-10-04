import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { createItemSchema } from '@sold/shared/validators';
import { CreateItemRequest } from '@sold/shared/types';

const prisma = new PrismaClient();

export const createItem = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const validatedData = createItemSchema.parse(req.body);
    
    const item = await prisma.item.create({
      data: {
        ...validatedData,
        userId,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            subscriptionTier: true,
          },
        },
      },
    });

    res.status(201).json(item);
  } catch (error) {
    console.error('Error creating item:', error);
    if (error instanceof Error && error.name === 'ZodError') {
      return res.status(400).json({ error: 'Validation error', details: error.message });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getItems = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const items = await prisma.item.findMany({
      where: { userId },
      include: {
        listings: true,
        _count: {
          select: {
            listings: true,
            transactions: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    res.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getItemById = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { id } = req.params;
    
    const item = await prisma.item.findFirst({
      where: { 
        id,
        userId, // Ensure user can only access their own items
      },
      include: {
        listings: {
          include: {
            conversations: true,
          },
        },
        transactions: true,
      },
    });

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json(item);
  } catch (error) {
    console.error('Error fetching item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { id } = req.params;
    const validatedData = createItemSchema.partial().parse(req.body);
    
    const item = await prisma.item.findFirst({
      where: { 
        id,
        userId,
      },
    });

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    const updatedItem = await prisma.item.update({
      where: { id },
      data: validatedData,
      include: {
        user: {
          select: {
            id: true,
            email: true,
            subscriptionTier: true,
          },
        },
      },
    });

    res.json(updatedItem);
  } catch (error) {
    console.error('Error updating item:', error);
    if (error instanceof Error && error.name === 'ZodError') {
      return res.status(400).json({ error: 'Validation error', details: error.message });
    }
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { id } = req.params;
    
    const item = await prisma.item.findFirst({
      where: { 
        id,
        userId,
      },
    });

    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    await prisma.item.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};